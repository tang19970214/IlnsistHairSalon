<template>
  <section class="w-full min-h-screen">
    <div class="w-full p-5 box-border bg-primary bg-opacity-60">
      <div class="w-full flex flex-col items-center justify-center bg-white p-5 rounded-lg">
        <strong class="border-b-4 border-primary text-[60px]">人才招募</strong>

        <div class="relative">
          <p class="relative mt-4 text-gray-500 text-3xl z-10 tracking-wider">誠徵設計師、助理</p>
          <span class="absolute bottom-2 right-0 w-48 h-2 bg-[#F1d25b] bg-opacity-80"></span>
        </div>
      </div>
    </div>

    <div class="w-full md:w-4/5 mx-auto p-4 md:p-0 text-black text-opacity-70">
      <!-- form -->
      <div class="w-full border-b border-primary p-2 md:mt-8">
        <label class="text-lg md:text-xl lg:text-2xl text-primary">招募表單</label>
      </div>

      <form class="text-[#606266] flex flex-col gap-7 my-8" @submit.prevent="submit()">
        <div class="w-full grid grid-cols-12 gap-3">
          <!-- 請問您的姓名？ -->
          <div class="w-full flex flex-col col-span-12 md:col-span-6">
            <label class="mb-1 md:text-lg">請問您的姓名？</label>
            <input v-model="temp.name" type="text" class="w-full h-10 box-border py-2 px-3 bg-white border border-[#888888] rounded" required="required" />
          </div>
          <!-- 請問您的性別？ -->
          <div class="w-full flex flex-col col-span-12 md:col-span-6">
            <label class="mb-1 md:text-lg">請問您的性別？</label>
            <div class="w-full h-10 flex items-center flex-wrap gap-3">
              <div class="flex items-center" v-for="(item, idx) in options" :key="idx">
                <input v-model="temp.sex" :id="idx" type="radio" :value="item.value" class="mr-1" required />
                <label class="font-medium tracking-wider" :for="idx">{{ item.label }}</label>
              </div>
            </div>
          </div>
          <!-- 請問您的聯絡手機號碼？ -->
          <div class="w-full flex flex-col col-span-12 md:col-span-6">
            <label class="mb-1 md:text-lg">請問您的聯絡手機號碼？</label>
            <input v-model="temp.phone" type="text" class="w-full h-10 box-border py-2 px-3 bg-white border border-[#888888] rounded" required="required" />
          </div>
          <!-- 請問您的出生年次？ -->
          <div class="w-full flex flex-col col-span-12 md:col-span-6">
            <label class="mb-1 md:text-lg">請問您的出生年次？</label>
            <input v-model="temp.birthday" type="text" class="w-full h-10 box-border py-2 px-3 bg-white border border-[#888888] rounded" required="required" />
          </div>
          <!-- 請問您的助理年資？ -->
          <div class="w-full flex flex-col col-span-12 md:col-span-6">
            <label class="mb-1 md:text-lg">請問您的助理年資？</label>
            <input v-model="temp.subYear" type="text" class="w-full h-10 box-border py-2 px-3 bg-white border border-[#888888] rounded" required="required" />
          </div>
          <!-- 請問您的設計師資歷(截至本月)？ -->
          <div class="w-full flex flex-col col-span-12 md:col-span-6">
            <label class="mb-1 md:text-lg">請問您的設計師資歷(截至本月)？</label>
            <input v-model="temp.workYear" type="text" class="w-full h-10 box-border py-2 px-3 bg-white border border-[#888888] rounded" required="required" />
          </div>
          <!-- 請問您目前還在原本的沙龍服務還是已經離職？ -->
          <div class="w-full flex flex-col col-span-12">
            <label class="mb-1 md:text-lg">請問您目前還在原本的沙龍服務還是已經離職？</label>
            <input v-model="temp.status" type="text" class="w-full h-10 box-border py-2 px-3 bg-white border border-[#888888] rounded" required="required" />
          </div>
          <!-- 請問目前(上一家)服務的髮廊位於哪一地區(Ex.中山區)？ -->
          <div class="w-full flex flex-col col-span-12">
            <label class="mb-1 md:text-lg">請問目前(上一家)服務的髮廊位於哪一地區(Ex.中山區)？</label>
            <input v-model="temp.lastLocation" type="text" class="w-full h-10 box-border py-2 px-3 bg-white border border-[#888888] rounded" required="required" />
          </div>
          <!-- 請問想要來應徵的主要原因？ -->
          <div class="w-full flex flex-col col-span-12">
            <label class="mb-1 md:text-lg">請問想要來應徵的主要原因？</label>
            <input v-model="temp.mainPurpose" type="text" class="w-full h-10 box-border py-2 px-3 bg-white border border-[#888888] rounded" required="required" />
          </div>
          <!-- 請問您最喜歡的技術項目？ -->
          <div class="w-full flex flex-col col-span-12">
            <label class="mb-1 md:text-lg">請問您最喜歡的技術項目？</label>
            <input v-model="temp.skill" type="text" class="w-full h-10 box-border py-2 px-3 bg-white border border-[#888888] rounded" required="required" />
          </div>
          <!-- 如之後面試有錄取，希望在哪一區上班(希望與實際分配不一定相同，會依錄取時的狀況而訂)？ -->
          <div class="w-full flex flex-col col-span-12">
            <label class="mb-1 md:text-lg">如之後面試有錄取，希望在哪一區上班(希望與實際分配不一定相同，會依錄取時的狀況而訂)？</label>
            <input v-model="temp.hopeLocation" type="text" class="w-full h-10 box-border py-2 px-3 bg-white border border-[#888888] rounded" required="required" />
          </div>
          <!-- 如之後面試有錄取，希望在哪一區上班(希望與實際分配不一定相同，會依錄取時的狀況而訂)？ -->
          <div class="w-full flex flex-col col-span-12">
            <label class="mb-1 md:text-lg">設計師請留下作品集連結，IG/FB都可(不接受沒有作品的應徵，請勿留下私人未公開的帳號)？</label>
            <input v-model="temp.link" type="text" class="w-full h-10 box-border py-2 px-3 bg-white border border-[#888888] rounded" required="required" />
          </div>
        </div>

        <input type="submit" value="確定送出" class="w-full bg-primary text-white text-lg font-bold p-2 rounded cursor-pointer duration-500 hover:opacity-80 disabled:opacity-80" :disabled="btnLoading" />
      </form>
    </div>
  </section>
