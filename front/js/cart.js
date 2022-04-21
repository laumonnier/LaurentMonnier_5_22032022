



const parentNodeSection =  document.getElementById("cart__items");

/**Allows you to add an "article" element to the Section element as a child, with its attributes. */
function addChildCartSection(){
    const newArticleElmt = document.createElement("article");
    Object.assign(newArticleElmt,{
        class : "cart__item",
        id : "{product._id}",
        color : "{product.colors[color]}"
    })
    parentNodeSection.appendChild(newArticleElmt);
}

/**Allows you to add a "div" element to the "article" element as a child, with its attributes. */
function addChildCartArticle(){
    const newDivElmtToArticle = document.createElement("div");
    Object.assign(newDivElmtToArticle,{
        class : "cart__item__img"
    })
    document.getElementsById("{product._id}").appendChild(newDivElmtToArticle);
} 

/**Allows you to add an "img" element to the "div" element as a child, with its attributes. */
function addChildCartDiv(){
    const newImgElmtToDiv = document.createElement("img");
    Object.assign(newImgElmtToDiv,{
        src : product.imageUrl,
        alt : product.altTxt
    })
    const listElmt = document.getElementsByClassName("cart__item__img");
    if(listElmt.length != 0){
        listElmt[0].appendChild(newImgElmtToDiv);
    }else{
        console.log("There is no class : 'cart__item__img' !")
    }
}


