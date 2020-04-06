let random1=Math.round(Math.random()*6);
let random2=Math.round(Math.random()*6);
if(random1==0){
    random1++;
}
if(random2==0){
    random2++;
}

let img1=document.querySelector("#img1").setAttribute("src",`images/dice${random1}.png`);
let img2=document.querySelector("#img2").setAttribute("src",`images/dice${random2}.png`);

if(random1>random2){
    document.querySelector("#res").innerHTML="🚩 Player 1 Win";
   
}
else
if(random1<random2){
    document.querySelector("#res").innerHTML="Player 2 Win 🚩";
   
}
else{
    document.querySelector("#res").innerHTML="Draw!";
}