// Functionize Minecraft Fishing Start Code

// HTML Variables
let resulting = (document.getElementById("result-img").src = "Raw-cod.png");
let numCodSpan = document.getElementById("num-cod");
let numSalmonSpan = document.getElementById("num-salmon");
let numTropicalSpan = document.getElementById("num-top");
let numPufferSpan = document.getElementById("num-puffer");

// Fish Count Variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);

function fishBtnClicked() {
  // Determine Selected Character
  let character = document.getElementById("fish-btn").addEventListener("click", fishBtnClicked)

  function fishbtnClicked() {
    // Determine Selected Character
    let character = document.getElementById("character-select").value

    if (character === "steve") {
      // fish with Steve
    } else if (character === "alex") {
      // Fish with alex
    }
  }
}



{
//   // Steve Fish Simulator
//   let randNum = Math.random();
//   console.log(randNum);
//   if (randNum < 0.1) {
//     resultImg.src = "img/Raw-cod.png";
//     numCod++;
//     numCodSpan.innerHTML = numCod;
//   } else if (randNum < 0.9) {
//     resultImg.src = "img/Raw-Salmon.png";
//     numSalmon++;
//     numSalmonSpan.innerHTML = numSalmon;
//   } else if (randNum < 0.95) {
//     resultImg.src = "img/Tropical-Fish.png";
//     numTropical++;
//     numTropicalSpan.innerHTML = numTropical;
//   } else {
//     resultImg.src = "Pufferfish.png";
//     numPuffer++;
//     numPufferSpan.innerHTML = numPuffer;
//   }
// }
