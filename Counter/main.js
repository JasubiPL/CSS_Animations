const counter = document.querySelector(".counter")
const number1 = document.querySelector(".number_1")
const number2 = document.querySelector(".number_2")
const number3 = document.querySelector(".number_3")
const number4 = document.querySelector(".number_4")
const number5 = document.querySelector(".number_5")
const number6 = document.querySelector(".number_6")

const getNumber = 1836

function counterAnimation(){
  let InitialNumber = 0

  setTimeout(() =>{
    counter.innerText = getNumber
    clearInterval(myInterval)
  },1000)

  const myInterval = setInterval(() =>{
    if(InitialNumber >= 6){
      InitialNumber = 0
    }
    InitialNumber++
    number1.innerText = InitialNumber + 1
    number2.innerText = InitialNumber + 2
    number3.innerText =InitialNumber + 3
    number4.innerText = InitialNumber +2
    number5.innerText =InitialNumber +1
    number6.innerText = InitialNumber+ 2
  },30)
}

counterAnimation()
