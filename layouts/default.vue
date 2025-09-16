<script lang="ts" setup>
const scrollTop = ref<any>();
const heightOverZero = ref<boolean>(false);

const handleScroll = () => {
  scrollTop.value =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;
}

watch(
  () => scrollTop.value,
  (height: [string | number]) => {
    heightOverZero.value = +height > 300
  }
)

const goTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="relative w-full min-h-screen bg-white font-mono">
    <Header />

    <div class="md:hidden fixed right-3 z-10 flex items-center justify-center flex-col"
      :class="{ 'bottom-10': heightOverZero, 'bottom-103px': !heightOverZero }">
      <a href="https://www.instagram.com/iinsists_hair_salon?igsh=enFiOHFncTExNzNj&utm_source=qr" target="_blank">
        <img class="w-16" src="/images/global/Instagram.svg" alt="INSTAGRAM">
      </a>
      <a href="https://www.facebook.com/salon29590801" target="_blank">
        <img class="w-16" src="/images/global/Facebook.svg" alt="FACEBOOK">
      </a>
      <a href="https://lin.ee/EZoNp6W" target="_blank">
        <img class="w-16" src="/images/global/Reserve.svg" alt="LINE">
      </a>
      <a v-if="heightOverZero" class="animate-bounce mt-4 p-3 rounded-full bg-#FAE3DF" @click="goTop()">
        <img src="/images/global/GoTop.svg" alt="GO TOP">
      </a>
    </div>

    <div v-if="heightOverZero" @click="goTop()" class="hidden md:block fixed right-3 bottom-10 animate-bounce">
      <div
        class="w-15 min-w-15 max-w-15 h-15 min-h-15 max-h-15 flex items-center justify-center bg-#E8A29E rounded-full shadow-lg border-px border-solid border-gray-100 cursor-pointer z-10 duration-500 hover:bg-gray-100 group">
        <img src="/images/global/GoTop.svg" alt="GO TOP" class="w-8 h-8 text-white group-hover:text-#E8A29E" />
      </div>
    </div>

    <div class="pt-14 md:pt-16 lg:pt-32">
      <slot />
    </div>

    <Footer />
  </div>
</template>