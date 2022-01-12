<template>
  <transition>
    <div class="w-full h-screen fixed top-0 left-0 z-50 bg-white" v-if="openMenu">
      <div class="w-full h-full flex">
        <div class="w-[90px] h-full bg-primary px-7 pt-[100px] box-border flex flex-col gap-6">
          <a href="" target="_blank">
            <img src="~/static/images/facebook.svg" alt="FACEBOOK">
          </a>
          <a href="" target="_blank">
            <img src="~/static/images/instagram.svg" alt="INSTAGRAM">
          </a>
          <a href="https://lin.ee/https://lin.ee/LRmy5YA" target="_blank">
            <img src="~/static/images/line.svg" alt="LINE">
          </a>
        </div>
        <div class="w-full h-full flex flex-col justify-between bg-white">
          <div class="w-full flex items-center justify-between px-3 py-2 box-border">
            <img class="h-10" src="~/static/images/LOGO.png" alt="INSIST HAIR SALON" @click="$router.push('/'); closeMenu()">
            <img src="~/static/images/close.svg" alt="" @click="closeMenu()">
          </div>

          <div class="w-full h-full flex items-center justify-center px-2">
            <div class="mx-auto flex flex-col gap-6">
              <div class="flex items-center gap-4" v-for="item in menuList" :key="item.id" @click="goToPage(item.path)">
                <p class="border-t border-primary text-primary md:text-lg">0{{item.id}}</p>
                <label class="text-primary md:text-lg">{{item.label}}</label>
              </div>
            </div>
          </div>

          <div class="w-full flex items-center justify-center pb-5">
            <button class="lg:py-1 px-10 lg:px-14 border border-gold2 bg-clip-text text-[#C1AC7A] bg-gradient-to-r from-gold1 to-gold2 duration-500 delay-100 hover:bg-clip-padding hover:text-white">
              <p class="tracking-[0.2em]">Reserve</p>
              <p class="text-sm tracking-[0.5em]">立即預約</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    openMenu: {
      type: Boolean,
      required: true,
    },
    menuList: {
      type: Array,
      required: true,
    },
  },
  methods: {
    goToPage(path) {
      this.$emit("goToPage", path);
      this.closeMenu();
    },
    closeMenu() {
      this.$emit("closeMenu");
    },
  },
};
</script>