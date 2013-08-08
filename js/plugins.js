//javascript cross browser event handler
var EventHandler = {
    bind:function(el, ev, fn){
        if(window.addEventListener){ // modern browsers including IE9+
            el.addEventListener(ev, fn, false);
        } else if(window.attachEvent) { // IE8 and below
            el.attachEvent('on' + ev, fn);
        } else {
            el['on' + ev] = fn;
        }
    },
 
    unbind:function(el, ev, fn){
        if(window.removeEventListener){
            el.removeEventListener(ev, fn, false);
        } else if(window.detachEvent) {
            el.detachEvent('on' + ev, fn);
        } else {
            elem['on' + ev] = null;
        }
    },
 
    stop:function(ev) {
        var e = ev || window.event;
        e.cancelBubble = true;
        if (e.stopPropagation) e.stopPropagation();
    }
};
//get child node plugin

function getChilds(parent, tagName) {
    var childs = parent.childNodes,
    arr = [],
    currChild;
    for (var i = 0, len = childs.length; i < len; i++) {
        currChild = childs[i];
        console.log(currChild.nodeType + ' ' + currChild);
        if (currChild.nodeType == 1 && currChild.tagName.toLowerCase()== tagName) {
            // arr.push(currChild);
            arr.push(childs[i]);
        }
    }

    console.log(arr);

    return arr;
}