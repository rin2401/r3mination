console.log("From r3ads with love <3")

function remove() {
    spons = document.querySelectorAll('[aria-label="Sponsored"]')
    for(spon of spons) {
        article = spon.closest('[role="article"]')
        article.remove()
        console.log(article.innerText)
    }
}

window.addEventListener("scroll", remove);
