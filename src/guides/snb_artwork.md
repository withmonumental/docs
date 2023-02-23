---
# This is the title of the article
title: Selling and Buying Artwork
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
All authorised participants with a valid digital wallet and available funds are allowed trending artworks on Monumental. Not only Monumental gives access to first and second market but allows users who are not creator to mint fine arts on behalf of artists.<br>
As an authorised user, Monumental has been designed in a such way that wherever you are browsing on the platform you have the possibility to buy or sale any published artworks. Moreover, you are allowed to make a price offer on artworks that you desired even if those artworks are not available on sale. The owner of the artwork will have then the option to accept or decline your offer.<br>
For NFT’s creator, Monumental guarantees that its royalties will be paid to him. 

::: info Important
It is important to understand that during selling and buying process, network fees will be applied during any transactions that will occur on the Ethereum blockchain.
During selling and buying processes, different states indicate the user how to proceed to finalise the action (buy, sale or make an offer) started.
:::

This guide is intending to explain in a comprehensive manner how an user should perform the different actions offered to him during selling and buying processes.

## Becoming an user on Monumental
During a limited period, access to the platform is not public. This means that access to the platform is restricted and can only be obtained through either receiving an invitation from someone with the authority to provide one (Space Managers) or by submitting an application online.<br>
- [Apply as an artist/artist](https://monumental.app/apply/artist)
- [Apply as a space manager](https://monumental.app/apply/manager)

To get full details on how to register to the platform, please refer to the section [Join Monumental](/started/register.md)

## Sale Smart Contracts generation
When launching a sale on standard or community edition, personal sale smart contracts are generated and are stored to the Ethereum blockchain officialising the on-going sale. 
The smart contract becomes active.<br>
This ensures that the transactions between the two different parties involved in the sale process is rapid, secured and seamless.<br>
Upon receipt from the blockchain that the transaction has been approved, the smart contract becomes inactive. <br>
From any future sale of this artwork, a new personal sale smart contract will be generated.
## Available States during a Selling Process
There are two ways to sale an artwork (regardless whether it is a standard or community edition) on Monumental either as a Fixed Price Sale or as a Timed Auction Sale. 

::: info Information 
In order to sale an artwork, you have to be the owner of the artwork you wish to sale and this artwork must be first published in a space.
:::

### Definitions

> **Fixed Price sale**
> The artwork is intending to be sold as a defined fixed price (set by the seller). <br>
> The buyer will accept the sales conditions when he will buy the artwork.<br>

> **Timed Auction**
> The artwork is auctioned with a minimal basis price during a defined period (either 24 hours or a specific period of time set by the seller). 
> Buyers who want to participate to this auction, have the possibility to bid higher with a minimum of 10% on the indicated price by default.  

::: info Informations 
- An auction will be only visible on the portal page under the section “LIVE AUCTION” only if a first bid has been initiated by a potential buyer. In between the Auction is displayed on the portal page under the section “JUST LISTED”
- Whenever a bid is placed during the last 10 minutes of the auction, an additional time of 10 minutes will automatically be added.
:::

Once the auction is over, the highest bidder will be notified by mail that he won the bid. He will then be allowed to claim his new artwork under the sales condition set by the seller.<br>
sDepending on how the owner of the artwork sales it, specific states during the sale process will be offered.

### Different artwork’s states during a Fixed Price Sale

_List of states available_

| Current State	| Role	| Description	| Impact |
| ------------- | ------------- | ------------- | ------------- |
|SELL|Owner|	The owner is in tittle to sale his artwork|	This will trigger the sale.<br>A personal sale smart contract on the blockchain will be generated. <br>The sale contract is active.<br> On the portal page, the artwork is displayed under “JUST LISTED"|
|CANCEL|Owner|	The seller has the possibility to withdraw his sale	| The sale process is cancelled.<br>The sale smart contract becomes inactive.<br>The owner is able to sell his artwork if he wishes to do so.|
|BUY NOW|	Buyer (user)|	The buyer can buy the artwork for the indicated price |	This will trigger the sale. <br>Seller side:<br>Seller’s wallet will be credited with the sale price less the fees, commissions and royalties applied in the contract sale.<br>Buyer side:<br>Buyer’s wallet will be debited for the entire amount of the transaction including applied fees.<br>The buyer becomes the new owner and as such he is now able to sale his new artwork.<br>Notifications will be sent to the seller and the buyer to inform them of the status change.<br>Sale smart contract on the blockchain becomes inactive.<br>On the portal page, the artwork is removed from “JUST LISTED” and is displayed under “JUST SOLD” |
|MAKE AN OFFER| User	| If a sale has been cancelled, any user is able to make a price offer.|	An offer and a notification are sent to the owner. The owner can accept or reject the offer.<br>If the offer is accepted a personal sale smart contract on the blockchain will be generated allowing only the two participants, the seller and the user whose offer has been accepted, to finalise the sale (private sale).<br>The artwork is displayed under “JUST LISTED” indicating this is a private sale.<br>Once the private sale is done, the buyer becomes the new owner. <br>On the portal page, the artwork is removed from “JUST LISTED” and is displayed under “JUST SOLD”.


**CANCEL action:**
| Action	    | Role	        | Description	| Owner         |New State     |
| ------------- | ------------- | ------------- | ------------- |------------- |
| CANCEL	| Seller| The sale process is cancelled.<br> The sale smart contract becomes inactive.<br>The owner can put his artwork for sale if he wishes to do so. |Yes|	SELL|
|           | Buyer	| The sale has been aborted.<br> The buyer still can make an offer to the owner of the artwork.|	No |	MAKE AN OFFER |

**BUY NOW action:**
| Action	    | Role	        | Description	| Owner         |New State     |
| ------------- | ------------- | ------------- | ------------- |------------- |
| BUY NOW	| Buyer|	The sale proceeded. <br>The buyer is now the new owner and he can sell his newly acquired artwork.|Yes|	SELL|
|           | Former Seller / user |	The sale proceeded. <br>Any user can make an offer.| 	No|	MAKE AN OFFER|

### Different artwork’s states during a Timed Auction Sale:

_List of states available_

| Current State	| Role	| Description	| Impact |
| ------------- | ------------- | ------------- | ------------- |
| SELL	        | Owner	| The owner is in tittle to initiate a timed auction.|This will trigger the auction with the minimal basis price set. <br> A personal sale smart contract on the blockchain will be generated.<br> The sale contract is active.<br>On the portal page, the artwork is now displayed under “JUST LISTED”. | 
| CANCEL        |Owner	| If no bid has been done, the seller has the possibility to withdraw his auction.|The sale process is cancelled.<br>The sale smart contract becomes inactive.<br>The owner can put his artwork for sale if he wishes to do so. <br>A notification will be sent to the owner.
| PLACE A BID	| Buyer / user|	Any user can place a bid to initialise the auction. The time period set will start.|	The first bid made will trigger and start the auction.<br>The seller has been notified that the auction has been made.<br>On the portal page, the artwork will be now displayed under “LIVE AUCTIONS” with the actual price of the auction and the time period of the auction will be displayed.<br>Further bids can be made as long as the auction is still on (time period is still running).<br>The bid amount will be retained from the bidder’s wallet (bidder’s wallet is debited) on the sale smart contract until a new bid occurs.<br>If a new bid occurs from a new bidder then the amount bid from the latest bid retained on the sale contract is returned to the former bidder (former bidder’s wallet is credited) and the new bid amount will be in turn retained on the sale smart contract (new bidder’s wallet is debited).<br>Notifications will be sent to the seller, the formal bidder and the new bidder that a new bid occurred.
| TAKE HIGHEST BID	|Owner	| When the auction is still on, the owner is able to close the auction before the end of the defined period time and claim the current bid amount available on his artwork.	| The owner gets credited of the bid amount less the fees, commissions and royalties applied in the contract sale.<br>The winner gets debited of the entire bid amount including the applied fees defined in the contract sale.<br>On the portal page, the artwork is removed from “LIVE AUCTION” and is displayed under “JUST SOLD”.<br>The contract sale is inactive.<br>The winner becomes the new owner and as such he is now able to sale his new artwork.<br>Notifications will be sent to the seller and the winner to inform them of the status change.
| CLAIM |	Last Bidder (winner)	| When the auction is over (period time is ended), the winner of the bid is now able to claim his artwork.<br>This action can be done only if the actual owner of the artwork has not claimed (MAKE TRANSFER AND GET PAID) his due.	| The owner gets credited of the bid amount less the fees, commissions and royalties applied in the contract sale.<br>The winner gets debited of the entire bid amount including the applied fees defined in the contract sale.<br>The contract sale is inactive.<br>The winner becomes the new owner and as such he is now able to sale his new artwork.<br>Notifications will be sent to the seller and the winner to inform them of the status change.<br>On the portal page, the artwork is removed from “LIVE AUCTION” and is displayed under “JUST SOLD”.
| CLAIM PENDING	| Bidder / user	| When the auction is over (period time is ended), any bidder and any user of the platform will be informed that the artwork is now on a ”CLAIM PENDING” status with the indication of the winner (last bidder).|	Users and former bidders can only acknowledge that the auction is over. Until no action has been made by the seller (MAKE TRANSFER AND GET PAID) or by the winner (CLAIM), the actual state “CLAIM PENDING” will be displayed.<br>No action can be performed. <br>On the portal page, the artwork is removed from “LIVE AUCTION” and is displayed under “JUST SOLD”.
| MAKE TRANSFER AND GET PAID|	Owner|	When the auction is over (period time is ended), the actual owner (seller) is able to get the latest bid amount made on his artwork.<br>This action can be done only if the winner has not claimed his artwork.|	The owner gets credited of the bid amount less the fees, commissions and royalties applied in the contract sale.<br>The winner gets debited of the entire bid amount including the applied fees defined in the contract sale.<br>The contract sale is inactive.<br>On the portal page, the artwork is removed from “LIVE AUCTION” and is displayed under “JUST SOLD”. <br>The artwork ownership gets transferred to the latest bidder and as such he becomes the new owner.<br>The new owner is now able to sale his new artwork.<br>Notifications will be sent to the seller and the winner to inform them of the status change.<br>
| MAKE AN OFFER|	User	|If an auction has been cancelled, any user is able to make a price offer.	An offer and a notification are sent to the owner. The owner can accept or reject the offer.|If the offer is accepted a personal sale smart contract on the blockchain will be generated allowing only the two participants, the seller and the user whose offer has been accepted, to finalise the sale (private sale).<br>The artwork is displayed under “JUST LISTED” indicating this is a private sale.<br>Once the private sale is done, the private buyer becomes the new owner. <br>On the portal page, the artwork is removed from “JUST LISTED” and is displayed under “JUST SOLD”.<br>

### No bid done yet / Artwork displayed under “JUST LISTED” on the portal page
_CANCEL action:_

| Action	  | Role	        | Description	| Owner         |New State     |
| ------------- | ------------- | ------------- | ------------- | ---------- |
| CANCEL	  | Seller	| The auction is cancelled.<br>The sale smart contract becomes inactive.<br>The owner is able to sell his artwork if he wishes to do so. |Yes	| SELL |
|             |	Buyer	| The auction has been aborted.<br>The buyer still can make an offer to the owner of the artwork. |	No	|MAKE AN OFFER|

### Auction is on : Bid made / Artwork displayed under “LIVE AUCTIONS” on the portal page

_PLACE A BID action:_

| Action	  | Role	        | Description	| Owner         |New State     |
| ------------- | ------------- | ------------- | ------------- |-----------|
| PLACE A BID	|  Highest Bidder | 	When the first bid is made, the artwork is now displayed under “LIVE AUCTIONS”.<br>For further bid, the artwork stays under “LIVE AUCTIONS”, only the latest bid amount and the stopwatch are updated. <br>The highest bidder is still able to place a new bid.	| No	| PLACE A BID |
|               | Seller| The seller still can abort and finalise the auction with the “TAKE HIGHEST BID” action button made available to him.	| Yes	| TAKE HIGHEST BID| 
|               | User 	| Any user with available funds on his wallet is able to place a bid on the auction. Any new bid will increase by default the bid price by 10%. | 	No	| PLACE A BID| 

_TAKE HIGHEST BID action:_

| Action	  | Role	        | Description	| Owner         |New State     |
| ------------- | ------------- | ------------- | ------------- |----------|
| TAKE HIGHEST BID	| Seller 	| The seller decided to close the auction and to get the actual bid amount offer.<br>The artwork is now displayed under “JUST SOLD”.|No	|MAKE AN OFFER |
|                   | Highest Bidder (winner)| The auction has been aborted.<br>Once the seller has finalised the auction, the winner will own the artwork and be able to sell it.|Yes|	SELL|
|                   | Bidder / User |The artwork is no more on auction.<br>Once the seller has finalised the auction,<br>user still can make an offer to the new owner of the artwork.	|No|	MAKE AN OFFER|

### Auction is over : Time period is ended / the artwork is displayed under “JUST SOLD” on the portal page

_CLAIM action:_

| Action	  | Role	        | Description	| Owner         |New State     |
| ------------- | ------------- | ------------- | ------------- |----------|
| CLAIM	 | Last Bidder (winner) 	| The last bidder won the auction. He is in title to claim his new artwork in order to finalise the auction.<br>The artwork is now displayed under “JUST SOLD”.<br>After claiming the artwork, the winner owns the artwork.	|Yes|	SELL |
|        | Seller	| The seller has been notified that the auction is now done. <br> The actual status of the artwork is “Claim Pending”, still the seller has the action “MAKE TRANSFER AND GET PAID” made available to him. Once the winner has claimed the artwork, this action will disappear.	| No	| MAKE AN OFFER |
|        |	Former bidders / User 	| The actual status of the artwork is “Claim Pending”.<br>None of these roles are able to interact on the artwork, until either the seller or the winner makes his respective action.|No	|MAKE AN OFFER |


_MAKE TRANSFER AND GET PAID action:_

| Action	  | Role	        | Description	| Owner         |New State     |
| ------------- | ------------- | ------------- | ------------- |----------|
| MAKE TRANSFER AND GET PAID	|Seller  |	The seller has been notified that the auction is now done. <br>If the winner did not claim yet the artwork, the seller can finalise the auction by actioning “MAKE TRANSFER AND GET PAID”.<br>After finalising the auction, the ownership of the artwork gets to the winner.|No|	MAKE AN OFFER  |
|                               | Last Bidder (winner)	|The winner has been notified that he won the auction.<br>The actual status of the artwork is “CLAIM”. <br>Once the seller actions “MAKE TRANSFER AND GET PAID”, the auction is finalised and the winner is now the new owner of the artwork.	| Yes	|SELL  |
|                               |	Former bidders / User 	| The actual status of the artwork is “Claim Pending”.<br>None of these roles are able to interact on the artwork, until either the seller or the winner makes his respective action.|No|	MAKE AN OFFER |
