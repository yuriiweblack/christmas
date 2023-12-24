const day = document.getElementById("day");
const hours = document.getElementById("hours");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

const currentYear = new Date().getFullYear();
console.log(currentYear);

const newYear = new Date(`1 Jan ${currentYear + 1} 00:00:00`);
console.log(newYear)

function counterdownTimer() {
    const todayDate = Date.now();
    console.log(todayDate)
    const gap = newYear - todayDate;
    console.log(gap)

    const d = Math.floor(gap/1000/60/60/24);
    const h = Math.floor((gap/1000/60/60) %24);
    const m = Math.floor((gap/1000/60) %60);
    const s = Math.floor((gap/1000) %60);

    // console.log(d, h, m, s)
    day.innerHTML = d < 10 ? "0" + d : d;
    hours.innerHTML = h < 10 ? "0" + h : h;
    min.innerHTML = m < 10 ? "0" + m : m;
    sec.innerHTML = s < 10 ? "0" + s : s;

    const items = [day, hours,min,sec]
    console.log(sec.innerHTML)

    items.map(item=>{
        item.style.color = (sec.innerHTML=='00' ? "red":null);
        
    })


} setInterval(counterdownTimer, 1000)

counterdownTimer();