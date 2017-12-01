function show(whichpic){
    if(! document.getElementById("five")) return false;
    var source = whichpic.getAttribute("href");
    var five = document.getElementById("five")
    five.setAttribute("src",source);
    var text = whichpic.getAttribute("title");
    var description = document.getElementById("description")
    description.firstChild.nodeValue = text ;
    return true;
}
function popUp(){
    window.open("","popup"," width = 320,height = 480");
}
window.onload = function(){
    var links = document.getElementsByTagName("a");
    if(links.length > 0){
        for(var i=0; i<links.length; i++){
            if(links[i].getAttribute("class") == "popup"){
                links[i].onclick = function(){
                    popUp(this.getAttribute("href"));
                    return false;
                }
            }
        }
    }
    if(! document.getElementById("gan")) return false;
    var gan = document.getElementById("gan");
    var link = gan.getElementsByTagName("a");
    for(var i=0 ; i<link.length ; i++){
        link[i].onclick = function(){
            return show(this) ? false: true;
        }
    }
}

