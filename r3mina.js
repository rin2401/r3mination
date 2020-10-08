console.log("From r3mina with love <3")

// host = "http://localhost:5000"
host = "http://r3mina.herokuapp.com"


function replace(){
    paths = window.location.pathname.split("/")
    if (paths[paths.length-1] != "watch") {
        console.log("Not watch page")
        return
    }
    id = paths[paths.length-3]
    name = paths[paths.length-2]
    console.log(id, name)


    eps = document.getElementsByClassName("episode")
    for(ep of eps) {
        url = ep.href
        // console.log(url)
        url_split = url.split("/")
        current_url = url_split.slice(0,3).join("/")
        if (current_url == host) continue
        ep_name = url_split[url_split.length-1]
        name_eng = url_split[3]
        num = ep_name.split("-")[1]
        // console.log(name_eng, ep_name, num)
        ep.href = `${host}/anime/${name}/${num}`
        console.log(ep.href)
    }

}

function replace_timeout(time=1000) {
    setTimeout(replace, time)
}

replace_timeout(1000)

window.onclick = replace_timeout
