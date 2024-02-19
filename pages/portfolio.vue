<template>
  <section class="w-full min-h-screen">
    <img class="w-full" src="~/static/images/portfolio/portfolio_header.jpg" alt="作品集" />

    <div class="w-5/6 lg:w-4/5 mx-auto text-black text-opacity-70">
      <!-- title -->
      <div class="w-full text-center py-5">
        <strong class="text-primary tracking-wider text-2xl md:text-3xl lg:text-4xl">Designer Portfolio</strong>
      </div>

      <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 pt-3 pb-5">
        <img class="w-full h-[350px] object-cover cursor-pointer duration-500 hover:opacity-80" :src="require(`~/static/images/portfolio/portfolio${i}.jpg`)" :alt="`作品集${i}`" v-for="i in list" :key="i" @click="viewPic(i)" data-aos="fade-up" data-aos-duration="1000" />
      </div>

      <div class="w-full lg:px-10 lg:box-border flex flex-col md:flex-row items-center justify-center md:justify-around gap-3 pt-10 pb-16" data-aos="fade-up" data-aos-duration="1000">
        <div class="w-full">
          <strong class="text-primary text-lg md:text-xl lg:text-2xl">如有喜歡的髮型/色可截圖至現場與設計師一同討論，不確定自己適合哪些也可預約免費諮詢</strong>
        </div>

        <div class="w-full flex items-center justify-center">
          <a href="https://lin.ee/EZoNp6W" target="_blank" class="w-24 h-24 flex items-center justify-center text-center bg-white border border-primary text-primary text-2xl rounded-full p-3 box-border shadow-lg duration-300 hover:bg-primary hover:text-white hover:shadow-inner">立馬預約</a>
        </div>
      </div>
    </div>

    <Modal title="預覽圖片" width="w-auto" :openModal="openPicModal" @closeModal="openPicModal = false">
      <div class="w-full flex items-center justify-center py-2">
        <img class="w-auto max-h-[80vh]" :src="previewPic" alt="" />
      </div>
    </Modal>
  </section>
</template>

<script>
export default {
  name: "PortfolioPage",
  head() {
    return {
      title: "llnsist’s Hair Salon｜案例作品集",
    };
  },
  data() {
    return {
      list: [],
      openPicModal: false,
      previewPic: "",
    };
  },
  methods: {
    getList() {
      let arr = [];
      for (let i = 1; i <= 175; i++) {
        arr.push(i);
      }
      // 亂數排序
      arr.sort(() => Math.random() - 0.5);

      this.list = arr;
    },
    viewPic(picNo) {
      this.previewPic = require(`~/static/images/portfolio/portfolio${picNo}.jpg`);

      this.openPicModal = true;
    },
  },
  mounted() {
    this.getList();
  },
};
</script>
