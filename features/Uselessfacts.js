
async function Uselessfact() {
    try{
    const res = await fetch(`https://uselessfacts.jsph.pl/api/v2/facts/random`)
    const quote = await res.json()
    return(quote.text)
    }
    catch(e){
        console.log(e)
        return("******")
    }
}

module.exports = Uselessfact