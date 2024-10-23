
function onBackPressed() {
    console.log('>>>>> onBack');
    return false;
}

function getDeviceInfo() {
    $.GcIf.getDeviceInfo('getDeviceInfoCallback');
}
function getDeviceInfoCallback(data) {
    console.log('getDeviceInfoCallback -> ' + data);
    var deviceInfo = JSON.parse(data).deviceInfo;
    console.log('deviceInfo');
    console.log(' - appName: ' + deviceInfo.appName);
    console.log(' - osType: ' + deviceInfo.osType);
    console.log(' - osVersion: ' + deviceInfo.osVersion);
    console.log(' - appVersion: ' + deviceInfo.appVersion);
    console.log(' - deviceModel: ' + deviceInfo.deviceModel);
    $("#getDeviceInfoResult").text(data);
}

function openSettings() {
    $.DhcIf.openSettings();
}

function clearHistory() {
    $.DhcIf.clearHistory();
}

function openWebView() {
    var url = $('#openWebView input[name="url"]').val();
    $.DhcIf.openWebView(url);

    $.DhcIf.setData("lastUrl", url);
}

function closeWebView() {
    var url = $('#closeWebView input[name="url"]').val();
    $.DhcIf.closeWebView(url);
}

function closeAllWebView() {
    var url = $('#closeWebView input[name="url"]').val();
    $.DhcIf.closeWebView(url);
}

function openBrowser() {
    var url = $('#openBrowser input[name="url"]').val();
    $.DhcIf.openBrowser(url);
}

function showTimePicker() {
    var time = $("#selectTimeResult").text();
    $.DhcIf.showTimePicker(time, "showTimePickerCallback");
}

function showTimePickerCallback(data) {
    console.log('showTimePickerCallback -> ' + data);
    var time = JSON.parse(data).time;
    console.log(' - time: ' + time);
    $("#selectTimeResult").text(time);
}

function requestPermission() {
    $('#permissionResult').text('');
    var method = $('#permission input[name="method1"]:checked').val();
    var type = $('#permission input[name="type"]:checked').val();

    if (method == "request") {
        $.DhcIf.requestPermission(type, "requestPermissionCallback");
    } else {
        $.DhcIf.checkPermission(type, "requestPermissionCallback");
    }
}

function requestPermissionCallback(data) {
    console.log('requestPermissionCallback -> ' + data);
    var grantedYn = JSON.parse(data).grantedYn;
    console.log(' - grantedYn: ' + grantedYn);
    $('#permissionResult').text(grantedYn);
}

function connectHealthPlatform() {
    $('#healthPlatformResult').text('');
    var method = $('#health input[name="method2"]:checked').val();

    if (method == "connect") {
        $.DhcIf.connectHealthPlatform("connectHealthPlatformCallback");
    } else {
        $.DhcIf.checkHealthPlatform("connectHealthPlatformCallback");
    }
}

function connectHealthPlatformCallback(data) {
    console.log('connectHealthPlatformCallback -> ' + data);
    var connectedYn = JSON.parse(data).connectedYn;
    console.log(' - connectedYn: ' + connectedYn);

    $('#healthPlatformResult').text(connectedYn);
}


function readHealthData() {
    var startTime = $('#health input[name="startTime"]').val();
    var endTime = $('#health input[name="endTime"]').val();
    $.DhcIf.readHealthData(startTime, endTime, "readHealthDataCallback");
}

function readHealthDataCallback(data) {
    console.log('readHealthDataCallback -> ' + data);
    try {
        var datas = JSON.parse(data).datas;
        datas.forEach(function(data) {
            console.log("- " + JSON.stringify(data));
        });
    } catch(e) {
        console.log(e.stack);
    }
//    var obj = JSON.parse(data);
//    $('#healthDataResult').text(data);
}


function readExerciseData() {
    var id = $('#health input[name="id"]').val();
    $.DhcIf.readExerciseData(id, "readExerciseDataCallback");
}

function readExerciseDataCallback(data) {
    console.log('readExerciseDataCallback -> ' + data);
}


function callFoodCamera() {
    $.DhcIf.callFoodCamera("onFoodCameraSearch", "callFoodCameraCallback");
}

function callFoodCameraCallback(data) {
    console.log('callFoodCameraCallback -> ' + data);
    try {
        var obj = JSON.parse(data);
        var base64String = obj.base64String;
        var type = obj.type;
        console.log(' - base64String: ' + base64String);
        $('#callFoodCameraResult').attr('src', 'data:image/' + type + ';base64,' + base64String);
    } catch(e) {
        console.log(e.stack);
    }
}


function setData() {
    var key = $('input[name="key"]').val();
    var value = $('input[name="value"]').val();
    $.DhcIf.setData(key, value);
}

function getData() {
    var key = $('#getData input[name="key"]').val();
    $.DhcIf.getData(key, "getDataCallback");
}

function getDataCallback(data) {
    console.log('getDataCallback -> ' + data);
    var joinDate = JSON.parse(data).joinDate;
    console.log(' - joinDate: ' + joinDate);
    $('#getDataResult').text(data);
}

function getLastUrlCallback(data) {
    console.log('getLastUrlCallback -> ' + data);
    var obj = JSON.parse(data);
    $('#openWebView input[name="url"]').val(obj.lastUrl);
}


function registerPushService() {
    $('#registerPushServiceResult').text("");
    var cuid = $('#push input[name="cuid"]').val();
    var cname = $('#push input[name="cname"]').val();
    $.DhcIf.registerPushService(cuid, cname, "registerPushServiceCallback");
}

