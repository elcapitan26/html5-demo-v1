console.log("window.location.href: " + window.location.href);
console.log("window.location.pathname: " + window.location.pathname);

var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var demoId=1;
if ( urlParams.get('id')) {
    demoId=urlParams.get('id');
}
console.log("Demo ID: " + demoId);