let New=document.querySelector("#new");
let boxes = document.querySelectorAll(".button");
let winarr=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
let turnX = true;
let winx=document.querySelector("#winx");
let winy=document.querySelector("#winy");
let res=document.querySelector("#reset");


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnX===true){
      

            box.innerText="X";
                  for(win of winarr){
    if(boxes[win[0]].innerText!=""  &&boxes[win[1]].innerText!=""&&boxes[win[2]].innerText!=""){
        if(boxes[win[0]].innerText===boxes[win[1]].innerText &&boxes[win[1]].innerText===boxes[win[2]].innerText){
            console.log(boxes[win[0]].innerText)
            winx.classList.remove("hide");
            boxes.forEach(box => {
    box.disabled = true;
});
        }
    }
}
            turnX=false;
            
        }else{
        
            box.innerText="O";
                for(win of winarr){
    if(boxes[win[0]].innerText!=""  &&boxes[win[1]].innerText!=""&&boxes[win[2]].innerText!=""){
        if(boxes[win[0]].innerText===boxes[win[1]].innerText &&boxes[win[1]].innerText===boxes[win[2]].innerText){
            console.log(boxes[win[0]].innerText);
            winy.classList.remove("hide");
           boxes.forEach(box => {
    box.disabled = true;
});
        }
    }
}
            turnX=true;
        }
        box.disabled=true;
    })

});

New.addEventListener("click",()=>{
     boxes.forEach(box => {
    box.innerText = "";
}); boxes.forEach(box => {
    box.disabled = false;
});
    winx.classList.add("hide");
    winy.classList.add("hide");
    turnX=true;
});
res.addEventListener("click",()=>{
     boxes.forEach(box => {
    box.innerText = "";
}); boxes.forEach(box => {
    box.disabled = false;
});
    winx.classList.add("hide");
    winy.classList.add("hide");
    turnX=true;
})