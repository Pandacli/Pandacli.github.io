importClass(com.huawei.livedata.lambdaservice.livedataprovider.HttpClient);
importClass(com.huawei.livedata.lambdaservice.livedataprovider.ApiClient);
importClass(com.huawei.livedata.lambdaservice.util.CacheUtils);
importClass(com.huawei.livedata.lambdaservice.config.RomaWebConfig);

function excute(data) {
  var obj = JSON.parse(data);

  var errorResult = {};

  var message = validParams(obj.body);
  return message;
  if ("" !== message) {
    errorResult.resultCode = 4;
    errorResult.cameraBriefInfos = null;
    errorResult.audioBriefInfos = null;
    errorResult.alarmBriefInfos = null;
    errorResult.cameraBriefInfosV2 = null;
    errorResult.shadowCameraBriefInfos = null;
    errorResult.cameraBriefExInfos = null;
    return errorResult;
  }
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



  var size =obj.body.size;
  var no =obj.body.no;
  var sort=obj.body.sort;
  var ordername = obj.body.ordername;
  var url = "";
  if (southUrl !== "" && southUrl !== null) {
    url = southUrl + "/sdk_service/rest/facerepositories?size=" + size + "&no=" + no + "&sort=" + sort +"&ordername=" + ordername;
  } else {
    url = "https://" + host + "/sdk_service/rest/facerepositories?size=" + size + "&no=" + no + "&sort=" + sort +"&ordername=" + ordername;
  }


  try {
    // 接口调用正常
    result = httpExecutor.get(url, JSON.stringify(headers));
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
    return result.body().string();
  } catch (exception) {
    errorResult.resultCode = -1;
    errorResult.cameraBriefInfos = null;
    errorResult.audioBriefInfos = null;
    errorResult.alarmBriefInfos = null;
    errorResult.cameraBriefInfosV2 = null;
    errorResult.shadowCameraBriefInfos = null;
    errorResult.cameraBriefExInfos = null;
    return JSON.stringify(errorResult);
  }
}

// 校验参数
function validParams(params) {
  var message = "";
  var reg;
  if (!Object.prototype.hasOwnProperty.call(params, "sort")) {
    message = "sort is required.";
    return message;
  }
  if (!Object.prototype.hasOwnProperty.call(params, "ordername")) {
    message = "ordername is required.";
    return message;
  }
  if (!Object.prototype.hasOwnProperty.call(params, "size")) {
    // var size = params.size;
    // if (Object.prototype.hasOwnProperty.call(size, "")) {
    //   reg = /^([1-9][0-9]{0,2}|1000)$/;
    //   if (!reg.test(size.size)) {
    //     message = "size is invalid.size value range is 1~1000.";
    //     return message;
    //   }
    // } else {
      message = "size is required.";
      return message;
  }
   if (!Object.prototype.hasOwnProperty.call(params, "no")) {
    message = "no is required.";
    return message;
  }
  return message;
}