//add required class 

var jsAccorGet = document.getElementById('myAccordion');//pick up choosen id
jsAccorGet.className = jsAccorGet.className + ' jsAccordion';//add jsAccordion class

var jsAccorMenuName = jsAccorGet.getElementsByTagName('p')[0]; //pick up menuName Node
jsAccorMenuName.className = jsAccorMenuName.className + ' menuName'; //add menuName class

var jsAccorFirstLv = jsAccorGet.getElementsByTagName('ul')[0];//pick up firstLevel ul
jsAccorFirstLv.className = jsAccorFirstLv.className + ' firstLv'; //add menuName class

var jsAccorFirstLvBtn = getChilds(jsAccorFirstLv,'li');//use getChilds plugin to get first level li only

console.log(jsAccorFirstLvBtn);

//add menuTitle class to all firstLv title




for(i=0;i < jsAccorFirstLvBtn.length;i++){
	

    // console.log(jsAccorFirstLvBtn[i].);

    var firstLvBtntitle = jsAccorFirstLvBtn[i].getElementsByTagName('p');

    console.log(firstLvBtntitle);

    // //  Node type 不對
    // firstLvBtntitle.setAttribute('class', 'Hello');
    // console.log(firstLvBtntitle);
    // return false;
    // break;
    
}



	

// var jsAccorSecondLv = jsAccorFirstLv.getElementsByTagName('ul');
// jsAccorSecondLv.className = jsAccorSecondLv.className + ' firstLv'; 



