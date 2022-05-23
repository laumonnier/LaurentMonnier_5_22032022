const api_url = 'http://localhost:3000/api/products/';
const api_url1 = 'http://localhost:3000/api/order';
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
            // localStorage.removeItem("contact");
            // changeInQuantity(i);
            inputChanged(i);
            articleRemoved(i);
            // console.log(localStorage);
            /**Added functionality for error messages when user enters data into form */

            // console.log(itemsLocalStorage);
            // formOrderClicked();
            // let contact = JSON.parse(localStorage.getItem("contact"));
            // console.log(contact);
    
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
                        // console.log(totalP.format(totalPrice)); //Test positif
                    
                    })
                    

                }


                // for(i = 0 ; i < itemsLocalStorage.length ; i++){
                //     console.log(totalPrice);
                //     console.log(`${product.price}`);
                //     x += itemsLocalStorage[i].quantity*`${product.price}`;
                //     console.log(totalPrice);
                // }
                
            }

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
            
        })
        .catch(function(err){
            err = console.log("There is an error in the request !");
        })    
    }
    getProduct(i);

}
// let jsonObj = {
//     firstname: "laurent",
//     lastName: "Monnier",
//     address: {
//         country: "France",
//         postalCode: 44000
//     }
// };

// let url = 'http://localhost:3000/api/order';

// let headers = {
//     "Accept": "application/json",
//     "Content-Type": "application/json"
// };

// async function makePostRequest(url, requestType, headers){
//     await fetch(
//         url,
//         {
//             method: requestType,
//             headers: headers,
//             body: JSON.stringify(jsonObj)
//         },
//     )
//     .then(async rawResponse =>{
//         let content = await rawResponse.json()
//         console.log(content);
//     });
// }

// makePostRequest(url, "POST", headers);


// fetch('http://localhost:3000/api/order', {
//     method : "POST",
//     // mode : "cors",
//     // cache : "default",
//     credentials : "omit",
//     // headers : {
//     // "Accept" : "application/json",
//     // "Content-Type" : "application/json",
//     // },
//     // redirect : "follow",
//     referrerPolicy : "no-referrer-when-downgrade",
//     body : JSON.stringify(commander)        
// })
// .then(res => res.json())
// .then(data => {
//     console.log('Success:', data);
// })
// .catch(err => {
//     console.error('There is an error in the request !', err);
// });


let contact = {firstName: "Laulau", lastName: "MOMO", address: "uoaefbzie"};


itemsLocalStorage = JSON.parse(localStorage.getItem("item"));
const order = {
    itemsLocalStorage,
    contact
};
console.log(order);
class Contact {
    constructor(firstName, lastName, address, city, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.email = email;
    }
}
// localStorage.removeItem("contact1");
formOrderClicked();
itemsLocalStorage = JSON.parse(localStorage.getItem("item"));

console.log(localStorage);
    // static emptyMessage(){
    //         alert("Vous n'avez pas remplis tous les champs du Formulaire !!!");
    //     }

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let address = document.getElementById("address");
let city = document.getElementById("city");
let email = document.getElementById("email");

function controlField(mask, field, fieldName, text, text2){
    if(mask.test(field.value)){
        document.getElementById(fieldName+"ErrorMsg")
                .innerHTML = "";
        // console.log("error")
        return true;
    }else{
        document.getElementById(fieldName+"ErrorMsg")
                .innerHTML = "SVP, entrez "+ text +" valide "+ text2 +"!!!";
        return false;
    }
}

function emptyField(value, text){
    if (value === ""){
        document.getElementById(text+"ErrorMsg")
                .innerHTML = "ATTENTION, vous avez oubliez d'entrer ce champ !!!";
        return false;
    }
}

/**Function to validate the first name of the form with a RegEx */
function firstNameControl(){
    let firstName = document.getElementById("firstName");
    let maskFirstName = /[A-Za-z]/g;
    // console.log(firstName.value);
    controlField(maskFirstName, firstName, "firstName", "un prénom", "");
    emptyField(firstName.value, "firstName");    
}

function firstNameValidated(){
    let firstName = document.getElementById("firstName");
    console.log(firstName.value);
    return firstName.value[0].toUpperCase() + firstName.value.slice(1);//A voir
}

/**Function to validate the form user’s last name with a RegEx. */
function lastNameControl(){
    let lastName = document.getElementById("lastName");
    let maskLastName = /[A-Za-z\-]/gi;
    // console.log(lastName.value);
    controlField(maskLastName, lastName, "lastName", "un Nom de Famille", "");
    emptyField(lastName.value, "lastName");    
}

