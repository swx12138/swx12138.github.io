var tm_run = true;

function OnClick_() {
    if (tm_run) {
        document.getElementById("fgx").innerHTML = Date();
        console.log("fgx");
    }
}

function OnClick__() {
    tm_run = !tm_run;
    console.log(tm_run);
}

function ReadOut(obj) {
    //alert(obj)
    alert($(#tips))
    c = obj.getAttribute("class");
    if (c == "tips") {
        obj.append("<p>让我康康</p>");
    }
    else {
        console.log(c);
    }
}