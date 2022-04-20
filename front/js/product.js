/**The "getIdToLocation()" function to return the value of the "id" for the chosen product on the "index.html" page */
function getIdToLocation(){
    pageLocation = window.location.href;
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
        console.log(product);

        addTagImgToDiv();
        addTitleToArticle();
        addPriceToArticle();
        addDescriptionToArticle();
        

         /**Function "addTagImgToDiv()" to create a tag "img", with its attributes, child of the tag "div" to classe "class = item__img" for one product of the API. Especially to the getElementsByClassName() method. */
        function addTagImgToDiv(){
            const newImgElmt = document.createElement("img");
            Object.assign(newImgElmt,{
                src : product.imageUrl,
                alt : product.altTxt
            })
            var listElmt = document.getElementsByClassName("item__img");
            if (listElmt != 0){
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

    })
    .catch(function(err){
        err = console.log("There is an error in the request");
    })
}
productGet();



// const api_url =  'http://localhost:3000/api/products';

// function getProducts(){
//     fetch(api_url)
//     .then(function(res){
//         if (res.ok){
//             return res.json();
//         }
//     })
//     .then(function(data){
//         const products = data;
//         const pagelocation = window.location.href;
//         const newUrlImg = new URL(pagelocation);
//         const search_Id = new URLSearchParams(newUrlImg.search);
//         testIdExist();
//         const idProduct = newUrlImg.searchParams.get("id");
        
//         console.log(products);
//         console.log(location.href);
//         addTagImgToDiv();
        
        
//         function testIdExist(){
//             if(search_Id.has('id')){
//                 const idProduct = newUrlImg.searchParams.get("id");
//                 console.log(idProduct);
//                 try {
//                     for(var i in products){
//                         idProduct === products[i]._id;
//                     }    
//                 }
//                 catch{
//                     console.log("This id isn't existing in api !!!")
//                 }
//             }else{
//                 alert("There is no id!")
//             }   
//         }

//         function addProductTitle(){
//             var id = products[i]._id;
//             if (id = products[i]._id){
//                 innerText = products[i].name;
//             }else{
//                 alert ("The id don't existing !")
//             }
//         }
//         var imageUrl = `&{products[0].imageUrl}`;
//         var url = new URL(imageUrl);
//         var name = url.searchParams.get(url);
//         console.log(imageUrl);
//         console.log(name);
//     })
//     .catch(function(err){
//         err = console.log("There is an error in the request");
//     })
// } 
