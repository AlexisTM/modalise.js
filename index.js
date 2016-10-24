(function( window, undefined ) {
"use strict";

var document = window.document,
  extend = require('./utils/extend');

var modalise = function(id, options) {
  var self = this,
    init;

  init = {
    start: function() {
      self.modal          = {};
      self.classClose     = 'close';
      self.classCancel    = 'cancel';
      self.classConfirm   = 'confirm';
      self.btnsOpen       = [];
      self.utils          = {
        extend: extend
      };
    }

    self.utils.extend(self, options)
  };

  this.show = function(){
    self.modal.style.display = "block";
  }

  this.hide = function(){
    self.modal.style.display = "none";
  }

  this.removeEvents = function(){
    var clone = self.modal.cloneNode(true);
    el.parentNode.replaceChild(clone, self.modal);
    self.modal = clone;
  }

  this.attach() {
    var items = [];

    items = self.modal.querySelector(self.classClose);
    for (var i = items.length - 1; i >= 0; i--) {
      items[i].addEventListener('click', function(){
        self.hide();
      });
    }

    var items = self.modal.querySelector(self.classCancel);
    for (var i = items.length - 1; i >= 0; i--) {
      items[i].addEventListener('click', function(){
        self.hide();
      });
    }

    var items = self.modal.querySelector(self.confirm);
    for (var i = items.length - 1; i >= 0; i--) {
      items[i].addEventListener('click', function(){
        self.hide();
      });
    }

    for (var i = self.btnsOpen.length - 1; i >= 0; i--) {
      self.btnsOpen[i].addEventListener('click', function(){
        self.show();
      });
    }
  }

  /*
  * Add object to modalise
  */
  this.addOpenBtn = function(element) {
    self.btnsOpen.push(element);
  };
};


// AMD support
if (typeof define === 'function' && define.amd) {
  define(function () { return modalise; });
}

module.exports = modalise;
window.modalise = modalise;

})(window);