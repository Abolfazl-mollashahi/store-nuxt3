<template>
  <div data-aos="fade-up" class="tilt_box_warp z-[1] w-max transition-all relative h-max p-1">
    <span class="_s"></span>
    <span class="_s"></span>
    <span class="_s"></span>
    <span class="_s"></span>
    <span class="_s"></span>
    <span class="_s"></span>
    <span class="_s"></span>
    <span class="_s"></span>
    <span class="_s"></span>
    <div class="tilt_box z-[3] drop w-[160px] h-[260px] md:w-[200px] md:h-[300px] text-center  text-[13px] md:text-[14px] font-bold overflow-hidden rounded-lg  transition-all shadow-lg bg-green-100 shadow-violet-900 p-0.5 dark:shadow-md dark:bg-transparent dark:p-1 dark:shadow-violet-900 ">
      <div class=" drop-menu w-full flex h-full flex-col gap-2 justify-start items-center">
        <img class=" w-[140px] h-[140px] md:w-[190px] md:h-[190px]" src="/imgg/p2.png" alt="">
        <span>کفش اسپورت مدل 232323</span>
        <p class=" line-through text-red-600">1,900,000</p>
        <div class=" flex gap-2 items-center justify-between">
          <span class=" px-1 rounded-full bg-red-600 text-white">20%</span>
          <div class=" flex gap-1 text-[#258e2c]">
            <span>1,600,000</span>
            <span>تومان</span>
          </div>
        </div>
      </div>
      <div class=" hidden drop-menu absolute top-0 left-0 w-full h-full flex-col gap-3 justify-center items-center bg-[#100621ee] ">
        <button class=" w-[80%] py-1.5 rounded-xl border-2 border-green-500 text-green-500 hover:bg-green-700 hover:text-white animate-btn1 scale-100 hover:scale-110">افزودن به سبدخرید</button>
        <button class=" w-[80%] py-1.5 rounded-xl border-2 border-green-500 text-green-500 hover:bg-green-700 hover:text-white animate-btn2 scale-100 hover:scale-110">افزودن به سبدخرید</button>
        <NuxtLink class="block w-[80%] py-1.5 rounded-xl border-2 border-green-500 text-green-500 hover:bg-green-700 hover:text-white animate-btn3 scale-100 hover:scale-110" to="/descripproduct" >مشاهده...</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
//bg-gray-300 border-[3px] hover:border-violet-600 dark:text-white dark:bg-[#1b1b4d84] dark:border-[3px] dark:border-[#1b1b4d84] dark:hover:border-green-600
</script>

<style scoped>
.drop:hover .drop-menu {
  display: flex;
}
</style>