</template>

<script>
import axios from "axios";

const formTemplate = {
  name: "",
  sex: "男",
  phone: "",
  birthday: "",
  subYear: "",
  workYear: "",
  status: "",
  lastLocation: "",
  mainPurpose: "",
  skill: "",
  hopeLocation: "",
  link: "",
};

export default {
  name: "RecruitmentPage",
  head() {
    return {
      title: "llnsist’s Hair Salon｜人才招募",
    };
  },
  data() {
    return {
      temp: JSON.parse(JSON.stringify(formTemplate)),

      options: [
        { label: "男", value: "男" },
        { label: "女", value: "女" },
      ],

      btnLoading: false,
    };
  },
  methods: {
    async submit() {
      this.btnLoading = true;

      const bodyFormData = new FormData();
      bodyFormData.set("entry.540998229", this.temp.name);
      bodyFormData.set("entry.1528075270", this.temp.sex);
      bodyFormData.set("entry.1616659545", this.temp.phone);
      bodyFormData.set("entry.62728312", this.temp.birthday);
      bodyFormData.set("entry.1145595845", this.temp.subYear);
      bodyFormData.set("entry.1688664022", this.temp.workYear);
      bodyFormData.set("entry.1273287378", this.temp.status);
      bodyFormData.set("entry.732482763", this.temp.lastLocation);
      bodyFormData.set("entry.1495094840", this.temp.mainPurpose);
      bodyFormData.set("entry.592583669", this.temp.skill);
      bodyFormData.set("entry.1716657032", this.temp.hopeLocation);
      bodyFormData.set("entry.1144177421", this.temp.link);
      bodyFormData.set("fvv", 1);

      await axios
        .post("https://docs.google.com/forms/u/0/d/e/1FAIpQLSchzw86Rs7DMaZ8e0u4hEEUrJ8ONdPiZvtR-6vUHhQCQAL4vA/formResponse", bodyFormData, { headers: { "Content-Type": "application/x-www-form-urlencoded" } })
        .then(() => {
          this.temp = JSON.parse(JSON.stringify(formTemplate));
          this.$swal.fire({
            icon: "success",
            iconColor: "#e8a19e",
            title: "我們已經收到您的應徵資訊囉～近日請隨時注意您的手機，感謝您！",
            showConfirmButton: true,
            confirmButtonText: "確認",
            confirmButtonColor: "#e8a19e",
          });
          this.btnLoading = false;
        })
        .catch(() => {
          this.temp = JSON.parse(JSON.stringify(formTemplate));
          this.$swal.fire({
            icon: "success",
            iconColor: "#e8a19e",
            title: "我們已經收到您的應徵資訊囉～近日請隨時注意您的手機，感謝您！",
            showConfirmButton: true,
            confirmButtonText: "確認",
            confirmButtonColor: "#e8a19e",
          });
          this.btnLoading = false;
        });
    },
  },
};
</script>