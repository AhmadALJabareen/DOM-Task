// Q1 : Assume an array of different fruits is given (5 elements), 
// you have to use dom to add images for all  items of the array to the html element as (ul)
//  and show it in the html file. 
//  give it a suitable style.

let fruits = ["apple","banana","strawberry","watermelon","pineapple"];
let x = ["https://i5.walmartimages.com/seo/Fresh-Red-Delicious-Apple-Each_7320e63a-de46-4a16-9b8c-526e15219a12_3.e557c1ad9973e1f76f512b34950243a3.jpeg","https://static.wixstatic.com/media/53e8bb_a1e88e551162485eb4ff962437300872~mv2.jpeg/v1/crop/x_0,y_105,w_1024,h_919/fill/w_560,h_560,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Banana.jpeg","https://www.calgiant.com/wp-content/uploads/2021/08/berry-iso-straw-1-878x1024.png","https://cdn.britannica.com/99/143599-050-C3289491/Watermelon.jpg","https://m.media-amazon.com/images/I/71+qAJehpkL._SL1500_.jpg"]
let container = document.createElement('ul');
document.body.appendChild(container);

for(i=0 ; i<fruits.length ; i++){
    let child = document.createElement('li');
    child.textContent = fruits[i];
    
    let image = document.createElement('img');
    
    container.appendChild(child);
    container.appendChild(image);
    
    
        
    image.setAttribute("src",x[i]);
    image.style.height="100px";
    image.style.width="100px";

 }



//  Q2 : Create a function that takes two arguments, one is an array and the
// other is a number, then return the index of the given value or return -1 if
// the element cannot be found.

// function findIndex (a,b){
//     for(i=0;i<a.length;i++){
//         if(a[i] === b){
//             return i;
//         }else{
//             return -1;
//         }
//     }
    
// }

function findIndex (a,b){
    for(i=0;i<a.length;i++){
        if(a[i] === b){
            return i;
        }
        
    }
    return -1;
    
}

console.log(findIndex([1,2,3,4],2));


