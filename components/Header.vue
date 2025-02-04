<script lang="ts" setup>
const route = useRoute();

const menuList = ref<any[]>([
  { label: "首頁", path: "/" },
  { label: "價目表", path: "/price" },
  { label: "接髮", path: "/hairextension" },
  { label: "預約方式", path: "/reservation" },
  { label: "案例作品集", path: "/portfolio" },
  { label: "頂級頭皮養護工程", path: "/scalpcare" },
  { label: "人才招募", path: "/recruitment" },
]);
const openMenu = ref<boolean>(false);

const goToPage = (path: string) => {
  navigateTo(path)
}
const reserveNow = () => {
  window.open("https://lin.ee/EZoNp6W", "_blank");
}
</script>

<template>
  <div class="fixed top-0 left-0 w-full h-14 md:h-16 lg:h-20 bg-white z-20">
    <div
      class="relative w-full h-full py-3 lg:py-4 px-4 md:px-6 lg:px-12 flex items-center justify-center border-b-px border-b-solid border-gray-300">
      <div class="hidden md:block absolute left-6 lg:left-12">
        <div class="flex items-center gap-4">
          <a href="https://www.facebook.com/salon29590801" target="_blank">
            <img src="/images/facebook.svg" alt="FACEBOOK" />
          </a>
          <a href="https://www.instagram.com/iinsists_hair_salon?igsh=enFiOHFncTExNzNj&utm_source=qr" target="_blank">
            <img src="/images/instagram.svg" alt="INSTAGRAM" />
          </a>
          <a href="https://lin.ee/EZoNp6W" target="_blank">
            <img src="/images/line.svg" alt="LINE" />
          </a>
        </div>
      </div>

      <img class="h-12 md:h-14 lg:h-16" :class="{ 'cursor-pointer': route.path !== '/' }" src="/images/LOGO.png"
        alt="llnsist’s Hair Salon" @click="navigateTo('/')" />

      <div class="hidden md:block pr-4 lg:pr-0 absolute right-9 lg:right-15">
        <div class="inline-block">
          <button @click="reserveNow()"
            class="lg:py-1 px-10 lg:px-14 border-px border-solid border-#DBC181 bg-clip-text text-#C1AC7A bg-gradient-to-r from-#97886F to-#DBC181 cursor-pointer duration-500 delay-100 hover:bg-clip-padding hover:text-white">
            <p class="tracking-0.2em">Reserve</p>
            <p class="text-sm tracking-0.5em">立即預約</p>
          </button>
        </div>
      </div>

      <div class="block lg:hidden absolute right-3 z-20">
        <img src="/images/menu.svg" alt="MENU" @click="openMenu = true" />
      </div>
    </div>

    <div class="hidden lg:block w-full h-12 bg-white border-b-px border-b-solid border-gray-300">
      <div class="w-full h-full flex items-center justify-center gap-6">
        <span
          class="cursor-pointer px-2 tracking-widest duration-500 hover:bg-clip-padding hover:text-white hover: bg-gradient-to-r hover:from-#97886F hover:to-#DBC181"
          :class="{ 'bg-clip-padding text-white bg-gradient-to-r from-#97886F to-#DBC181': route.path === item.path }"
          v-for="item in menuList" :key="item.id" @click="goToPage(item.path)">{{ item.label }}</span>
      </div>
    </div>

    <PhoneMenu :menuList="menuList" :openMenu="openMenu" @goToPage="goToPage" @closeMenu="openMenu = false" />
  </div>
</template>