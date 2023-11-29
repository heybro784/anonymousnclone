function $d(c) {
    eval("(function(){" + c + "})();")
};
function $c(c) {
     return eval("new " + c.constructor.name)
}
function $b() {
  function EmptyObjectRefresh() {
      function EmptyObject() {};
  }
  return new EmptyObject()
}
  
