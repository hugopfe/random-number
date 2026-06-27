const drawButton = document.querySelector(".draw-lots")

function randomizeNumber() {
  const minNumber = Math.ceil(document.querySelector("#min").value)
  const maxNumber = Math.floor(document.querySelector("#max").value)
  const resultParagraph = document.querySelector("#result")

  if (minNumber >= maxNumber) {
    alert("O valor máximo deve ser MAIOR que o valor mínimo!")
  } else {
    let randomNumber =
      Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber
    // let randomNumber = null
    // while (randomNumber < minNumber || randomNumber > maxNumber) {
    //   randomNumber = Math.floor(Math.random() * 100)
    // }
    resultParagraph.innerHTML = `<p>${randomNumber}</p>`
  }

}

drawButton.addEventListener("click", randomizeNumber)
