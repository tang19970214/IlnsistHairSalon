<template>
  <div class="relative w-full min-h-screen bg-white font-mono">
    <Header />

    <div class="md:hidden fixed right-3 z-10 flex items-center justify-center flex-col" :class="{'bottom-10': heightOverZero, 'bottom-[103px]': !heightOverZero}">
      <a href="https://www.instagram.com/insist_hair_salon/" target="_blank">
        <img class="w-16" src="~/static/images/global/Instagram.svg" alt="INSTAGRAM">
      </a>
      <a href="https://www.facebook.com/salon29590801" target="_blank">
        <img class="w-16" src="~/static/images/global/Facebook.svg" alt="FACEBOOK">
      </a>
      <a href="https://lin.ee/EZoNp6W" target="_blank">
        <img class="w-16" src="~/static/images/global/Reserve.svg" alt="LINE">
      </a>
      <a v-if="heightOverZero" class="animate-bounce mt-4 p-3 rounded-full bg-[#FAE3DF]" @click="goTop()">
        <img src="~/static/images/global/GoTop.svg" alt="GO TOP">
      </a>
    </div>

    <a @click="goTop()" class="hidden md:block fixed right-3 bottom-10 p-4 bg-primary rounded-full shadow-lg border border-gray-100 cursor-pointer z-10 animate-bounce duration-500 hover:bg-gray-100" v-if="heightOverZero">
      <img src="~/static/images/global/GoTop.svg" alt="GO TOP">
    </a>

    <Nuxt class="pt-14 md:pt-16 lg:pt-32" />
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollTop: "",
      heightOverZero: false,
    };
  },
  watch: {
    scrollTop(val) {
      if (+val > 300) {
        this.heightOverZero = true;
      } else {
        this.heightOverZero = false;
      }
    },
  },
  methods: {
    handleScroll() {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
    },
    goTop() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      const timeTop = setInterval(() => {
        document.body.scrollTop =
          document.documentElement.scrollTop =
          top -=
            50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>