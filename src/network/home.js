import Vue from "vue";
import request from "./axios"
import qs from 'qs';

import {
  tokens
} from "utils/token"
// 用户授权会返回token
let token = window.localStorage.getItem("token");
// 小游戏编号
let gameId = 15;
// 获取用户基本信息
// export function getUserInfo(token) {
//   return request.get(`/auth/getWXUserInfo?token=${token}`);
// }

// 获取用户token
export function getToken(token) {
  return request.post(`/game/getWXUser?token=${token}`);
}

// 关卡结束上传分数
// export function getGameResult(param) {
//   let {
//     wxid,
//     gameId,
//     checkPoint,
//     curScore,
//     result
//   } = param
//   let arr = [{
//       key: "wxid",
//       value: wxid
//     }, {
//       key: "gameId",
//       value: gameId
//     },
//     {
//       key: "checkPoint",
//       value: checkPoint
//     },
//     {
//       key: "curScore",
//       value: curScore
//     },
//     {
//       key: "result",
//       value: result
//     }
//   ]
//   // 用户授权会返回token
//   // let token = window.localStorage.getItem("token");
//   // console.log(token);
//   let {
//     sign,
//     timestamp,
//     token
//   } = tokens(arr);

//   return request({
//     url: "/game/getGameResult",
//     method: "post",
//     headers: {
//       token,
//       sign,
//       timestamp
//     },
//     params: param
//   }).then(da => {
//     console.log(da);
//   })
// }



// 获取用户信息
export function getUser(obj) {
  // let wxid = window.localStorage.getItem("wxid")
  // let token;
  // document.cookie.split(";").forEach(val => {
  //   if (val.split("=")[0] == "tokens") {
  //     token = val.split("=")[1];
  //   }
  // })
  let token = obj.token;
  let arr = [{
    key: "wxid",
    value: obj.wxid
  }, {
    key: "gameId",
    value: gameId

  }]
  // 根据接口生成token，sign，timestamp
  let {
    sign,
    timestamp
  } = tokens(arr, token);

  return request({
    url: "/game/getUser",
    params: {
      wxid: obj.wxid,
      gameId: 15
    },
    method: "post",
    headers: {
      token,
      sign,
      timestamp
    },
  })
}
// 判断用户是否是内部人员
export function getUserState(code) {
  let wxid = window.localStorage.getItem("wxid")
  let params = {
    wxid,
    gameId,
    code
  }
  return request.post("/game/getCompanyUserTag", qs.stringify(params));
}


// 游戏结束进行上传分数 
export function getGameResult(params) {
  let wxid = window.localStorage.getItem("wxid")
  let token=window.localStorage.getItem("newToken");
  // document.cookie.split(";").forEach(val => {
  //   if (val.split("=")[0] == "tokens") {
  //     token = val.split("=")[1];
  //   }
  // })
  // console.log("token------------",token);
  let arr = [{
      key: "wxid",
      value: wxid
    }, {
      key: "gameId",
      value: gameId
    }, {
      key: "checkPoint",
      value: params.checkPoint
    }, {
      key: "curScore",
      value: params.curScore
    },
    {
      key: "result",
      value: params.result
    }
  ]
  // 根据接口生成token，sign，timestamp
  let {
    sign,
    timestamp
  } = tokens(arr, token);
  console.log(token);
  console.log(sign);
  console.log(timestamp);

  return request({
    url: "/game/getGameResult",
    params: {
      wxid,
      gameId,
      ...params
    },
    method: "post",
    headers: {
      token,
      sign,
      timestamp
    },
  })
}



// 开始抽奖 
export function goToPrize(params) {
  let token=window.localStorage.getItem("newToken");
  let wxid = window.localStorage.getItem("wxid")
  let arr = [{
      key: "wxid",
      value: wxid
    }, {
      key: "gameId",
      value: gameId
    }, {
      key: "checkPoint",
      value: params.checkPoint
    },
    {
      key: "userid",
      value: params.userid
    }
  ]
  // 根据接口生成token，sign，timestamp
  let {
    sign,
    timestamp
  } = tokens(arr, token);


  return request({
    url: "/game/goToPrize",
    params: {
      wxid,
      checkPoint: params.checkPoint,
      userid: params.userid,
      gameId
    },
    method: "post",
    headers: {
      token,
      sign,
      timestamp
    },
  })
}


// 排行榜获取
export function getRankList() {
 

  let token=window.localStorage.getItem("newToken");

  let wxid = window.localStorage.getItem("wxid")
  let arr = [{
    key: "wxId",
    value: wxid
  }, {
    key: "gameId",
    value: gameId
  }, {
    key: "limit",
    value: 100
  }, ]
  // 根据接口生成token，sign，timestamp
  let {
    sign,
    timestamp
  } = tokens(arr, token);


  return request({
    url: "/game/getRankList",
    params: {
      wxid,
      gameId,
      limit: 100
    },
    method: "post",
    headers: {
      token,
      sign,
      timestamp
    },
  })
}

// 获取中奖名单
export function getPrizeList() {
  let token=window.localStorage.getItem("newToken");

  let arr = [{
    key: "gameId",
    value: gameId
  }, {
    key: "size",
    value: 100
  }, ]
  // 根据接口生成token，sign，timestamp
  let {
    sign,
    timestamp
  } = tokens(arr, token);


  return request({
    url: "/game/getPrizeList",
    params: {
      gameId,
      size: 100
    },
    method: "post",
    headers: {
      token,
      sign,
      timestamp
    },
  })
}


// 判断用户是否是内部人员
export function getShareContent() {
  let wxid = window.localStorage.getItem("wxid");
  let {origin,pathname}=window.location;;
  let params = {
    wxid,
    url: `${origin}${pathname}`
  }
  return request.post("/game/getWXSign", qs.stringify(params));
}

