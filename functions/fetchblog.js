export async function getBlogs(){
    const res = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@akashsharma2002")
    const result = await res.json()
    return result
}