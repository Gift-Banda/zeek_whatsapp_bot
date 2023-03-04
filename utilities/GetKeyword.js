function Getkeyword(string){
    const keyword = string.trimStart().split(' ')[0]
    return keyword
}

module.exports = Getkeyword