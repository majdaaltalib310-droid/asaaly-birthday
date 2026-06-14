alert("SCRIPT LOADED");
let currentScene = 0;

const scenes = document.querySelectorAll(".scene");
const audio = document.getElementById("bgMusic");

if(audio){
audio.volume = 0.25;
}

document.addEventListener("DOMContentLoaded",()=>{

const allScenes =
document.querySelectorAll(".scene");

allScenes.forEach((scene,index)=>{

    if(index === 0) return;

    const backBtn =
    document.createElement("button");

    backBtn.innerHTML = "← Back";

    backBtn.onclick = previousScene;

    const firstButton =
    scene.querySelector("button");

    if(firstButton){

        scene.insertBefore(
            backBtn,
            firstButton
        );

    }

});

});

function previousScene(){

if(currentScene === 0) return;

scenes[currentScene].classList.remove("active");

currentScene--;

scenes[currentScene].classList.add("active");

}

function nextScene(){

scenes[currentScene].classList.remove("active");

currentScene++;

if(currentScene >= scenes.length){
    currentScene = scenes.length - 1;
}

scenes[currentScene].classList.add("active");

if(currentScene === scenes.length - 1){
    generateCards();
}

}

const reasons = [

"Your smile. It fixes bad days faster than it should.",
"You're my best friend. Even when you're being annoying.",
"You make ordinary days feel important.",
"You're ridiculously pretty. It's honestly getting out of hand.",
"You support me when I don't even know I need it.",
"You somehow make me want to be better.",
"You make me laugh and drive me insane in the same conversation.",
"You make every place feel like home.",
"Your voice calms me down.",
"You're beautiful even when you don't realize it.",
"The way you look into my eyes. Sometimes I genuinely forget what I was about to say.",
"Because you call me Majoody. Nobody else gets away with that.",
"How positive you are. You make difficult days feel a little less difficult.",
"How safe I feel in your arms.",
"The way you show me off.",
"How cute you look when you're mad.",
"How obsessed you are with your hair.",
"The way you drink water.",
"Your nose. Seriously. It's perfect.",
"The way your nose-breath smells.",
"Your thighs. I'm choosing not to elaborate.",
"Because you're you. That's it. That's the reason. ❤️"

];

let cardsGenerated = false;

function generateCards(){

if(cardsGenerated) return;

cardsGenerated = true;

const container =
document.getElementById("cards-container");

reasons.forEach((reason,index)=>{

    const card =
    document.createElement("div");

    card.classList.add("card");

    if(index === 21){
        card.classList.add("special-card");
    }

    card.innerHTML =
    `<strong>Reason #${index+1}</strong><br><br>Click to reveal`;

    card.addEventListener("click",()=>{

        if(card.classList.contains("revealed"))
            return;

        card.classList.add("revealed");

        if(index === 21){

            card.innerHTML = `

            <h2>Reason #22</h2>

            <br>

            Because you're you.

            <br><br>

            That's it.

            <br><br>

            That's the reason.

            <br><br>

            Happy Birthday Asaaly ❤️

            <br><br>

            <button onclick="showSecretEnding()">

                🎁 One Last Thing →

            </button>

            `;

        }else{

            card.innerHTML = reason;

        }

    });

    container.appendChild(card);

});
}

function startMusicAndContinue(){

if(audio){
    audio.play();
}

document.getElementById("musicControls")
.style.display = "flex";

nextScene();

}

function toggleMusic(){

if(!audio) return;

if(audio.paused){

    audio.play();

}else{

    audio.pause();

}

}

function volumeUp(){

if(!audio) return;

audio.volume =
Math.min(audio.volume + 0.1,1);

}

function volumeDown(){

if(!audio) return;

audio.volume =
Math.max(audio.volume - 0.1,0);

}

function showSecretEnding(){

    document.getElementById("scene-container").innerHTML = 

    <section class="scene active photo-scene">

        <img src="photos/IMG_coming_home_to_this.jpg">

        <h2>Psst... One Last Thing</h2>

        <p>

            Can't wait for you to have to come home to this every day.

            <br><br>

            You've been warned.

            <br><br>

            Happy 22nd Birthday,

            <br><br>

            my prettiest girl in the world.

            <br><br>

            Love,

            <br><br>

            Majd ❤️

        </p>

    </section>

    `;

}
