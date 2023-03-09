const wiki = require('wikipedia');

async function WIKI(query) {
	try {
		const page = await wiki.page(query);
		//console.log(page);
		//Response of type @Page object
		const summary = await page.summary();
        //console.log(summary);
        
        let heading = summary.title
        let body = summary.extract
        let message = `*${heading}* \n\n ${body}`
        //console.log(message)
        return message
		//Response of type @wikiSummary - contains the intro and the main image
	} catch (error) {
        console.log(error);
        let message = `"${query}"\n \n *Info not found! Try using a different search term.*.`
        return message
		//=> Typeof wikiError
	}
};

module.exports = WIKI