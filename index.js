(function( window, undefined ) {
"use strict";

var document = window.document,
  extend = require('./utils/extend');

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

  this.show = function(){
    self.modal.dispatchEvent(self.events.onShow);
    self.modal.style.display = "block";
    return self;
  }

  this.hide = function(){
    self.modal.dispatchEvent(self.events.onHide);
    self.modal.style.display = "none";
    return self;
  }

  this.removeEvents = function(){
    var clone = self.modal.cloneNode(true);
    self.modal.parentNode.replaceChild(clone, self.modal);
    self.modal = clone;
    return self;
  }

  this.on = function(event, callback){
    this.modal.addEventListener(event, callback);
    return self;
  }

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

  this.addOpenBtn = function(element) {
    self.btnsOpen.push(element);
  };

  init.start();
  return self;
};


// AMD support
if (typeof define === 'function' && define.amd) {
  define(function () { return Modalise; });
}

module.exports = Modalise;
window.Modalise = Modalise;

})(window);