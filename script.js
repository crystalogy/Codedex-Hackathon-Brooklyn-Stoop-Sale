// document.addEventListener("DOMContentLoaded", () => {
//     const envelope = document.getElementById("envelope");
//     const content = document.getElementById("content");
//
//     envelope.addEventListener("click", () => {
//         envelope.style.display = "none";
//         content.style.display = "block";
//     });
// });
//
//
//
//






// function openUp() {
//     const $opentop= document.querySelector('#opentop');
//     const $top= document.querySelector('#top');
//     const $front= document.querySelector('#front');
//     const $back= document.querySelector('#back');
//     const $letter= document.querySelector('#letter');
//     const $button= document.querySelector('button');
//
//     $opentop.beginElement();
//     $top.style.zIndex = 2;
//
//     $top.classList.add('animate');
//     $front.classList.add('animate');
//     $back.classList.add('animate');
//     $button.classList.add('animate');
//     $letter.classList.add('animate');
//
// }


function openUp() {
    const $opentop = document.querySelector('#opentop');
    const $top = document.querySelector('#top');
    const $front = document.querySelector('#front');
    const $back = document.querySelector('#back');
    const $letter = document.querySelector('#letter');
    const $button = document.querySelector('button');

    $opentop.beginElement(); // Start the envelope opening animation

    $top.style.zIndex = 1;
    $front.style.zIndex = 1;
    $back.style.zIndex = 1;

    $top.classList.add('animate');
    $front.classList.add('animate');
    $back.classList.add('animate');
    $button.classList.add('animate');

    setTimeout(() => {
        $letter.classList.add('show-letter'); // This line adds the class to make the letter visible
    }, 1000); // Adjust this duration to match the envelope animation
}


// script.js
// window.onload = function() {
//     const envelope = document.getElementById('envelope');
//     envelope.classList.add('floating');
// };


// Select the boombox element
const boombox = document.querySelector('.box'); // Replace '.boombox' with the actual class or ID of your boombox element

// Create an audio element
const audio = new Audio('golden-era-185520.mp3'); // Replace 'path/to/your/audio.mp3' with the actual path to your MP3 file

// Function to toggle play/pause
function togglePlayPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

// Add event listener to the boombox
boombox.addEventListener('click', togglePlayPause);


