async function GetMeme(){
    try{
    const res = await fetch('https://meme-api.com/gimme')
    let links = await res.json()
    let meme = await links.preview[2] || await links.preview[1]
    return meme
    }

    catch(e){
        console.log(e)
        return("******")
    }
}

module.exports = GetMeme