function registerPushServiceCallback(result) {
    $('#registerPushServiceResult').text(result);
}

function releasePushService() {
    $('#releasePushServiceResult').text("");
    $.DhcIf.releasePushService("releasePushServiceCallback");
}

function releasePushServiceCallback(result) {
    $('#releasePushServiceResult').text(result);
}

function checkExternalApp() {
    $('#checkExternalAppResult').text('');
    var appName = $('#externals input[name="app"]:checked').val();
    $.DhcIf.checkExternalApp(appName, "checkExternalAppCallback");
}

function checkExternalAppCallback(data) {
    console.log('checkExternalAppCallback -> ' + data);
    $('#checkExternalAppResult').text(data);
}


function getContactList() {
    $.DhcIf.requestPermission("CONTACT", "getContactList_chkPermission");
}

function getContactList_chkPermission(data) {
    var grantedYn = JSON.parse(data).grantedYn;
    if (grantedYn == "Y") {
        $.DhcIf.getContactList("getContactListResult");
    } else {
        console.log(">>>> 연락처 권한 없음");
    }
}

function getContactListResult(data) {
    try {
        var contactList = JSON.parse(data).contactList;
        contactList.forEach(function(contact) {
            console.log("- " + JSON.stringify(contact));
        });
    } catch(e) {
        console.log(e.stack);
    }
}

function setVisibleARS() {
    var set = $('#visibleARS input[name="set"]:checked').val();
    $.DhcIf.setVisibleARS(set, "setVisibleARSCallback");
}

function setVisibleARSCallback(data) {
    console.log('setVisibleARSCallback -> ' + data);
    var obj = JSON.parse(data);
    console.log('setVisibleARSCallback -> result :' + obj.result);
    console.log('setVisibleARSCallback -> isSet :' + obj.data.isSet);
}

function checkVisibleARS() {
    $.DhcIf.checkVisibleARS("setVisibleARSCallback");
}

function shareLink() {
    var url = $('#share input[name="link"]').val();
    $.DhcIf.shareLink(url);
}

function getDHCWebViews() {
    $.DhcIf.getDHCWebViews("getDHCWebViewsCallback");
}

function getDHCWebViewsCallback(data) {
    console.log('getDHCWebViewsCallback -> ' + data);
    try {
        var webViews = JSON.parse(data).webViews;
        webViews.forEach(function(data) {
            console.log("- " + JSON.stringify(data));
        });
    } catch (e) {
        console.log(e.stack);
    }
}

function receivePush() {
    var sendType = $('#alarmTest input[name="send-type"]').val();
    var detailYn = $('#alarmTest input[name="detail-yn"]').val();
    var targetLink = $('#alarmTest input[name="target-link"]').val();
    var linkType = $('#alarmTest input[name="link-type"]:checked').val();
    var imgUrl = $('#alarmTest input[name="img-url"]').val();
    $.DhcIf.receivePush(sendType, detailYn, targetLink, linkType, imgUrl);
}

function reqAuthNum() {
    var phoneNum = $('#sms input[name="reqAuthNum"]').val();
    $.DhcIf.reqAuthNum(phoneNum);
}

function fn_getAuthNumber_callback(authNum) {
    console.log("authNum: " + authNum);
    $("#reqAuthNumResult").text(authNum);
}


function getCurrentLocation() {
    $.GcIf.getCurrentLocation("getCurrentLocationCallback");
}

function getCurrentLocationCallback(data) {
    console.log('getCurrentLocationCallback -> ' + data);
    var obj = JSON.parse(data);
    console.log("- latitude: " + obj.latitude);
    console.log("- longitude: " + obj.longitude);
    $('#currentLocationResult').text(data);
}

function findRoute() {
    var fromCoord = $('#gccare input[name="from"]').val();
    var toCoord = $('#gccare input[name="to"]').val();
    $.GcIf.findRoute(fromCoord, toCoord);
}

function bindReadHealthTime() {
    try {
        var startTime = convertDateFormat(new Date(new Date().getTime() - (7 * 24 * 60 * 60 * 1000)));
        var endTime = convertDateFormat(new Date());
        $('#health input[name="startTime"]').val(startTime);
        $('#health input[name="endTime"]').val(endTime);
    } catch(e) {
        console.log(e.stack);
    }
}

function convertDateFormat(date) {
    var year = date.getFullYear();
    var month = ('0' + (date.getMonth() + 1)).slice(-2); // 월은 0부터 시작하므로 +1 필요
    var day = ('0' + date.getDate()).slice(-2);
    var hours = ('0' + date.getHours()).slice(-2);
    var minutes = ('0' + date.getMinutes()).slice(-2);
    return year + month + day + hours + minutes;
}


$(document).ready(function(){
    $.DhcIf.getData("lastUrl", "getLastUrlCallback");

    bindReadHealthTime();

    // 헤더 클릭하면 접고 펴는 기능...
    $("article > header").click(function() {
        $(this).parent().find(" > div").slideToggle("fast", function() {
            if ($(this).is(':visible')) {
                $(this).parent().attr("class","");
            } else {
                $(this).parent().attr("class","close");
            }
        });
    });
    $("h1").click(function() {
        if ($(this).hasClass("on") == false) {
            $(this).attr("class","on");
        } else {
            $(this).attr("class","off");
        }
    });

});