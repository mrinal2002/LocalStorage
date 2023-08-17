var item={
    title:"TV",
    price:300,
    category:'Electron'
};
localStorage.setItem('ecomm',JSON.stringify(item));
var display={};
if(localStorage.getItem('ecomm')){
    display=JSON.parse(localStorage.getItem('ecomm'));
}

console.log(display.title);
console.log(display.price);
console.log(display.category);