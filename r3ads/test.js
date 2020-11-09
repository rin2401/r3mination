console.log("Hello popup")

console.log(localStorage)
if(localStorage.suggest=="true") {
    $("#suggest").prop('checked', true)
}
if(localStorage.activity=="true") {
    $("#activity").prop('checked', true)
}
if(localStorage.share=="true") {
    $("#share").prop('checked', true)
}
if(localStorage.black=="true") {
    $("#black").prop('checked', true)
}
if(localStorage.sponsored=="true") {
    $("#sponsored").prop('checked', true)
}


$("#suggest").on("click", function() {
    console.log("suggest", this.checked)
    localStorage.suggest = this.checked
})
$("#activity").on("click", function() {
    console.log("activity", this.checked)
    localStorage.activity = this.checked
})
$("#share").on("click", function() {
    console.log("share", this.checked)
    localStorage.share = this.checked
})
$("#black").on("click", function() {
    console.log("black", this.checked)
    localStorage.black = this.checked
})
$("#sponsored").on("click", function() {
    console.log("sponsored", this.checked)
    localStorage.sponsored = this.checked
})