function lastNameValidated(){
    let lastName = document.getElementById("lastName");
    console.log(lastName.value);
    return lastName.value.toUpperCase();//A voir
}

/**Function to validate the user address of the form with a RegEx. */
function addressControl(){
    let address = document.getElementById("address");
    let maskAddress = /[\w-.]/g;
    // console.log(address.value);
    controlField(maskAddress, address, "address", "une adresse", "(avec rue ou impasse)");
    emptyField(address.value, "address");
}

function addressValidated(){
    let address = document.getElementById("address");
    console.log(address.value);
    return address.value;//A voir
}

/**Function to validate the city of the user of the form with a RegEx. */
function cityControl(){
    let city = document.getElementById("city");
    let maskCity = /[A-Za-z\-][^@~&%]/g;
    // console.log(city.value);
    controlField(maskCity, city, "city", "une Ville", "");
    emptyField(city.value, "city");
}

function cityValidated(){
    let city = document.getElementById("city");
    console.log(city.value);
    return city.value;//A voir
}

/**Function to validate the email of the user of the form with a RegEx. */
function emailControl(){
    let email = document.getElementById("email");
    let maskEmail = /^([\w-.\-]+)@(([a-z]+\.)+)([a-z]{2,4})$/g;
    // console.log(email.value);
    controlField(maskEmail, email, "email", "un email", "(n'oubliez pas le '@')");
    emptyField(email.value, "email");
}
    // contact = JSON.parse(localStorage.getItem("contact"));

function emailValidated(){
    let email = document.getElementById("email");
    console.log(email.value);
    return email.value;//A voir
}


/**Function allowing the click of the command to be able to save a "contact" object in the "LocalStorage" in addition to the product table. */
function formOrderClicked(){
    const orderButton = document.getElementById("order");
    const orderInput = orderButton.closest("#order");
    // console.log(orderInput);
    orderInput.addEventListener('click', (e) => { 
    // var orderClicked = e.target; 
    try{
        firstNameControl();
        lastNameControl();
        addressControl();
        cityControl();
        emailControl();
        if((firstNameControl()&&lastNameControl()&&addressControl()&&cityControl()&&emailControl()) == true){
            contact = new Contact(firstNameValidated(), lastNameValidated(), addressValidated(), cityValidated(), emailValidated());
            console.log(contact);
            itemsLocalStorage = JSON.parse(localStorage.getItem("item"));


            order = {
                itemsLocalStorage,
                contact
            }
            console.log(order);

            let url_order = 'http://localhost:3000/api/products/order';

            async function postOrder(url_order, requestType){
                 fetch(
                    url_order,
                    {
                    method: requestType,
                    headers:{
                        "Content-Type": "application/json"
                        },
                    body: JSON.stringify(order)
                    },
                )
                    .then(res => res.json()
                    )

                    .then(data => {
                        console.log(data);
                        window.location.assign(`file:///D:/GEEK/OpenClassrooms/Formation%20D%C3%A9veloppeur%20Web/P5/Projet5/front/html/confirmation.html?orderInput=${data.orderId}`);
                    })
                    
                    .catch(err => {
                        console.error('Error', err);
                    });
            }

            postOrder(url_order, "POST");
                
            console.log(order);

            contact = JSON.parse(localStorage.getItem("contact"));
            console.log(contact);
            console.log(itemsLocalStorage);
        // })

        // .catch(function(err){
        //     err = console.log("There is an error in the request !");
        // })

        }
        if(emptyField(firstName.value, "firstName")||emptyField(lastName.value, "lastName")||emptyField(address.value, "address")||emptyField(city.value, "city")||emptyField(email.value, "email") == false){
            alert("ATTENTION! Vous avez oubliez de remplir un ou plusieurs champ(s) du formulaire");
            
        }
        else{
            console.log("Ca ne va pas !!!");
        }
    } catch (err){
        "Une erreur est survenue sur la fonction formValidated!!!";
    }
})                    
        
}

const user = {
    first_name: 'John',
    last_name: 'Lilly',
    job_title: 'Software Engineer'
};
 
const options = {
    method: 'POST',
    body: JSON.stringify(order),
    headers: {
        'Content-Type': 'application/json'
    }
}
 
fetch('https://reqres.in/api/users', options)
    .then(res => res.json())
    .then(res => console.log(res));   