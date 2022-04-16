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
                var newUrl = `http://localhost:3000/api/products?id=0`;
                var url = new URL(newUrl);
                var search_id = new URLSearchParams(url.search);
                if(search_id.has('id')){
                    var id = url.searchParams.get(id);
                }
                Object.assign(newChildOfSection, {
                    href : `http://localhost:3000/api/products?id=${products[0]._id}`,
                    id : id
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
        console.log(products);     
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

