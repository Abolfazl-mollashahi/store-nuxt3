
<template>
  <Tilt />
  <Slider />
  <Listedproducts title="پیشنهادات ویزه" />
  <Listedproducts title="جدید ترین محصولات" />
  <!-- category-img -->
  <div class=" w-[90%] mx-auto h-max flex flex-col lg:flex-row justify-center items-center gap-2 px-5 my-10 ">
    <div data-aos="fade-up" class="tilt_box_warp hover:z-[4] w-[100%] h-[200px] sm:h-[250px] lg:w-1/2 lg:h-[300px]">
      <span class="_s"></span>
      <span class="_s"></span>
      <span class="_s"></span>
      <span class="_s"></span>
      <span class="_s"></span>
      <span class="_s"></span>
      <span class="_s"></span>
      <span class="_s"></span>
      <span class="_s"></span>
      <img class=" tilt_box w-full h-full rounded-xl" src="/imgg/category-right.jpg" alt="">
    </div>
    <div data-aos="fade-up" class="tilt_box_warp hover:z-[4] w-[100%] h-[200px] sm:h-[250px] lg:w-1/2 lg:h-[300px]">
      <span class="_s"></span>
      <span class="_s"></span>
      <span class="_s"></span>
      <span class="_s"></span>
      <span class="_s"></span>
      <span class="_s"></span>
      <span class="_s"></span>
      <span class="_s"></span>
      <span class="_s"></span>
      <img class=" tilt_box w-full h-full rounded-xl" src="/imgg/category-left.jpg" alt="">
    </div>
  </div>
  <!--  -->
  <div
    class=" w-full h-max mt-5 gap-5 grid items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-none md:grid-flow-col px-5 my-5">
    <NuxtLink data-aos="fade-up"
      class=" w-max mx-auto flex flex-col gap-1 justify-center hover:text-violet-700  items-center" to="//">
      <img
        class=" w-[100px] h-[100px] hover:bg-violet-700 p-1 border transition-colors dark:border-violet-950 rounded-full"
        src="/imgg/c1.jpg" alt="">
      جوراب مردانه
    </NuxtLink>
    <NuxtLink data-aos="fade-up"
      class="w-max mx-auto flex flex-col gap-1 justify-center hover:text-violet-700 items-center" to="//">
      <img
        class=" w-[100px] h-[100px] hover:bg-violet-700 p-1 border transition-colors dark:border-violet-950 rounded-full"
        src="/imgg/c2.jpg" alt="">
      جوراب زنانه
    </NuxtLink>
    <NuxtLink data-aos="fade-up"
      class="w-max mx-auto flex flex-col gap-1 justify-center hover:text-violet-700 items-center" to="//">
      <img
        class=" w-[100px] h-[100px] hover:bg-violet-700 p-1 border transition-colors dark:border-violet-950 rounded-full"
        src="/imgg/c3.jpg" alt="">
      کفش ورزشی مردانه
    </NuxtLink>
    <NuxtLink data-aos="fade-up"
      class="w-max mx-auto flex flex-col gap-1 justify-center hover:text-violet-700 items-center" to="//">
      <img
        class=" w-[100px] h-[100px] hover:bg-violet-700 p-1 border transition-colors dark:border-violet-950 rounded-full"
        src="/imgg/c4.jpg" alt="">
      کفش ورزشی زنانه
    </NuxtLink>
    <NuxtLink data-aos="fade-up"
      class="w-max mx-auto flex flex-col gap-1 justify-center hover:text-violet-700 items-center" to="//">
      <img
        class=" w-[100px] h-[100px] hover:bg-violet-700 p-1 border transition-colors dark:border-violet-950 rounded-full"
        src="/imgg/c5.jpg" alt="">
      کیف زنانه
    </NuxtLink>
    <NuxtLink data-aos="fade-up"
      class="w-max mx-auto flex flex-col gap-1 justify-center hover:text-violet-700 items-center" to="//">
      <img
        class=" w-[100px] h-[100px] hover:bg-violet-700 p-1 border transition-colors dark:border-violet-950 rounded-full"
        src="/imgg/c6.jpg" alt="">
      کیف مردانه
    </NuxtLink>
  </div>

  <Listedproducts title="پرفروش ترین محصولات" />

  <button @click="navigateTo('/basket')">سبدخرید</button>
  <button @click="navigateTo('/descripproduct')">جزعیات محصولات</button>
</template>

<script setup>




</script>

<style scoped></style>../db