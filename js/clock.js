const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();

    const hours = new String(date.getHours()).padStart(2, "0");
    const minutes = new String(date.getMinutes()).padStart(2, "0");
    const seconds = new String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);        // 주기적으로 실행할 것들을 지정
