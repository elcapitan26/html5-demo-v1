var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var demoId=1;

if ( urlParams.get('id')) {
    demoId=urlParams.get('id');
}

//console.log("window.location.href: " + window.location.href);
//console.log("window.location.pathname: " + window.location.pathname);
//console.log("Demo ID: " + demoId);

window.onload = function() {
    var anchors = document.getElementsByTagName("a");
    for (var i = 0; i < anchors.length; i++) {
        anchors[i].onclick = function() {return false;};
    }
    document.querySelector('.menu-btn').addEventListener
    ('click', () => document.querySelector('.main-menu')
    .classList.toggle('show'));
}; 