// test.js

document.body.onload = function () {
    console.log(document.head.title);
};


function onTipsClick_ly(obj) {
    //console.log(obj.id);
    let newElem = document.createElement("p");
    newElem.appendChild(document.createTextNode("让我康康!(振声)"));
    obj.appendChild(newElem);
}

$("form").submit(function (_this = this) {
    console.log(_this);
    alert("提交");
});