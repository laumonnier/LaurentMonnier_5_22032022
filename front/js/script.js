const api_url = 'http://localhost:3000/api/products'
async function getProducts() {
    fetch(api_url)
    .then(function(res){
        if(res.ok) {
            return res.json();
        }
    })
    .then(function(data){
        const products = data;
        const parentNodeSection = document.getElementById('items');
        addChildOfSection()
        addChildOfTag_a()
        addTagImgInArticle()
        addTagTitleInArticle()
        addTagParagraphInArticle()
        
        function addChildOfSection(){
            for(var i in products){
                var newChildOfSection = document.createElement("a");
                Object.assign(newChildOfSection, {
                    href : `./product.html?id=&{products[i]._id}`
                })            
                parentNodeSection.appendChild(newChildOfSection);
            }
        }
        
        function addChildOfTag_a(){
            const childOfSection = document.querySelectorAll("#items > a")
            childOfSection.forEach((a) => {
                const newEltArticle = document.createElement("article");
                a.appendChild(newEltArticle);   
            })    
        }
        
        function addTagImgInArticle(){
            for(var i in products){
                const newEltImg = document.createElement("img");
                Object.assign(newEltImg, {
                    src : products[i].imageUrl,
                    alt : products[i].altText
                });
                var listArticle = document.getElementsByTagName("article");
                listArticle[i].appendChild(newEltImg);
                
            } 
        }
        
        function addTagTitleInArticle(){
            for(var i in products){
                const newEltTitle = document.createElement("h3");
                Object.assign(newEltTitle, {
                    class : "productName",
                    innerText : products[i].name
                })
                var listArticle = document.getElementsByTagName("article");
                listArticle[i].appendChild(newEltTitle);
            }  
        }
        
        function addTagParagraphInArticle(){
            for(var i in products){
                const newEltPrgrph = document.createElement("p");
                Object.assign(newEltPrgrph, {
                    class : "productDescription",
                    innerText : products[i].description
                })
                var listArticle = document.getElementsByTagName("article");
                listArticle[i].appendChild(newEltPrgrph);
            }
        }    
        var url = `http://localhost:3000/images?id=${products[0]._id}`;
        var newUrl_a = new URL(url);
        var id = newUrl_a.searchParams.get("id");
        console.log(id);      
    })
    .catch(function(err){
        err = console.log("There is an error in the request !");
    })
};

getProducts();
let product = "music";
let _id = encodeURI(product);    
var url = `http://localhost:3000/images/kanap01.jpeg?id=${_id}`
var newUrl_a = new URL(url);
var id = newUrl_a.searchParams.get("id");
console.log(id);