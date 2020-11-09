console.log("From r3ads with love <3")

BLACK = ["khuyến mãi"]
ACTIVITY = ["commented", "comment", "shared", "replied", "interested", "marked", "tagged", "premiere"]
EXCEPT = ["linh", "quốc", "nguyen"]

function remove_newline(text) {
    return text.replace(/(\r\n|\n|\r)/gm, " ")
}

function remove() {
    chrome.storage.sync.get(["sponsored", "suggest", "activity", "share", "black", "tab"], function(settings) {
        spons = document.querySelectorAll('[aria-label="Sponsored"]')

        if (settings.sponsored) {
            for(spon of spons) {
                article = spon.closest('[role="article"]')
                console.log("%cSponsored " + article.getAttribute("aria-posinset"), "font-weight: bold; color: red;", remove_newline(article.innerText))
                article.remove()
            }        
        }

        articles = document.querySelectorAll('[role="article"]')
        for(article of articles) {
            text = article.innerText.split("·")
            if(text[0].includes("Suggested") && settings.suggest) {
                console.log("%cSuggested " + article.getAttribute("aria-posinset"), "font-weight: bold; color: blue;", remove_newline(article.innerText))
                article.remove()
            }

            text_lower =  article.innerText.toLowerCase()
            if (BLACK.some(v => text_lower.includes(v)) && settings.black) {
                console.log("%cBlack " + article.getAttribute("aria-posinset"), "font-weight: bold; color: black;", remove_newline(article.innerText))
                article.remove()
            }

            head_lower =  text[0].toLowerCase()
            is_except = EXCEPT.some(v => head_lower.includes(v))
            if (ACTIVITY.some(v => head_lower.includes(v)) && !is_except && settings.activity) {
                console.log("%cActivity " + article.getAttribute("aria-posinset"), "font-weight: bold; color: orange;", remove_newline(article.innerText))
                article.remove()
            }

            // share = article.querySelectorAll('strong')
            share = article.querySelectorAll('[aria-label^="Shared with"]')
            if(share.length > 1 && !is_except  && settings.share) {
                console.log("%cShared " + article.getAttribute("aria-posinset"), "font-weight: bold; color: green;", remove_newline(article.innerText))
                article.remove()
            }
        }
        if (settings.tab) {
            remove_tab()
        }
    })
}

window.addEventListener("scroll", remove);

function remove_tab() {
    chat_tab = document.querySelectorAll('[role="complementary"]')
    for(tab of chat_tab) {
        tab.remove()
        console.log(tab)
    }
    room_tab = document.querySelectorAll('[data-pagelet="VideoChatHomeUnit"]')
    for(tab of room_tab) {
        tab.remove()
        console.log(tab)
    }
    story_tab = document.querySelectorAll('[data-pagelet="Stories"]')
    for(tab of story_tab) {
        tab.remove()
        console.log(tab)
    }
}
chrome.storage.sync.get(["tab"], function(settings) {
    if (settings.tab) {
        setTimeout(remove_tab, 100)
    }
})
