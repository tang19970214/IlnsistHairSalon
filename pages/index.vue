<script lang="ts" setup>
useSeoMeta({
  title: "首頁",
  description: "首頁",
  ogTitle: "首頁",
  ogDescription: "首頁",
});

const descList = [
  {
    imgUrl: '/images/selectHair.jpg',
    title: ["確認髮質狀況，提供合適建議。"],
    contents: ["確認髮質狀況", "確認頭髮狀況", "提供合適建議", "當然，這些都會是依照每一位顧客的需求以及髮質做出客製化提案，最後由顧客挑選喜歡的方案。"],
  },
  {
    imgUrl: '/images/cut.jpg',
    title: [],
    contents: ["消費項目價格清楚透明", "所有項目不分長短度", "所有項目皆包含洗髮", "價目表公開透明,不隨意加價", "產品都經過衛生署核准,合法安全", "若發生未經告知額外加價之情形，顧客有權拒絕消費"],
  },
  {
    imgUrl: '/images/satisfy.jpg',
    title: ["提高滿意度 堅持友善環境"],
    content: "llnsist’s Hair Salon 美髮服務流程",
    contents: ["確認預約資訊", "實名制消毒與量體溫", "將客戶帶到服務座位", "設計師確認當日需求", "執行服務內容", "收取當日費用"],
  }
];
const stylesList = [{ id: 1, imgUrl: '/images/styles/styles1.png' }];
/* 好評分享 */
const praiseList = [
  { label: "府中髮廊推薦【llnsist’s Hair Salon】燙染不分長短只要1000元 | 小資族最愛超高CP值髮廊 | 剪 燙 染 護都沒問題喔", imgUrl: '/images/praise/praise1.jpeg', url: "https://reurl.cc/601KXb" },
  { label: "【板橋美髮】llnsist’s Hair Salon府中髮廊 染燙不分長度只要1000 頂級OLAPEX護髮結構修護", imgUrl: '/images/praise/praise2.jpeg', url: "https://reurl.cc/eOeV4Q" },
  { label: "板橋府中美髮推薦｜llnsist’s Hair Salon染燙不分長短只要1000元｜女神頂級護髮｜板橋府中染髮｜板橋", imgUrl: '/images/praise/praise3.png', url: "https://reurl.cc/NRkNd9" },
  { label: "『板橋髮廊推薦llnsist’s Hair Salon』府中商圈平價染燙髮一律1000元，小資族推薦髮廊", imgUrl: '/images/praise/praise4.jpeg', url: "https://reurl.cc/zNvKay" },
  { label: "板橋府中美髮推薦｜板橋府中染髮｜llnsist’s Hair Salon｜OLAPEX 1+2劑深層結構護髮｜燙染ㄧ律1000元不分長短CP值超高", imgUrl: '/images/praise/praise5.jpeg', url: "https://reurl.cc/jGNmKp" },
  { label: "【美髮】新北板橋「lnsist Hair Salon府中店」板橋平價髮廊推薦，燙、染不分長短均一價!", imgUrl: '/images/praise/praise6.png', url: "https://reurl.cc/NRkNep" },
  { label: "板橋府中美髮推薦｜髮廊推薦｜板橋府中染髮 ｜llnsist’s Hair Salon ｜染燙不分長短只要1000元｜護髮產品CP值超高｜美髮造型", imgUrl: '/images/praise/praise7.png', url: "https://reurl.cc/eOeVNx" },
  { label: "（府中髮廊）lnsist Hair Salon府中店～2022新開幕板橋髮廊！平價護髮、染髮好選擇！", imgUrl: '/images/praise/praise8.jpeg', url: "https://reurl.cc/0X5arb" },
  { label: "【染護髮】春天來了 櫻花系染髮 日本鉑金護髮 llnsist’s Hair Salon 板橋府中站特殊染髮護髮推薦", imgUrl: '/images/praise/praise9.jpeg', url: "https://reurl.cc/QbyVM5" },
  { label: "（板橋染髮）llnsist’s Hair Salon板橋府中店～2022新開幕染髮好選擇！一千元不分長短超高CP值！", imgUrl: '/images/praise/praise10.jpeg', url: "https://reurl.cc/MNaMp3" },
  { label: "板橋府中髮廊推薦｜平價髮廊｜llnsist’s Hair Salon｜日本鉑金護髮｜燙染一律1000元不分長短CP值超高│天界之舟 行善濟世", imgUrl: '/images/praise/praise11.png', url: "https://reurl.cc/XVdadj" },
  { label: "【新北髮廊】板橋高CP值Ilnsist’s Hair Salon小資族也可以高質感煥然一新，板橋燙染推薦，府中捷運髮廊", imgUrl: '/images/praise/praise12.jpeg', url: "https://vocus.cc/article/65a7748dfd89780001fa0311" },
  { label: "【美髮】新北板橋「IlNSIST’s Hair Salon府中店」板橋平價髮廊推薦，頭部鬆筋+負離子SPA太舒服!", imgUrl: '/images/praise/praise13.png', url: "https://lovemolly21386.pixnet.net/blog/post/356991676" },
  { label: "llnsist's Hair Salon府中店｜府中站2號出口旁｜燙、染ㄧ律1000元不分長短CP值爆高｜誰說美就要砸大錢｜板橋府中推薦平價髮廊", imgUrl: '/images/praise/praise14.jpeg', url: "https://evonne1205.pixnet.net/blog/post/133240363" },
  { label: "【板橋美髮】Ilnsist’s Hair Salon /燙染不分長度1000元 /專業超高CP值 /馬里克實測", imgUrl: '/images/praise/praise15.png', url: "https://reurl.cc/eLnNbW" },
  { label: "新北市板橋府中髮廊推薦/Ilnsist's Hair Salon/頭部鬆筋+肩頸放鬆+sap負離子脈衝護理/6號設計師手感剛好，舒服、舒壓很棒/除了這個之外染、燙不分長短1000、頂級護髮也高cp值", imgUrl: '/images/praise/praise16.jpeg', url: "https://jessicalin.tw/blog/post/365690398" },
];

