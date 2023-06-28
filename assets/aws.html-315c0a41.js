import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as d,c as t,d as e,e as a,b as r,f as l}from"./app-4f751b27.js";const o={},c=e("h1",{id:"deploy-on-aws-mainnet",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#deploy-on-aws-mainnet","aria-hidden":"true"},"#"),a(" Deploy on AWS MainNet")],-1),u=e("h2",{id:"update-ecr-amazon-elastic-container-repository",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#update-ecr-amazon-elastic-container-repository","aria-hidden":"true"},"#"),a(" Update ECR (Amazon Elastic Container Repository)")],-1),b=e("p",null,"In order to run the latest images, we need to upload them to AWS.",-1),p=e("p",null,[a("From devnet, go to mnt directory and run the folling command :"),e("br"),e("br"),e("code",null,"root@localhost:~/mnt# ./exportAws.sh")],-1),m=e("p",null,[a("The result is : "),e("br")],-1),v={class:"hint-container warning"},h=e("p",{class:"hint-container-title"},"WARNING",-1),f=e("br",null,null,-1),y=e("br",null,null,-1),x=e("br",null,null,-1),g={href:"https://docs.docker.com/engine/reference/commandline/login/#credentials-store",target:"_blank",rel:"noopener noreferrer"},k=e("br",null,null,-1),E=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Login Succeeded
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rds-amazon-relational-database-service" tabindex="-1"><a class="header-anchor" href="#rds-amazon-relational-database-service" aria-hidden="true">#</a> RDS - Amazon Relational Database Service</h2><h3 id="uploading-db-from-devnet-optional" tabindex="-1"><a class="header-anchor" href="#uploading-db-from-devnet-optional" aria-hidden="true">#</a> Uploading DB from devnet (optional)</h3><p>From devnet, go to mnt directory and run the following command :<br><code>root@localhost:~/mnt# ./exportDB.sh</code></p><h3 id="restoring-from-backup" tabindex="-1"><a class="header-anchor" href="#restoring-from-backup" aria-hidden="true">#</a> Restoring from backup</h3><p>Connect to EC2 instance</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>ssh <span class="token operator">-</span>i <span class="token operator">~</span><span class="token operator">/</span><span class="token punctuation">.</span>ssh<span class="token operator">/</span>mnt<span class="token operator">-</span>ssh<span class="token punctuation">.</span>pem ec2<span class="token operator">-</span>user@ec2<span class="token operator">-</span><span class="token number">13</span><span class="token operator">-</span><span class="token number">36</span><span class="token operator">-</span><span class="token number">233</span><span class="token operator">-</span><span class="token number">67</span><span class="token punctuation">.</span>eu<span class="token operator">-</span>west<span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">.</span>compute<span class="token punctuation">.</span>amazonaws<span class="token punctuation">.</span>com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Alternative</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>root@localhost:~/mnt# ./connectAWS.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="option-1-winscp" tabindex="-1"><a class="header-anchor" href="#option-1-winscp" aria-hidden="true">#</a> Option 1 : WinSCP</h4><ol><li>Download the file from dev server to your local with WinSCP.</li><li>Once done, upload the file with Filezilla in /tmp</li></ol><div class="hint-container info"><p class="hint-container-title">Info</p><p>FileZilla handles ssh key files, not WinSCP.</p></div><h4 id="option-2-command-line" tabindex="-1"><a class="header-anchor" href="#option-2-command-line" aria-hidden="true">#</a> Option 2 : Command line</h4><div class="hint-container info"><p class="hint-container-title">ssh file</p><p>You need to have install into ~/.ssh the ssh file generated on AWS during your EC2 installation.<br> Also, you have to reduce with a <b>chmod 400</b> the rights file.</p></div><p>Command line</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>scp -i ~/.ssh/mnt-ssh.pem mntDB.sql ec2-user@ec2-13-36-233-67.eu-west-3.compute.amazonaws.com:/tmp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Alternative</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>uploadDb2Aws.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="update-database-optional" tabindex="-1"><a class="header-anchor" href="#update-database-optional" aria-hidden="true">#</a> Update database (optional)</h3><p>If not done yet, don&#39;t forget to grant the admin user.</p><blockquote><p>GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, RELOAD, PROCESS, REFERENCES, INDEX, ALTER, SHOW DATABASES, CREATE TEMPORARY TABLES, LOCK TABLES, EXECUTE, REPLICATION SLAVE, REPLICATION CLIENT, CREATE VIEW, SHOW VIEW, CREATE ROUTINE, ALTER ROUTINE, CREATE USER, EVENT, TRIGGER ON <em>.</em> TO &#39;admin&#39;@&#39;%&#39; WITH GRANT OPTION;</p></blockquote><p>Then you can user either :</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sed &#39;s/\\sDEFINER=\`[^\`]*\`@\`[^\`]*\`//g&#39; -i /tmp/mntDB.sql
mysql -u admin -pj8wJO4ZrfoNJXM1tFW6V -h mnt-db.c54vrz8apqlw.eu-west-3.rds.amazonaws.com mnt &lt; /tmp/mntDB.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>or the provided script :</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> sudo ./importDB.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="s3-bucket" tabindex="-1"><a class="header-anchor" href="#s3-bucket" aria-hidden="true">#</a> S3 bucket</h3><p>You may adapt the <strong>mnt.prod.env</strong> file.</p><p>Process as follows :</p><ol><li>Connect to your S3 bucket</li><li>Download the file on your local computer</li><li>Make the changes</li><li>Upload the file back to the bucket</li></ol><h2 id="ecs-elastic-container-service" tabindex="-1"><a class="header-anchor" href="#ecs-elastic-container-service" aria-hidden="true">#</a> ECS - Elastic Container Service</h2><blockquote><p>At this stage, the cluster is supposed to be up and running.</p></blockquote><h3 id="task-definition" tabindex="-1"><a class="header-anchor" href="#task-definition" aria-hidden="true">#</a> Task definition</h3><p>Create a new revision of your task definition</p><h3 id="recreate-the-service" tabindex="-1"><a class="header-anchor" href="#recreate-the-service" aria-hidden="true">#</a> Recreate the service</h3><p>Delete and recreate the service</p>`,35);function w(_,L){const n=i("ExternalLinkIcon");return d(),t("div",null,[c,u,b,p,m,e("div",v,[h,e("p",null,[a("Your password will be stored unencrypted in /root/.docker/config.json."),f,y,a(" Configure a credential helper to remove this warning. See"),x,e("a",g,[a("https://docs.docker.com/engine/reference/commandline/login/#credentials-store"),r(n)]),k])]),E])}const R=s(o,[["render",w],["__file","aws.html.vue"]]);export{R as default};
