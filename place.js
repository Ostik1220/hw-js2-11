const firstTimer = document.querySelector(".hour-timer")
const secondTimer = document.querySelector(".second-timer")
const activateButton = document.querySelector("#start")
let minuts = 60;
let seconds = 0;
let secondsTwo = 30;
//1
//перше завдання працює я не перевіряв на 1 годину але я поставив менші числа і все спрацьовувало
const firstTask = setInterval(() => {
seconds -= 1
if(seconds === -1){
    seconds = 60
    minuts -= 1
}
 firstTimer.innerHTML = `${minuts}:${seconds}`
 if(seconds < 10){
    firstTimer.innerHTML = `${minuts}:0${seconds}`
}
if(minuts === 30 && seconds === 0){
    alert("пройшла половина часу")
}
if(minuts === 0 && seconds === 0){
    clearInterval(firstTask)
}
}, 1000)

//2

activateButton.addEventListener("click", (e) => {
    e.preventDefault()
   activateButton.style.backgroundColor = "grey"
   activateButton.style.transform = "scale(0.9)"
const secondTask = setInterval(() => {
    secondsTwo -= 1
    secondTimer.innerHTML = secondsTwo
    if(secondsTwo === 10){
        secondTimer.style.color = "red"
    }
    if(secondsTwo === 0){
        clearInterval(secondTask)
           activateButton.style.backgroundColor = "white"
   activateButton.style.transform = "scale(1)"
   secondTimer.innerHTML = "30"
   secondTimer.style.color = "black"
    }
}, 1000)
})