const openGoogleMap = () => {
  window.open("https://goo.gl/maps/2xSJttoMiGnaCK6JA");
};
const goPath = (url: string) => {
  window.open(url);
};
</script>

<template>
  <section class="w-full min-h-screen">
    <div class="w-full">
      <img src="/images/banner1.png" alt="" width="100%" />
    </div>

    <div class="w-full py-5 lg:py-14 bg-#F4F4F4">
      <div class="w-full lg:w-4/5 px-5 lg:px-0 mx-auto flex flex-col lg:flex-row" data-aos="fade-up"
        data-aos-duration="1500" data-aos-delay="200">
        <img class="w-full lg:max-w-150" src="/images/home1.jpg" alt="" />
        <div class="w-full flex flex-col justify-around lg:pl-5">
          <div class="inline-block mb-2">
            <img class="w-auto h-10" src="/images/LOGO.png" alt="llnsist’s Hair Salon" />
          </div>
          <p class="text-black text-opacity-40 tracking-widest leading-7 mb-1">
            集合年輕設計師的創意擁有許多經驗豐富與技巧純熟的設計師，不斷的自我成長[堅持]走在流行尖端是基本態度，善於溝通與傾聽，你不一定要花到很多錢找名師，在llnsist's Hair
            Salon，沒有誇張的手法，讓一切回歸髮廊最貼近妳生活，[堅持]變美變得更簡單無壓力，以歐洲的手刷染、日韓的燙髮以及台灣剪裁，讓我們帶著你輕消費。</p>
          <p class="text-black text-opacity-40 tracking-widest leading-7">
            經營理念：所有項目不分長短度，全台CP值首選髮廊。在這裡，每一次造型，都是送給自己的禮物，匠心設計專屬於你/妳個人獨一無二的的風格與光彩。</p>
          <p class="text-black text-opacity-40 tracking-widest leading-7">沙龍產品.品質保證，『堅持』消費體驗無壓力。</p>
          <strong class="text-#E8A29E tracking-widest leading-7 pt-3"> *若發生未經告知額外加價之情形，顧客有權拒絕消費 </strong>
        </div>
      </div>
    </div>

    <!-- PROMISE OOO的承諾 -->
    <div class="w-full flex flex-col" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
      <div
        class="w-full py-3 lg:py-5 mb-5 lg:mb-0 border-b-px border-b-solid border-b-#c4c4c4 flex flex-col items-center justify-center text-xl lg:text-3xl">
        <strong class="text-#C1AC7A text-center">llnsist’s Hair Salon的堅持</strong>
      </div>
    </div>

    <div
      class="w-full lg:w-4/5 px-5 lg:px-0 lg:py-4 mx-auto flex flex-col justify-center lg:odd:flex-row lg:even:flex-row-reverse"
      data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" v-for="(item, idx) in descList" :key="idx">
      <img class="w-full lg:max-w-600px object-cover" :src="item.imgUrl" alt="" />
      <div class="w-full flex justify-center px-4" :class="{ 'items-center': idx === 0, 'items-start': idx > 0 }">
        <div class="w-full py-5 lg:py-0 flex flex-col">
          <strong class="text-lg lg:text-xl text-black text-opacity-70 leading-7 mb-2" v-for="(title, i) in item.title"
            :key="i">{{ title }}</strong>
          <p class="text-black text-opacity-40 tracking-wider leading-7 mb-1" v-if="item.content">{{ item.content }}</p>
          <ul class="list-disc pl-5" v-if="item.contents">
            <li class="text-black text-opacity-40 tracking-wider leading-7" v-for="(txt, idx) in item.contents"
              :key="idx">{{ txt }}</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- styles -->
    <div class="w-full lg:w-4/5 mx-auto py-3 px-5 lg:px-0" data-aos="fade-up" data-aos-duration="1000"
      data-aos-delay="200">
      <div class="w-full text-center">
        <strong
          class="text-lg md:text-xl text-black text-opacity-70 pb-1 border-b-2 border-b-solid border-b-gray-600">STYLES</strong>
      </div>
      <div class="w-full py-5 flex items-center justify-between gap-5 overflow-x-auto">
        <img :src="`/images/styles/styles${i}.png`" alt="" v-for="i in 6" :key="i" />
      </div>
    </div>

    <!-- Recommendations 好評分享 -->
    <div class="w-full mt-5">
      <div class="w-full pt-16 md:pt-20 pb-32 bg-#E8A29E flex items-start justify-center" data-aos="fade-up"
        data-aos-duration="1500" data-aos-delay="200">
        <strong class="text-white text-xl md:text-2xl">好評分享</strong>
      </div>

      <div class="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 -translate-y-90px">
        <div class="w-full flex items-center justify-center" v-for="(item, idx) in praiseList" :key="idx"
          data-aos="fade-up" data-aos-duration="1500">
          <div @click="goPath(item.url)" class="w-full relative overflow-hidden cursor-pointer">
            <img :src="item.imgUrl" alt="" class="w-full h-60 object-cover duration-500 hover:scale-125" />
            <div class="absolute left-0 bottom-0 z-10 w-full p-3 bg-white bg-opacity-70">
              <p class="text-sm">{{ item.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- address -->
    <div class="w-full h-50 flex flex-col lg:flex-row" data-aos="fade-up" data-aos-duration="1000">
      <div class="relative w-full h-full">
        <div class="relative w-full h-full">
          <div class="absolute left-0 top-0 w-full h-full bg-white/50 z-10"></div>
          <img class="w-full h-full object-cover" src="/images/addressBg.jpg" alt="" />
        </div>

        <div class="absolute -bottom-5 left-0 w-full flex items-center justify-center z-10">
          <button
            class="px-4 py-2 border-px border-solid border-#C1AC7A bg-white text-#C1AC7A flex items-center gap-2 tracking-tight cursor-pointer duration-500 hover:bg-#C1AC7A hover:text-white"
            @click="openGoogleMap()">
            <p class="font-mono">Google map</p>
            <icon name="material-symbols:arrow-right-alt" size="18px" color="#C1AC7A" />
          </button>
        </div>
      </div>
      <div
        class="w-full h-full pb-5 pt-8 lg:pt-14 px-10 bg-gradient-to-br from-#97886F to-#DBC181 lg:from-#F8F2F2 lg:to-#F8F2F2 text-white lg:text-black lg:text-opacity-70 flex flex-col md:flex-row gap-3">
        <label class="text-lg md:pr-6">Address</label>
        <div class="pl-10 md:pl-0 flex flex-col md:flex-row md:items-center lg:flex-col lg:items-start flex-wrap gap-5">
          <div class="w-auto flex items-center gap-1">
            <Icon name="solar:home-bold" size="18px" />
            <p>新北市板橋區中山路一段50巷11號2樓</p>
          </div>
          <div class="w-auto flex items-center gap-1">
            <Icon name="material-symbols:call-sharp" size="18px" />
            <p>02-29590801</p>
          </div>
          <div class="w-auto flex items-center gap-1">
            <Icon name="ic:outline-access-time-filled" size="18px" />
            <p>12:00 a.m - 08:00 p.m</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>