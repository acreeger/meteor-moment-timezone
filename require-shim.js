// This is necessary to trick moment-timezone into believing it is in node, otherwise it doesn't fire the "onLoad" method it defines. 
this.module={"foo":"bar"};
this.require = {"WHATEVER":"TREVOR!"};

(function(undefined) {

  var self = this;
  if (this.require !== undefined) {
    this.__AC_OLD_REQUIRE = this.require;
  }
  this.require = function(packageName) {
    return self[packageName];
  }

  if (this.module !== undefined) {
    this.__AC_OLD_MODULE = this.module;
  }
  this.module = {};

}).call(this);