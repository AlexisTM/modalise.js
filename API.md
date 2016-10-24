# API of Modalise.JS

## Javascript

### var modal = Modalise(id, options)

```javascript
var id; // modal id
var options; // merged with the Modalise API

options = {
  modal        : document.getElementById(id),
  classClose   : '.close',
  classCancel  : '.cancel',
  classConfirm : '.confirm',
  btnsOpen     : [] // DOM elements to trigger the modal
}
```

### modal.show()

Shows the modal

### modal.hide()

hides the modal

### modal.removeEvents()

Disable events linked to the modal; Do not disable the button event.

### modal.on(event, callback)

```javascript
var event; // The event to subscribe, there are 3 events created on the modal. 'onShow', 'onConfirm' and 'onHide'.
var callback; // The callback is called when the event is fired.
```

### modal.attach()

Attach the onclick events to hide and show the modal.

### modal.addOpenBtn(element)

Add an element to trigger the modal, if the element is not added through the constructor.

## CSS 

### Structure

Will not change

```
.mdl // Modal container hiding the whole page, omit this if you want to let the user click on the page with the modal
  .mdl-content // Modal container with only the content
    .mdl-header  // Header of the modal ()
    .mdl-body 	 // Body of the modal  
    .mdl-footer  // Footer of the modal
```

### Animations 

Feel free to add new animations.

```
.mdl-fadein  // From opacity 0 to 1 in 0.4 seconds, used for the black background
.mdl-slidein // From bottom -300px to a fixed position at the bottom of the screen in 0.4 seconds
```

### Colors (from Bootstrap theme)

Feel free to add themes and so on.

```
.mdl-band-primary : White text on blue background
.mdl-band-warning : White text on yellow background
.mdl-band-success : White text on green background
.mdl-band-info : White text on light blue background
.mdl-band-danger : White text on red background
```

