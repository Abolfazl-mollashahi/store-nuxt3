<template>
  <div class=" w-full h-max p-2 my-5">

    <div class=" w-full font-bold h-[50px] flex items-center justify-between">
      <button :class="dark ? 'text-green-600 border-green-600 hover:bg-green-600' : ' text-sky-600 border-sky-600 hover:bg-sky-600 ' "
      class=" w-max p-2 rounded-lg transition-all border-2 hover:text-white">مشاهده همه</button>
      <h2 :class="dark ? 'text-green-600 border-green-600' : ' text-sky-600 border-sky-600' "
      class=" w-max p-2 -translate-x-3 border-r-4 rounded-full select-none rotate-6"><span class=" block -rotate-6">مطالب خواندنی</span></h2>
    </div>

    <div dir="rtl" class=" w-full h-max py-2 px-2 flex overflow-scroll overflow-y-hidden ">
      <div class=" flex justify-center items-center gap-5">
        
        <!-- cart -->
        <div :class="dark ? 'text-white bg-[#1b1b4d84]' : ' bg-gray-300'"
         class=" w-[170px] h-[250px] text-[13px] md:text-[15px] md:w-[200px] md:h-[280px] font-bold rounded-xl" v-for="item in 10">
          <NuxtLink class=" w-full h-full gap-3 flex flex-col justify-center items-center" to="//">
          <img class=" w-[150px] h-[140px] md:w-[180px] md:h-[170px] rounded-[20px] rounded-tl-[50px] rounded-br-[50px] p-1 border-2 border-violet-500" src="/imgg/blog1.jpg" alt="">
          <span class=" text-center">چجوری یک کفش خوب انتخاب کنیم؟</span>
          <span>1402/08/21</span>
          </NuxtLink>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script setup>
import useDarkMode from "~/composables/darkmode";
let { isdarkmode: dark } = useDarkMode();
</script>
