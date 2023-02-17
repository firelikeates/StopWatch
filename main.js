const kronometre = document.querySelector(".kronometre");
const start = document.querySelector(".start");
const reset = document.querySelector(".reset");
const stop1 = document.querySelector(".stop")
const tur = document.querySelector(".tur");
const ul = document.querySelector(".ul");

var into_ul = ``;
var dakika = 0;
var saniye = 0;
var saat = 0;
var sayac = 0
var myinterval;

function timer() {
    sayac++
    saniye = sayac % 60;
    dakika = dakika % 60;
    if (sayac !== 0 && saniye === 0) {
        dakika++
    } if (sayac % 3600 === 0 && sayac !== 0) {
        saat++
    }
    if (saniye < 10 && dakika < 10) {
        kronometre.innerHTML = `0${saat}:0${dakika}:0${saniye}`
    } else if (saniye < 10 && dakika >= 10) {
        kronometre.innerHTML = `0${saat}:${dakika}:0${saniye}`
    } else if (saniye >= 10 && dakika >= 10) {
        kronometre.innerHTML = `0${saat}:${dakika}:${saniye}`
    } else if (saniye >= 10 && dakika < 10) {
        kronometre.innerHTML = `0${saat}:0${dakika}:${saniye}`
    }
}


start.addEventListener("click", () => {
    myinterval = setInterval(timer, 1000)
})

stop1.addEventListener("click", () => {
    clearInterval(myinterval)
})

reset.addEventListener("click", () => {
    kronometre.innerHTML = "00:00:00"
    into_ul=""
    ul.innerHTML=""
    sayac = 0;
    saniye = 0;
    dakika = 0;
    saat = 0
    setTimeout(() => { }, 1000)    
})

tur.addEventListener("click",()=>{
    into_ul+=`<li>${kronometre.textContent}</li>`
    ul.innerHTML=into_ul
})