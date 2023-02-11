---
# This is the title of the article
title: Edition types
pageInfo: false
# This is the icon of the page
# icon: page
# This control sidebar order
order: 4
# Set author
# author: Monumental Team
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
---

Currently, Monumental only generates digital certificates based on the ERC721 standard.

When creating a digital certificate, Monumental offers two distinct choices:
- Either the standard edition,
- Or the community edition.

The code used for both types of edition is available on Etherscan.

## Standard edition

A standard edition allows you to create a limited number of tokens per artwork.
This implies that the owner has to mint each edition before to proceed a sale.

The following sections describe what kind of information has to be filled by the artist.
### Artwork information


| Field name | Description |
| ---------- | ----------- |
| Collection | Add artwork to a collection (optional)|
| Edition name | Base name used for all editions|
| Description | Artwork description. Support markdown|


### Artwork settings

| Field name | Description |
| ---------- | ----------- |
| Max supply | Max number of editions that could be mint|
| Royalties | Artist royalties|
| Medium | Category of the artwork|
| Keywords | List of keywords (optional)|


### Attributes settings

| Field name | Description |
| ---------- | ----------- |
| Trait Type | Can be see as the attribute title|
| Display type | Available display<br> - text<br>- number<br>- date<br>- boost %<br>- boost number|
| Value | user defined expression|


## Community edition

the community edition has the same sections as the standard edition.
Below, the extra settings needed :

### Community settings


| Field name | Description |
| ---------- | ----------- |
| Space | Space in which the mint will be done.<br>Defined by artist.|
| Basis price | Minimum price for a mint|
| Presale | Community edition can have a presale mode or a public sale mode. <br>See below if presale.|
| Nft per address limit | **Presale option.**<br>Max number of NFT that could be mint per address |
| Max mint amount | **Presale option.**<br>Max number of mint that could be performed at the same time|
| Whitelisted address | **Presale option.**<br>.List of whitelisted users authorized to mint before public sale|

### First and second market

If an artist mints an edition for their own account, it will be available on the first market and all associated fees and commissions will be applied. <br>
If the minting is done through an Ethereum address different from the artist's, the edition will be on the second market, and the community edition smart contract will allow the owner to operate with commissions and fees from the second market via an internal transfer.
