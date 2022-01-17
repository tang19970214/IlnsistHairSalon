<template>
  <section class="w-full min-h-screen">
    <div class="w-4/5 mx-auto text-black text-opacity-70">
      <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
        <img :src="require(`~/static/images/scalpcare/${item}.png`)" alt="頂級頭皮養護工程" v-for="item in 12" :key="item" data-aos="fade-up" data-aos-duration="600">
      </div>
    </div>
  </section>
</template>