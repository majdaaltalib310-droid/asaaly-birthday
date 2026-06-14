let currentScene = 0;

const scenes = document.querySelectorAll(".scene");

const audio =
document.getElementById("bgMusic");

audio.volume = 0.25;
function previousScene() {

    if(currentScene === 0) return;

    scenes[currentScene].classList.remove("active");

    currentScene--;

    scenes[currentScene].classList.add("active");

}
function nextScene() {

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

"How safe I feel in your arms. Which is weird because I'm supposed to be the protective one.",

"The way you show me off. You have no idea how much that means to me.",

"How cute you look when you're mad. I'm sorry. I know that's not the reaction you're looking for.",

"How obsessed you are with your hair. And somehow it still takes me by surprise every time.",

"The way you drink water. I can't explain this one. Just trust me.",

"Your nose. Seriously. It's so perfect it should probably be studied by science.",

"The way your nose-breath smells. This card is proof that love makes people weird.",

"Your thighs. I'm choosing not to elaborate for legal reasons.",

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

            card.classList.add("revealed");

            card.innerHTML = reason;

        if(index === 21){

    card.innerHTML = `

    <h3>Reason #22</h3>

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

        One Last Thing →

    </button>

    `;

}

        });

        container.appendChild(card);

    });

}
function startMusicAndContinue(){

    audio.play();

    document.getElementById("musicControls")
    .style.display = "flex";

    nextScene();

}

function toggleMusic(){

    if(audio.paused){

        audio.play();

    }else{

        audio.pause();

    }

}

function volumeUp(){

    audio.volume =
    Math.min(audio.volume + 0.1,1);

}

function volumeDown(){

    audio.volume =
    Math.max(audio.volume - 0.1,0);

}
function showSecretEnding(){
function showSecretEnding(){

    document.body.innerHTML = `

    <section class="scene active photo-scene">

        <img src="photos/IMG_coming_home_to_this.jpg">

        <h2>Psst... One Last Thing</h2>

        <p>

            Can't wait for you to have to come home to this every day.

            <br><br>

            You've been warned.

            <br><br>

            Love,

            <br><br>

            Majoody ❤️

            <br><br>

            End of story.

            <br><br>

            For now.

        </p>

    </section>

    `;

}
