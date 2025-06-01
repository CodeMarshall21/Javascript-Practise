function updateClock(){
    const now = new Date();
    let hour = now.getHours().toString().padStart(2, 0);

    const meridium = hour < 12 ? "AM" : "PM"
    hour = hour % 12 || 12
    hour = hour.toString().padStart(2, 0);

    const min = now.getMinutes().toString().padStart(2, 0);
    const sec = now.getSeconds().toString().padStart(2, 0);
    const time = `${hour}:${min}:${sec}  ${meridium}`;
    document.getElementById("time").textContent = time;

    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];

    const date = days[now.getDate()];
    const month = monthNames[now.getMonth()];
    
    const datestring = `${date}  ${month} - ${now.getDate()} - ${now.getFullYear()}`;

    document.getElementById("date").textContent = datestring;
    
}

updateClock();
setInterval(updateClock,1000);
