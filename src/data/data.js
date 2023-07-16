const products=[
    {"id":1,"image":require("./image/image1.jpg"),"name":"Tirrell","description":"itirrell1@princeton.edu","category":"boucle"},
    {"id":2,"image":require("./image/image2.jpg"),"name":"Tirrell","description":"itirrell1@princeton.edu","category":"boucle"},
    {"id":3,"image":require("./image/image3.jpg"),"name":"Collier Poisson Perle des Mers","description":"itirrell1@princeton.edu","category":"colier"},
    {"id":4,"image":require("./image/image4.jpg"),"name":"Boucles d'oreilles Vagues Dorées","description":"itirrell1@princeton.edu","category":"Male"},
    {"id":5,"image":require("./image/image5.jpg"),"name":"gggggg","description":"itirrell1@princeton.edu","category":"Male"},
    {"id":6,"image":require("./image/image6.jpg"),"name":"Tirrell","description":"itirrell1@princeton.edu","category":"bracelet"},
    {"id":7,"image":require("./image/image7.jpg"),"name":"hhhhhhhhhhhhhhh","description":"itirrell1@princeton.edu","category":"Male"},
    {"id":8,"image":require("./image/image8.jpg"),"name":"Tirrell","description":"itirrell1@princeton.edu","category":"Male"},
    {"id":9,"image":require("./image/image9.jpg"),"name":"Tirrell","description":"itirrell1@princeton.edu","category":"Male"},
    {"id":10,"image":require("./image/image10.jpg"),"name":"Tirrell","description":"itirrell1@princeton.edu","category":"Male"},
    {"id":11,"image":require("./image/image11.jpg"),"name":"Tirrell","description":"itirrell1@princeton.edu","category":"Male"},
    {"id":12,"image":require("./image/image12.jpg"),"name":"Tirrell","description":"itirrell1@princeton.edu","category":"bague"},
    {"id":13,"image":require("./image/image13.jpg"),"name":"Tirrell","description":"itirrell1@princeton.edu","category":"Male"},
    {"id":14,"image":require("./image/image14.jpg"),"name":"Tirrell","description":"itirrell1@princeton.edu","category":"Male"},
    {"id":15,"image":require("./image/image15.jpg"),"name":"Tirrell","description":"itirrell1@princeton.edu","category":"Male"},
    {"id":16,"image":require("./image/image16.jpg"),"name":"hhhhhhhhhhhhhhh","description":"itirrell1@princeton.edu","category":"Male"},
    {"id":17,"image":require("./image/image17.jpg"),"name":"Tirrell","description":"itirrell1@princeton.edu","category":"Male"},
    {"id":18,"image":require("./image/image18.jpg"),"name":"Tirrell","description":"itirrell1@princeton.edu","category":"Male"},
    {"id":19,"image":require("./image/image19.jpg"),"name":"Tirrell","description":"itirrell1@princeton.edu","category":"Male"},
    {"id":20,"image":require("./image/image20.jpg"),"name":"Tirrell","description":"itirrell1@princeton.edu","category":"Male"},
    {"id":21,"image":require("./image/image21.jpg"),"name":"Tirrell","description":"itirrell1@princeton.edu","category":"Male"},
    {"id":22,"image":require("./image/image22.jpg"),"name":"Tirrell","description":"itirrell1@princeton.edu","category":"Male"},
    {"id":23,"image":require("./image/image23.jpg"),"name":"Tirrell","description":"itirrell1@princeton.edu","category":"Male"},
    {"id":24,"image":require("./image/image24.jpg"),"name":"Tirrell","description":"itirrell1@princeton.edu","category":"Male"},
    {"id":25,"image":require("./image/image25.jpg"),"name":"Tirrell","description":"itirrell1@princeton.edu","category":"Male"},
    {"id":26,"image":require("./image/image26.jpg"),"name":"Tirrell","description":"itirrell1@princeton.edu","category":"Male"},
    {"id":27,"image":require("./image/image27.jpg"),"name":"Tirrell","description":"itirrell1@princeton.edu","category":"Male"},
    {"id":28,"image":require("./image/image28.jpg"),"name":"Tirrell","description":"itirrell1@princeton.edu","category":"Male"},
    {"id":29,"image":require("./image/image29.jpg"),"name":"Tirrell","description":"itirrell1@princeton.edu","category":"Male"},
    {"id":30,"image":require("./image/image30.jpg"),"name":"Tirrell","description":"itirrell1@princeton.edu","category":"Male"},
    {"id":31,"image":require("./image/image31.jpg"),"name":"Tirrell","description":"itirrell1@princeton.edu","category":"Male"},
    {"id":32,"image":require("./image/image32.jpg"),"name":"Tirrell","description":"itirrell1@princeton.edu","category":"Male"},
    {"id":33,"image":require("./image/image33.jpg"),"name":"Tirrell","description":"itirrell1@princeton.edu","category":"Male"},
    {"id":34,"image":require("./image/image34.jpg"),"name":"Tirrell","description":"itirrell1@princeton.edu","category":"Male"},
    {"id":35,"image":require("./image/image35.jpg"),"name":"Tirrell","description":"itirrell1@princeton.edu","category":"Male"},
    {"id":36,"image":require("./image/image36.jpg"),"name":"Tirrell","description":"itirrell1@princeton.edu","category":"Male"},
    {"id":37,"image":require("./image/image37.jpg"),"name":"hhhhhhhhhhhhhh","description":"itirrell1@princeton.edu","category":"Male"},
    {"id":38,"image":require("./image/image38.jpg"),"name":"Tirrell","description":"itirrell1@princeton.edu","category":"Male"},
    {"id":39,"image":require("./image/image39.jpg"),"name":"Tirrell","description":"itirrell1@princeton.edu","category":"Male"},
    {"id":40,"image":require("./image/image40.jpg"),"name":"Tirrell","description":"itirrell1@princeton.edu","category":"Male"},
    {"id":41,"image":require("./image/image41.jpg"),"name":"Tirrell","description":"itirrell1@princeton.edu","category":"Male"},

]

function getProducts(page,limit){
    
    let array=[];
    for (let i=(page-1)*limit;i<(page*limit)&&products[i];i++){
        array.push(products[i]);
        }
        return array;
    
    }
    
function getLength(){
        return products.length
        }
    
export {getProducts,getLength,products};

