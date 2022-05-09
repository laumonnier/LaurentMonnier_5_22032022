const api_url = 'http://localhost:3000/api/products/';
var itemsLocalStorage = JSON.parse(localStorage.getItem("item"));
console.log(itemsLocalStorage); //Test positif
for(var i = 0 ; i < itemsLocalStorage.length ; i++){
    
    async function getProduct(i) {
        fetch(api_url + itemsLocalStorage[i].id)
        .then(function(res){
            if(res.ok) {
                return res.json();
            }
        })
        
        .then(function(data){
            const product = data;
            console.log(product); //Test positif
            console.log(itemsLocalStorage[i].color); //Test positif
            console.log(itemsLocalStorage[i].quantity); //Test positif
            const parentNodeSection =  document.getElementById("cart__items");
            const newDivElmt = document.createElement("div");
            const newPrgphElmt = document.createElement("p");
            // var totalPricePerAtcle = itemsLocalStorage[i].quantity*product.price;
            // console.log(totalPricePerAtcle); //Test positif
            
            // console.log(totalPrice); //Test positif
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
            addImageDiv(i);
            addProductImage(i);
            addContentDiv(i);
            addDescriptionDiv(i);
            addProductNameTitle(i);
            addColorPgrph(i);
            addPricePgrph(i);
            addSettingsDiv(i);
            addSettingsQtyDiv(i);
            addQtityPargrph(i);
            addQtityInput(i);
            addSettingsDeleteDiv(i);
            addDeleteItemPargrph(i);
            addTotalQuantity();
            updateTotalPrice();
            
            // changeInQuantity(i);
            inputChanged(i);
            articleRemoved(i);

            /**Addition of an element "article" corresponding to an article, and it is in this part that our articles will be added or deleted or modified */
            function addArticleToSection(i){
                const newArticleElmt = document.createElement("article");
                newArticleElmt.setAttribute("class", "cart__item")
                newArticleElmt.setAttribute("data-id", `${product._id}`);
                newArticleElmt.setAttribute("data-color", `${itemsLocalStorage[i].color}`);
                parentNodeSection.appendChild(newArticleElmt);
                console.log(newArticleElmt); //Test positif
            }

            /**Addition of a "div" element corresponding to the "image" part */
            function addImageDiv(i){
                const newDivElmt = document.createElement("div");
                newDivElmt.setAttribute("class", "cart__item__img");
                listElmt("cart__item", i, newDivElmt);
                // document.getElementById(`product-${i}`).appendChild(newDivElmt);
                console.log(newDivElmt); //Test positif
            } 

            /**Added an element "img" to insert the image of the article */
            function addProductImage(){
                const newImgElmt = document.createElement("img");
                Object.assign(newImgElmt,{
                    src : `${product.imageUrl}`,
                    alt : `${product.altTxt}`
                })
                listElmt("cart__item__img", i, newImgElmt);
                console.log(newImgElmt); //Test positif
            }

            /**Addition of a "div" element to indicate the "content" part */
            function addContentDiv(i){
                const newDivElmt = document.createElement("div");
                newDivElmt.setAttribute("class", "cart__item__content");
                listElmt("cart__item", i, newDivElmt);
                // document.getElementById(`product-${i}`).appendChild(newDivElmt);
                console.log(newDivElmt); //Test positif    
            }

            /**Addition of a "div" element to indicate the "description" part */
            function addDescriptionDiv(i){
                const newDivElmt = document.createElement("div");
                newDivElmt.setAttribute("class", "cart__item__content__description");
                listElmt("cart__item__content", i, newDivElmt);
                console.log(newDivElmt); //Test positif
            }

            /**Addition of an element "h2" to indicate the title of the article */
            function addProductNameTitle(i){
                const newTitleElmt = document.createElement("h2");
                newTitleElmt.innerText = `${product.name}`;
                listElmt("cart__item__content__description", i, newTitleElmt);
                console.log(newTitleElmt); //Test positif
            }

            /**Add a "p" element to indicate the color of the article */
            function addColorPgrph(i){
                const newPrgphElmt = document.createElement("p");
                newPrgphElmt.innerText = `${itemsLocalStorage[i].color}`;
                listElmt("cart__item__content__description", i, newPrgphElmt);
                console.log(newPrgphElmt); //Test positif
            }

            /**Add a "p" element to indicate the price of the item */
            function addPricePgrph(i){
                const newPrgphElmt = document.createElement("p");
                newPrgphElmt.innerText = product.price + " €";
                listElmt("cart__item__content__description", i, newPrgphElmt);
                console.log(newPrgphElmt); //Test positif
            }

            /**Addition of a "div" element to indicate the part corresponding to "settings" */
            nbr = 1+2*i;
            function addSettingsDiv(nbr){
                const newDivElmt = document.createElement("div");
                newDivElmt.setAttribute("class", "cart__item__content__settings");
                listElmt("cart__item__content", nbr, newDivElmt);
                console.log(newDivElmt); //Test positif
            }

            /**Addition of a "div" element to indicate things in relation to the quantity */
            function addSettingsQtyDiv(i){
                const newDivElmt = document.createElement("div");
                newDivElmt.setAttribute("class", "cart__item__content__settings__quantity");
                listElmt("cart__item__content__settings", i, newDivElmt);
                console.log(newDivElmt); //Test positif
            }

            /**Addition of a "p" element concerning the quantity */
            function addQtityPargrph(i){
                const newPrgphElmt = document.createElement("p");
                newPrgphElmt.innerText = "Qté : ";
                listElmt("cart__item__content__settings__quantity", i, newPrgphElmt);
                console.log(newPrgphElmt); //Test positif
            }

            /**Add an "input" element to display the quantity */
            function addQtityInput(i){
                const newInputElmt = document.createElement("input");
                newInputElmt.setAttribute("class", "itemQuantity");
                newInputElmt.setAttribute("type", "number");
                newInputElmt.setAttribute("name", "itemQuantity");
                newInputElmt.setAttribute("min", "1");
                newInputElmt.setAttribute("max", "100");
                newInputElmt.setAttribute("value", `${itemsLocalStorage[i].quantity}`);
                listElmt("cart__item__content__settings__quantity", i, newInputElmt);
                console.log(newInputElmt); //Test positif
                // if(newInputElmt.getAttribute("value") != `${itemsLocalStorage[i].quantity}`){
                //     newInputElmt.addEventListener('change', inputChanged);
                // }
            }

            // var input = document.getElementsByClassName("itemQuantity")


            /**Addition of a "div" element to include "settings Delete" */
            function addSettingsDeleteDiv(nbr){
                const newDivElmt = document.createElement("div");
                newDivElmt.setAttribute("class", "cart__item__content__settings__delete");
                listElmt("cart__item__content__settings", nbr, newDivElmt);
                console.log(newDivElmt); //Test positif
            }

            /**Add a "p" element to display the term "supprimer" */
            function addDeleteItemPargrph(i){
                const newPrgphElmt = document.createElement("p");
                newPrgphElmt.setAttribute("class", "deleteItem");
                newPrgphElmt.innerText = "Supprimer";
                listElmt("cart__item__content__settings__delete", i, newPrgphElmt);
                console.log(newPrgphElmt); //Test positif
            }
            
            /**Addition of the "total quantity" for article */
            function addTotalQuantity(){
                var total = 0;
                for(var i = 0; i < itemsLocalStorage.length; i++){
                    total += itemsLocalStorage[i].quantity;            
                }
                document
                    .getElementById("totalQuantity")
                    .innerText = total;
                console.log(total); //Test positif
            }

            /**Addition of the "total price" for all products  */
            function updateTotalPrice(){
                var totalP = new Intl.NumberFormat();
                var totalPrice = 0;
                for(var i = 0 ; i < itemsLocalStorage.length ; i++){
                    totalPrice += (itemsLocalStorage[i].quantity)*(product.price);
                }
                document
                    .getElementById("totalPrice")
                    .innerText = totalP.format(totalPrice);
                console.log(totalP.format(totalPrice)); //Test positif
            }

            /**Add an "error message" to the first name */
            function addFirstNameErrorMsge(){
                
                newPrgphElmt.setAttribute("class", "deleteItem");
                newPrgphElmt.innerText = "Supprimer";
                listElmt("cart__item__content__settings__delete", i, newPrgphElmt);
                console.log(newPrgphElmt); //Test positif
            }

            /**function allowing the decrementing and incrementing of the products while recording the quantities in the "LocalStorage" */
            function inputChanged(i){
                const inputElements = document.getElementsByClassName("itemQuantity");
                const input = inputElements[i].closest(".itemQuantity");
                console.log(input);
                input.addEventListener('change', function(e) {
                    var value = e.target.value;
                    console.log(value);//Test positif
                    input.setAttribute("value",`${value}`);
                    console.log(input);//Test positif
                    console.log(itemsLocalStorage[i].quantity);//Test positif
                    itemsLocalStorage[i].quantity = parseInt(itemsLocalStorage[i].quantity);
                    itemsLocalStorage[i].quantity = parseInt(`${value}`);
                    localStorage.setItem('item', JSON.stringify(itemsLocalStorage));
                    addTotalQuantity();
                    updateTotalPrice();
                });
            }

            //En essais

            /**function to delete an item directly in the shopping cart while saving in the "LocalStorage" */
            function articleRemoved(i){
                const removeElements = document.getElementsByClassName("deleteItem");
                const removed = removeElements[i].closest(".deleteItem");
                console.log(removed);
                removed.addEventListener('click', function(e) {
                    var removeClicked = e.target;
                    removeClicked = removed.closest("article");
                    console.log(removeClicked);
                    removeClicked.remove();
                    itemsLocalStorage.splice(i,1);
                    localStorage.setItem('item', JSON.stringify(itemsLocalStorage));
                    // itemsLocalStorage[i].remove();
                //     itemsLocalStorage[i].quantity = parseInt(itemsLocalStorage[i].quantity);
                //     itemsLocalStorage[i].quantity = parseInt(`${value}`);
                //     localStorage.setItem('item', JSON.stringify(itemsLocalStorage));
                    addTotalQuantity();//A refaire
                    updateTotalPrice();//A refaire

                });
            }

            //En essais
            // function inputChanged(){
            //     var inputQuantity = document.getElementsByClassName("itemQuantity");
            //         var input = inputQuantity[i];
            //         // console.log(input);
            //         input.addEventListener('change', function(e) {  
            //             var value = e.target.value;
            //             console.log(value);
            //             // var inputQuantity = document.getElementsByClassName("itemQuantity");
            //             // var input = inputQuantity[i];
            //             console.log(input);
            //             input.setAttribute("value",`${value}`);
            //             // localStorage.setItem("item", JSON.stringify(itemsLocalStorage));
            //             input.getAttribute("value");
            //             // console.log(input);
            //             var itemsLocalStorage = JSON.parse(localStorage.getItem("item"));
            //             console.log(itemsLocalStorage);
            //             // itemsLocalStorage[i].quantity = parseInt(itemsLocalStorage[i].quantity);
            //             // itemsLocalStorage[i].quantity = value;
            //             // itemsLocalStorage[i].quantity; //Test Négatif
            //             // console.log(quantity);//Test Négatif
            //             // itemsLocalStorage[i].quantity = parseInt(itemsLocalStorage[i].quantity);//A essayer
            //             // var productQty = parseInt(document.getElementById("quantity").value);//A essayer
            //         });
            //         localStorage.setItem("item", JSON.stringify(itemsLocalStorage));
            // }


            //En essais
            // function inputChanged(e){
            //     var quantity = e.target.value;
            //     var inputQuantity = document.getElementsByClassName("itemQuantity");
            //     var input = inputQuantity[i];
            //     input.setAttribute("value", `${quantity}`);
            //     itemsLocalStorage[i].quantity = parseInt(itemsLocalStorage[i].quantity);
            //     itemsLocalStorage[i].quantity = quantity;
            //     localStorage.setItem("item", JSON.stringify(itemsLocalStorage[i].quantity)); 
                
                // var input = itemsLocalStorage[i].quantity;
                // console.log(itemsLocalStorage.length);
                // input.addEventListener('change', function(e) {  
                //     var value = e.target.value;
                //     input.setAttribute("value",`${value}`);
                // });
                // localStorage.setItem("item", JSON.stringify(itemsLocalStorage));
                // document.location.reload();
            // }

            function formValidated(){
                firstNameValidated();
                lastNameValidated();
                addressValidated();
                cityValidated();
                emailValidated();
            }

            function firstNameValidated(){
                var firstName = document.input.firstName;
                var maskFirstName = /[A-Za-z]/gi;
                console.log(firstName.value);
                if(firstName.value == ""){
                    document.getElementById("firstNameErrorMsg")
                            .innerHTML = "SVP, entrez un Prénom !!!";
                    firstName.focus();
                    return false;
                }
                if(firstName.value != maskFirstName){
                    document.getElementById("firstNameErrorMsg")
                            .innerHTML = "SVP, entrez un Prénom valide !!!";
                    firstName.focus();
                    return false;
                }else{
                    firstName.value[0].toUpperCase() + firstName.value.slice(1);
                }
                    
            }

            function lastNameValidated(){
                var lastName = document.input.lastName;
                var maskLastName = /[A-Za-z\-]/gi;
                console.log(lastName.value);
                if(lastName.value == ""){
                    document.getElementById("lastNameErrorMsg")
                            .innerHTML = "SVP, entrez un Nom de Famille !!!";
                    lastName.focus();
                    return false;
                }
                if(firstName.value != maskLastName){
                    document.getElementById("lastNameErrorMsg")
                            .innerHTML = "SVP, entrez un Nom de Famille valide !!!";
                    firstName.focus();
                    return false;
                }else{
                    lastName.value.toUpperCase();
                }
            }

            function addressValidated(){
                var address = document.input.address;
                var mask1 = /^[0-9]{1,}[A-Za-z\-\._\W\s][^@~&%]/g;
                console.log(address.value);
                if(address.value == ""){
                    document.getElementById("addressErrorMsg")
                            .innerHTML = "SVP, entrez une Adresse (avec un numéro de rue)!!!";
                    address.focus();
                    return false;
                }
                if(mask1.test(address) == false){
                    document.getElementById("addressErrorMsg")
                            .innerHTML = "SVP, entrez une Adresse valide (avec un numéro de rue ou impasse au début)!!!";
                    address.focus();
                    return false;
                }
            }

            function cityValidated(){
                var city = document.input.city;
                var mask1 = /[A-Za-z\-][^@~&%]/g;
                console.log(city.value);
                if(city.value == ""){
                    document.getElementById("cityErrorMsg")
                            .innerHTML = "SVP, entrez une Ville !!!";
                    city.focus();
                    return false;
                }
                if(mask1.test(city) == false){
                    document.getElementById("cityErrorMsg")
                            .innerHTML = "SVP, entrez une Ville valide !!!";
                    city.focus();
                    return false;
                }
            }

            function emailValidated(){
                var email = document.input.email;
                var mask1 = /[A-Za-z\-@]/g;
                console.log(email.value);
                if(email.value == ""){
                    document.getElementById("emailErrorMsg")
                            .innerHTML = "SVP, entrez un email !!!";
                    email.focus();
                    return false;
                }
                if(mask1.test(email) == false){
                    document.getElementById("emailErrorMsg")
                            .innerHTML = "SVP, entrez un email valide (n'oubliez pas le '@') !!!";
                    email.focus();
                    return false;
                }
            }
            
        })
        .catch(function(err){
            err = console.log("There is an error in the request !");
        })    
    }
    getProduct(i);

}

    