function $d(c) {
    return eval("(function(){" + c + "})();")
};
function $c(c) {
     return eval("new " + c.constructor.name)
}
