<template>
  <section class="w-full min-h-screen">
    <div class="w-4/5 mx-auto text-black text-opacity-70">
      <div class="w-full grid grid-cols-1 md:grid-cols-2">
        <img :src="require(`~/static/images/scalpcare/${item}.jpg`)" alt="" v-for="item in 12" :key="item">
      </div>
    </div>
  </section>
</template>