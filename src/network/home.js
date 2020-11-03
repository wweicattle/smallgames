import Vue from "vue";
import request from "./axios"
import {
  tokens
} from "utils/token"
// 用户授权会返回token
let token = window.localStorage.getItem("token");
console.log(token);
// 获取用户基本信息
// export function getUserInfo(token) {
//   return request.get(`/api/auth/getWXUserInfo?token=${token}`);
// }

// 获取用户token
export function getToken() {
  let token = window.localStorage.getItem("token");
  return request.post(`/api/game/getWXUser?token=${token}`);
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
//     url: "/api/game/getGameResult",
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




export function getUser(url) {
  let arr = [{
    key: "wxid",
    value: 42166
  }, {
    key: "gameId",
    value: 15

  }]
  // 根据接口生成token，sign，timestamp
  let {
    sign,
    timestamp
  } = tokens(arr);
  console.log(token);
  console.log(sign);
  console.log(timestamp);

  return request({
    url: "/api/game/getUser?wxid=42164&gameId=15",
    method: "post",
    headers: {
      token,
      sign,
      timestamp
    },
  }).then(da => {
    console.log(da);
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
//     url: "/api/game/getUser?wxid=42164&gameId=15",
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
//     url: "/api/game/getUser?wxid=42164&gameId=15",
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
//     url: "/api/game/getUser?wxid=42164&gameId=15",
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
//     url: "/api/game/getUser?wxid=42164&gameId=15",
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
//     url: "/api/game/getUser?wxid=42164&gameId=15",
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
//     url: "/api/game/getUser?wxid=42164&gameId=15",
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
//     url: "/api/game/getUser?wxid=42164&gameId=15",
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
//     url: "/api/game/getUser?wxid=42164&gameId=15",
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
