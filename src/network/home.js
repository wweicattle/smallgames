import Vue from "vue";
import request from "./axios"
import {
  tokens
} from "utils/token"
// 用户授权会返回token
let token = window.localStorage.getItem("token");

let gameId = 15;
console.log(token);
// 获取用户基本信息
// export function getUserInfo(token) {
//   return request.get(`/auth/getWXUserInfo?token=${token}`);
// }

// 获取用户token
export function getToken(token) {
  return request.post(`/game/getWXUser?token=${token}`);
}

// // 关卡结束上传分数
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
export function getUser() {
  let wxid = window.localStorage.getItem("wxid")
  let token = window.localStorage.getItem("tokens")
  let arr = [{
    key: "wxid",
    value: wxid
  }, {
    key: "gameId",
    value: gameId

  }]
  // 根据接口生成token，sign，timestamp
  let {
    sign,
    timestamp
  } = tokens(arr, token);
  console.log(token);
  console.log(sign);
  console.log(timestamp);

  return request({
    url: "/game/getUser",
    params: {
      wxid,
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
// export function getUserState(){
//   return request.get("/game/wxCompanyOauth?backUrl=http://tm.lilanz.com");
// }

// getUserState().then(da=>{
//   console.log(da);
// })
// 游戏结束进行上传分数 
export function getGameResult(params) {
  let wxid = window.localStorage.getItem("wxid")
  let token = window.localStorage.getItem("tokens")
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
export function goToPrize() {
  let configKey = 3;
  let token = window.localStorage.getItem("tokens")
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


  return request({
    url: "/game/goToPrize",
    params: {
      wxid,
      configKey,
    },
    method: "post",
    headers: {
      token,
      sign,
      timestamp
    },
  })
}
// export function getPrizeList(url) {
//   let arr = [{
//     key: "gameId",
//     value: 14
//   }, {
//     key: "size",
//     value: 3

//   }]
//   // 根据接口生成token，sign，timestamp
//   let {
//     token,
//     sign,
//     timestamp
//   } = tokens(arr);
//   console.log(token);
//   console.log(sign);
//   console.log(timestamp);

//   return request({
//     url: "/game/getUser?wxid=42164&gameId=15",
//     method: "post",
//     headers: {
//       token,
//       sign,
//       timestamp
//     },
//   }).then(da => {
//     console.log(da);
//   })
// }

// export function getMyPrize(url) {
//   let arr = [{
//     key: "wxid",
//     value: 42164
//   }, {
//     key: "gameId",
//     value: 15

//   }]
//   // 根据接口生成token，sign，timestamp
//   let {
//     token,
//     sign,
//     timestamp
//   } = tokens(arr);
//   console.log(token);
//   console.log(sign);
//   console.log(timestamp);

//   return request({
//     url: "/game/getUser?wxid=42164&gameId=15",
//     method: "post",
//     headers: {
//       token,
//       sign,
//       timestamp
//     },
//   }).then(da => {
//     console.log(da);
//   })
// }
// export function getMyPrize(url) {
//   let arr = [{
//     key: "wxid",
//     value: 42164
//   }, {
//     key: "gameId",
//     value: 15

//   }]
//   // 根据接口生成token，sign，timestamp
//   let {
//     token,
//     sign,
//     timestamp
//   } = tokens(arr);
//   console.log(token);
//   console.log(sign);
//   console.log(timestamp);

//   return request({
//     url: "/game/getUser?wxid=42164&gameId=15",
//     method: "post",
//     headers: {
//      token,
//      sign,
//      timestamp
//     },
//   }).then(da => {
//     console.log(da);
//   })
// }
// export function getMyPrize(url) {
//   let arr = [{
//     key: "wxid",
//     value: 42164
//   }, {
//     key: "gameId",
//     value: 15

//   }]
//   // 根据接口生成token，sign，timestamp
//   let {
//     token,
//     sign,
//     timestamp
//   } = tokens(arr);
//   console.log(token);
//   console.log(sign);
//   console.log(timestamp);

//   return request({
//     url: "/game/getUser?wxid=42164&gameId=15",
//     method: "post",
//     headers: {
//      token,
//      sign,
//      timestamp
//     },
//   }).then(da => {
//     console.log(da);
//   })
// }
// export function getMyPrize(url) {
//   let arr = [{
//     key: "wxid",
//     value: 42164
//   }, {
//     key: "gameId",
//     value: 15

//   }]
//   // 根据接口生成token，sign，timestamp
//   let {
//     token,
//     sign,
//     timestamp
//   } = tokens(arr);
//   console.log(token);
//   console.log(sign);
//   console.log(timestamp);

//   return request({
//     url: "/game/getUser?wxid=42164&gameId=15",
//     method: "post",
//     headers: {
//      token,
//      sign,
//      timestamp
//     },
//   }).then(da => {
//     console.log(da);
//   })
// }

// export function getMyPrize(url) {
//   let arr = [{
//     key: "wxid",
//     value: 42164
//   }, {
//     key: "gameId",
//     value: 15

//   }]
//   // 根据接口生成token，sign，timestamp
//   let {
//     token,
//     sign,
//     timestamp
//   } = tokens(arr);
//   console.log(token);
//   console.log(sign);
//   console.log(timestamp);

//   return request({
//     url: "/game/getUser?wxid=42164&gameId=15",
//     method: "post",
//     headers: {
//      token,
//      sign,
//      timestamp
//     },
//   }).then(da => {
//     console.log(da);
//   })
// }
// export function getMyPrize(url) {
//   let arr = [{
//     key: "wxid",
//     value: 42164
//   }, {
//     key: "gameId",
//     value: 15

//   }]
//   // 根据接口生成token，sign，timestamp
//   let {
//     token,
//     sign,
//     timestamp
//   } = tokens(arr);
//   console.log(token);
//   console.log(sign);
//   console.log(timestamp);

//   return request({
//     url: "/game/getUser?wxid=42164&gameId=15",
//     method: "post",
//     headers: {
//      token,
//      sign,
//      timestamp
//     },
//   }).then(da => {
//     console.log(da);
//   })
// }
// export function getMyPrize(url) {
//   let arr = [{
//     key: "wxid",
//     value: 42164
//   }, {
//     key: "gameId",
//     value: 15

//   }]
//   // 根据接口生成token，sign，timestamp
//   let {
//     token,
//     sign,
//     timestamp
//   } = tokens(arr);
//   console.log(token);
//   console.log(sign);
//   console.log(timestamp);

//   return request({
//     url: "/game/getUser?wxid=42164&gameId=15",
//     method: "post",
//     headers: {
//      token,
//      sign,
//      timestamp
//     },
//   }).then(da => {
//     console.log(da);
//   })
// }

// reauest();
// export function reauest(url) {
//   return request(url)
// }
