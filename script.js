let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');



function upDateClock(){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let secund = now.getSeconds();

    digitalElement.innerHTML = `${fixTime(hour)}:${fixTime(minute)}:${fixTime(secund)}`;

    let sDeg = ((360 / 60) * secund) - 90;
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360 / 12) * hour) - 90;

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;

};

function fixTime(time){
   return time<10 ? `0${time}` : time;
}
setInterval(upDateClock, 1000);
upDateClock();