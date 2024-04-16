let countEL = document.getElementById("count-el")

console.log(countEL)

let count = 0

function increment() {
    console.log("clicked")
    count = count + 1
    countEL.innerText = count
}
