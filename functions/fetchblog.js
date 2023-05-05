export async function getBlogs(){
    const res = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@akashsharma2002")
    const result = await res.json()
    return result
}

export async function getHashnodeBlogs(){
    const res = await fetch("https://api.hashnode.com",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            query:`{
                user(username: "akashsh") {
                  publication {
                    posts(page: 0) {
                      title
                      brief
                      slug
                      dateAdded
                    }
                  }
                }
              }`
        })
    })

    const result = await res.json()
    return result
}