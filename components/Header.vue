<template>
  <div class="fixed top-0 left-0 w-full h-14 md:h-16 lg:h-20 bg-white z-20">
    <div class="relative w-full h-full py-3 lg:py-4 px-4 md:px-6 lg:px-12 flex items-center justify-center md:justify-between border-b border-gray-300 box-border">
      <div class="hidden md:block">
        <div class="flex items-center gap-4">
          <a href="https://www.facebook.com/salon29590801" target="_blank">
            <img src="~/static/images/facebook.svg" alt="FACEBOOK">
          </a>
          <a href="https://www.instagram.com/insist_hair_salon/" target="_blank">
            <img src="~/static/images/instagram.svg" alt="INSTAGRAM">
          </a>
          <a href="https://lin.ee/EZoNp6W" target="_blank">
            <img src="~/static/images/line.svg" alt="LINE">
          </a>
        </div>
      </div>

      <img class="h-12 md:h-14 lg:h-16" :class="{'cursor-pointer': $route.path !== '/'}" src="~/static/images/LOGO.png" alt="INSIST HAIR SALON" @click="$router.push('/')">

      <!-- <div class="flex items-center gap-2"> -->
      <div class="hidden md:block pr-4 lg:pr-0">
        <div class="inline-block">
          <button @click="reserveNow()" class="lg:py-1 px-10 lg:px-14 border border-gold2 bg-clip-text text-[#C1AC7A] bg-gradient-to-r from-gold1 to-gold2 duration-500 delay-100 hover:bg-clip-padding hover:text-white">
            <p class="tracking-[0.2em]">Reserve</p>
            <p class="text-sm tracking-[0.5em]">立即預約</p>
          </button>
        </div>
      </div>

      <div class="block lg:hidden absolute right-3 z-20">
        <img src="~/static/images/menu.svg" alt="MENU" @click="openMenu = true">
      </div>
      <!-- </div> -->
    </div>

    <div class="hidden lg:block w-full h-12 bg-white border-b border-gray-300 box-border">
      <div class="w-full h-full flex items-center justify-center gap-6">
        <span class="cursor-pointer px-2 tracking-widest duration-500 hover:bg-clip-padding hover:text-white hover: bg-gradient-to-r hover:from-gold1 hover:to-gold2" :class="{'bg-clip-padding text-white bg-gradient-to-r from-gold1 to-gold2': $route.path === item.path}" v-for="item in menuList" :key="item.id" @click="goToPage(item.path)">{{item.label}}</span>
      </div>
    </div>

    <PhoneMenu :menuList="menuList" :openMenu="openMenu" @goToPage="goToPage" @closeMenu="openMenu = false" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        { id: 1, label: "首頁", path: "/" },
        { id: 2, label: "價目表", path: "/price" },
        { id: 3, label: "預約方式", path: "/reservation" },
        { id: 4, label: "案例作品集", path: "/portfolio" },
        { id: 5, label: "頂級頭皮養護工程", path: "/scalpcare" },
        { id: 6, label: "人才招募", path: "/recruitment" },
      ],
      openMenu: false,
    };
  },
  methods: {
    goToPage(path) {
      this.$router.push(path);
    },
    reserveNow() {
      window.open("https://lin.ee/EZoNp6W", "_blank");
    },
  },
};
</script>