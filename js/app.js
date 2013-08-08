

window.addEventListener('load', function(){

    var jsAccorGet = document.getElementById('myAccordion'); //pick up choosen id
    jsAccorGet.className += ' jsAccordion';
    jsAccorGet.getElementsByTagName('p')[0].className += ' menuName';
    jsAccorGet.getElementsByTagName('ul')[0].className += ' firstLv';

    for (var i = 0; i < jsAccorGet.getElementsByTagName('ul').length; i++) {
        for (var j = 0; j < jsAccorGet.getElementsByTagName('ul')[i].getElementsByTagName('li').length; j++) {
            for (var k = 0; k < jsAccorGet.getElementsByTagName('ul')[i].getElementsByTagName('li')[j].childNodes.length; k++) {
                if (jsAccorGet.getElementsByTagName('ul')[i].getElementsByTagName('li')[j].childNodes[k].nodeType == 1) {
                    if (jsAccorGet.getElementsByTagName('ul')[i].getElementsByTagName('li')[j].childNodes[k].tagName.toLocaleLowerCase() == "p") {
                    jsAccorGet.getElementsByTagName('ul')[i].getElementsByTagName('li')[j].childNodes[k].className += ' NewClassName';
                    }
                }
            }
        }
    }

});