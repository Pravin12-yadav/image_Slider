let scrollContainer=document.querySelector(".gallery");
let back=document.querySelector("#back");
let next=document.querySelector("#next");

// scrollContainer.addEventListener("wheel",(evt)=>{
//     evt.preventDefault();
//     scrollContainer.scrollLeft+=evt.deltaY;
// })

next.addEventListener("click",()=>{
    scrollContainer.scrollLeft+=900;
    console.log("click");
})
back.addEventListener("click",()=>{
    scrollContainer.scrollLeft-=900;
})