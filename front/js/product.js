const api_url =  'http://localhost:3000/api/products';

function getProducts(){
    fetch(api_url)
    .then(function(res){
        if (res.ok){
            return res.json();
        }
    })
    .then(function(data){
        const products = data;
        console.log(products);
        console.log(location.href);
        // addTagImgToDiv();
        const pagelocation = window.location.href;
        var newUrlImg = new URL(pagelocation);
        var idProduct = newUrlImg.searchParams.get("id");
        console.log(idProduct);

        function addTagImgToDiv(){
            const newElmtImg = document.createElement("img");
            Object.assign(newElmtImg,{
                src : "http://localhost:3000/images/kanap01.jpeg",
                alt : `Photographie du ${products[i].name}`
            })
            document.getElementsByClassName('item__img').appendChild(newElmtImg);
        }

        function addProductTitle(){
            var id = products[i]._id;
            if (id = products[i]._id){
                innerText = products[i].name;
            }else{
                alert ("The id don't existing !")
            }
        }
        var imageUrl = `&{products[0].imageUrl}`;
        var url = new URL(imageUrl);
        var name = url.searchParams.get(url);
        console.log(imageUrl);
        console.log(name);
    })
    .catch(function(err){
        err = console.log("There is an error in the request");
    })
} 

getProducts();

let s = "http://localhost:3000/api/products";
let a = new URL("/",s);