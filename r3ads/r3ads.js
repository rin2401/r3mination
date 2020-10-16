console.log("From r3ads with love <3")

BLACK = ["sale", "giveaway"]
ACTIVITY = ["comment", "share"]

function remove_newline(text) {
    return text.replace(/(\r\n|\n|\r)/gm, " ")
}

function remove() {
    spons = document.querySelectorAll('[aria-label="Sponsored"]')
    for(spon of spons) {
        article = spon.closest('[role="article"]')
        console.log("%cSponsored " + article.getAttribute("aria-posinset"), "font-weight: bold; color: red;", remove_newline(article.innerText))
        article.remove()
    }

    articles = document.querySelectorAll('[role="article"]')
    for(article of articles) {
        text = article.innerText.split("·")
        if(text[0].includes("Suggested")) {
            console.log("%cSuggested " + article.getAttribute("aria-posinset"), "font-weight: bold; color: blue;", remove_newline(article.innerText))
            article.remove()
        }

        text_lower =  article.innerText.toLowerCase()
        if (BLACK.some(v => text_lower.includes(v))) {
            console.log("%cBlack " + article.getAttribute("aria-posinset"), "font-weight: bold; color: black;", remove_newline(article.innerText))
            article.remove()
        }

        head_lower =  text[0].toLowerCase()
        if (ACTIVITY.some(v => head_lower.includes(v))) {
            console.log("%cActivity " + article.getAttribute("aria-posinset"), "font-weight: bold; color: Orange;", remove_newline(article.innerText))
            article.remove()
        }

        share = article.querySelectorAll('strong')
        if(share.length > 1) {
            console.log("%cShared " + article.getAttribute("aria-posinset"), "font-weight: bold; color: green;", remove_newline(article.innerText))
            article.remove()
        }
    }
}

window.addEventListener("scroll", remove);
