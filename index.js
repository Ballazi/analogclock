setInterval(()=>{
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let hour = document.querySelector('.main-h');
    let min = document.querySelector('.main-m');
    let sec = document.querySelector('.main-s');

    let val1 = ((30*h)+(0.5*m)+((1/120)*s));
    let val2 = ((6*m)+(s/10));
    let val3 = s*6;

    hour.style.transform = `rotate(${val1}deg)`;
    min.style.transform = `rotate(${val2}deg)`;
    sec.style.transform = `rotate(${val3}deg)`;
},1000);

