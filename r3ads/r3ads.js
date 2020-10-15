console.log("From r3ads with love <3")

function remove() {
    spons = document.querySelectorAll('[aria-label="Sponsored"]')
    for(spon of spons) {
        article = spon.closest('[role="article"]')
        article.remove()
        text = article.innerText.split("·")
        console.log("Sponsored", text[0], text[2])
    }

    articles = document.querySelectorAll('[role="article"]')
    for(article of articles) {
        if(article.innerText.includes("Suggested for You")) {
            article.remove()
            text = article.innerText.split("·")
            console.log(text[0], text[2])
        }
    }
}

window.addEventListener("scroll", remove);
