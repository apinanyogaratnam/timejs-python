class time {
	constructor() {}
	
	async sleep(seconds) {
		const delay = ms => new Promise(res => setTimeout(res, ms));
        	await delay(seconds * 1000);		
	}
}

module.exports = time
