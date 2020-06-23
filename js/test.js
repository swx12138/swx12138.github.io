
function onHeadBtnClick_dw()
 {
    if (tm_run) {
        document.getElementById("fgx").innerHTML = Date();
        console.log("fgx");
    }
}

function onHeadBtnClick_addEvent()
{
    let newTip = document.createElement("div");
    newTip.className = "tips";
    //newTip.classList.add("tips");

    newTip.appendChild(document.createTextNode("111111"));
    //document.body.insertBefore(newTip,document.getElementById("footer"));
    document.body.insertBefore(newTip,$("footer").get(0));

}

function onTipsClick_ly(obj)
 {
    //console.log(obj.id);
    let newElem = document.createElement("p");
    let elemContent = document.createTextNode("让我康康!(振声)"); 
    newElem.appendChild(elemContent);
    obj.appendChild(newElem);
/*     c = obj.getAttribute("class");
    if (c == "tips") {
        obj.append("<p>让我康康</p>");
    }
    else {
        console.log(c);
    } */
}

$("form").submit(function(_this = this){
    console.log(_this);
    alert("提交");
});