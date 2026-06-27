const drawButton = document.querySelector(".draw-lots")

function drawlots() {
  const startNumber = Math.ceil(document.querySelector("#start").value)
  const endNumber = Math.floor(document.querySelector("#end").value)
  const resultParagraph = document.querySelector("#result")

  function randomizeNumber() {
    let randomNumber =
      Math.floor(Math.random() * (endNumber - startNumber + 1)) + startNumber
    // let randomNumber = null
    // while (randomNumber < startNumber || randomNumber > endNumber) {
    //   randomNumber = Math.floor(Math.random() * 100)
    // }

    return randomNumber
  }
  resultParagraph.innerHTML = `<p>${randomizeNumber()}</p>`
}

drawButton.addEventListener("click", drawlots)
