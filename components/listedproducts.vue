<template>
  <div class=" w-full h-max p-2 my-5">

    <div class=" w-full font-bold h-[50px] flex items-center justify-between">
      <h2 data-aos="fade-up" class=" w-max p-2 -translate-x-3 border-r-4 rounded-full select-none rotate-6 darl:text-green-600 text-violet-600 border-violet-600 dark:text-green-600 dark:border-green-600"><span class=" -rotate-6">{{ title }}</span></h2>
      <button @click=" navigateTo('/serchproducts')" data-aos="fade-up" class=" w-max p-2 rounded-lg transition-all border-2 hover:text-white text-violet-600 border-violet-600 hover:bg-violet-600  dark:hover:text-white dark:text-green-600 dark:border-green-600 dark:hover:bg-green-600">مشاهده همه</button>
    </div>

    <div class=" w-full h-max py-3 flex overflow-scroll overflow-y-hidden bg-scroll-400 ">
      <div class=" flex justify-center items-center gap-2">
        <div class="" v-for="item in 10" :key="item">
          <Product />
        </div>ّ
      </div>
    </div>

  </div>
</template>

<script setup>

let prop = defineProps(['title'])


</script>

<style scoped>
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

::-webkit-scrollbar-thumb {
  border-radius: 50px;
  background-color: rgb(73, 23, 135);
}
</style>
