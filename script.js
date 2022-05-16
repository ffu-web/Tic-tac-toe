function init() {
  const playerTitle = document.querySelector(".playerTitle");
  const rematchBtn = document.querySelector(".rematch");
  const items = document.querySelectorAll(".item");
  const gridArray = Array.from(items);
  let tracking = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let currentPlayer = "playerX";

  // looping through all the board items.
  items.forEach((item) =>
    item.addEventListener("click", (e) => {
      // Player Move
      const index = gridArray.indexOf(e.target);
      if (
        items[index].classList.contains("playerX") ||
        items[index].classList.contains("computer")
      ) {
        return;
      }

      items[index].classList.add("playerX");
      const spliceNr = tracking.indexOf(index + 1);
      // slicing out the move from the tracking list
      tracking.splice(spliceNr, 1);

      // win check for player
      if (winCheck("playerX", items)) {
        playerTitle.innerHTML = "Player X Win!! 🍻🎆🎇";
        document.body.classList.add("over");
        return;
      }

      // check for draw
      if (tracking.length === 0) {
        playerTitle.innerHTML = "It's Draw";
        document.body.classList.add("over");
        console.log("Nothing Left");
        return;
      }

      // Computer Move
      console.log("computer move");
      const random = Math.floor(Math.random() * tracking.length);
      const computerIndex = tracking[random];
      items[computerIndex - 1].classList.add("computer");

      // Splicing out the move from the tracking list
      tracking.splice(random, 1);

      // win check for the computer
      if (winCheck("computer", items)) {
        playerTitle.innerHTML = "Computer Win!! 🍻🎆🎇";
        document.body.classList.add("over");
        return;
      }
    })
  );

  // rematch reload event
  rematchBtn.addEventListener("click", () => {
    location.reload();
  });
}

// win check function
function winCheck(player, items) {
  // let allItems = items;
  function check(pos1, pos2, pos3) {
    console.log(items);
    if (
      items[pos1].classList.contains(player) &
      items[pos2].classList.contains(player) &
      items[pos3].classList.contains(player)
    ) {
      return true;
    } else {
      return false;
    }
  }

  if (check(0, 3, 6)) return true;
  else if (check(1, 4, 7)) return true;
  else if (check(2, 5, 8)) return true;
  else if (check(0, 1, 2)) return true;
  else if (check(3, 4, 5)) return true;
  else if (check(6, 7, 8)) return true;
  else if (check(0, 4, 8)) return true;
  else if (check(2, 4, 6)) return true;
}

// initializing the game
init();

const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark mode'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode'
    }
})

function setTime() {
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM'

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`

    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()

setInterval(setTime, 1000)
