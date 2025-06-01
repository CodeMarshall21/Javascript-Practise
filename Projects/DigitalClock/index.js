function updateClock(){
    const now = new Date();
    let hour = now.getHours().toString().padStart(2, 0);

    const meridium = hour < 12 ? "AM" : "PM"
    hour = hour % 12 || 12
    hour = hour.toString().padStart(2, 0);

    const min = now.getMinutes().toString().padStart(2, 0);
    const sec = now.getSeconds().toString().padStart(2, 0);
    
    const time = `${hour}:${min}:${sec}  ${meridium}`;

    document.getElementById("clock").textContent = time;
}

updateClock();
setInterval(updateClock,1000);
