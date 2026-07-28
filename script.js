/* ==========================================
   PROJECT 23 - SCRIPT PART 1
========================================== */

// Hide website before loading
const loadingScreen = document.getElementById("loading-screen");
const mainContent = document.getElementById("main-content");

mainContent.style.display = "none";

// Loading animation
window.addEventListener("load", () => {

    setTimeout(() => {

        loadingScreen.style.opacity = "0";

        setTimeout(() => {

            loadingScreen.style.display = "none";
            mainContent.style.display = "block";

        }, 700);

    }, 3500);

});

/* ===============================
   PASSWORD
================================ */

const unlockBtn = document.getElementById("unlockBtn");
const password = document.getElementById("password");
const error = document.getElementById("error");

unlockBtn.addEventListener("click", () => {

    if (password.value === "23") {

        error.style.color = "#7dff9d";
        error.innerHTML = "Unlocked ❤️";

        document.getElementById("gallery")
            .scrollIntoView({
                behavior: "smooth"
            });

    } else {

        error.style.color = "#ff8b8b";
        error.innerHTML = "Wrong password 💔";

    }

});

/* ===============================
   OPEN BUTTON
================================ */

document.getElementById("openBtn")
.addEventListener("click", () => {

    document.getElementById("password-page")
    .scrollIntoView({

        behavior:"smooth"

    });

});

/* ===============================
   PHOTO GALLERY
================================ */

const photos = document.querySelectorAll(".photo");

let currentPhoto = 0;

function changePhoto(){

    photos[currentPhoto]
    .classList.remove("active");

    currentPhoto++;

    if(currentPhoto >= photos.length){

        currentPhoto = 0;

    }

    photos[currentPhoto]
    .classList.add("active");

}

setInterval(changePhoto,3500);

/* ===============================
   MUSIC
================================ */

const musicBtn =
document.getElementById("musicBtn");

const song =
document.getElementById("song");

musicBtn.addEventListener("click",()=>{

if(song.paused){

song.play();

musicBtn.innerHTML="⏸ Pause Music";

}else{

song.pause();

musicBtn.innerHTML="🎵 Play Our Song";

}

});
/* ==========================================
   PART 2A
   Typing Letter + 23 Wishes
========================================== */

// -------- LOVE LETTER --------

const letter = `

My Dearest IRACANYE Ketty Sabrina ❤️,

Happy 23rd Birthday.

Today is not just another day.

Today is the day the world received someone truly beautiful.

Your smile,
your kindness,
your heart,
and everything about you
make this world brighter.

I hope this birthday brings you
peace,
joy,
good health,
success,
and countless beautiful memories.

Always remember...

You are appreciated.
You are amazing.
You are loved.

Happy Birthday ❤️

`;

let i = 0;

function typeLetter(){

    if(i < letter.length){

        document.getElementById("typingText").innerHTML +=
        letter.charAt(i);

        i++;

        setTimeout(typeLetter,40);

    }

}

window.addEventListener("load",()=>{

setTimeout(typeLetter,4500);

});


// -------- 23 WISHES --------

const wishes=[

"I wish you endless happiness ❤️",
"I wish your smile never fades.",
"I wish every dream comes true.",
"I wish you good health.",
"I wish you peace every day.",
"I wish you success.",
"I wish your heart stays happy.",
"I wish you keep shining.",
"I wish you always feel loved.",
"I wish beautiful memories follow you.",
"I wish every prayer is answered.",
"I wish every challenge makes you stronger.",
"I wish you laugh more.",
"I wish your future is bright.",
"I wish you keep believing in yourself.",
"I wish joy follows you.",
"I wish your heart stays kind.",
"I wish you never lose hope.",
"I wish your family stays blessed.",
"I wish every day becomes beautiful.",
"I wish this year changes your life.",
"I wish all your dreams come true.",
"❤️ Happy 23rd Birthday IRACANYE Ketty Sabrina ❤️"

];

const wishContainer =
document.getElementById("wishContainer");

wishes.forEach((wish,index)=>{

const card=document.createElement("div");

card.className="card";

card.innerHTML=`

<h2>Wish ${index+1}</h2>

<p>${wish}</p>

`;

wishContainer.appendChild(card);

});
/* ==========================================
PART 2B
   Hearts + Final Surprise
========================================== */

// ❤️ Floating Hearts
const heartsContainer = document.querySelector(".hearts");

function createHeart() {

    const heart = document.createElement("span");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize = (20 + Math.random() * 30) + "px";

    heart.style.animationDuration = (4 + Math.random() * 5) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);
}

setInterval(createHeart, 500);

// 🎉 Final Surprise
const surpriseBtn = document.getElementById("surpriseBtn");

surpriseBtn.addEventListener("click", () => {

    // Confetti
    for (let i = 0; i < 120; i++) {

        const confetti = document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left = Math.random() * 100 + "%";

        confetti.style.animationDelay = Math.random() + "s";

        confetti.style.background =
            `hsl(${Math.random()*360},100%,60%)`;

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.remove();

        }, 5000);

    }

    alert(
`🎉 Happy 23rd Birthday!

Dear IRACANYE Ketty Sabrina ❤️

May your heart always be filled with love,
your smile never fade,
your dreams come true,
and your life be full of happiness.

You deserve every beautiful thing in this world.

Happy Birthday! ❤️`
    );

});
function openSong() {
    window.open(
        "https://www.youtube.com/results?search_query=SZA+Nobody+Gets+Me",
        "_blank"
    );
}
