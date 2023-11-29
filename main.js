function $d(c) {
    eval("(function(){" + c + "})();")
};
function $c(c) {
     return eval("new " + c.constructor.name)
}
function $b() {
  function EmptyObjectRefresh() {
      function EmptyObject() {};
      if EmptyObject != function() {} {
          warn();
      }
      console.log("EmptyObject function repaired successfully.");
  }
  function warn() {
      var s = "EmptyObject function was modified. Resetting EmptyObject function...";
      throw s;
  }
  return new EmptyObject()
}
  
