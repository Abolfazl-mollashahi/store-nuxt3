<template>
    <div class=" w-[100%] p-5 flex flex-col gap-6 justify-center items-center transition-all lg:flex-row">
        
        <div data-aos="fade-up" data-aos-anchor-placement="center-center" class="tilt_box_warp z-[3] w-[100%] h-[250px] sm:w-[600px] sm:h-[300px] lg:w-[850px] lg:h-[405px] relative">
            <span class="_s"></span>
            <span class="_s"></span>
            <span class="_s"></span>
            <span class="_s"></span>
            <span class="_s"></span>
            <span class="_s"></span>
            <span class="_s"></span>
            <span class="_s"></span>
            <span class="_s"></span>
            <button @click=""
                class=" w-[35px] z-[3] h-[35px] rounded-full absolute bottom-5 left-[40%] lg:left-[43%] text-white bg-violet-500 hover:bg-violet-800 dark:bg-violet-900 dark:hover:bg-violet-500 ">-</button>
            <img class=" tilt_box w-full h-full rounded-xl shadow-lg bg-green-900 shadow-violet-900 p-0.5 dark:shadow-md dark:bg-transparent dark:p-1 dark:shadow-violet-900 " :src="sliderbar[index]" alt="">
            <button @click=""
                class=" w-[35px] z-[3] h-[35px] rounded-full absolute bottom-5 right-[40%] lg:right-[43%] text-white bg-violet-500 hover:bg-violet-800 dark:bg-violet-900 dark:hover:bg-violet-500 ">+</button>
        </div>

        <div class=" w-[100%] h-[150px] flex justify-center items-center gap-2 lg:w-max  lg:flex-col">
            <div data-aos="fade-up" class="tilt_box_warp z-[2] w-[50%] h-full sm:w-[300px] lg:w-[400px] lg:h-[200px] relative">
                <span class="_s"></span>
                <span class="_s"></span>
                <span class="_s"></span>
                <span class="_s"></span>
                <span class="_s"></span>
                <span class="_s"></span>
                <span class="_s"></span>
                <span class="_s"></span>
                <span class="_s"></span>
                <img class="tilt_box w-[100%] h-full sm:w-[300px] lg:w-[400px] lg:h-[200px] rounded-xl shadow-lg bg-green-900 shadow-violet-900 p-0.5 dark:shadow-md dark:bg-transparent dark:p-1 dark:shadow-violet-900 " src="/imgg/main-banner-top.jpg" alt="">
            </div>
            <div data-aos="fade-up" class="tilt_box_warp z-[2] w-[50%] h-full sm:w-[300px] lg:w-[400px] lg:h-[200px] relative">
                <span class="_s"></span>
                <span class="_s"></span>
                <span class="_s"></span>
                <span class="_s"></span>
                <span class="_s"></span>
                <span class="_s"></span>
                <span class="_s"></span>
                <span class="_s"></span>
                <span class="_s"></span>
                <img class=" tilt_box w-[100%] h-full sm:w-[300px] lg:w-[400px] lg:h-[200px] rounded-xl shadow-lg bg-green-900 shadow-violet-900 p-0.5 dark:shadow-md dark:bg-transparent dark:p-1 dark:shadow-violet-900"
                    src="/imgg/main-bot.gif" alt="">
            </div>
        </div>
    </div>
</template>


<script setup>

const sliderbar = [
    '/imgg/main-slider-1.jpg',
    '/imgg/main-slider-2.jpg',
    '/imgg/main-slider-3.jpg',
]
let index = ref(0)

setInterval(() => {
    if (index.value >= sliderbar.length - 1) {
        index.value = -1
    }
    index.value++
}, 5000)

</script>