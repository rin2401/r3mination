FAN = ["lnphane"]


function add_badge() {
    badge = `<div aria-label="Identity Badges" role="button" tabindex="0">
        <div>
            <span style="color: #f2c2cf">🐹 Phan siêu cứng</span>
        </div>
    </div>`


    // <img height="12" alt="" style="color: #f2c2cf" referrerpolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/mTNr7Jn2-Jk.png">

    posts = document.querySelectorAll('[role="article"]')
    for (post of posts) {
        comments = post.querySelectorAll('li div[role="article"]')
        for (comment of comments) {
            user = comment.querySelectorAll('a')[1]
            is_fan = FAN.some(v => user.href.includes(v))

            if (!is_fan) continue

            parent = user.parentElement.parentElement

            badges = parent.querySelectorAll('[role="button"]')

            if (!badges.length) {
                parent.innerHTML = badge + parent.innerHTML
            }
        }
    }
}

function add_click_event() {
    setTimeout(add_badge, 50)

}

function add_click() {
    mores = document.querySelectorAll('[dir="auto"]')

    for (more of mores) {
        more.removeEventListener("click", add_click_event)
        more.addEventListener("click", add_click_event)
    }
}

add_badge()
window.addEventListener("scroll", add_click);
window.addEventListener("scroll", add_badge);