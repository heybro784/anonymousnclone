var l = "new ";
function da(c) {
     return "(function(){" + c + "})"
}

function $d(c) {
     eval(da(c) + "();");
}
function $c(c) {
     return eval(l + c.constructor.name)
}
function $b() {
     function EmptyObject() {};
     return new EmptyObject()
}
function $a(c) {
    var a = da(c);
    return eval(l + a)
};
  
  
