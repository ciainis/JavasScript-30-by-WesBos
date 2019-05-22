const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function clock() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDeg = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDeg}deg)`;

    const minutes = now.getMinutes();
    const minutesDeg = ((minutes / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minutesDeg}deg)`;

    const hours = now.getHours();
    const hoursDeg = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `translate(67%) rotate(${hoursDeg}deg)`;
}

setInterval(clock, 1000);
clock();
