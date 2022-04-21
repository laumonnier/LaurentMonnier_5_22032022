



const parentNodeSection =  document.getElementById("cart__items");

/**Allows you to add an "article" element to the Section element as a child, with its attributes. */
function addChildSection(){
    const newArticleElmt = document.createElement("article");
    Object.assign(newArticleElmt,{
        class : "cart__item",
        id : "{product._id}",
        color : "{product.colors[color]}"
    })
    parentNodeSection.appendChild(newArticleElmt);
}

/**Allows you to add a "div" element to the "article" element as a child, with its attributes. */
function addChildArticle(){
    const newDivElmtToArticle = document.createElement("div");
    Object.assign(newDivElmtToArticle,{
        class : "cart__item__img"
    })
    document.getElementsById("{product._id}").appendChild(newDivElmtToArticle);
} 

/**Allows you to add an "img" element to the "div" element as a child, with its attributes. */
function addChildDiv(){
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

/**Allows you to add a "div" element to the "article" element as a child. */
function addChild_2Article(){
    const newDiv_2ElmtToArticle = document.createElement("div");
    Object.assign(newFirstDivElmtToDiv,{
        class : "cart__item__content"
    })
    document.getElementById("{product._id}").appendChild(newDiv_2ElmtToArticle);    
}

/**Allows you to add a first "div" element to the "div" element as a child. */
function addFirstChildToDiv(){
    const newFirstDivElmtToDiv = document.createElement("div");
    Object.assign(newFirstDivElmtToDiv,{
        class : "cart__item__content__description"
    })
    var listElmt = document.getElementsByClassName("cart_item_content");
    if(listElmt.lenght != 0){
        listElmt[0].appendChild(newFirstDivElmtToDiv);
    }else{
        console.log("There is no class : 'cart_item_content' !");
    }
}

//The function retrieves a list of items obtained by their class name
/**
 * Recovering data
 * @param { String } className
 * @param { Integer } nbr
 * @param { Object } newElmt
 */
function listElmt(className, nbr, newElmt){
    var listElmt = document.getElementsByClassName(className)
    if(listElmt.lenght != 0){
        listElmt[nbr].appendChild(newElmt);
    }else{
        console.log("There is no class : " + className + " !");
    }
}

/**Add a "title" element to the second  "div" node as a child in the "section". */
function addChildTitleFirstDiv(){
    const newTitleElmtToDiv = document.createElement("h2");
    Object.assign(newTitleElmtToDiv,{
        InnerText : product.name
    })
    listElmt("cart__item__content__description", 0, newTitleElmtToDiv);
}

/**Allows to add, in the "section", a first element "p" to the second node  "div" as a child. */
function addFirstChildPgrphFirstDiv(){
    const newPrgphElmtToDiv = document.createElement("p");
    Object.assign(newPrgphElmtToDiv,{
        innerText : product.colors[color]
    })
    listElmt("cart__item__content__description", 0, newPrgphElmtToDiv);
}

/**Allows to add, in the "section", a second element "p" to the second node  "div" as a child. */
function addSecdChildPgrphFirstDiv(){
    const newPrgphElmtToDiv = document.createElement("p");
    Object.assign(newPrgphElmtToDiv,{
        innerText : product.price
    })
    listElmt("cart__item__content__description", 0, newPrgphElmtToDiv);
}

/**Allows you to add a second "div" element to the "div" element as a child. */
function addSecdChildToDiv(){
    const newSecdDivElmtToDiv = document.createElement("div");
    Object.assign(newSecdDivElmtToDiv,{
        class : "cart__item__content__settings"
    })
    listElmt("cart__item__content", 0, newSecdDivElmtToDiv);
}

