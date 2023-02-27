---
# This is the title of the article
title: AWS
pageInfo: false
# This is the icon of the page
# icon: page
# This control sidebar order
order: 3
# Set author
author: Monumental Team     
# Set writing time
date: 2020-01-01
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - Page config
  - Guide
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
copyright: false
footer: Monumental | Copyright © 2023
lastUpdated: false
contributors: false
---
# Deploy on AWS MainNet

## Update ECR (Amazon Elastic Container Repository)

In order to run the latest images, we need to upload them to AWS.

From devnet, go to mnt directory and run the folling command :<br>
`
root@localhost:~/mnt# ./exportAws.sh
`

The result is : <br>    


::: warning  WARNING
Your password will be stored unencrypted in /root/.docker/config.json.<br>
Configure a credential helper to remove this warning. See
https://docs.docker.com/engine/reference/commandline/login/#credentials-store<br>
:::
```
Login Succeeded
The push refers to repository [036540172781.dkr.ecr.eu-west-3.amazonaws.com/mnt-fo]
ade0a29d8464: Pushed
ede47eabf033: Pushed
2e8e381c3f6b: Pushed
bba7d2385bc1: Layer already exists
77cae8ab23bf: Layer already exists
latest: digest: sha256:90de4ba66e0d3cb333d6a65c0ecbeb8085928b977d54a29b2eb9d505f1ba7b5d size: 1364
The push refers to repository [036540172781.dkr.ecr.eu-west-3.amazonaws.com/mnt-bo]
48f9b55364d2: Pushed
092a5bfb925b: Pushed
4a231026c010: Pushed
c444dd5606d8: Pushed
c83fcf634ce0: Pushed
9fde8f1b6363: Pushed
774188d25346: Layer already exists
24b1a2faf5b6: Layer already exists
30dec13ff632: Layer already exists
b5f8d2dd387e: Layer already exists
ded7a220bb05: Layer already exists
latest: digest: sha256:ef51d65cb8b42138350a19be3a7bb3636d1c8d8c9b77302a46d3bb4a5ad4f364 size: 2626
The push refers to repository [036540172781.dkr.ecr.eu-west-3.amazonaws.com/mnt-proxy]
517dba7c8da0: Pushed
7235668d6163: Pushed
1d886466c455: Layer already exists
2348e9726bab: Layer already exists
a565521a6b61: Layer already exists
fc9a7040ee93: Layer already exists
c700d3f5f15b: Layer already exists
e75b8fc6a0d5: Layer already exists
8e012198eea1: Layer already exists
latest: digest: sha256:24ef72887b431f97d1113accd634d3c7700b4efa433476222f709eb5fd03e0e2 size: 2196
The push refers to repository [036540172781.dkr.ecr.eu-west-3.amazonaws.com/mnt-db]
87dbd4fccc7e: Layer already exists
9d646cb6b224: Layer already exists
9a3285a0ae18: Layer already exists
cdbb3a99fe55: Layer already exists
e77dd0f2e017: Layer already exists
fd44d9fa9cd4: Layer already exists
daec9799caa3: Layer already exists
ef35264eddcd: Layer already exists
6515074984c6: Layer already exists
latest: digest: sha256:5841ecdbc7370118ff574030d5e6c95bfd4b9009c6df6382d8fdac1295626fb1 size: 2201
The push refers to repository [036540172781.dkr.ecr.eu-west-3.amazonaws.com/mnt-doc]
39ec7289c101: Pushed
07282b29d5ed: Pushed
19b3f25a0bba: Pushed
bba7d2385bc1: Layer already exists
77cae8ab23bf: Layer already exists
latest: digest: sha256:4997a88ec868f781346f83389498d6b02c79e740b6dd6020f58028a5a721c09c size: 1364
The push refers to repository [036540172781.dkr.ecr.eu-west-3.amazonaws.com/mnt-fo-admin]
01dbccedfff4: Pushed
31f3aff653a4: Pushed
11c17f3160d0: Pushed
bba7d2385bc1: Pushed
77cae8ab23bf: Pushed
latest: digest: sha256:870b7ee8b2050ab117c3a6df9aff02ea2fd093ef3c51b6ab071ae28041b6dc58 size: 1364
```

## RDS - Amazon Relational Database Service

### Uploading DB from devnet (optional)

From devnet, go to mnt directory and run the following command :
`
root@localhost:~/mnt# ./exportDB.sh
`

### Restoring from backup

Connect to EC2 instance

```js
ssh -i ~/.ssh/mnt-ssh.pem ec2-user@ec2-13-36-233-67.eu-west-3.compute.amazonaws.com
```

Alternative

```
root@localhost:~/mnt# ./connectAWS.sh
```


#### Option 1 : WinSCP

1. Download the file from dev server to your local with WinSCP.
2. Once done, upload the file with Filezilla in /tmp 

::: info 
FileZilla handles ssh key files, not WinSCP.
:::

#### Option 2 : Command line

::: info ssh file
You need to have install into ~/.ssh the ssh file generated on AWS during your EC2 installation.
Also, you have to reduce with a <b>chmod 400</b> the rights file. 
:::

Command line
```
scp -i ~/.ssh/mnt-ssh.pem mntDB.sql ec2-user@ec2-13-36-233-67.eu-west-3.compute.amazonaws.com:/tmp
```

Alternative 
```
uploadDb2Aws.sql
```

### Update database (optional)

If not done yet, don't forget to grant the admin user.

> GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, RELOAD, PROCESS, REFERENCES, INDEX, ALTER, SHOW DATABASES, CREATE TEMPORARY TABLES, LOCK TABLES, EXECUTE, REPLICATION SLAVE, REPLICATION CLIENT, CREATE VIEW, SHOW VIEW, CREATE ROUTINE, ALTER ROUTINE, CREATE USER, EVENT, TRIGGER ON *.* TO 'admin'@'%' WITH GRANT OPTION;

Then you can user either :

```
sed 's/\sDEFINER=`[^`]*`@`[^`]*`//g' -i /tmp/mntDB.sql
mysql -u admin -pj8wJO4ZrfoNJXM1tFW6V -h mnt-db.c54vrz8apqlw.eu-west-3.rds.amazonaws.com mnt < /tmp/mntDB.sql
```

or the provided script : 

```
 sudo ./importDB.sh
```

### S3 bucket

You may adapt the **mnt.prod.env** file.

Process as follows :
1. Connect to your S3 bucket
2. Download the file on your local computer
3. Make the changes
4. Upload the file back to the bucket

## ECS - Elastic Container Service

> At this stage, the cluster is supposed to be up and running.

### Task definition

Create a new revision of your task definition

### Recreate the service

Delete and recreate the service


