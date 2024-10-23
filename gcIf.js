
(function($){
    $.GcIf = {
        // 디바이스 정보 조회
        getDeviceInfo : function(callback) {
            var message = {
                "action" : "getDeviceInfo",
                "callback" : callback,
            };
            $.GcIf.postMessage(message);
        }
        // 디바이스 설정 이동
        , openSettings : function() {
            var message = {
                "action" : "openSettings",
            };
            $.GcIf.postMessage(message);
        }
        // 웹뷰 히스토리 삭제
        , clearHistory : function() {
            var message = {
                "action" : "clearHistory",
            };
            $.GcIf.postMessage(message);
        }
        , openWebView : function(url) {
            var message = {
                "action" : "openWebView",
                "url" : url
            };
            $.GcIf.postMessage(message);
        }
        , closeWebView : function(url) {
            var message = {
                "action" : "closeWebView",
                "url" : url,
            };
            $.GcIf.postMessage(message);
        }
        , closeAllWebView : function(url) {
            var message = {
                "action" : "closeAllWebView",
                "url" : url,
            };
            $.GcIf.postMessage(message);
        }
        , openBrowser : function(url) {
            var message = {
                "action" : "openBrowser",
                "url" : url,
            };
            $.GcIf.postMessage(message);
        }
        , shareLink : function(url) {
            var message = {
                "action" : "shareLink",
                "url" : url,
            };
            $.GcIf.postMessage(message);
        }
        , requestPermission : function(type, callback) {
            var message = {
                "action" : "requestPermission",
                "type" : type,
                "callback" : callback
            };
            $.GcIf.postMessage(message);
        }
        , checkPermission : function(type, callback) {
            var message = {
                "action" : "checkPermission",
                "type" : type,
                "callback" : callback
            };
            $.GcIf.postMessage(message);
        }
        , setData : function(key, value) {
            var message = {
                "action" : "setData",
                "key" : key,
                "value" : value,
            };
            $.GcIf.postMessage(message);
        }
        , getData : function(key, callback) {
            var message = {
                "action" : "getData",
                "key" : key,
                "callback" : callback
            };
            $.GcIf.postMessage(message);
        }
        , getCurrentLocation : function(callback) {
            var message = {
                "action" : "getCurrentLocation",
                "callback" : callback
            };
            $.GcIf.postMessage(message);
        }
        , findRoute : function(fromCoord, toCoord) {
            var message = {
                "action" : "findRoute",
                "fromCoord" : fromCoord,
                "toCoord" : toCoord
            };
            $.GcIf.postMessage(message);
        }
        , checkExternalApp : function(appName, callback) {
            var message = {
                "action" : "checkExternalApp",
                "appName" : appName,
                "callback" : callback
            };
            $.GcIf.postMessage(message);
        }
        , showFab : function() {
            var message = {
                "action" : "showFAB",
            };
            $.GcIf.postMessage(message);
        }
        , hideFab : function() {
            var message = {
                "action" : "hideFAB",
            };
            $.GcIf.postMessage(message);
        }
        , iOS : function() {
            var iDevices = [
                            'iPad Simulator',
                            'iPhone Simulator',
                            'iPod Simulator',
                            'iPad',
                            'iPhone',
                            'iPod'
                            ];

            if (!!navigator.platform) {
                while (iDevices.length) {
                    if (navigator.platform === iDevices.pop()){ return true; }
                }
            }

            return false;
        }
        , aOS : function() {
            return /(android)/i.test(navigator.userAgent);
        }
        , postMessage : function(message) {
            if($.GcIf.iOS()) {
                window.webkit.messageHandlers.gcInterface.postMessage(message);
            }
            else if($.GcIf.aOS()){
                var msg = JSON.stringify(message);
                window.gcInterface.postMessage(msg);
            }
        }
    };
})(jQuery);