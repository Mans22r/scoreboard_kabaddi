
let points = 0
let points1 = 0
let count = document.getElementById("count1")
let counter1 = document.getElementById("count2")

function one() {
  points += 1
  count.textContent = points

}

function two() {
  points += 2
  count.textContent = points
}

function three() {
  points += 3
  count.textContent = points
}

function minus() {
  points -= 1
  count.textContent = points
}

function one1() {
  points1 += 1
  counter1.textContent = points1

}

function two2() {
  points1 += 2
  counter1.textContent = points1
}

function three3() {
  points1 += 3
  counter1.textContent = points1
}

function minus1() {
  points1 -= 1
  counter1.textContent = points1
}

function game() {
  count.textContent = 0
  counter1.textContent = 0
  points = 0
  points1 = 0
}
