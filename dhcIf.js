
(function($){
    $.DhcIf = {
        // 디바이스 정보 조회
        getDeviceInfo : function(callback) {
            var message = {
                "action" : "getDeviceInfo",
                "callback" : callback,
            };
            $.DhcIf.postMessage(message);
        }
        // 디바이스 설정 이동
        , openSettings : function() {
            var message = {
                "action" : "openSettings",
            };
            $.DhcIf.postMessage(message);
        }
        // 웹뷰 히스토리 삭제
        , clearHistory : function() {
            var message = {
                "action" : "clearHistory",
            };
            $.DhcIf.postMessage(message);
        }
        , openWebView : function(url) {
            var message = {
                "action" : "openWebView",
                "url" : url
            };
            $.DhcIf.postMessage(message);
        }
        , closeWebView : function(url) {
            var message = {
                "action" : "closeWebView",
                "url" : url,
            };
            $.DhcIf.postMessage(message);
        }
        , closeAllWebView : function(url) {
            var message = {
                "action" : "closeAllWebView",
                "url" : url,
            };
            $.DhcIf.postMessage(message);
        }
        , openBrowser : function(url) {
            var message = {
                "action" : "openBrowser",
                "url" : url,
            };
            $.DhcIf.postMessage(message);
        }
        , shareLink : function(url) {
            var message = {
                "action" : "shareLink",
                "url" : url,
            };
            $.DhcIf.postMessage(message);
        }
        , getDHCWebViews : function(callback) {
            var message = {
                "action" : "getDHCWebViews",
                "callback" : callback,
            };
            $.DhcIf.postMessage(message);
        }
        , showTimePicker : function(time, callback) {
            var message = {
                "action" : "showTimePicker",
                "time" : time,
                "callback" : callback
            };
            $.DhcIf.postMessage(message);
        }
        , requestPermission : function(type, callback) {
            var message = {
                "action" : "requestPermission",
                "type" : type,
                "callback" : callback
            };
            $.DhcIf.postMessage(message);
        }
        , checkPermission : function(type, callback) {
            var message = {
                "action" : "checkPermission",
                "type" : type,
                "callback" : callback
            };
            $.DhcIf.postMessage(message);
        }
        , connectHealthPlatform : function(callback) {
             var message = {
                "action" : "connectHealthPlatform",
                "callback" : callback
            };
            $.DhcIf.postMessage(message);
        }
        , checkHealthPlatform : function(callback) {
            var message = {
                "action" : "checkHealthPlatform",
                "callback" : callback
            };
            $.DhcIf.postMessage(message);
        }
        , readHealthData : function(startTime, endTime, callback) {
            var message = {
                "action" : "readHealthData",
                "startTime" : startTime,
                "endTime" : endTime,
                "callback" : callback
            };
            $.DhcIf.postMessage(message);
        }
        , readExerciseData : function(id, callback) {
            var message = {
                "action" : "readExerciseData",
                "id" : id,
                "callback" : callback
            };
            $.DhcIf.postMessage(message);
        }
        , callFoodCamera : function(onSearch, callback) {
            var message = {
                "action" : "callFoodCamera",
                "onSearch" : onSearch,
                "callback" : callback
            };
            $.DhcIf.postMessage(message);
        }
        , setData : function(key, value) {
            var message = {
                "action" : "setData",
                "key" : key,
                "value" : value,
            };
            $.DhcIf.postMessage(message);
        }
        , getData : function(key, callback) {
            var message = {
                "action" : "getData",
                "key" : key,
                "callback" : callback
            };
            $.DhcIf.postMessage(message);
        }
        , registerPushService : function(cuid, cname, callback) {
            var message = {
                "action" : "registerPushService",
                "cuid" : cuid,
                "cname" : cname,
                "callback" : callback,
            };

            $.DhcIf.postMessage(message);
        }
        , releasePushService : function(callback) {
            var message = {
                "action" : "releasePushService",
                "callback" : callback,
            };

            $.DhcIf.postMessage(message);
        }
        , checkExternalApp : function(appName, callback) {
            var message = {
                "action" : "checkExternalApp",
                "appName" : appName,
                "callback" : callback
            };
            $.DhcIf.postMessage(message);
        }
        , getContactList : function(callback) {
            var message = {
                "action" : "getContactList",
                "callback" : callback
            };
            $.DhcIf.postMessage(message);
        }
        , setVisibleARS : function(set, callback) {
            var message = {
                "action" : "setVisibleARS",
                "set" : set,
                "callback" : callback
            };
            $.DhcIf.postMessage(message);
        }
        , checkVisibleARS : function(callback) {
            var message = {
                "action" : "checkVisibleARS",
                "callback" : callback
            };
            $.DhcIf.postMessage(message);
        }
        , showFAB : function() {
            var message = {
                "action" : "showFAB",
            };
            $.DhcIf.postMessage(message);
        }
        , hideFAB : function() {
            var message = {
                "action" : "hideFAB",
            };
            $.DhcIf.postMessage(message);
        }
        , receivePush : function(sendType, detailYn, targetLink, linkType, imgUrl) {
            var ext = {
                "send-type" : sendType,
                "detail-yn" : detailYn,
                "target-link" : targetLink,
                "link-type" : linkType,
                "img-url" : imgUrl,
            };
            var extStr = JSON.stringify(ext);
            var alert = {
                "title" : "알림함 테스트",
                "body" : extStr
            };
            var pushData = {
                "mps": {
                    "appid": "com.miraeasset.mobilewindow",
                    "ext": extStr,
                    "seqno": "64",
                    "sender": "PIB_4877_BP077d8094a2b2a4c27954f4b5d7c462fea^P0005274~1",
                    "senddate": "20240819165737",
                    "db_in": "Y",
                    "pushkey": "8912027c8bfc2fb554ee90c474a22fcdf673a131",
                    "sms": "Y"
                },
                "aps": {
                    "badge": "0",
                    "alert": JSON.stringify(alert),
                    "sub_title": ""
                }
            };
            var message = {
                "action" : "receivePush",
                "pushData" : pushData,
            };
            $.DhcIf.postMessage(message);
        }
        , reqAuthNum : function(phoneNum) {
            var message = {
                "action" : "reqAuthNum",
                "phoneNum" : phoneNum
            };
            $.DhcIf.postMessage(message);
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
            if($.DhcIf.iOS()) {
                window.webkit.messageHandlers.dhcInterface.postMessage(message);
            }
            else if($.DhcIf.aOS()){
                var msg = JSON.stringify(message);
                window.dhcInterface.postMessage(msg);
            }
        }
    };
})(jQuery);
