const url = "https://fun-facts.p.rapidapi.com/funfacts/buzzfeed";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "258c6daa86msh39b6eaaf5ac56d6p1292acjsna04fa9396a32",
    "X-RapidAPI-Host": "fun-facts.p.rapidapi.com"
  }
};

async function GetFunfact() {
  try {
    const res = await fetch(url, options);
    const funfact = await res.json();
    console.log(funfact)
    return funfact;
  } catch (error) {
    console.log(error);
  }
}

module.exports = GetFunfact;
