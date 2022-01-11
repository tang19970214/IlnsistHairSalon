<template>
  <section class="w-full min-h-screen">
    <div class="w-4/5 mx-auto text-black text-opacity-70">
      <div class="w-full my-5">
        <img src="~/static/images/schedule.jpg" alt="價目表" width="100%">
      </div>

      <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-3 mg:gap-5" data-aos="fade-up" data-aos-duration="1000">
        <!-- 消費特色 -->
        <div class="w-full py-3">
          <div class="w-full pb-3 border-b border-b-gray-600">
            <strong class="text-lg">消費特色</strong>
          </div>
          <div class="w-full py-3">
            <ul class="list-none">
              <li>➊ 輕鬆無壓力、價格透明、輕消費</li>
              <li>➋ 所有項目都有包含免費洗髮</li>
              <li>➌ 所有價格皆與顧客確認完畢之後才開始操作，剪、染、燙髮皆包含基礎瞬間護髮</li>
              <li>➍ 不提供自備染膏及藥水的服務</li>
              <li>➎ 所有項目完全不分長短均一價</li>
            </ul>
            <div class="w-full text-primary pt-2">
              <p>※若發生金額不在構通內加價的情況，顧客有權拒絕付款</p>
            </div>
          </div>
        </div>

        <!-- 付款方式 -->
        <div class="w-full py-3">
          <div class="w-full pb-3 border-b border-b-gray-600">
            <strong class="text-lg">付款方式</strong>
          </div>
          <div class="w-full py-3">
            <ul class="list-none">
              <li>➊ 可採現金</li>
              <li class="flex items-center">➋ 刷信用卡<p class="text-primary text-sm ml-2">※不限金額且免手續費</p>
              </li>
              <li class="flex items-center">➌ LINE PAY<p class="text-primary text-sm ml-2">※不限金額且免手續費</p>
              </li>
              <li class="flex items-center">➍ 五倍券+新北加倍券<p class="text-primary text-sm ml-2">※可找零</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          title: "消費特色",
          list: [
            "輕鬆無壓力、價格透明、輕消費",
            "所有項目都有包含免費洗髮",
            "所有價格皆與顧客確認完畢之後才開始操作，剪、染、燙髮皆包含基礎瞬間護髮",
            "不提供自備染膏及藥水的服務",
            "所有項目完全不分長短均一價",
          ],
          desc: "※若發生金額不在構通內加價的情況，顧客有權拒絕付款",
        },
      ],
    };
  },
};
</script>