const api_url = 'http://localhost:3000/api/products/';
let itemsLocalStorage = JSON.parse(localStorage.getItem("item"));
console.log(itemsLocalStorage); //Test positif

for(let i = 0 ; i < itemsLocalStorage.length ; i++){
    
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
            console.log(product.price)
            console.log(itemsLocalStorage[i].color); //Test positif
            console.log(itemsLocalStorage[i].quantity); //Test positif
            const parentNodeSection =  document.getElementById("cart__items");
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
                let listElmt = document.getElementsByClassName(className)
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
            // localStorage.clear();
            // changeInQuantity(i);
            inputChanged(i);
            articleRemoved(i);

            /**Added functionality for error messages when user enters data into form */

            console.log(itemsLocalStorage);
            formOrderClicked();
            let contact = JSON.parse(localStorage.getItem("contact"));
            console.log(contact);
            // firstNameValidated();
            // lastNameValidated();
            // addressValidated();
            // cityValidated();
            // emailValidated();

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
                newPrgphElmt.innerText = `${product.price}` + " €";
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
                let totalQuantity = 0;
                for(let i = 0 ; i < itemsLocalStorage.length ; i++){
                    totalQuantity += itemsLocalStorage[i].quantity;
                }
                document
                    .getElementById("totalQuantity")
                    .innerText = totalQuantity;
                // return totalQuantity
                console.log(totalQuantity); //Test positif
            }

            /**Addition of the "total price" for all products  */
            function updateTotalPrice(){
                let totalPrice = 0;
                let totalP = new Intl.NumberFormat();            
                // let listArticle = document.getElementsByClassName("cart__item");
                // console.log(listArticle.length);
                for(let i = 0; i < itemsLocalStorage.length; i++){
                    fetch(api_url + itemsLocalStorage[i].id)
                    .then(function(res){
                        if(res.ok) {
                            return res.json();
                        }
                    })
                    
                    .then(function(data){
                        const article = data;
                        let totalPriceArticle = itemsLocalStorage[i].quantity*`${article.price}`;
                        // console.log(`${article.price}`);
                        totalPrice = totalPrice + totalPriceArticle;
                        // console.log(totalPrice);
                        document
                            .getElementById("totalPrice")
                            .innerText = totalP.format(totalPrice);
                        console.log(totalP.format(totalPrice)); //Test positif
                    
                    })
                    

                }


                // for(i = 0 ; i < itemsLocalStorage.length ; i++){
                //     console.log(totalPrice);
                //     console.log(`${product.price}`);
                //     x += itemsLocalStorage[i].quantity*`${product.price}`;
                //     console.log(totalPrice);
                // }
                
            }

            /**Add an "error message" to the first name */
            // function addFirstNameErrorMsge(){
                
            //     newPrgphElmt.setAttribute("class", "deleteItem");
            //     newPrgphElmt.innerText = "Supprimer";
            //     listElmt("cart__item__content__settings__delete", i, newPrgphElmt);
            //     console.log(newPrgphElmt); //Test positif
            // }

            //Quelques tests à faire

            /**Function allowing the decrementing and incrementing of the products while recording the quantities in the "LocalStorage" */
            function inputChanged(i){
                const inputElements = document.getElementsByClassName("itemQuantity");
                const input = inputElements[i].closest(".itemQuantity");
                console.log(input);
                input.addEventListener('change', function(e) {
                    let value = e.target.value;
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

            /**Function to delete an item directly in the shopping cart while saving in the "LocalStorage" */
            function articleRemoved(i){
                const removeElements = document.getElementsByClassName("deleteItem");
                const removed = removeElements[i].closest(".deleteItem");
                console.log(removed);
                removed.addEventListener('click', function(e) {

                    let removeClicked = removed.closest("article");
                    console.log(removeClicked);
                    removeClicked.remove();
                    itemsLocalStorage.splice(i,1);
                    localStorage.setItem('item', JSON.stringify(itemsLocalStorage));
                    // itemsLocalStorage[i].remove();
                //     itemsLocalStorage[i].quantity = parseInt(itemsLocalStorage[i].quantity);
                //     itemsLocalStorage[i].quantity = parseInt(`${value}`);
                //     localStorage.setItem('item', JSON.stringify(itemsLocalStorage));
                    addTotalQuantity();//ok
                    updateTotalPrice();//ok

                });
            }


            //En essais
            function formOrderClicked(){
                const orderButton = document.getElementById("order");
                const orderInput = orderButton.closest("#order");
                console.log(orderInput);
                orderInput.addEventListener('click', formValidated);
            }

            class Contact {
                constructor(firstName, lastName, address, city, email){
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.address = address;
                    this.city = city;
                    this.email = email;
                }
            }

            function formValidated(){
                    // var orderClicked = e.target;
                try{
                    firstNameValidated();
                    lastNameValidated();
                    addressValidated();
                    cityValidated();
                    emailValidated();
                    if((firstNameValidated()||lastNameValidated()||addressValidated()||cityValidated()||emailValidated()) == false){
                        formOrderClicked();
                    }else{
                        let contact = new Contact(firstNameValidated(), lastNameValidated(), addressValidated(), cityValidated(), emailValidated());
                        console.log(contact);
                        localStorage.setItem("contact", JSON.stringify(contact));
                        console.log(contact.length);
                        contact = JSON.parse(localStorage.getItem("contact"));
                        console.log(contact);
                    }
                    // localStorage.setItem('contact', JSON.stringify(contactLocalStorage));
                    // contactLocalStorage[i].remove();
                //     contactLocalStorage[i].quantity = parseInt(contactLocalStorage[i].quantity);
                //     contactLocalStorage[i].quantity = parseInt(`${value}`);
                //     localStorage.setItem('contact', JSON.stringify(contacsLocalStorage));
                } catch (err){
                    "Une erreur est survenue sur la fonction formValidated!!!";                    
                }

            }
            
            //En essais
            function firstameValidated(){
                const firstName = document.getElementById("order");
                const input = firstName.closest("#order");
                console.log(input);
                input.addEventListener('click', function(e) {
                    var value = e.target;
                    console.log(value);//Test 
                    input.setAttribute("value",`${value}`);
                    console.log(input);//Test 
                    console.log();//Test 
                    // itemsLocalStorage[i].quantity = parseInt(itemsLocalStorage[i].quantity);
                    // itemsLocalStorage[i].quantity = parseInt(`${value}`);
                    // localStorage.setItem('item', JSON.stringify(itemsLocalStorage));
                    // addTotalQuantity();
                    // updateTotalPrice();
                });
            }

            //En essais
            function firstNameValidated(){
                let firstName = document.getElementById("firstName");
                let maskFirstName = /[A-Za-z]/g;
                console.log(firstName.value);
                if(maskFirstName.test(firstName.value) == false){
                    document.getElementById("firstNameErrorMsg")
                            .innerHTML = "SVP, entrez un Prénom valide !!!";
                    return false;
                }else{
                    document.getElementById("firstNameErrorMsg")
                            .innerHTML = "";
                    return firstName.value[0].toUpperCase() + firstName.value.slice(1);
                }
                    
            }

            //En essais
            function lastNameValidated(){
                let lastName = document.getElementById("lastName");
                let maskLastName = /[A-Za-z\-]/gi;
                console.log(lastName.value);
                if(maskLastName.test(lastName.value) == false){
                    document.getElementById("lastNameErrorMsg")
                            .innerHTML = "SVP, entrez un Nom de Famille valide !!!";
                    return false;
                }else{
                    document.getElementById("lastNameErrorMsg")
                            .innerHTML = "";
                    return lastName.value.toUpperCase();
                }
            }
            
            //En essais
            function addressValidated(){
                let address = document.getElementById("address");
                let mask1 = /^[0-9]{1,}[A-Za-z\-\._\W\s][^@~&%]/g;
                console.log(address.value);
                if(mask1.test(address.value) == false){
                    document.getElementById("addressErrorMsg")
                            .innerHTML = "SVP, entrez une Adresse valide (avec rue ou impasse)!!!";
                    return false;
                }else{
                    document.getElementById("addressErrorMsg")
                            .innerHTML = "";
                    return address.value;
                }
            }

            //En essais
            function cityValidated(){
                let city = document.getElementById("city");
                let mask1 = /[A-Za-z\-][^@~&%]/g;
                console.log(city.value);
                if(mask1.test(city.value) == false){
                    document.getElementById("cityErrorMsg")
                            .innerHTML = "SVP, entrez une Ville valide !!!";
                    return false;
                }else{
                    document.getElementById("cityErrorMsg")
                            .innerHTML = "";
                    return city.value;
                }
            }

            //En essais
            function emailValidated(){
                let email = document.getElementById("email");
                let mask1 = /[A-Za-z0-9\-]@[a-z\.]/g;
                console.log(email.value);
                if(mask1.test(email.value) == false){
                    document.getElementById("emailErrorMsg")
                            .innerHTML = "SVP, entrez un email valide (n'oubliez pas le '@') !!!";
                    return false;
                }else{
                    document.getElementById("emailErrorMsg")
                            .innerHTML = "";
                    return email.value;
                }
            }

            
            
        })
        .catch(function(err){
            err = console.log("There is an error in the request !");
        })    
    }
    getProduct(i);

}

    