async function SS() {
  try {
    const res = await fetch("https://shortstories-api.onrender.com/");
    let story = await res.json();
    let title = await story.title;
    let author = await story.author;
    let body = await story.story;
    let message = 
    `*${title}*
    
    Author: ${author}

    ${body}
    `;
    return message;
  } catch (e) {
    console.log(e);
  }
}


module.exports = SS