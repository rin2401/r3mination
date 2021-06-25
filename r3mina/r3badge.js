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

            console.log(user.href)
        }
    }
}

add_badge()
window.addEventListener("scroll", add_badge);