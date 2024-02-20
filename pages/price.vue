<script lang="ts" setup>
useSeoMeta({
  title: "價目表",
  description: "價目表",
  ogTitle: "價目表",
  ogDescription: "價目表",
});
</script>

<template>
  <section class="w-full min-h-screen">
    <div class="w-full mb-5">
      <img src="/images/schedule.jpg" alt="價目表" width="100%" />
    </div>

    <div class="w-4/5 mx-auto text-black text-opacity-70">
      <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-3 mg:gap-5" data-aos="fade-up" data-aos-duration="1000">
        <!-- 消費特色 -->
        <div class="w-full py-3">
          <div class="w-full pb-3 border-b-px border-b-solid border-b-gray-600">
            <strong class="text-lg">消費特色</strong>
          </div>
          <div class="w-full py-3">
            <ul class="list-none">
              <li>➊ 輕鬆無壓力、價格透明、輕消費</li>
              <li>➋ 燙、染、護都有包含免費洗髮</li>
              <li>➌ 所有價格皆與顧客確認完畢之後才開始操作，剪、染、燙髮皆包含基礎潤絲</li>
              <li>➍ 不提供自備染膏及藥水的服務</li>
              <li>➎ 所有項目完全不分長短度</li>
            </ul>
            <div class="w-full text-#E8A29E pt-2">
              <p>※若發生金額不在構通內加價的情況，顧客有權拒絕付款</p>
            </div>
          </div>
        </div>

        <!-- 付款方式 -->
        <div class="w-full py-3">
          <div class="w-full pb-3 border-b-px border-b-solid border-b-gray-600">
            <strong class="text-lg">付款方式</strong>
          </div>
          <div class="w-full py-3">
            <ul class="list-none">
              <li>➊ 可採現金</li>
              <li class="flex items-center">
                ➋ 刷信用卡
                <p class="text-#E8A29E text-sm ml-2">※不限金額且免手續費</p>
              </li>
              <li class="flex items-center">
                ➌ LINE PAY
                <p class="text-#E8A29E text-sm ml-2">※不限金額且免手續費</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>