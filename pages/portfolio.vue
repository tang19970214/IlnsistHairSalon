<script lang="ts" setup>
useSeoMeta({
  title: "案例作品集",
  description: "案例作品集",
  ogTitle: "案例作品集",
  ogDescription: "案例作品集",
});

const list = ref<any[]>([]);
const getList = () => {
  const arr = [];
  for (let i = 1; i <= 194; i++) {
    arr.push(i);
  }
  // 亂數排序
  arr.sort(() => Math.random() - 0.5);
  list.value = arr;
}
getList();

const previewPic = ref<string>('');
const openPicModal = ref<boolean>(false);
const viewPic = (picNo: string) => {
  previewPic.value = `/images/portfolio/portfolio${picNo}.jpg`;

  openPicModal.value = true;
}
</script>

<template>
  <section class="w-full min-h-screen">
    <img class="w-full" src="/images/portfolio/portfolio_header.jpg" alt="作品集" />

    <div class="w-5/6 lg:w-4/5 mx-auto text-black/70">
      <!-- title -->
      <div class="w-full text-center py-5">
        <strong class="text-#E8A29E tracking-wider text-2xl md:text-3xl lg:text-4xl">Designer Portfolio</strong>
      </div>

      <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 pt-3 pb-5">
        <img class="w-full h-350px object-cover cursor-pointer duration-500 hover:opacity-80"
          :src="`/images/portfolio/portfolio${i}.jpg`" :alt="`作品集${i}`" v-for="i in list" :key="i" @click="viewPic(i)"
          data-aos="fade-up" data-aos-duration="1000" />
      </div>

      <div
        class="w-full lg:px-10 flex flex-col md:flex-row items-center justify-center md:justify-around gap-3 pt-10 pb-16"
        data-aos="fade-up" data-aos-duration="1000">
        <div class="w-full">
          <strong class="text-#E8A29E text-lg md:text-xl lg:text-2xl">如有喜歡的髮型/色可截圖至現場與設計師一同討論，不確定自己適合哪些也可預約免費諮詢</strong>
        </div>

        <div class="w-full flex items-center justify-center">
          <a href="https://lin.ee/EZoNp6W" target="_blank"
            class="w-24 h-24 decoration-none flex items-center justify-center text-center bg-white border-px border-solid border-#E8A29E text-#E8A29E text-2xl rounded-full p-3 shadow-lg duration-300 hover:bg-#E8A29E hover:text-white hover:shadow-inner">立馬預約</a>
        </div>
      </div>
    </div>

    <Modal title="預覽圖片" width="w-auto" :openModal="openPicModal" @closeModal="openPicModal = false">
      <div class="w-full flex items-center justify-center py-2">
        <img class="w-auto max-h-80vh" :src="previewPic" alt="" />
      </div>
    </Modal>
  </section>
</template>
