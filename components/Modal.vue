<template>
  <transition>
    <div class="fixed top-0 left-0 p-6 md:p-10 box-border w-full min-h-screen flex justify-center z-40" :class="`items-${align}`" v-show="openModal">
      <transition name="opacityTransition">
        <div class="max-h-[90vh] bg-white rounded-md z-50 pb-2 overflow-y-auto absolute" :class="width">
          <!-- header -->
          <div class="px-4 pt-2 sticky top-0 z-10 bg-white">
            <div class="w-full flex items-center justify-between border-b">
              <strong class="text-xl border-b-4 border-primary">{{title}}</strong>
              <span class="cursor-pointer " @click="closeModal()">
                <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <g data-name="Layer 2">
                    <g data-name="close">
                      <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" />
                      <path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" />
                    </g>
                  </g>
                </svg>
              </span>
            </div>
          </div>

          <!-- body -->
          <div class="px-4">
            <slot></slot>
          </div>
        </div>
      </transition>

      <transition name="opacityTransition">
        <div class="bg-gray-700 opacity-75 fixed top-0 left-0 w-full h-full z-40"></div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    openModal: {
      type: Boolean,
      required: true,
      default: false,
    },
    width: {
      type: [Number, String],
      required: false,
      default: "w-1/2",
    },
    align: {
      type: String,
      required: false,
      default: "center",
    },
    title: {
      type: String,
      required: false,
    },
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
  watch: {
    openModal(bol) {
      if (bol) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    },
  },
};
</script>