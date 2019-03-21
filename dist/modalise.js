(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function( window, undefined ) {
"use strict";

var document = window.document,
  extend = require('./utils/extend');

/* 
 * var myModal = Modalise('htmlID', options);
 *
 * id: The HTML id of the object
 * options:  options can modify the class name to which are bind the close, cancel and confirm functions, plus the buttons to open the modal.
    var options = {
	  "classClose": ".close",  
	  "classCancel": ".cancel",
	  "classConfirm": ".confirm",
    "btnsOpen": [ HTMLelements ]
  }
 */ 
var Modalise = function(id, options) {
  var self = this,
    init;
  self.callbacks = {}
  init = {
    start: function() {
      self.events = {
        onShow    : new Event('onShow'),
        onConfirm : new Event('onConfirm'),
        onHide    : new Event('onHide')
      };
      self.modal            = document.getElementById(id);
      self.classClose       = '.close';
      self.classCancel      = '.cancel';
      self.classConfirm     = '.confirm';
      self.btnsOpen         = [];
      self.utils            = {
        extend: extend
      };

      self.utils.extend(self, options);
    }
  };

 /* 
  * Modalise.show() :
  *
  * Shows the modal
  */ 
  this.show = function(){
    self.modal.dispatchEvent(self.events.onShow);
    self.modal.style.display = "block";
    return self;
  }

 /* Modalise.hide() :
  *
  * Hides the modal
  */ 
  this.hide = function(){
    self.modal.dispatchEvent(self.events.onHide);
    self.modal.style.display = "none";
    return self;
  }

  /* 
  * Modalise.removeEvents() :
  *
  * Removes the events (by cloning the modal) 
  */ 
  this.removeEvents = function(){
    var clone = self.modal.cloneNode(true);
    self.modal.parentNode.replaceChild(clone, self.modal);
    self.modal = clone;
    return self;
  }

 /* 
  * Modalise.on(event, callback):
  *
  * Connect an event.
  * 
  * event: 
  *     - 'onShow': Called when the modal is shown (via Modalise.show() or a binded button)
  *     - 'onConfirm': Called when the modal when the user sends the data (via the element with the class '.confirm')
  *     - 'onHide': Called when the modal is hidden (via Modalise.hide() or a binded button)
  * callback: The function to call on the event
  *
  */ 
  this.on = function(event, callback){
    this.modal.addEventListener(event, callback);
    return self;
  }

  /* 
  * Modalise.attach() :
  *
  * Attaches the click events on the elements with classes ".confirm", ".hide", ".cancel" plus the elements to show the modal
  */ 
  this.attach = function() {
    var items = [];

    items = self.modal.querySelectorAll(self.classClose);
    for (var i = items.length - 1; i >= 0; i--) {
      items[i].addEventListener('click', function(){
        self.hide();
      });
    }

    items = self.modal.querySelectorAll(self.classCancel);
    for (var i = items.length - 1; i >= 0; i--) {
      items[i].addEventListener('click', function(){
        self.hide();
      });
    }

    items = self.modal.querySelectorAll(self.classConfirm);
    for (var i = items.length - 1; i >= 0; i--) {
      items[i].addEventListener('click', function(){
        self.modal.dispatchEvent(self.events.onConfirm);
        self.hide();
      });
    }

    for (var i = self.btnsOpen.length - 1; i >= 0; i--) {
      self.btnsOpen[i].addEventListener('click', function(){
        self.show();
      });
    }
    return self;
  }

  /*
   * Attach an external element that will open the modal. 
   * Modalise.addOpenBtn(element)
   *  
   * element: Any HTML element a button, div, span,...
   */
  this.addOpenBtn = function(element) {
    self.btnsOpen.push(element);
  };

  init.start();
  return self;
};


// AMD (Asynchronous Module Definition API) support, more information about AMD : https://github.com/amdjs/amdjs-api/wiki/AMD
if (typeof define === 'function' && define.amd) {
  define(function () { return Modalise; });
}

module.exports = Modalise;
window.Modalise = Modalise;

})(window);

},{"./utils/extend":2}],2:[function(require,module,exports){
/*
 * Source: https://github.com/segmentio/extend
 */

module.exports = function extend (object) {
    // Takes an unlimited number of extenders.
    var args = Array.prototype.slice.call(arguments, 1);

    // For each extender, copy their properties on our object.
    for (var i = 0, source; source = args[i]; i++) {
        if (!source) continue;
        for (var property in source) {
            object[property] = source[property];
        }
    }

    return object;
};
},{}]},{},[1]);
