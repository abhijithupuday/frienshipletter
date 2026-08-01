/*==================================================
        FRIENDSHIP DAY SCRAPBOOK
              SCRIPT.JS
==================================================*/

/*==========================
ELEMENTS
==========================*/

const pages = document.querySelectorAll(".page");

const nextButtons = document.querySelectorAll(".nextBtn");

const musicBtn = document.getElementById("musicBtn");

const bgMusic = document.getElementById("bgMusic");

const loader = document.getElementById("loader");

const envelope = document.querySelector(".envelope");

const balloons = document.querySelectorAll(".balloon");

const cards = document.querySelectorAll(".flip-card");

const acceptBtn = document.getElementById("acceptBtn");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightboxImg");

const closeLightbox = document.getElementById("closeLightbox");

const images = document.querySelectorAll(".polaroid img");


let currentPage = 0;

window.next = function () {

    pages[currentPage].classList.remove("active");

    currentPage++;

    pages[currentPage].classList.add("active");

}

let musicPlaying = false;


/*==========================
LOADER
==========================*/

window.addEventListener("load",()=>{

    setTimeout(()=>{

        loader.classList.add("hide");

    },1200);


    const envelope = document.querySelector(".envelope");


    if(envelope){

        envelope.addEventListener("click",()=>{

            envelope.classList.toggle("open");

        });

    }

});


/*==========================
PAGE NAVIGATION
==========================*/

function goToNextPage() {

    if (currentPage >= pages.length - 1) return;

    pages[currentPage].classList.remove("active");

    currentPage++;  

    pages[currentPage].classList.add("active");

}

nextButtons.forEach(button => {

    button.addEventListener("click", goToNextPage);

});





/*==========================
FLIP CARDS
==========================*/

cards.forEach(card=>{

    card.addEventListener("click",()=>{

        card.querySelector(".flip-inner")

        .classList.toggle("flipped");

    });

});

/*==================================================
        FLOATING HEARTS
==================================================*/

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.bottom="-40px";

    heart.style.fontSize=(18+Math.random()*18)+"px";

    heart.style.animation="floatHeart 7s linear forwards";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(()=>heart.remove(),7000);

}

setInterval(createHeart,700);


/*==================================================
        FLOWER PETALS
==================================================*/

const flowers=["🌸","🌼","🌺","🌷"];

function createPetal(){

    const petal=document.createElement("div");

    petal.className="petal";

    petal.innerHTML=

    flowers[Math.floor(Math.random()*flowers.length)];

    petal.style.left=Math.random()*100+"vw";

    petal.style.top="-40px";

    petal.style.fontSize=(18+Math.random()*16)+"px";

    petal.style.animation="fallPetal 9s linear forwards";

    document.getElementById("petals").appendChild(petal);

    setTimeout(()=>petal.remove(),9000);

}

setInterval(createPetal,900);


/*==================================================
        SPARKLES
==================================================*/

function createSparkle(){

    const sparkle=document.createElement("div");

    sparkle.className="sparkle";

    sparkle.innerHTML="✨";

    sparkle.style.left=Math.random()*100+"vw";

    sparkle.style.top=Math.random()*100+"vh";

    sparkle.style.fontSize=(12+Math.random()*18)+"px";

    sparkle.style.animation="sparkle 2.5s infinite";

    document.getElementById("sparkles")

    .appendChild(sparkle);

    setTimeout(()=>sparkle.remove(),2500);

}

setInterval(createSparkle,450);


/*==================================================
        BALLOONS
==================================================*/

balloons.forEach(balloon=>{

    balloon.addEventListener("click",()=>{

        balloon.classList.add("pop");

        launchConfetti();

        setTimeout(()=>{

            balloon.style.visibility="hidden";

        },350);

    });

});


/*==================================================
        CONFETTI
==================================================*/

function launchConfetti(){

    const colors=[

        "#ff7eb6",

        "#ffd86b",

        "#b695ff",

        "#7fdcff",

        "#8effc2"

    ];

    for(let i=0;i<120;i++){

        const piece=document.createElement("div");

        piece.className="confetti-piece";

        piece.style.position="absolute";

        piece.style.left=Math.random()*100+"vw";

        piece.style.top="-20px";

        piece.style.width="10px";

        piece.style.height="18px";

        piece.style.background=

        colors[Math.floor(Math.random()*colors.length)];

        piece.style.transform=

        `rotate(${Math.random()*360}deg)`;

        piece.style.animation=

        `fallPetal ${4+Math.random()*2}s linear forwards`;

        document.getElementById("confetti")

        .appendChild(piece);

        setTimeout(()=>piece.remove(),7000);

    }

}


/*==================================================
        PHOTO LIGHTBOX
==================================================*/

images.forEach(img=>{

    img.addEventListener("click",()=>{

        lightbox.style.display="flex";

        lightboxImg.src=img.src;

    });

});

if (closeLightbox && lightbox) {

    closeLightbox.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

    lightbox.addEventListener("click", e => {

        if (e.target === lightbox) {

            lightbox.style.display = "none";

        }

    });

}

/*==================================================
        PAGE INDICATORS
==================================================*/

