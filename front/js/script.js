const api_url = 'http://localhost:3000/api/products'
/** The 'getProduct()' function allows you to get the API products on the local server port 3000!
    Dynamically retransmit them on the index.html.*/ 
async function getProducts() {
    fetch(api_url)
    .then(function(res){
        if(res.ok) {
            return res.json();
        }
    })
    /** After a first pass in the ".then" method to check if the result of the request is "OK" or "NO". Another 'promise' is sent back to the next ".then" or ". catch" direction if there is an error. */
    // Parameters of the data sent by the API:
    /**
     * Recovering data
     * @param { Object[] } data
     * @param { String } data[].colors[]
     * @param { String } data[]._id
     * @param { String } data[].name
     * @param { Integer } data[].price
     * @param { url } data[].imageUrl
     * @param { String } data[].description
     * @param { String } data[].altTxt
     */
    .then(function(data){
        const products = data;
        const parentNodeSection = document.getElementById('items');
        addChildToSection()
        addChildToTag_a()
        addTagImgToArticle()
        addTagTitleToArticle()
        addTagParagraphToArticle()
        
        /** Function 'addChildToSection()' to create a tag 'a' with its attributes for all API products.
         * Using the 'URLSearchParams' concept to send the desired product to the 'product.htmls' page */
        function addChildToSection(){
            for(var product in products){
                var newChildOfSection = document.createElement("a");
                var link_initial = "./product.html?";
                const newUrlLink = new URLSearchParams();
                newUrlLink.set("id",`${products[product]._id}`);
                const globalLink = `${link_initial}${newUrlLink}`
                console.log(globalLink.toString)
                Object.assign(newChildOfSection, {
                    href : globalLink
                })            
                parentNodeSection.appendChild(newChildOfSection);
            }
        }
        
        /**Function 'addChildToTag_a()' to create a tag 'article', child of link 'a' for all API products. Especially to the querySelectorAll() method. */
        function addChildToTag_a(){
            const childOfSection = document.querySelectorAll("#items > a")
            childOfSection.forEach((a) => {
                const newEltArticle = document.createElement("article");
                a.appendChild(newEltArticle);   
            })    
        }
        
        /**Function 'addTagImgToArticle()' to create a tag 'img', with its attributes, child of the tag 'article' for all products of the API. Especially to the getElementsByTagName() method. */
        function addTagImgToArticle(){
            for(var product in products){
                const newEltImg = document.createElement("img");
                Object.assign(newEltImg, {
                    src : products[product].imageUrl,
                    alt : products[product].altText
                });
                var listArticle = document.getElementsByTagName("article");
                listArticle[product].appendChild(newEltImg);
                
            } 
        }
        
        /**Function 'addTagTitleToArticle()' to create a tag 'h3', with its attributes, child of the tag 'article' for all products of the API. Especially the getElementsByTagName() method. */
        function addTagTitleToArticle(){
            for(var product in products){
                const newEltTitle = document.createElement("h3");
                Object.assign(newEltTitle, {
                    class : "productName",
                    innerText : products[product].name
                })
                var listArticle = document.getElementsByTagName("article");
                listArticle[product].appendChild(newEltTitle);
            }  
        }

        /**Function 'addTagParagraphToArticle()' to create a tag 'p', with its attributes, child of the tag 'article' for all products of the API. Especially the getElementsByTagName() method. */
        function addTagParagraphToArticle(){
            for(var product in products){
                const newEltPrgrph = document.createElement("p");
                Object.assign(newEltPrgrph, {
                    class : "productDescription",
                    innerText : products[product].description
                })
                var listArticle = document.getElementsByTagName("article");
                listArticle[product].appendChild(newEltPrgrph);
            }
        }    
        var url = `http://localhost:3000/images?id=${products[0]._id}`;
        var newUrl_a = new URL(url);
        var id = newUrl_a.searchParams.get("id");
        console.log(id);
        console.log(products[1]);    
    })
    /**In case of error of the request, it is caught to make us understand that there was an error in the request. */
    .catch(function(err){
        err = console.log("There is an error in the request !");
    })
};

getProducts();
