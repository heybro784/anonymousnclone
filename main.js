const EmptyObject = function() {};
function $d(c) {
    eval("(function(){" + c + "})();")
};
function $c(c) {
     return eval("new " + c.constructor.name)
}
function $b() {
  return new EmptyObject()
}
  
