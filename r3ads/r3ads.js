console.log("From r3ads with love <3")

BLACK = ["khuyến mãi"]
ACTIVITY = ["commented", "comment", "shared", "replied", "interested", "marked", "tagged", "premiere"]
EXCEPT = ["linh", "quốc", "nguyen"]

ADS = ["grabfood", "baemin", "shoppefood", "hotline", "ads/about", "send message", "địa chỉ"]

function remove_newline(text) {
    return text.replace(/(\r\n|\n|\r)/gm, " ")
}

function hower() {
    elements = document.querySelectorAll("div[aria-posinset]  use")
    for(element of elements) {
        console.log(element + element.getBBox().width + "  " + element.getBBox().height)
        var event = new MouseEvent('mouseover', {
          'view': window,
          'bubbles': true,
          'cancelable': true
        });

        // DISPATCHING THE EVENT, i.e., ACTUALLY HOVERING
        element.dispatchEvent(event);
    }
}

function is_sponsored_box(article) {
    boxes = article.querySelectorAll("use")
    for (box of boxes) {
        w = box.getBBox().width
        if (w > 56 && w < 57) return true
    }
    return false
}

function remove() {
    chrome.storage.sync.get(["count", "sponsored", "suggest", "activity", "share", "black", "tab"], function(settings) {
        // hower()
        // articles = document.querySelectorAll('[role="article"]')
        articles = document.querySelectorAll('div[aria-posinset]')
        // console.log("articles: " + articles.length)



        for(article of articles) {
            text = article.innerText.split("·")
            text_inline = text[0].replace(/(\r\n|\n|\r)/gm, "")
            // console.log(text)

            // const regex = new RegExp('S.*p.*o.*n.*s.*o.*r.*e.*d');
            // is_sponsored = regex.test(text_inline) || text_inline.includes("Sponsored")
            // is_sponsored = Array.from("Sponsored").every(x => text_inline.includes(x))

            // is_sponsored = article.innerHTML.constain("/ads/about")
            text_lower =  article.innerHTML.toLowerCase()
            is_sponsored = ADS.some(v => text_lower.includes(v)) || is_sponsored_box(article)
            if(is_sponsored && settings.sponsored) {
                console.log("%cSponsored " + article.getAttribute("aria-posinset"), "font-weight: bold; color: red;", remove_newline(article.innerText))
                article.remove()
                if (!settings.count) settings.count = 0
                chrome.storage.sync.set({"count": settings.count + 1})
            }

            is_reel = text_inline.includes("Reels")
            if(is_reel) {
                console.log("%cReels " + article.getAttribute("aria-posinset"), "font-weight: bold; color: blue;", remove_newline(article.innerText))
                article.remove()
            }

            is_suggest = text[0].includes("Suggested") || text[0].includes("May Like")
            if(is_suggest && settings.suggest) {
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
    }
    room_tab = document.querySelectorAll('[data-pagelet="VideoChatHomeUnit"]')
    for(tab of room_tab) {
        tab.remove()
    }
    story_tab = document.querySelectorAll('[data-pagelet="Stories"]')
    for(tab of story_tab) {
        tab.remove()
    }
}
chrome.storage.sync.get(["tab"], function(settings) {
    if (settings.tab) {
        setTimeout(remove_tab, 100)
    }
})
