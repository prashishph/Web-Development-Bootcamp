let number = document.querySelectorAll(".drum").length;

let sounds = [
    "./sounds/crash.mp3",
    "./sounds/kick-bass.mp3",
    "./sounds/snare.mp3",
    "./sounds/tom-1.mp3",
    "./sounds/tom-2.mp3",
    "./sounds/tom-3.mp3",
    "./sounds/tom-4.mp3"
]

let keys = ['w', 'a', 's', 'd', 'j', 'k', 'l']

for (let i = 0; i < number; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        let audio = new Audio(sounds[i]);   
        audio.play();
        buttonAnimation(this.innerHTML);
    })
    document.addEventListener("keydown", function(event){
        index = keys.indexOf(event.key);
        let audio = new Audio(sounds[index]);
        audio.play();
        buttonAnimation(event.key);
    })
}


function buttonAnimation(currentKey) {
    document.querySelector("." + currentKey).classList.add("pressed");
    setTimeout(function() {
        document.querySelector("." + currentKey).classList.remove("pressed");
    }, 100)
}