importClass(com.huawei.livedata.lambdaservice.livedataprovider.HttpClient);
importClass(com.huawei.livedata.lambdaservice.livedataprovider.ApiClient);
importClass(com.huawei.livedata.lambdaservice.util.CacheUtils);
importClass(com.huawei.livedata.lambdaservice.config.RomaWebConfig);
importClass(com.huawei.livedata.util.JSON2XMLHelper)
function excute(data) {
  var obj = JSON.parse(data);

  var errorResult = {};
  // var message = validParams(obj.body);
  // if ("" !== message) {
  //   errorResult.resultCode = 4;
  //   errorResult.cameraBriefInfos = null;
  //   errorResult.audioBriefInfos = null;
  //   errorResult.alarmBriefInfos = null;
  //   errorResult.cameraBriefInfosV2 = null;
  //   errorResult.shadowCameraBriefInfos = null;
  //   errorResult.cameraBriefExInfos = null;
  //   return errorResult;
  // }
  return doMain(obj, errorResult);
}

function doMain(obj, errorResult) {
  var httpExecutor = new HttpClient(false);
  var cache = new CacheUtils();
  var appId = obj.env.$appId;
  // 获取channel值确定环境信息
  var channel = "";
  if (Object.prototype.hasOwnProperty.call(obj, "headers")
    && Object.prototype.hasOwnProperty.call(obj.headers, "channel") && obj.headers.channel !== ""
    && obj.headers.channel !== null) {
    channel = obj.headers.channel;
  } else if ((Object.prototype.hasOwnProperty.call(obj, "url")
    && Object.prototype.hasOwnProperty.call(obj.url, "channel") && obj.url.channel !== ""
    && obj.url.channel !== null)) {
    channel = obj.url.channel;
  }
  // 获取配置项
  var channelArray = channel.split("_");
  var channelId = "";
  if (channelArray.length > 1) {
    channelId = "_" + channelArray[1];
  }
  var host = RomaWebConfig.getAppConfig("southIP" + channelId);
  var port = RomaWebConfig.getAppConfig("southPort" + channelId);
  var southUrl = RomaWebConfig.getAppConfig("southUrl" + channelId);

  host = host + ":" + port;
  var cookie = "";
  try {
    if (channelId == "") {
      cookie = cache.getLocalCache("VCN:JESSIONID:" + appId);
    } else {
      cookie = cache.getLocalCache("VCN:JESSIONID:" + appId + channelArray[1]);
    }
  } catch (exception) {
    cookie = "";
  }

  return invokeApi(cookie, obj, southUrl, host, httpExecutor, errorResult);
}

function invokeApi(cookie, obj, southUrl, host, httpExecutor, errorResult) {
  var headers = {
    "Cookie": cookie
  };

  var result = "";
   var params = {};
 if (Object.prototype.hasOwnProperty.call(obj.body, "request")) {
        params.request = obj.body.request;
    }
  
  var url = "";
  if (southUrl !== "" && southUrl !== null) {
    url = southUrl + "/sdk_service/rest/facerepositories"
  } else {
    url = "https://" + host + "/sdk_service/rest/facerepositories"
  }

//var reqbody = json2xml(params);
return url+reqbody;
    // 接口调用正常
    var result = httpExecutor.callPostAPI(url, JSON.stringify(headers), reqbody, "application/json");
    if (result === null || result === "") {
      errorResult.resultCode = -1;
      errorResult.cameraBriefInfos = null;
      errorResult.audioBriefInfos = null;
      errorResult.alarmBriefInfos = null;
      errorResult.cameraBriefInfosV2 = null;
      errorResult.shadowCameraBriefInfos = null;
      errorResult.cameraBriefExInfos = null;
      return JSON.stringify(errorResult);
    }
   return resultFormat(result);
}


// 返回结果format
function resultFormat(result) {
    var resJsonString = (JSON2XMLHelper.XML2JSON(result));
    return resJsonString;
    if (resJsonString === "" || resJsonString === "{}") {
        var errorResult = {
            "response": {
                "result": {
                    "code": "-1",
                    "errmsg": "convert xml to json fail: " + result
                }
            }
        };
        return JSON.stringify(errorResult);
    } else {
        return resJsonString;
    }
}

function json2xml(obj) {
    return _json2xml('request', obj).replace('<request>', '').replace(
        '</request>', '');
}

function _json2xml(key, obj) {
    var xml = '';
    if (Array.isArray(obj)) {
        for (var i = 0; i < obj.length; ++i) {
            xml += _json2xml(key, obj[i]);
        }
        return xml;
    } else if (typeof obj === 'object') {
        for (var _key in obj) {
            xml += _json2xml(_key, obj[_key]);
        }
        return _concat(key, xml);
    } else {
        return _concat(key, obj);
    }
}

function _concat(key, item) {
    return '<' + key + '>' + item + '</' + key + '>';
}

function validParams(params) {
    var message = "";
    // 请求
    if (requestCheck(params, "request")) {
        message = "request is required.";
        return message;
    }

    // 名单库
    if (requestCheck(params.request, "repository")) {
        message = "repository is required.";
        return message;
    }

    // type
    if (requestCheck(params.request.repository, "type")) {
        message = "type is required.";
        return message;
    }
    if (params.request.repository.type !== "2" && params.request.repository.type !== "3" && params.request.repository.type !== "4") {
        message = "type is invalid.type value range is 2~4.";
        return message;
    }

    // 组名
    if (requestCheck(params.request.repository, "name")) {
        message = "name is required.";
        return message;
    }
    if ((params.request.repository.name).length < 1 || (params.request.repository.name).length > 255) {
        message = "name is invalid.name length range is 1~255.";
        return message;
    }
    // .·-空格不能在字段的首
    var reg = /^([\s　]|[ ]|[.·-])$/;
    if (reg.test(params.request.repository.name.substring(0, 1))) {
        message = "name is invalid.space.·- cannot be at the beginning and end of a field.";
        return message;
    }

    // 描述
    if (!requestCheck(params.request.repository, "description")) {
        if ((params.request.repository.description).length < 1 || (params.request.repository.description).length > 255) {
            message = "description is invalid.description length range is 1~255.";
            return message;
        }
    }
    // 域模式
    if (!requestCheck(params.request.repository, "scheme")) {
        if (params.request.repository.scheme !== "1" && params.request.repository.scheme !== "2") {
            message = "scheme is invalid.scheme value range is 1~2.";
            return message;
        }
    }
    // 用户自定义
    if (!requestCheck(params.request.repository, "tag")) {
        if ((params.request.repository.tag).length < 1 || (params.request.repository.tag).length > 255) {
            message = "tag is invalid.tag length range is 1~255.";
            return message;
        }
    }
    return message;
}

// 必填校验
function requestCheck(params, key) {
    var flag = false;
    if (!Object.prototype.hasOwnProperty.call(params, key) || isNull(params[key])) {
        flag = true;
    }
    return flag;
}

// 判定value值是否为空
function isNull(value) {
    var flag = false;
    if (value == null || value === "") {
        flag = true;
    }
    return flag;
}