const pageIndicators=document.querySelectorAll(".page-dots");

function updateIndicators(){

    pageIndicators.forEach(group=>{

        const dots=group.querySelectorAll("span");

        dots.forEach(dot=>dot.classList.remove("active"));

        if(dots[currentPage]){

            dots[currentPage].classList.add("active");

        }

    });

}

/*==================================================
        KEYBOARD NAVIGATION
==================================================*/

document.addEventListener("keydown",(e)=>{

    if(e.key==="ArrowRight"){

        if(currentPage<pages.length-1){

            pages[currentPage].classList.remove("active");

            currentPage++;

            pages[currentPage].classList.add("active");

            updateIndicators();

        }

    }

    if(e.key==="ArrowLeft"){

        if(currentPage>0){

            pages[currentPage].classList.remove("active");

            currentPage--;

            pages[currentPage].classList.add("active");

            updateIndicators();

        }

    }

});

/*==================================================
        TOUCH SWIPE
==================================================*/

let startX=0;

document.addEventListener("touchstart",(e)=>{

    startX=e.touches[0].clientX;

});

document.addEventListener("touchend",(e)=>{

    const endX=e.changedTouches[0].clientX;

    const diff=endX-startX;

    if(Math.abs(diff)<60) return;

    if(diff<0){

        if(currentPage<pages.length-1){

            pages[currentPage].classList.remove("active");

            currentPage++;

            pages[currentPage].classList.add("active");

            updateIndicators();

        }

    }else{

        if(currentPage>0){

            pages[currentPage].classList.remove("active");

            currentPage--;

            pages[currentPage].classList.add("active");

            updateIndicators();

        }

    }

});

/*==================================================
        FINAL CELEBRATION
==================================================*/

const finalPage=document.getElementById("page8");

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            launchConfetti();

        }

    });

},{threshold:.7});

if(finalPage){

    observer.observe(finalPage);

}

/*==================================================
        BUTTON NAVIGATION UPDATE
==================================================*/

nextButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        updateIndicators();

    });

});

/*==================================================
        INITIALIZE
==================================================*/

updateIndicators();

console.log("💖 Friendship Day Scrapbook Loaded Successfully!");

/* =========================
   Flip Cards
========================= */

const flipCards = document.querySelectorAll(".flip-card");

flipCards.forEach(card => {

    card.addEventListener("click", () => {

        card.classList.toggle("flipped");

    });

});

/* =====================================
      PAGE 5 - POP THE BALLOONS
===================================== */

const balloonCards = document.querySelectorAll(".balloon-card");
const balloonNext = document.getElementById("balloonNext");

let poppedCount = 0;

balloonCards.forEach(card => {

    const balloon = card.querySelector(".balloon");

    balloon.addEventListener("click", () => {

        if(card.classList.contains("popped")) return;

        card.classList.add("popped");

        poppedCount++;

        /* Small burst */
        for(let i=0;i<12;i++){

            const piece=document.createElement("span");

            piece.className="confetti-piece";

            piece.style.left=(40+Math.random()*30)+"px";

            piece.style.top=(40+Math.random()*30)+"px";

            piece.style.background=
                ["#ff6aa8","#ffd85b","#b896ff","#7fe6ff"][Math.floor(Math.random()*4)];

            card.appendChild(piece);

            setTimeout(()=>piece.remove(),700);

        }

        if(poppedCount===3){

            balloonNext.style.display="inline-flex";

        }

    });

});

/* ==========================================
        SURPRISE BALLOONS
========================================== */

const surpriseWrappers = document.querySelectorAll(".surprise-wrapper");
const surpriseNext = document.getElementById("surpriseNext");

let surpriseCount = 0;

surpriseWrappers.forEach(wrapper => {

    const balloon = wrapper.querySelector(".surprise-balloon");

    balloon.addEventListener("click", () => {

        if(wrapper.classList.contains("open")) return;

        wrapper.classList.add("open");

        /* Tiny pop particles */

        for(let i=0;i<18;i++){

            const p=document.createElement("span");

            p.className="pop-particle";

            p.style.left="50%";

            p.style.top="70px";

            p.style.setProperty("--dx",(Math.random()*120-60)+"px");

            p.style.setProperty("--dy",(Math.random()*120-60)+"px");

            p.style.background=
            ["#ff6fae","#ffd64d","#b68dff","#7fe8ff"][Math.floor(Math.random()*4)];

            wrapper.appendChild(p);

            setTimeout(()=>p.remove(),550);

        }

        surpriseCount++;

        if(surpriseCount===3){

            surpriseNext.style.display="inline-flex";

        }

    });

});

console.log("Wrappers found:", surpriseWrappers.length);

document.addEventListener("DOMContentLoaded", function(){

    const acceptBtn = document.getElementById("acceptBtn");

    if(!acceptBtn) return;

    let accepted = false;

    acceptBtn.addEventListener("click", function(){

        if(!accepted){

            acceptBtn.innerHTML = "🤍 Forever Friends 🤍";

            accepted = true;

        }
        else{

            goToNextPage();

        }

    });

});

document.addEventListener("click", () => {

    if (bgMusic) {

        bgMusic.play();

    }

}, { once: true });