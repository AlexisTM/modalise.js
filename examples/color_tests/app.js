var myModal = {}


window.onload = function(){
	// It is one of the button Modalise will attach the Show event.
	// Note that you can use Modalise without the events, by omitting the .attach() function.
	// Then, you can use show() or hide() to use it manually without overload. 
	var btnOpen = document.getElementById('openModal');
	
	// Modalise(id, options);
	myModal = new Modalise('exampleModal', {
			btnsOpen : [btnOpen]
		})
		.attach()
		.on('onShow', console.log)
		.on('onConfirm', console.log)
		.on('onHide', console.log);
}