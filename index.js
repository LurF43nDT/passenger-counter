let saveEl = document.getElementById("save-el")
let countEL = document.getElementById("count-el")
let count = 0



function increment() {
    console.log("clicked")
    count += 1
    countEL.textContent = count
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEL.textContent = 0

}

save()