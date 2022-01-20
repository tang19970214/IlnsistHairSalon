<template>
  <div class="relative w-full min-h-screen bg-white font-mono">
    <Header />

    <div class="md:hidden fixed right-3 top-[55vh] z-10 flex items-center justify-center flex-col">
      <a href="https://www.instagram.com/insist_hair_salon/" target="_blank">
        <img class="w-16" src="~/static/images/global/Instagram.svg" alt="INSTAGRAM">
      </a>
      <a href="https://www.facebook.com/salon29590801" target="_blank">
        <img class="w-16" src="~/static/images/global/Facebook.svg" alt="FACEBOOK">
      </a>
      <a href="https://lin.ee/EZoNp6W" target="_blank">
        <img class="w-16" src="~/static/images/global/reserve.svg" alt="LINE">
      </a>
      <a v-if="heightOverZero" class="animate-bounce mt-4 p-3 rounded-full bg-[#FAE3DF]" @click="goTop()">
        <img src="~/static/images/global/GoTop.svg" alt="GO TOP">
      </a>
    </div>

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