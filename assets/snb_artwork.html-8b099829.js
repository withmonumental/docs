import{_ as d,Y as s,Z as h,a1 as e,a2 as t,a0 as a,a3 as l,a4 as n,J as i}from"./framework-2dbbd0dc.js";const c={},b=n('<p>All authorised participants with a valid digital wallet and available funds are allowed trending artworks on Monumental. Not only Monumental gives access to first and second market but allows users who are not creator to mint fine arts on behalf of artists.<br> As an authorised user, Monumental has been designed in a such way that wherever you are browsing on the platform you have the possibility to buy or sale any published artworks. Moreover, you are allowed to make a price offer on artworks that you desired even if those artworks are not available on sale. The owner of the artwork will have then the option to accept or decline your offer.<br> For NFT’s creator, Monumental guarantees that its royalties will be paid to him.</p><div class="hint-container info"><p class="hint-container-title">Important</p><p>It is important to understand that during selling and buying process, network fees will be applied during any transactions that will occur on the Ethereum blockchain. During selling and buying processes, different states indicate the user how to proceed to finalise the action (buy, sale or make an offer) started.</p></div><p>This guide is intending to explain in a comprehensive manner how an user should perform the different actions offered to him during selling and buying processes.</p><h2 id="becoming-an-user-on-monumental" tabindex="-1"><a class="header-anchor" href="#becoming-an-user-on-monumental" aria-hidden="true">#</a> Becoming an user on Monumental</h2><p>During a limited period, access to the platform is not public. This means that access to the platform is restricted and can only be obtained through either receiving an invitation from someone with the authority to provide one (Space Managers) or by submitting an application online.<br></p>',5),w={href:"https://monumental.app/apply/artist",target:"_blank",rel:"noopener noreferrer"},u={href:"https://monumental.app/apply/manager",target:"_blank",rel:"noopener noreferrer"},p=n('<h2 id="sale-smart-contracts-generation" tabindex="-1"><a class="header-anchor" href="#sale-smart-contracts-generation" aria-hidden="true">#</a> Sale Smart Contracts generation</h2><p>When launching a sale on standard or community edition, personal sale smart contracts are generated and are stored to the Ethereum blockchain officialising the on-going sale. The smart contract becomes active.<br> This ensures that the transactions between the two different parties involved in the sale process is rapid, secured and seamless.<br> Upon receipt from the blockchain that the transaction has been approved, the smart contract becomes inactive. <br> From any future sale of this artwork, a new personal sale smart contract will be generated.</p><h2 id="available-states-during-a-selling-process" tabindex="-1"><a class="header-anchor" href="#available-states-during-a-selling-process" aria-hidden="true">#</a> Available States during a Selling Process</h2><p>There are two ways to sale an artwork (regardless whether it is a standard or community edition) on Monumental either as a Fixed Price Sale or as a Timed Auction Sale.</p><div class="hint-container info"><p class="hint-container-title">Information</p><p>In order to sale an artwork, you have to be the owner of the artwork you wish to sale and this artwork must be first published in a space.</p></div><h3 id="definitions" tabindex="-1"><a class="header-anchor" href="#definitions" aria-hidden="true">#</a> Definitions</h3><blockquote><p><strong>Fixed Price sale</strong> The artwork is intending to be sold as a defined fixed price (set by the seller). <br> The buyer will accept the sales conditions when he will buy the artwork.<br></p></blockquote><blockquote><p><strong>Timed Auction</strong> The artwork is auctioned with a minimal basis price during a defined period (either 24 hours or a specific period of time set by the seller). Buyers who want to participate to this auction, have the possibility to bid higher with a minimum of 10% on the indicated price by default.</p></blockquote><div class="hint-container info"><p class="hint-container-title">Informations</p><ul><li>An auction will be only visible on the portal page under the section “LIVE AUCTION” only if a first bid has been initiated by a potential buyer. In between the Auction is displayed on the portal page under the section “JUST LISTED”</li><li>Whenever a bid is placed during the last 10 minutes of the auction, an additional time of 10 minutes will automatically be added.</li></ul></div><p>Once the auction is over, the highest bidder will be notified by mail that he won the bid. He will then be allowed to claim his new artwork under the sales condition set by the seller.<br> sDepending on how the owner of the artwork sales it, specific states during the sale process will be offered.</p><h3 id="different-artwork-s-states-during-a-fixed-price-sale" tabindex="-1"><a class="header-anchor" href="#different-artwork-s-states-during-a-fixed-price-sale" aria-hidden="true">#</a> Different artwork’s states during a Fixed Price Sale</h3><p><em>List of states available</em></p><table><thead><tr><th>Current State</th><th>Role</th><th>Description</th><th>Impact</th></tr></thead><tbody><tr><td>SELL</td><td>Owner</td><td>The owner is in tittle to sale his artwork</td><td>This will trigger the sale.<br>A personal sale smart contract on the blockchain will be generated. <br>The sale contract is active.<br> On the portal page, the artwork is displayed under “JUST LISTED&quot;</td></tr><tr><td>CANCEL</td><td>Owner</td><td>The seller has the possibility to withdraw his sale</td><td>The sale process is cancelled.<br>The sale smart contract becomes inactive.<br>The owner is able to sell his artwork if he wishes to do so.</td></tr><tr><td>BUY NOW</td><td>Buyer (user)</td><td>The buyer can buy the artwork for the indicated price</td><td>This will trigger the sale. <br>Seller side:<br>Seller’s wallet will be credited with the sale price less the fees, commissions and royalties applied in the contract sale.<br>Buyer side:<br>Buyer’s wallet will be debited for the entire amount of the transaction including applied fees.<br>The buyer becomes the new owner and as such he is now able to sale his new artwork.<br>Notifications will be sent to the seller and the buyer to inform them of the status change.<br>Sale smart contract on the blockchain becomes inactive.<br>On the portal page, the artwork is removed from “JUST LISTED” and is displayed under “JUST SOLD”</td></tr><tr><td>MAKE AN OFFER</td><td>User</td><td>If a sale has been cancelled, any user is able to make a price offer.</td><td>An offer and a notification are sent to the owner. The owner can accept or reject the offer.<br>If the offer is accepted a personal sale smart contract on the blockchain will be generated allowing only the two participants, the seller and the user whose offer has been accepted, to finalise the sale (private sale).<br>The artwork is displayed under “JUST LISTED” indicating this is a private sale.<br>Once the private sale is done, the buyer becomes the new owner. <br>On the portal page, the artwork is removed from “JUST LISTED” and is displayed under “JUST SOLD”.</td></tr></tbody></table><p><strong>CANCEL action:</strong></p><table><thead><tr><th>Action</th><th>Role</th><th>Description</th><th>Owner</th><th>New State</th></tr></thead><tbody><tr><td>CANCEL</td><td>Seller</td><td>The sale process is cancelled.<br> The sale smart contract becomes inactive.<br>The owner can put his artwork for sale if he wishes to do so.</td><td>Yes</td><td>SELL</td></tr><tr><td></td><td>Buyer</td><td>The sale has been aborted.<br> The buyer still can make an offer to the owner of the artwork.</td><td>No</td><td>MAKE AN OFFER</td></tr></tbody></table><p><strong>BUY NOW action:</strong></p><table><thead><tr><th>Action</th><th>Role</th><th>Description</th><th>Owner</th><th>New State</th></tr></thead><tbody><tr><td>BUY NOW</td><td>Buyer</td><td>The sale proceeded. <br>The buyer is now the new owner and he can sell his newly acquired artwork.</td><td>Yes</td><td>SELL</td></tr><tr><td></td><td>Former Seller / user</td><td>The sale proceeded. <br>Any user can make an offer.</td><td>No</td><td>MAKE AN OFFER</td></tr></tbody></table><h3 id="different-artwork-s-states-during-a-timed-auction-sale" tabindex="-1"><a class="header-anchor" href="#different-artwork-s-states-during-a-timed-auction-sale" aria-hidden="true">#</a> Different artwork’s states during a Timed Auction Sale:</h3><p><em>List of states available</em></p><table><thead><tr><th>Current State</th><th>Role</th><th>Description</th><th>Impact</th></tr></thead><tbody><tr><td>SELL</td><td>Owner</td><td>The owner is in tittle to initiate a timed auction.</td><td>This will trigger the auction with the minimal basis price set. <br> A personal sale smart contract on the blockchain will be generated.<br> The sale contract is active.<br>On the portal page, the artwork is now displayed under “JUST LISTED”.</td></tr><tr><td>CANCEL</td><td>Owner</td><td>If no bid has been done, the seller has the possibility to withdraw his auction.</td><td>The sale process is cancelled.<br>The sale smart contract becomes inactive.<br>The owner can put his artwork for sale if he wishes to do so. <br>A notification will be sent to the owner.</td></tr><tr><td>PLACE A BID</td><td>Buyer / user</td><td>Any user can place a bid to initialise the auction. The time period set will start.</td><td>The first bid made will trigger and start the auction.<br>The seller has been notified that the auction has been made.<br>On the portal page, the artwork will be now displayed under “LIVE AUCTIONS” with the actual price of the auction and the time period of the auction will be displayed.<br>Further bids can be made as long as the auction is still on (time period is still running).<br>The bid amount will be retained from the bidder’s wallet (bidder’s wallet is debited) on the sale smart contract until a new bid occurs.<br>If a new bid occurs from a new bidder then the amount bid from the latest bid retained on the sale contract is returned to the former bidder (former bidder’s wallet is credited) and the new bid amount will be in turn retained on the sale smart contract (new bidder’s wallet is debited).<br>Notifications will be sent to the seller, the formal bidder and the new bidder that a new bid occurred.</td></tr><tr><td>TAKE HIGHEST BID</td><td>Owner</td><td>When the auction is still on, the owner is able to close the auction before the end of the defined period time and claim the current bid amount available on his artwork.</td><td>The owner gets credited of the bid amount less the fees, commissions and royalties applied in the contract sale.<br>The winner gets debited of the entire bid amount including the applied fees defined in the contract sale.<br>On the portal page, the artwork is removed from “LIVE AUCTION” and is displayed under “JUST SOLD”.<br>The contract sale is inactive.<br>The winner becomes the new owner and as such he is now able to sale his new artwork.<br>Notifications will be sent to the seller and the winner to inform them of the status change.</td></tr><tr><td>CLAIM</td><td>Last Bidder (winner)</td><td>When the auction is over (period time is ended), the winner of the bid is now able to claim his artwork.<br>This action can be done only if the actual owner of the artwork has not claimed (MAKE TRANSFER AND GET PAID) his due.</td><td>The owner gets credited of the bid amount less the fees, commissions and royalties applied in the contract sale.<br>The winner gets debited of the entire bid amount including the applied fees defined in the contract sale.<br>The contract sale is inactive.<br>The winner becomes the new owner and as such he is now able to sale his new artwork.<br>Notifications will be sent to the seller and the winner to inform them of the status change.<br>On the portal page, the artwork is removed from “LIVE AUCTION” and is displayed under “JUST SOLD”.</td></tr><tr><td>CLAIM PENDING</td><td>Bidder / user</td><td>When the auction is over (period time is ended), any bidder and any user of the platform will be informed that the artwork is now on a ”CLAIM PENDING” status with the indication of the winner (last bidder).</td><td>Users and former bidders can only acknowledge that the auction is over. Until no action has been made by the seller (MAKE TRANSFER AND GET PAID) or by the winner (CLAIM), the actual state “CLAIM PENDING” will be displayed.<br>No action can be performed. <br>On the portal page, the artwork is removed from “LIVE AUCTION” and is displayed under “JUST SOLD”.</td></tr><tr><td>MAKE TRANSFER AND GET PAID</td><td>Owner</td><td>When the auction is over (period time is ended), the actual owner (seller) is able to get the latest bid amount made on his artwork.<br>This action can be done only if the winner has not claimed his artwork.</td><td>The owner gets credited of the bid amount less the fees, commissions and royalties applied in the contract sale.<br>The winner gets debited of the entire bid amount including the applied fees defined in the contract sale.<br>The contract sale is inactive.<br>On the portal page, the artwork is removed from “LIVE AUCTION” and is displayed under “JUST SOLD”. <br>The artwork ownership gets transferred to the latest bidder and as such he becomes the new owner.<br>The new owner is now able to sale his new artwork.<br>Notifications will be sent to the seller and the winner to inform them of the status change.<br></td></tr><tr><td>MAKE AN OFFER</td><td>User</td><td>If an auction has been cancelled, any user is able to make a price offer. An offer and a notification are sent to the owner. The owner can accept or reject the offer.</td><td>If the offer is accepted a personal sale smart contract on the blockchain will be generated allowing only the two participants, the seller and the user whose offer has been accepted, to finalise the sale (private sale).<br>The artwork is displayed under “JUST LISTED” indicating this is a private sale.<br>Once the private sale is done, the private buyer becomes the new owner. <br>On the portal page, the artwork is removed from “JUST LISTED” and is displayed under “JUST SOLD”.<br></td></tr></tbody></table><h3 id="no-bid-done-yet-artwork-displayed-under-just-listed-on-the-portal-page" tabindex="-1"><a class="header-anchor" href="#no-bid-done-yet-artwork-displayed-under-just-listed-on-the-portal-page" aria-hidden="true">#</a> No bid done yet / Artwork displayed under “JUST LISTED” on the portal page</h3><p><em>CANCEL action:</em></p><table><thead><tr><th>Action</th><th>Role</th><th>Description</th><th>Owner</th><th>New State</th></tr></thead><tbody><tr><td>CANCEL</td><td>Seller</td><td>The auction is cancelled.<br>The sale smart contract becomes inactive.<br>The owner is able to sell his artwork if he wishes to do so.</td><td>Yes</td><td>SELL</td></tr><tr><td></td><td>Buyer</td><td>The auction has been aborted.<br>The buyer still can make an offer to the owner of the artwork.</td><td>No</td><td>MAKE AN OFFER</td></tr></tbody></table><h3 id="auction-is-on-bid-made-artwork-displayed-under-live-auctions-on-the-portal-page" tabindex="-1"><a class="header-anchor" href="#auction-is-on-bid-made-artwork-displayed-under-live-auctions-on-the-portal-page" aria-hidden="true">#</a> Auction is on : Bid made / Artwork displayed under “LIVE AUCTIONS” on the portal page</h3><p><em>PLACE A BID action:</em></p><table><thead><tr><th>Action</th><th>Role</th><th>Description</th><th>Owner</th><th>New State</th></tr></thead><tbody><tr><td>PLACE A BID</td><td>Highest Bidder</td><td>When the first bid is made, the artwork is now displayed under “LIVE AUCTIONS”.<br>For further bid, the artwork stays under “LIVE AUCTIONS”, only the latest bid amount and the stopwatch are updated. <br>The highest bidder is still able to place a new bid.</td><td>No</td><td>PLACE A BID</td></tr><tr><td></td><td>Seller</td><td>The seller still can abort and finalise the auction with the “TAKE HIGHEST BID” action button made available to him.</td><td>Yes</td><td>TAKE HIGHEST BID</td></tr><tr><td></td><td>User</td><td>Any user with available funds on his wallet is able to place a bid on the auction. Any new bid will increase by default the bid price by 10%.</td><td>No</td><td>PLACE A BID</td></tr></tbody></table><p><em>TAKE HIGHEST BID action:</em></p><table><thead><tr><th>Action</th><th>Role</th><th>Description</th><th>Owner</th><th>New State</th></tr></thead><tbody><tr><td>TAKE HIGHEST BID</td><td>Seller</td><td>The seller decided to close the auction and to get the actual bid amount offer.<br>The artwork is now displayed under “JUST SOLD”.</td><td>No</td><td>MAKE AN OFFER</td></tr><tr><td></td><td>Highest Bidder (winner)</td><td>The auction has been aborted.<br>Once the seller has finalised the auction, the winner will own the artwork and be able to sell it.</td><td>Yes</td><td>SELL</td></tr><tr><td></td><td>Bidder / User</td><td>The artwork is no more on auction.<br>Once the seller has finalised the auction,<br>user still can make an offer to the new owner of the artwork.</td><td>No</td><td>MAKE AN OFFER</td></tr></tbody></table><h3 id="auction-is-over-time-period-is-ended-the-artwork-is-displayed-under-just-sold-on-the-portal-page" tabindex="-1"><a class="header-anchor" href="#auction-is-over-time-period-is-ended-the-artwork-is-displayed-under-just-sold-on-the-portal-page" aria-hidden="true">#</a> Auction is over : Time period is ended / the artwork is displayed under “JUST SOLD” on the portal page</h3><p><em>CLAIM action:</em></p><table><thead><tr><th>Action</th><th>Role</th><th>Description</th><th>Owner</th><th>New State</th></tr></thead><tbody><tr><td>CLAIM</td><td>Last Bidder (winner)</td><td>The last bidder won the auction. He is in title to claim his new artwork in order to finalise the auction.<br>The artwork is now displayed under “JUST SOLD”.<br>After claiming the artwork, the winner owns the artwork.</td><td>Yes</td><td>SELL</td></tr><tr><td></td><td>Seller</td><td>The seller has been notified that the auction is now done. <br> The actual status of the artwork is “Claim Pending”, still the seller has the action “MAKE TRANSFER AND GET PAID” made available to him. Once the winner has claimed the artwork, this action will disappear.</td><td>No</td><td>MAKE AN OFFER</td></tr><tr><td></td><td>Former bidders / User</td><td>The actual status of the artwork is “Claim Pending”.<br>None of these roles are able to interact on the artwork, until either the seller or the winner makes his respective action.</td><td>No</td><td>MAKE AN OFFER</td></tr></tbody></table><p><em>MAKE TRANSFER AND GET PAID action:</em></p><table><thead><tr><th>Action</th><th>Role</th><th>Description</th><th>Owner</th><th>New State</th></tr></thead><tbody><tr><td>MAKE TRANSFER AND GET PAID</td><td>Seller</td><td>The seller has been notified that the auction is now done. <br>If the winner did not claim yet the artwork, the seller can finalise the auction by actioning “MAKE TRANSFER AND GET PAID”.<br>After finalising the auction, the ownership of the artwork gets to the winner.</td><td>No</td><td>MAKE AN OFFER</td></tr><tr><td></td><td>Last Bidder (winner)</td><td>The winner has been notified that he won the auction.<br>The actual status of the artwork is “CLAIM”. <br>Once the seller actions “MAKE TRANSFER AND GET PAID”, the auction is finalised and the winner is now the new owner of the artwork.</td><td>Yes</td><td>SELL</td></tr><tr><td></td><td>Former bidders / User</td><td>The actual status of the artwork is “Claim Pending”.<br>None of these roles are able to interact on the artwork, until either the seller or the winner makes his respective action.</td><td>No</td><td>MAKE AN OFFER</td></tr></tbody></table>',33);function f(m,T){const r=i("ExternalLinkIcon"),o=i("RouterLink");return s(),h("div",null,[b,e("ul",null,[e("li",null,[e("a",w,[t("Apply as an artist/artist"),a(r)])]),e("li",null,[e("a",u,[t("Apply as a space manager"),a(r)])])]),e("p",null,[t("To get full details on how to register to the platform, please refer to the section "),a(o,{to:"/started/register.html"},{default:l(()=>[t("Join Monumental")]),_:1})]),p])}const y=d(c,[["render",f],["__file","snb_artwork.html.vue"]]);export{y as default};
