<script lang="ts" setup>
useSeoMeta({
  title: "預約方式",
  description: "預約方式",
  ogTitle: "預約方式",
  ogDescription: "預約方式",
});

const stepList = ["加入Line@", "進入聊天界面", "輸入：可以預約嗎？", "洽談後成功預約"];
const iconList = {
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
}
</script>

<template>
  <section class="w-full min-h-screen">
    <div class="w-full mx-auto text-black text-opacity-70">
      <!-- header -->
      <div class="w-full p-5 bg-#E8A29E/60">
        <div class="w-full flex flex-col items-center justify-center bg-white p-5 rounded-lg">
          <div class="w-full flex items-center justify-center flex-wrap gap-2 tracking-widest">
            <img src="/images/reservation/line.png" alt="LINE" width="80px" />
            <h2 class="text-xl lg:text-3xl">立刻<strong>線上預約</strong></h2>
            <div class="relative">
              <h3 class="text-lg lg:text-2xl">讓你變美很簡單</h3>
              <span class="absolute bottom-1 right-0 w-8.5rem lg:w-44 h-2 bg-#F1d25b/40"></span>
            </div>
          </div>

          <div
            class="w-full mt-4 flex flex-col lg:flex-row items-center justify-center gap-3 lg:justify-around text-gray-500">
            <div class="flex items-center justify-around">
              <div class="relative w-25% lg:w-20%" v-for="item in iconList.left" :key="item.id">
                <img class="w-full" :src="`/images/reservation/${item.imgName}.png`" :alt="item.title" />
                <div class="absolute -bottom-3 w-full text-center">
                  <p class="text-gray-500 text-sm lg:text-base whitespace-nowrap truncate">{{ item.title }}</p>
                </div>
              </div>
            </div>
            <ul class="lg:text-lg tracking-wider whitespace-nowrap mt-4 lg:mt-0 lg:pt-5">
              <li>簡單操作立刻預約</li>
              <li>首次加入領取100元禮卷</li>
            </ul>
            <div class="flex items-center justify-around">
              <div class="relative w-25% lg:w-20%" v-for="item in iconList.right" :key="item.id">
                <img class="w-full" :src="`/images/reservation/${item.imgName}.png`" :alt="item.title" />
                <div class="absolute -bottom-3 w-full text-center">
                  <p class="text-gray-500 text-sm lg:text-base whitespace-nowrap truncate">{{ item.title }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- text process -->
      <div class="w-full md:w-4/5 mx-auto px-4 md:px-0 mt-6 flex flex-col md:flex-row items-center gap-3">
        <div class="w-40 flex flex-col items-center justify-center gap-1 whitespace-nowrap">
          <span class="w-36 h-36 mb-2 rounded-full shadow-lg bg-#E8A29E/80 flex items-center justify-center">
            <img class="w-32" src="/images/LOGO_dark.png" alt="" />
          </span>
          <label>llnsist’s Hair Salon</label>
          <p>線上預約查詢專用</p>
        </div>

        <div class="flex items-center flex-wrap gap-2" data-aos="fade-up" data-aos-duration="1000">
          <div class="border border-#E8A29E rounded-xl bg-white p-2 md:p-4 text-#E8A29E" v-for="(title, idx) in stepList"
            :key="idx">
            <strong class="md:text-lg lg:text-xl">{{ idx + 1 }}. {{ title }}</strong>
          </div>
        </div>
      </div>

      <div class="relative w-full md:w-4/5 mx-auto flex flex-col lg:flex-row items-center justify-center mb-4">
        <div class="w-full md:w-auto flex items-center justify-center mt-5 md:mt-0">
          <div class="flex flex-col gap-3 text-lg lg:text-2xl text-#56A033">
            <strong>加入官方LINE@</strong>
            <div class="w-full h-2px bg-#56A033"></div>
            <strong>LINE@ <label class="text-black/80 font-light">@871dlyrt</label></strong>
          </div>
          <img class="w-24 lg:w-28" src="/images/reservation/lineQrcode.png" alt="QR code" />
        </div>

        <img class="max-w-300px" src="/images/reservation/person.png" alt="" />

        <div class="w-full md:w-auto lg:max-w-300px flex flex-col md:text-lg lg:text-xl text-center lg:text-left">
          <p>歡迎加入我們的線上預約系統！</p>
          <p>新加入的朋友有<b class="text-#E8A29E">100元現金禮卷</b>可以抵用在<b class="text-#E8A29E">染髮、燙髮、頂級頭皮養護工程</b>上！</p>
        </div>
      </div>

      <!-- image process -->
      <div class="w-full md:w-4/5 mx-auto px-4 md:px-0 mb-5">
        <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <img class="w-full lg:w-auto lg:max-h-500px" :src="`/images/reservation/pic${i}.jpg`" alt="" v-for="i in 3"
            :key="i" data-aos="fade-up" data-aos-duration="1000" />
        </div>
      </div>

      <!-- image introduce -->
      <div class="w-full md:w-3/5 mx-auto px-4 md:px-0 mb-5">
        <img class="w-full" src="/images/reservation/introduce.png" alt="" data-aos="fade-up" data-aos-duration="1000" />
      </div>
    </div>
  </section>
</template>