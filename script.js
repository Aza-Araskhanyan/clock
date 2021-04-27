let hours = document.querySelector('.hour')
let minutes = document.querySelector('.minute')
let seconds = document.querySelector('.second')

function setTime() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    hours.style.transform = `translate(-50%, -100%) rotate(${hour * 30 + minute / 2}deg`;
    minutes.style.transform = `translate(-50%, -100%) rotate(${minute * 6 + second / 10}deg`;
    seconds.style.transform = `translate(-50%, -100%) rotate(${second * 6}deg`;
}
setInterval(setTime, 1000);