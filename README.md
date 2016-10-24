# Modalise.js

Modalise aims to give you an **easy**, **fast** and **efficient** library to make modals in plain javascript.

**Web designer (for the CSS in less or sass, as you prefer) is needed**

## Usage

### HTML

```html
<!DOCTYPE html>
<html>
<head>
    <title>Modal example</title>
    <link href="../../dist/modalise.css" rel="stylesheet">
    <script src="../../dist/modalise.js" type="text/javascript">
    </script>
    <script src="app.js" type="text/javascript">
    </script>
</head>
<body>
    <h1>Example modal 1</h1><button id="openModal">Show the modal</button>
    <div class="mdl mdl-fadein" id="exampleModal">
        <div class="mdl-content-primary mdl-slidein">
            <center>
                <div class="mdl-header mdl-primary">
                    <span class="close">X</span>
                    <h2>Example modal</h2>
                </div>
                <div class="mdl-body mdl-primary">
                    <h3>Content modal</h3>
                </div>
                <div class="mdl-footer mdl-primary">
                    <button class="confirm" onclick="return false">Do
                    thing</button><button class="cancel" onclick=
                    "return false">Cancel the thing</button>
                </div>
            </center>
        </div>
    </div>
</body>
</html>
```

### JS 

```javascript
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
```

## API

For more informations, go to the [API readme](https://github.com/AlexisTM/modalise.js/blob/master/API.md) page.


## Install


```
npm install 
gulp js # build js & listen (browserify)
gulp jade # build html (examples)
gulp sass # build CSS
gulp # build all & watch changes
```

The output files are in the dist folder.

## Contribute

Feel free to contribute. To do it, simply fork, make a branch with the name of the feature and create a pull request. 

## Credits
- @AlexisTM (alexis[dot]paques[at]gmail[dot]com)

