# Modalise.js

Modalise aims to give you an easy, fast and efficient library to make modals in plain javascript.

## Use


### Jade


**Minimal HTML**
```jade

**Minimal jade**
```jade
html
  head
    // because font-awesome is awesome. 
    // link(href='css/font-awesome.min.css', rel='stylesheet')
    link(href='css/modalise.min.css', rel='stylesheet')
    script(src='js/modalise.min.js', type='text/javascript')
  body
    .mdl.mdl-primary#removeModal
      .mdl-content.mdl-primary
        center
          .mdl-header.mdl-primary
            span.close X
            //i.fa.fa-times.close(aria-hidden='true')
            h2 Example modal
          .mdl-body.mdl-primary
            h3 Content modal
          .mdl-footer.mdl-primary
            button(onclick='return false').btn.confirm Do thing
            button(onclick='return false').btn.cancel Cancel the thing
```




## Install

