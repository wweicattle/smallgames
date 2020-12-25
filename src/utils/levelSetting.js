// 进行关卡设置
const level = [{
    0: {
      scoreNums: 40,
      stepsScore: 10,
      timeSet: "1.0s",
      photos: {
        backImage: "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel/homeback.png",
        footerImage: `https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel/footerImg.png`,
        houseImageArr: [
          "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel/house1.png",
          // "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel/house2.png",
        ]
      }
    }
  },
  {
    1: {
      scoreNums: 80,
      stepsScore: 20,
      timeSet: "0.9s",
      photos: {
        backImage: "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel2/homeback.png",
        footerImage: `https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel2/footerImg.png`,
        houseImageArr: [
          "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel2/house1.png",
          "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel2/house2.png",
        ]
      }
    }
  },
  {
    2: {
      scoreNums: 150,
      stepsScore: 30,
      timeSet: "0.8s",
      photos: {
        backImage: "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel3/homeback.png",
        footerImage: `https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel3/footerImg.png`,
        houseImageArr: [
          "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel3/house1.png",
          "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel3/house2.png",
          "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel3/house3.png",
          "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel3/house4.png",
          "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel3/house5.png",

        ]
      }
    }
  },
  {
    3: {
      scoreNums: 240,
      stepsScore: 40,
      timeSet: "0.7s",
      photos: {
        backImage: "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel4/homeback.png",
        footerImage: `https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel4/footerImg.png`,
        houseImageArr: [
          "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel4/house1.png",
          "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel4/house2.png",
          "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel4/house3.png",
          "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel4/house4.png",
          "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel4/house5.png",

        ]
      }
    }
  },
  {
    4: {
      scoreNums: 300,
      stepsScore: 50,
      timeSet: "0.6s",
      photos: {
        backImage: "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel5/homeback.png",
        footerImage: `https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel5/footerImg.png`,
        houseImageArr: [
          "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel5/house1.png",
          "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel5/house2.png",
          "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel5/house3.png",
          "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel5/house4.png",
          "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel5/house5.png",
          "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel5/house6.png",
          "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel5/house7.png",



        ]
      }
    }
  },
  {
    5: {
      scoreNums: 400,
      stepsScore: 50,
      timeSet: "0.5s",
      photos: {
        backImage: "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel6/homeback.png",
        footerImage: `https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel6/footerImg.png`,
        houseImageArr: [
          "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel6/house1.png",
          "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel6/house2.png",
          "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel6/house3.png",
          "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel6/house4.png",
          "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel6/house5.png",

        ]
      }
    }
  },
  {
    6: {
      scoreNums: 100,
      stepsScore: 20,
      timeSet: "0.85s",
      photos: {
        backImage: "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel5/homeback.png",
        footerImage: `https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/yearTwo/year-back.png`,
        houseImageArr: [
          "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/yearTwo/year-one.png",
          "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/yearTwo/year-two.png",
          "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/yearTwo/year-three.png",
          "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/yearTwo/year-four.png",
        ]
      }
    }
  },
  {
    7: {
      scoreNums: 100,
      stepsScore: 20,
      timeSet: "0.85s",
      photos: {
        backImage: "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/firstLevel/homeback.png",
        footerImage: `https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/yearOne/year-back.png`,
        houseImageArr: [
          "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/yearOne/year-one.png",
          "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/yearOne/year-two.png",
          "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/yearOne/year-three.png",
          "https://oos-fj2.ctyunapi.cn/lilanz/2020flh/game/img/yearOne/year-four.png",
        ]
      }
    }
  },



]

export default level;
