const api_url = 'http://localhost:3000/api/products/';
var itemsLocalStorage = JSON.parse(localStorage.getItem("item"));
console.log(itemsLocalStorage);

for(var i = 0 ; i < itemsLocalStorage.length ; i++){

    async function getProducts(i) {
        fetch(api_url + itemsLocalStorage[i].id)
        .then(function(res){
            if(res.ok) {
                return res.json();
            }
        })
        
        .then(function(data){
            const product = data;
            console.log(itemsLocalStorage[i]);
            console.log(itemsLocalStorage[i].color);
            console.log(itemsLocalStorage[i].quantity);
            const parentNodeSection =  document.getElementById("cart__items");
            const newDivElmt = document.createElement("div");
            const newPrgphElmt = document.createElement("p");
            //The function retrieves a list of items obtained by their class name
            /**
             * Recovering data
             * @param { String } className
             * @param { Integer } nbr
             * @param { Object } newElmt
             */
            function listElmt(className, nbr, newElmt){
                var listElmt = document.getElementsByClassName(className)
                if(listElmt.lenght != 0){
                    listElmt[nbr].appendChild(newElmt);
                }else{
                    console.log("There is no class : " + className + " !");
                }
            }

            addArticleToSection(i);
            // addImageDiv(i);
            // addProductImage();
            // addContentDiv(i);
            // addDescriptionDiv();
            // addProductNameTitle();
            // addColorPgrph(i);
            // addPricePgrph();
            // addSettingsDiv();
            // addSettingsQtyDiv();
            // addQtityPargrph();
            // addQtityInput(i);
            // addSettingsDeleteDiv();
            // addDeleteItemPargrph();

            /**Addition of an element "article" corresponding to an article, and it is in this part that our articles will be added or deleted or modified */
            function addArticleToSection(i){
                const newArticleElmt = document.createElement("article");
                Object.assign(newArticleElmt,{
                    class : "cart__item"
                })
                newArticleElmt.setAttribute("data-id", `product-${i}`);
                newArticleElmt.setAttribute("data-color", itemsLocalStorage[i].color);
                parentNodeSection.appendChild(newArticleElmt);
            }

            /**Addition of a "div" element corresponding to the "image" part */
            function addImageDiv(i){
                Object.assign(newDivElmt,{
                    class : "cart__item__img"
                })
                document.getElementById(`product-${i}`).appendChild(newDivElmt);
            } 

            /**Added an element "img" to insert the image of the article */
            function addProductImage(){
                const newImgElmt = document.createElement("img");
                Object.assign(newImgElmt,{
                    src : `${product.imageUrl}`,
                    alt : `${product.altTxt}`
                })
                listElmt("cart__item__img", 0, newImgElmt);
            }

            /**Addition of a "div" element to indicate the "content" part */
            function addContentDiv(i){
                Object.assign(newDivElmt,{
                    class : "cart__item__content"
                })
                document.getElementById(`product-${i}`).appendChild(newDivElmt);    
            }

            /**Addition of a "div" element to indicate the "description" part */
            function addDescriptionDiv(){
                Object.assign(newDivElmt,{
                    class : "cart__item__content__description"
                })
                listElmt("cart_item_content", 0, newDivElmt);
            }

            /**Addition of an element "h2" to indicate the title of the article */
            function addProductNameTitle(){
                const newTitleElmt = document.createElement("h2");
                Object.assign(newTitleElmt,{
                    InnerText : `${product.name}`
                })
                listElmt("cart__item__content__description", 0, newTitleElmt);
            }

            /**Add a "p" element to indicate the color of the article */
            function addColorPgrph(i){
                Object.assign(newPrgphElmt,{
                    innerText : `${itemsLocalStorage[i].color}`
                })
                listElmt("cart__item__content__description", 0, newPrgphElmt);
            }

            /**Add a "p" element to indicate the price of the item */
            function addPricePgrph(){
                Object.assign(newPrgphElmt,{
                    innerText : product.price
                })
                listElmt("cart__item__content__description", 0, newPrgphElmt);
            }

            /**Addition of a "div" element to indicate the part corresponding to "settings" */
            function addSettingsDiv(){
                Object.assign(newDivElmt,{
                    class : "cart__item__content__settings"
                })
                listElmt("cart__item__content", 0, newDivElmt);
            }

            /**Addition of a "div" element to indicate things in relation to the quantity */
            function addSettingsQtyDiv(){
                Object.assign(newDivElmt,{
                    class : "cart__item__content__settings__quantity"
                })
                listElmt("cart__item__content__settings", 0, newDivElmt);
            }

            /**Addition of a "p" element concerning the quantity */
            function addQtityPargrph(){
                Object.assign(newPrgphElmt,{
                    innerText : "Qté : "
                })
                listElmt("cart__item__content__settings__quantity", 0, newPrgphElmt);
            }

            /**Add an "input" element to display the quantity */
            function addQtityInput(i){
                const newInputElmt = document.createElement("input");
                Object.assign(newInputElmt,{
                    type : "number",
                    class : "itemQuantity",
                    name : "itemQuantity",
                    min : "1",
                    max : "100",
                    value : `${itemsLocalStorage[i].quantity}`,
                })
                listElmt("cart__item__content__settings__quantity", 0, newInputElmt);
            }

            /**Addition of a "div" element to include "settings Delete" */
            function addSettingsDeleteDiv(){
                Object.assign(newDivElmt,{
                    class : "cart__item__content__settings__delete"
                })
                listElmt("cart__item__content__settings", 0, newDivElmt);
            }

            /**Add a "p" element to display the term "supprimer" */
            function addDeleteItemPargrph(){
                Object.assign(newPrgphElmt,{
                    class : "deleteItem",
                    innerText : "Supprimer"
                })
                listElmt("cart__item__content__settings__delete", 0, newPrgphElmt);
            }
        })
        .catch(function(err){
            err = console.log("There is an error in the request !");
        })    
    }
    getProducts(i);
}