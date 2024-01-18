import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as r,f as a}from"./app-de5b3524.js";const d={},i=a('<p>Actuellement, Monumental génère uniquement des certificats numériques basés sur la norme ERC721.</p><p>Lors de la création d&#39;un certificat numérique, Monumental propose deux choix distincts :</p><ul><li>Soit l&#39;édition standard,</li><li>Soit l&#39;édition communautaire.</li></ul><p>Le code utilisé pour les deux types d&#39;édition est disponible sur Etherscan.</p><h2 id="edition-standard" tabindex="-1"><a class="header-anchor" href="#edition-standard" aria-hidden="true">#</a> Édition standard</h2><p>Une édition standard permet de créer un nombre limité de jetons par œuvre.<br> Cela implique que le propriétaire doit créer chaque édition avant de procéder à une vente.</p><p>Les sections suivantes décrivent les informations à fournir par l&#39;artiste.</p><h3 id="informations-sur-l-œuvre" tabindex="-1"><a class="header-anchor" href="#informations-sur-l-œuvre" aria-hidden="true">#</a> Informations sur l&#39;œuvre</h3><table><thead><tr><th>Nom du champ</th><th>Description</th></tr></thead><tbody><tr><td>Collection</td><td>Ajouter l&#39;œuvre à une collection (facultatif)</td></tr><tr><td>Nom de l&#39;édition</td><td>Nom de base utilisé pour toutes les éditions</td></tr><tr><td>Description</td><td>Description de l&#39;œuvre. Prise en charge du markdown</td></tr></tbody></table><h3 id="parametres-de-l-œuvre" tabindex="-1"><a class="header-anchor" href="#parametres-de-l-œuvre" aria-hidden="true">#</a> Paramètres de l&#39;œuvre</h3><table><thead><tr><th>Nom du champ</th><th>Description</th></tr></thead><tbody><tr><td>Offre maximale</td><td>Nombre maximal d&#39;éditions pouvant être créées</td></tr><tr><td>Redevances</td><td>Redevances de l&#39;artiste</td></tr><tr><td>Médium</td><td>Catégorie de l&#39;œuvre</td></tr><tr><td>Mots-clés</td><td>Liste de mots-clés (facultatif)</td></tr></tbody></table><h3 id="parametres-des-attributs" tabindex="-1"><a class="header-anchor" href="#parametres-des-attributs" aria-hidden="true">#</a> Paramètres des attributs</h3><table><thead><tr><th>Nom du champ</th><th>Description</th></tr></thead><tbody><tr><td>Type de trait</td><td>Peut être considéré comme le titre de l&#39;attribut</td></tr><tr><td>Type d&#39;affichage</td><td>Affichage disponible<br> - texte<br>- nombre<br>- date<br>- pourcentage de boost<br>- nombre de boost</td></tr><tr><td>Valeur</td><td>Expression définie par l&#39;utilisateur</td></tr></tbody></table><h2 id="edition-communautaire" tabindex="-1"><a class="header-anchor" href="#edition-communautaire" aria-hidden="true">#</a> Édition communautaire</h2><p>L&#39;édition communautaire a les mêmes sections que l&#39;édition standard.<br> Ci-dessous, les paramètres supplémentaires nécessaires :</p><h3 id="parametres-de-la-communaute" tabindex="-1"><a class="header-anchor" href="#parametres-de-la-communaute" aria-hidden="true">#</a> Paramètres de la communauté</h3><table><thead><tr><th>Nom du champ</th><th>Description</th></tr></thead><tbody><tr><td>Espace</td><td>Espace dans lequel le mint sera effectué.<br>Défini par l&#39;artiste.</td></tr><tr><td>Prix de base</td><td>Prix minimum pour un mint</td></tr><tr><td>Prévente</td><td>L&#39;édition communautaire peut avoir un mode de prévente ou un mode de vente publique. <br>Voir ci-dessous pour la prévente.</td></tr><tr><td>Limite de NFT par adresse</td><td><strong>Option de prévente.</strong><br>Nombre maximal de NFT pouvant être créés par adresse</td></tr><tr><td>Montant max de mint</td><td><strong>Option de prévente.</strong><br>Nombre maximal de mints pouvant être effectués simultanément</td></tr><tr><td>Adresses autorisées</td><td><strong>Option de prévente.</strong><br>Liste d&#39;utilisateurs autorisés à mint avant la vente publique</td></tr></tbody></table><h3 id="premier-et-second-marche" tabindex="-1"><a class="header-anchor" href="#premier-et-second-marche" aria-hidden="true">#</a> Premier et second marché</h3><p>Si un artiste crée une édition pour son propre compte, elle sera disponible sur le premier marché et toutes les frais et commissions associés seront appliqués. <br><br> Si le mint est effectué via une adresse Ethereum différente de celle de l&#39;artiste, l&#39;édition sera sur le deuxième marché, et le contrat intelligent de l&#39;édition communautaire permettra au propriétaire de traiter avec les commissions et frais du deuxième marché via un transfert interne.</p>',19),s=[i];function n(o,u){return e(),r("div",null,s)}const c=t(d,[["render",n],["__file","smartContracts.html.vue"]]);export{c as default};
