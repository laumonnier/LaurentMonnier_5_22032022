/**The "getIdToLocation()" function to return the value of the "id" for the chosen product on the "index.html" page */
function getIdToLocation(){
    pageLocation = window.location.href;
    console.log(pageLocation);
    const newUrl = new URL(pageLocation);
    const idProduct = newUrl.searchParams.get("id");
    return idProduct;
}
const newId = getIdToLocation();
console.log(newId);

/**The "productGet()" function allows you to get the API product on the local server port 3000!
Dynamically retransmit them on the product.html. */
const api_url = 'http://localhost:3000/api/products/';
function productGet(){
    fetch(api_url + newId)
    .then(function(res){
        if(res.ok){
            return res.json();
        }
    })
    .then(function(data){
        const product = data;

        addTagImgToDiv();
        addTitleToArticle();
        addPriceToArticle();
        addDescriptionToArticle();
        addColorsChoiceToArticle();
        // valueInQuantity();

        addArticleToCart();
        // localStorage.clear();
        console.log(JSON.parse(localStorage["item"] || null))
        for (var i = 0; i < localStorage.length; i++){
            console.log (localStorage.key(i));
        }
        
         /**Function "addTagImgToDiv()" to create a tag "img", with its attributes, child of the tag "div" to classe "class = item__img" for one product of the API. Especially to the getElementsByClassName() method. */
        function addTagImgToDiv(){
            const newImgElmt = document.createElement("img");
            Object.assign(newImgElmt,{
                src : product.imageUrl,
                alt : product.altTxt
            })
            var listElmt = document.getElementsByClassName("item__img");
            if (listElmt.lenght != 0){
            listElmt[0].appendChild(newImgElmt);
            }else{
                console.log("There is no class : 'item__img' !");
            }    
        }
        
        /**The function "addTitleToArticle()" indicates the Title of the selected article */
        function addTitleToArticle(){
            document
                .getElementById("title")
                .innerText = product.name;
        }

        /**The function "addPriceToArticle()" indicates the price of the selected article */
        function addPriceToArticle(){
            document
                .getElementById("price")
                .innerText = product.price + " ";
        }

        /**The function "addDescriptionToArticle()" indicates the description of the selected article */
        function addDescriptionToArticle(){
            document
                .getElementById("description")
                .innerText = product.description;
        }

        /**Function to choose the color of the item from a drop-down list */
        function addColorsChoiceToArticle(){
            const colors = product.colors;
            for(var color in colors){
                const newChildToSelect = document.createElement("option");
                Object.assign(newChildToSelect,{
                    value : product.colors[color],
                    innerText : product.colors[color]
                })
                document.getElementById("colors").appendChild(newChildToSelect);
            }
        }

        /**The function "addDescriptionToArticle()" allows to add a product ("id", "quantity", "color") to the cart after the "click" of the mouse on the "Ajouter au panier" button of the product.html page */
        function addArticleToCart(){
            const addToCart = document.getElementById("addToCart");
            addToCart.addEventListener('click', (e) => {
                var productQty = parseInt(document.getElementById("quantity").value);
                var productColor = document.getElementById("colors").value;  
                var item = {
                    id : product._id, 
                    quantity : productQty, 
                    color : productColor
                }
                if(productColor === ""){
                    alert('Il faut choisir une couleur SVP !!!');
                    document.location.reload();
                    addArticleToCart();
                }else{
                var itemsLocalStorage = JSON.parse(localStorage.getItem("item"));
                // console.log(itemsLocalStorage);
                if(itemsLocalStorage != null){
                    var itemOk = 0;
                    for (var i = 0; i < itemsLocalStorage.length; i++){
                        // console.log(itemsLocalStorage[i].id);
                        // console.log(itemsLocalStorage[i].quantity);
                        // console.log(itemsLocalStorage[i].color);
                        if ((item.id === itemsLocalStorage[i].id) && (item.color === itemsLocalStorage[i].color)){
                            // console.log("Coucou"); //Vérifier
                            itemOk++;
                            itemsLocalStorage[i].quantity = parseInt(itemsLocalStorage[i].quantity);
                            itemsLocalStorage[i].quantity += item.quantity; // Vérifier cette ligne
                            // console.log(itemsLocalStorage[i].quantity);
                            localStorage.setItem('item', JSON.stringify(itemsLocalStorage));
                            // console.log(itemsLocalStorage.length);
                        }
                    }    
                    if(itemOk === 0){
                            itemsLocalStorage.push(item);
                            // console.log("Hallo"); // Vérifier
                            localStorage.setItem('item', JSON.stringify(itemsLocalStorage));
                            // console.log(itemsLocalStorage.length);
                    }               
                }else{
                    itemsLocalStorage = [];
                    itemsLocalStorage.push(item);
                    // console.log("Laurent");
                    localStorage.setItem('item', JSON.stringify(itemsLocalStorage));
                    // console.log(itemsLocalStorage.length);
                }
                }
            })
        }
    })
    
    .catch(function(err){
        err = console.log("There is an error in the request");
    })
}
productGet(); 
 