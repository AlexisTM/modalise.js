var m = {}


window.onload = function(){
	var btnOpen = document.getElementById('openModal');
	m = new Modalise('exampleModal', {
		btnsOpen : [btnOpen],
		callbacks : {
			
		}
	});
	m.attach();
}