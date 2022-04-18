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
        const pagelocation = window.location.href;
        const newUrlImg = new URL(pagelocation);
        const search_Id = new URLSearchParams(newUrlImg.search);
        testIdExist();
        const idProduct = newUrlImg.searchParams.get("id");
        
        console.log(products);
        console.log(location.href);
        addTagImgToDiv();
        
        
        function testIdExist(){
            if(search_Id.has('id')){
                const idProduct = newUrlImg.searchParams.get("id");
                console.log(idProduct);
                try {
                    for(var i in products){
                        idProduct === products[i]._id;
                    }    
                }
                catch{
                    console.log("This id isn't existing in api !!!")
                }
            }else{
                alert("There is no id!")
            }   
        }


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