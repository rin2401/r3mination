console.log("Hello popup")

chrome.storage.sync.get(["sponsored", "suggest", "activity", "share", "black", "tab"], function(settings) {
    console.log("Chrome storage", settings)

    if(settings.suggest) {
    $("#suggest").prop('checked', true)
    }
    if(settings.activity) {
        $("#activity").prop('checked', true)
    }
    if(settings.share) {
        $("#share").prop('checked', true)
    }
    if(settings.black) {
        $("#black").prop('checked', true)
    }
    if(settings.sponsored) {
        $("#sponsored").prop('checked', true)
    }
    if(settings.tab) {
        $("#tab").prop('checked', true)
    }

});


$("#suggest").on("click", function() {
    console.log("suggest", this.checked)
    chrome.storage.sync.set({"suggest": this.checked})
})

$("#activity").on("click", function() {
    console.log("activity", this.checked)
    chrome.storage.sync.set({"activity": this.checked})
})
$("#share").on("click", function() {
    console.log("share", this.checked)
    chrome.storage.sync.set({"share": this.checked})
})
$("#black").on("click", function() {
    console.log("black", this.checked)
    chrome.storage.sync.set({"black": this.checked})
})
$("#sponsored").on("click", function() {
    console.log("sponsored", this.checked)
    chrome.storage.sync.set({"sponsored": this.checked})
})

$("#tab").on("click", function() {
    console.log("tab", this.checked)
    chrome.storage.sync.set({"tab": this.checked})
})

