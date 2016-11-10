//JS For Global Use

console.log('happy');

//console.log(FastClick);


function get_browser(){
    var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; 
    if(/trident/i.test(M[1])){
        tem=/\brv[ :]+(\d+)/g.exec(ua) || []; 
        return {name:'IE',version:(tem[1]||'')};
        }   
    if(M[1]==='Chrome'){
        tem=ua.match(/\bOPR\/(\d+)/)
        if(tem!=null)   {return {name:'Opera', version:tem[1]};}
        }   
    M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
    return {
      name: M[0],
      version: M[1]
    };
}

var b = get_browser();
console.log(b);

if (b.name=='MSIE') {
    if (b.version == 8 || b.version < 8) {
        alert("不支援IE8-瀏覽器，請升級至IE10+或下載Firefox或Chrome瀏覽器")
    }
//    if (b.version == 9) {
//        alert("不支援IE9-瀏覽器，請升級至IE10+或下載Firefox或Chrome瀏覽器")
//    }
}




if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}