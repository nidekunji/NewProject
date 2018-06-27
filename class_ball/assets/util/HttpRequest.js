window.HttpRequest = {  
    /*  
     * 网络请求之GET  
     * url 请求的网络地址  
     * callback 回调参数  
     * */  
    GET:function(url,callback){  
        var err = true;
        var xhr = cc.loader.getXMLHttpRequest();  
        xhr.open("GET",url,true);  
        xhr.onreadystatechange = function () {  
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status <= 207)) {  
                err = false;  
            }else{  
                err = true;  
            }  
            var response = xhr.responseText;  
            callback(err,response);  
        };  
        xhr.send();  
    },  


    /*  
     * 网络请求之POST  
     * url 请求的网络地址  
     * params  请求参数  ("id=1&id=2&id=3")  
     * callback 回调参数  
     * */  
    POST:function(url,params,callback){  
        var nums = arguments.length  
        if(nums == 2){  
            callback = arguments[1];  
            params = "";  
        }  
        var err = true;
        var xhr = cc.loader.getXMLHttpRequest();  
        xhr.open("POST", url);  
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");  
        xhr.onreadystatechange = function () {  
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status <= 207)) {  
                err = false;  
            }else{  
                err = true;  
            }  
            var response = xhr.responseText;  
            callback(err,response);  
        };  
        xhr.send(params);  
    }  
}  