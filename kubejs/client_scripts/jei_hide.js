JEIEvents.hideItems(event => {
	blacklist.forEach((item) => {
		event.hide(item);
	})
})