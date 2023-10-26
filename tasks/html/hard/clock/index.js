function setRotation(element, rotationRatio) {
    const rotation = rotationRatio * 360;
    element.style.transform = `rotate(${rotation}deg)`;
}

function setClock() {
    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');

    const now = new Date();
    const hours = now.getHours() % 12; // Ensure that the hour hand doesn't exceed 360 degrees
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourRotation = (360 / 12) * hours + (360 / 12) * (minutes / 60);
    const minuteRotation = (360 / 60) * minutes + (360 / 60) * (seconds / 60);
    const secondRotation = (360 / 60) * seconds;

    setRotation(hourHand, hourRotation / 360);
    setRotation(minuteHand, minuteRotation / 360);
    setRotation(secondHand, secondRotation / 360);
}

setClock(); // Set the initial clock position
setInterval(setClock, 1000); // Update the clock every second
