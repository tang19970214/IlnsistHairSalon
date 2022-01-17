<template>
  <section class="w-full min-h-screen">
    <div class="w-full mx-auto text-black text-opacity-70">
      <!-- header -->
      <div class="w-full p-5 box-border bg-primary bg-opacity-60">
        <div class="w-full flex flex-col items-center justify-center bg-white p-5 rounded-lg">
          <div class="w-full flex items-center justify-center flex-wrap gap-2 tracking-widest">
            <img src="~/static/images/reservation/line.png" alt="LINE" width="80px">
            <h2 class="text-xl lg:text-3xl">立刻<strong>線上預約</strong></h2>
            <div class="relative">
              <h3 class="text-lg lg:text-2xl">讓你變美很簡單</h3>
              <span class="absolute bottom-1 right-0 w-[8.5rem] lg:w-44 h-2 bg-[#F1d25b] bg-opacity-40"></span>
            </div>
          </div>

          <div class="w-full mt-4 flex flex-col lg:flex-row items-center justify-center lg:justify-around text-gray-500">
            <div class="flex items-center justify-around">
              <div class="relative w-[25%] lg:w-[20%]" v-for="item in iconList.left" :key="item.id">
                <img class="w-full" :src="require(`~/static/images/reservation/${item.imgName}.png`)" :alt="item.title">
                <div class="absolute -bottom-3 w-full text-center">
                  <p class="text-gray-500 text-sm lg:text-base whitespace-nowrap truncate">{{item.title}}</p>
                </div>
              </div>
            </div>
            <ul class="lg:text-lg tracking-wider whitespace-nowrap mt-4 lg:mt-0 lg:pt-5">
              <li>簡單操作立刻預約</li>
              <li>詳細設計師群介紹</li>
              <li>首次加入領取100元禮卷</li>
            </ul>
            <div class="flex items-center justify-around">
              <div class="relative w-[25%] lg:w-[20%]" v-for="item in iconList.right" :key="item.id">
                <img class="w-full" :src="require(`~/static/images/reservation/${item.imgName}.png`)" :alt="item.title">
                <div class="absolute -bottom-3 w-full text-center">
                  <p class="text-gray-500 text-sm lg:text-base whitespace-nowrap truncate">{{item.title}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- process -->
      <div class="w-full md:w-4/5 mx-auto px-4 md:px-0 mt-6 mb-10 flex flex-col md:flex-row items-center gap-3">
        <div class="w-40 flex flex-col items-center justify-center gap-1 whitespace-nowrap">
          <span class="w-36 h-36 mb-2 rounded-full shadow-lg bg-primary bg-opacity-80 flex items-center justify-center">
            <img class="w-32" src="~/static/images/LOGO-dark.png" alt="">
          </span>
          <label>Insist Hair Salon</label>
          <p>線上預約查詢專用</p>
        </div>

        <div class="flex items-center flex-wrap gap-2">
          <div class="border border-primary rounded-xl bg-white p-2 md:p-4 text-primary" v-for="(title, idx) in stepList" :key="idx">
            <strong class="md:text-lg lg:text-xl">{{idx+1}}. {{title}}</strong>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      stepList: [
        "加入ＬＩＮＥ",
        "註冊建立新帳戶",
        "簡訊驗證",
        "完成開通",
        "線上預約",
      ],
      iconList: {
        left: [
          { id: 1, imgName: "onlineInquiry", title: "線上預約" },
          { id: 2, imgName: "inquiryAppointment", title: "查詢預約" },
          { id: 3, imgName: "1on1", title: "1對1諮詢" },
          { id: 4, imgName: "officialWebsite", title: "官方網站" },
        ],
        right: [
          { id: 1, imgName: "FB", title: "Facebook" },
          { id: 2, imgName: "IG", title: "Instagram" },
          { id: 3, imgName: "potionDye", title: "藥水染劑" },
          { id: 4, imgName: "scalpPhysiotherapy", title: "頭皮理療" },
        ],
      },
    };
  },
};
</script>