import Vue from "vue";
import request from "./axios"

export function getUserInfo() {
    // let token="2GS0oWkjMXnmD4dfhHtB"
  return request.get("/api/auth/getWXUserInfo?token=NX7X0H2qBXDCzm5iv8NP");
}
export function reauest(url) {
  return request.post("/api/game/getUser?wxid=42164&gameId=15").then(da=>{
    console.log(da);
  })
}
reauest();
// export function reauest(url) {
//   return request(url)
// }
