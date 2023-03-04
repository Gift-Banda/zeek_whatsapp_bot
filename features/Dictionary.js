//Dictionary

async function Dictonary(word){
    try{
        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        const wordDetails = await res.json()
        return wordDetails
        
    }
    catch(e){
        console.log(e)
    }
}

module.exports = Dictonary