




// SLIDING IMAGES IN IMG SLIDER...

const slide= document.querySelector(".slider-img");
let next= document.querySelector(".next");
let previous= document.querySelector(".previous");

let n=1;
next.addEventListener("click", ()=>{
    if(n<5){
        n++;
        slide.setAttribute("src", `images/bg${n}.png`);
    }else{
        n=1;
        slide.setAttribute("src", `images/bg${n}.png`);
    }
})
previous.addEventListener("click", ()=>{
    if(n>1){
        n--;
        slide.setAttribute("src", `images/bg${n}.png`);
    }else{
        n=5;
        slide.setAttribute("src", `images/bg${n}.png`);
    }
})