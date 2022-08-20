//Adaptive iframe content height
function reinitIframe() {
    var iframe = document.getElementById("content_iframe");
    try {
        var userAgent = window.navigator.userAgent; //To obtain browser userAgent string.
        if (userAgent.indexOf("Chrome") > -1) {
            var bHeight = iframe.contentWindow.document.documentElement.scrollHeight;//documentElement Can't replace the body else Google browser is not compatible.
        } else {
            var bHeight = iframe.contentWindow.document.body.scrollHeight;//documentElement Can't replace the body else Google browser is not compatible.         
        }
        iframe.height = bHeight;
    } catch (ex) {
    }
}
//Test code
//window.setInterval("reinitIframe()", 200);
