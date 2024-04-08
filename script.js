let hr=document.getElementById('hour')
let min=document.getElementById('min')
let sec=document.getElementById('sec')

function displaytime(){
    let date= new Date();
    let hh =date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();

    // 12hour=12hour=360deg
    // 360/12=30deg
    // 12hour=30deg+m/2
    // 1hour=30h

    // 60min=30deg
    // 1min=30/60=1/2
    // 1m=1/2
    // 60min=360deg
    // 1min =360/60=6deg
    // 1m=6deg
    // 60sec=360deg
    // 1s=360/60=6deg=6deg
   
    let Hrotation = 30*hh+mm/2;
    let mrotation = 6*mm;
    let srotation = 6*ss;

    hr.style.transform =`rotate(${Hrotation}deg)`;
    min.style.transform =`rotate(${mrotation}deg)`;
    sec.style.transform =`rotate(${srotation}deg)`;


}
setInterval(displaytime,1000)