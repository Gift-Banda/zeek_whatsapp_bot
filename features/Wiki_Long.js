const wiki = require('wikipedia');

async function WIKI(query) {
	try {
        const page = await wiki.page(query);
        const heading = await page.title
        //console.log(heading)

        const pageContent = await page.content()
        //console.log(pageContent);

         let message = `*${heading}* \n\n ${pageContent}`
        
        return message
		
        
		
	} catch (error) {
        console.log(error);
        let message = `"${query}"\n \n *Info not found! Try using a different search term.*.`
        return message
		//=> Typeof wikiError
	}
};

module.exports = WIKI