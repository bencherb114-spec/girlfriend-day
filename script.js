function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.classList.add("heart");

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(20+Math.random()*30)+"px";

    heart.style.animationDuration=(4+Math.random()*4)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },8000);
}

setInterval(createHeart,300);


const button=document.getElementById("startBtn");

button.addEventListener("click", function () {

    console.log(document.querySelector(".container"));
    console.log(document.querySelector(".second-page"));

    document.querySelector(".container").style.display = "none";
    document.querySelector(".second-page").style.display = "block";

});
const photos=[
"images/cover.jpg.jpeg",
"images/photo1.jpg.jpeg",
"images/photo2.jpg.jpeg",
"images/photo3.jpg.jpeg",
"images/photo4.jpg.jpeg",
"images/photo5.jpg.jpeg",
"images/photo6.jpg.jpeg",
"images/photo7.jpg.jpeg",
"images/photo8.jpg.jpeg",

];

let current=0;

const image=document.getElementById("galleryImage");

document.getElementById("nextBtn").onclick=function(){

current++;

if(current>=photos.length){

current=0;

}

image.src=photos[current];

}

document.getElementById("prevBtn").onclick=function(){

current--;

if(current<0){

current=photos.length-1;

}

image.src=photos[current];

}
document.getElementById("letterBtn").onclick=function(){

    document.querySelector(".second-page").style.display="none";

    document.querySelector(".letter-page").style.display="block";

    document.getElementById("letterText").innerHTML = "";

    i = 0;

    typeLetter();

}

const message=`Dear Bhumi ❤️,

Happy Girlfriend's Day!
Thank you for being the most beautiful part of my life.
Every smile, every memory, every little moment with you has made my life happier.
It is painfull to think that this is going to end soon,but that makes me want to cherish what little time i have with you more...
No matter where life takes us, I'll always cherish what we have.
I love you more than words can ever express.
Trying to be Yours.
Love you 3000❤️`;

let i=0;

function typeLetter(){

if(i<message.length){

document.getElementById("letterText").innerHTML+=message.charAt(i);

i++;

setTimeout(typeLetter,45);

}

}
document.getElementById("finalBtn").onclick=function(){

document.querySelector(".letter-page").style.display="none";

document.querySelector(".final-page").style.display="block";

}

document.getElementById("musicBtn").onclick=function(){

    document.getElementById("song").play();

    heartExplosion();

    confetti({
        particleCount:250,
        spread:180,
        origin:{y:0.6}
    });

   this.innerHTML="🎵 Playing...";
   this.disabled = true;
}
function heartExplosion(){

    for(let i=0;i<150;i++){

        setTimeout(createHeart,i*40);

    }

}