let saveEl = document.getElementById("save-el")
let countEL = document.getElementById("count-el")
let count = 0

console.log(saveEl)

function increment() {
    console.log("clicked")
    count += 1
    countEL.innerText = count
}

function save(){
    let countStr = count + " - "
    saveEl.innerText += countStr
    console.log(count)
}

save()