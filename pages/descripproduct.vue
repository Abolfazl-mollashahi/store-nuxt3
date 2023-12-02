<template>
    <!-- route -->
    <div class=" my-3 w-[90%] mx-auto h-[50px] ">
        <div class=" w-max p-2 flex rounded-xl text-violet-950 dark:text-white lg:bg-violet-100 lg:dark:bg-[#1a0c54]">
            <div class="flex  justify-center items-center" v-for=" (item, index) in ['خانه', 'محصول']">
                <span class="px-1 select-none " v-if="index >= 1"> > </span>
                <NuxtLink class=" px-2 p-1 text-center lg:block lg:w-[80px] rounded-lg" to="#">{{ item }}</NuxtLink>
            </div>
        </div>
    </div>

    <!-- **************************** -->

    <!-- img/text/color/size... -->
    <div class="w-[95%] mx-auto p-2  rounded-2xl bg-violet-50 dark:bg-[#1a0c54] dark:text-white">

        <!-- product -->
        <div class=" w-full flex flex-col gap-3 lg:flex-row lg:justify-center lg:items-start ">

            <!-- icon - slider -->
            <div class="p-2 flex flex-col items-start justify-center">
                <!-- icons -->
                <div class=" w-full h-[50px] flex justify-center items-center gap-3">
                    <!-- btn-share -->
                    <button class=" w-8 h-8">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                        </svg>

                    </button>
                    <!--  -->
                    <button class=" w-8 h-8 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                        </svg>

                    </button>
                    <!--  -->
                    <button class=" w-8 h-8 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                    </button>
                </div>
                <!-- slider -->
                <div class="w-[95%] mx-auto h-[400px] sm:w-[500px] lg:w-[300px] lg:h-[300px]">
                    <img class=" w-[100%] h-[100%] rounded-xl" src="/img/m-p003.webp" alt="">
                </div>

            </div>

            <!-- textproduct -->
            <div class="px-2 flex flex-col gap-6 lg:px-10">
                <h1>کفش پیاده روی مردانه نیو بالانس مدل Mdrftlm2</h1>
                <div class="flex gap-3 text-sky-500">
                    <NuxtLink to="#">56دیدگاه</NuxtLink>
                    <NuxtLink to="#">کدکالا <span>1234</span></NuxtLink>
                </div>
                <div class="flex flex-row-reverse gap-2 justify-end ">
                    <p class=""><span>90%</span> از خریداران، خرید این کالا را پیشنهاد کرده‌اند</p>
                    <i>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6 text-green-500">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                        </svg>
                    </i>
                </div>
                <div class="">
                    <p class="my-2">ویژگی های محصول</p>
                    <ul class=" flex flex-col gap-2">
                        <li>جنس : پارچه</li>
                        <li>جنس زیره : لاستیک</li>
                        <li>نحوه بسته شدن کفش : بندی</li>
                    </ul>
                </div>
            </div>

            <!-- color - size -->
            <div class="px-2 flex flex-col gap-3">

                <div class=" flex flex-col gap-2">
                    <p>انتخاب رنگ</p>
                    <div class=" flex gap-2">
                        <button @click="funccolor(item)"
                            :class="item.flagcolor ? 'border-violet-800 dark:border-orange-600' : 'border-violet-300 dark:border-violet-950'"
                            class=" w-[100px] h-[40px] p-1 flex gap-2 justify-center items-center  border-2 rounded-xl"
                            v-for="item in product.colors">
                            <p>{{ item.name }}</p>
                            <p class=" w-4 h-4 rounded-full" :style="`background-color : ${item.code}`"></p>
                        </button>
                    </div>
                </div>

                <div class=" flex flex-col gap-2">
                    <p>انتخاب سایز</p>
                    <div class=" flex gap-2">
                        <button @click="funcsize(item)"
                            :class="item.flagsize ? 'border-violet-800 dark:border-orange-600' : 'border-violet-300 dark:border-violet-950'"
                            class=" w-[50px] h-[50px] p-1 border-2 rounded-full" v-for="item in product.sizes">
                            <p>{{ item.size }}</p>
                        </button>
                    </div>
                </div>

                <!-- mobile tem -->
                <div class=" flex flex-col gap-2 lg:hidden">
                    <p>انتخاب تعداد</p>

                    <div class="flex items-center gap-2">
                        <button @click="cunt--"
                            class="w-8 h-8 flex justify-center items-center text-red-700 rounded-full border-2 border-violet-400 transition-all hover:border-violet-900  ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                            </svg>
                        </button>

                        <p class="w-[40px] h-[40px] text-[20px] flex justify-center items-center">{{ cunt }}</p>

                        <button @click="cunt++"
                            class="w-8 h-8 flex justify-center items-center text-green-700 rounded-full border-2 border-violet-400 transition-all hover:border-violet-900 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </button>
                    </div>

                    <div
                        class=" w-full fixed bottom-0 left-0 p-2 flex justify-center gap-5 items-center bg-slate-100 dark:bg-[#100734] lg:hidden">
                        <button
                            class=" w-[50%] h-[40px] rounded-xl bg-green-400 text-green-800 dark:bg-green-800 dark:text-green-300 ">افزودن
                            به سبد خرید</button>
                        <div class=" w-max flex flex-col">
                            <p class=" flex gap-2 flex-row-reverse"><span
                                    class="px-1 p-1 text-white bg-red-600 rounded-full">60%</span> <span
                                    class=" text-slate-500 line-through">380000</span></p>
                            <p class="flex gap-2 flex-row-reverse"><span class="">تومان</span> <span class="">200000</span>
                            </p>
                        </div>
                    </div>

                </div>

                <!-- descktop tem -->
                <div class="hidden  lg:flex items-center flex-col gap-4 ">
                    <div
                        class=" w-[100%] h-[50px] flex items-center justify-center flex-row-reverse gap-2 rounded-xl text-green-700 bg-sky-200 dark:bg-sky-950 dark:text-green-300">
                        <p>تضمین سلامت فیزیکی و اصالت کالا</p>
                        <img class=" w-8 h-8" src="/tik.png" alt="">
                    </div>

                    <div class="flex gap-2">
                        <button @click="cunt--"
                            class=" p-1.5 text-red-700 rounded-full border-2 border-violet-400 transition-all hover:bg-violet-400 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                            </svg>
                        </button>

                        <p class="w-[40px] h-[40px] text-[20px] flex justify-center items-center">{{ cunt }}</p>

                        <button @click="cunt++"
                            class="  p-1.5 text-green-700 rounded-full border-2 border-violet-400 transition-all hover:bg-violet-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </button>
                    </div>

                    <div class=" w-full flex flex-col justify-center gap-3 items-center ">
                        <div class=" w-max flex gap-5">
                            <p class=" flex gap-2 flex-row-reverse"><span
                                    class="px-1 p-1 text-white bg-red-600 rounded-full">60%</span> <span
                                    class=" text-slate-500 line-through">380000</span></p>
                            <p class="flex gap-2 flex-row-reverse"><span class="">تومان</span> <span class="">200000</span>
                            </p>
                        </div>
                        <button
                            class=" w-[95%] h-[40px] rounded-xl bg-green-400 text-green-800 dark:bg-green-800 dark:text-green-300 ">افزودن
                            به سبد خرید</button>
                    </div>

                </div>

            </div>

        </div>

        <div class=" w-full mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <p class=" p-3 flex gap-1 flex-row-reverse items-center justify-end lg:justify-center">
                هفت روز ضمانت بازگشت کالا
                <img class=" w-8 h-8" src="/clock.png" alt="">
            </p>
            <p class=" p-3 flex gap-1 flex-row-reverse items-center justify-end lg:justify-center">
                تضمین اصالت کالا
                <img class=" w-8 h-8" src="/tik.png" alt="">
            </p>
            <p class=" p-3 flex gap-1 flex-row-reverse items-center justify-end lg:justify-center">
                هفت روز هفته
                <img class=" w-8 h-8" src="/chatbot.png" alt="">
            </p>
            <p class=" p-3 flex gap-1 flex-row-reverse items-center justify-end lg:justify-center">
                تحویل اکسپرس در تهران, کرج
                <img class=" w-8 h-8" src="/truck.png" alt="">
            </p>
        </div>

    </div>

    <!-- **************************** -->

    <!-- text/comment/desc  -->
    <div class="w-[95%] mt-10 mx-auto p-2 rounded-2xl bg-violet-50 dark:bg-[#1a0c54] dark:text-white">
        <!-- btn -->
        <div class=" flex gap-5 mb-5">
            <button @click="flagIntroduction = true, flagSpecifications = false, flagopinions = false"
                :class="flagIntroduction ? 'border-b-4 border-sky-700 ' : ''"
                class="p-1 text-[18px] rounded-b-lg">معرفی</button>
            <button @click="flagIntroduction = false, flagSpecifications = true, flagopinions = false"
                :class="flagSpecifications ? 'border-b-4 border-sky-700 ' : ''"
                class="p-1 text-[18px] rounded-b-lg">مشخصات</button>
            <button @click="flagIntroduction = false, flagSpecifications = false, flagopinions = true"
                :class="flagopinions ? 'border-b-4 border-sky-700 ' : ''" class="p-1 text-[18px] relative rounded-b-lg">
                دیدگاه ها
                <span class=" w-6 h-6 pt-0.5 text-[14px] rounded-full absolute top-1 bg-sky-600 text-white ">2</span>
            </button>
        </div>

        <!-- text-Introduction -->
        <div v-if="flagIntroduction" class=" w-full flex flex-col gap-4">
            <p>
                چه در حال تمرین و چه در زندگی روزمره، این کفش‌های اورجبنال نیوبالانس طوری طراحی شده‌اند که در هر نوع
                حرکت با شما همراه باشند. جزئیات متمرکز بر عملکرد مانند زیره میانی DynaSoft و زیره لاستیکی بادوام به این
                کفش وزن سبک و واکنش پذیری بالایی می بخشد که performance ورزشی شما را افزایش می دهد. ترکیب رنگی این کفش
                جذابیت و شادابی دو چندانی را به استایل اسپورت شما می بخشد.

                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
                متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
                کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
                شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
                الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری
            </p>

            <div class="w-[95%] mx-auto h-[400px] sm:w-[500px] lg:w-[300px] lg:h-[300px]">
                <img class=" w-[100%] h-[100%] rounded-xl" src="/img/m-p003.webp" alt="">
            </div>

            <div :class="flagcolaps ? '' : 'hidden'" class="w-full flex flex-col gap-4">
                <p>
                    چه در حال تمرین و چه در زندگی روزمره، این کفش‌های اورجبنال نیوبالانس طوری طراحی شده‌اند که در هر نوع
                    حرکت با شما همراه باشند. جزئیات متمرکز بر عملکرد مانند زیره میانی DynaSoft و زیره لاستیکی بادوام به
                    این
                    کفش وزن سبک و واکنش پذیری بالایی می بخشد که performance ورزشی شما را افزایش می دهد. ترکیب رنگی این
                    کفش
                    جذابیت و شادابی دو چندانی را به استایل اسپورت شما می بخشد.

                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                    چاپگرها و
                    متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
                    کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                    آینده،
                    شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
                    الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                    دشواری
                </p>

                <div class="w-[95%] mx-auto h-[400px] sm:w-[500px] lg:w-[300px] lg:h-[300px]">
                    <img class=" w-[100%] h-[100%] rounded-xl" src="/img/m-p003.webp" alt="">
                </div>

                <p>
                    چه در حال تمرین و چه در زندگی روزمره، این کفش‌های اورجبنال نیوبالانس طوری طراحی شده‌اند که در هر نوع
                    حرکت با شما همراه باشند. جزئیات متمرکز بر عملکرد مانند زیره میانی DynaSoft و زیره لاستیکی بادوام به
                    این
                    کفش وزن سبک و واکنش پذیری بالایی می بخشد که performance ورزشی شما را افزایش می دهد. ترکیب رنگی این
                    کفش
                    جذابیت و شادابی دو چندانی را به استایل اسپورت شما می بخشد.

                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                    چاپگرها و
                    متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
                    کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                    آینده،
                    شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
                    الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                    دشواری
                </p>
            </div>
            <button @click="flagcolaps = !flagcolaps" class=" w-max p-2 px-3 mx-auto rounded-xl text-sky-800 bg-sky-300">{{
                flagcolaps ? 'بستن' : `مشاهد
                بیشتر...` }}</button>

        </div>

        <!-- text-Specifications -->
        <div v-if="flagSpecifications" class="flex flex-col gap-5 py-5 select-none">
            <p class="flex gap-10"><span>جنس :</span> <span>پارچه</span></p>
            <p class="flex gap-10"><span>جنس زیره</span> <span>لاستیک</span></p>
            <p class="flex gap-10"><span>نحوه بسته شدن کفش</span> <span>بندی</span></p>
            <p class="flex gap-10"><span>ویژگی‌های زیره</span>
                <span class="flex flex-col gap-4">
                    <span>انعطاف پذیر</span>
                    <span>دارای بالشتک هوا</span>
                    <span>قابلیت ارتجاعی</span>
                    <span>قابلیت گردش هوا</span>
                    <span>کاهش فشار وارده</span>
                    <span>مقاوم در برابر سایش</span>
                </span>
            </p>
        </div>

        <!-- text-opinions -->
        <div v-if="flagopinions" class="flex flex-col md:flex-row-reverse gap-5  overflow-hidden">

            <div
                class="w-full p-1 h-max flex gap-1 overflow-scroll overflow-x-auto overflow-y-hidden md:w-2/3 md:h-[500px] md:flex-col md:items-center md:overflow-y-auto ">

                <div class=" flex gap-2 md:flex-col ">
                    <!-- comments -->
                    <div class=" flex flex-col gap-4 border-2 border-violet-300 transition-all p-3 w-[300px] h-max md:w-[400px] lg:w-[100%] rounded-2xl bg-violet-200 dark:bg-[#271571] dark:text-white hover:bg-violet-300 dark:hover:bg-violet-950 md:border-none "
                        v-for="item in product.comments" :key="item.id">
                        <p :class="item.offer ? 'text-green-700' : 'text-red-700'"
                            class="flex flex-row-reverse justify-end gap-2">
                            {{ item.offer ? `پیشنهاد میکنم` : `پیشنهاد نمیکنم` }}
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                                </svg>
                            </i>
                        </p>

                        <p>{{ item.text }}</p>

                        <div class=" flex flex-col gap-5">
                            <div class=" flex gap-3">
                                <p>خریدار</p>
                                <p>1405/05/19</p>
                            </div>
                            <div class="flex gap-3">
                                <button
                                    class=" w-max h-10 flex gap-2 items-center justify-center rounded-full text-green-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                                    </svg>
                                    <span>{{ item.like }}</span>
                                </button>
                                <button
                                    class=" w-max h-10 flex gap-2 items-center justify-center rounded-full text-red-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                                    </svg>
                                    <span>{{ item.nolike }}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="w-full md:w-1/3">
                <p class="mt-10 font-bold text-[17px]">ثبت دیدگاه :</p>
                <!-- cerate comment -->
                <div class=" w-full mt-5 flex gap-5 flex-col justify-center items-center">
                    <div class="flex flex-col relative">
                        <label class="my-1" for="">عنوان دیدگاه :</label>
                        <input dir="rtl" class=" p-2  shadow-xl outline-none rounded-xl dark:bg-[#271571]" type="text">
                    </div>
                    <p>این محصول را به دیگران پیشنهاد :</p>
                    <div class=" flex gap-3">
                        <button
                            class=" px-5 p-1 shadow-md shadow-gray-800 dark:shadow-gray-400 text-red-700 hover:border-red-700 flex flex-row-reverse  rounded-xl border-2 border-violet-600">
                            نمیکنم
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                                </svg>
                            </i>
                        </button>
                        <button
                            class=" px-5 p-1 shadow-md shadow-gray-800 dark:shadow-gray-400 text-green-700 hover:border-green-700 flex flex-row-reverse rounded-xl border-2 border-violet-600">
                            میکنم
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                                </svg>
                            </i>
                        </button>
                    </div>
                    <textarea dir="rtl" class=" shadow-xl rounded-xl outline-none p-2 dark:bg-[#271571] select-none "
                        name="" id="" cols="40" rows="3"></textarea>
                    <button
                        class=" w-[80%] py-2 transition-all bg-violet-400 hover:text-violet-100 hover:bg-violet-500 dark:bg-violet-900 dark:hover:bg-violet-950 rounded-xl">ارسال
                        دیدگاه</button>
                </div>
            </div>

        </div>


    </div>

    <Listedproducts title="محصولات مرتبط" />
</template>

<script setup>

let product = reactive({
    colors: [
        { name: 'سیاه', code: '#000', flagcolor: true },
        { name: 'سفید', code: '#343243', flagcolor: false },
        { name: 'طوسی', code: '#343434', flagcolor: false },
    ],
    sizes: [
        { size: '37', flagsize: true },
        { size: '40', flagsize: false },
        { size: '42', flagsize: false },
        { size: '43', flagsize: false },
    ],
    comments: [
        {
            id: 1,
            text: 'Minima aperiam similique illum, aut omnis libero ut repellat consequatur, temporibus vero voluptates delectus eos totam assumenda. Error laboriosam beatae tempore vel excepturi, nostrum non quo. Minima repudiandae qui iste!',
            offer: true,
            like: 32,
            nolike: 10,
        },
        {
            id: 2,
            text: 'Minima aperiam similique illum, aut omnis libero ut repellat consequatur, temporibus vero voluptates delectus eos totam assumenda. Error laboriosam beatae tempore vel excepturi, nostrum non quo. Minima repudiandae qui iste!',
            offer: false,
            like: 45,
            nolike: 12,
        },
        {
            id: 3,
            text: 'Minima aperiam similique illum, aut omnis libero ut repellat consequatur, temporibus vero voluptates delectus eos totam assumenda. Error laboriosam beatae tempore vel excepturi, nostrum non quo. Minima repudiandae qui iste!',
            offer: true,
            like: 324,
            nolike: 1,
        },
        {
            id: 4,
            text: 'Minima aperiam similique illum, aut omnis libero ut repellat consequatur, temporibus vero voluptates delectus eos totam assumenda. Error laboriosam beatae tempore vel excepturi, nostrum non quo. Minima repudiandae qui iste!',
            offer: false,
            like: 3,
            nolike: 102,
        },
        {
            id: 5,
            text: 'Minima aperiam similique illum, aut omnis libero ut repellat consequatur, temporibus vero voluptates delectus eos totam assumenda. Error laboriosam beatae tempore vel excepturi, nostrum non quo. Minima repudiandae qui iste!',
            offer: true,
            like: 333,
            nolike: 120,
        },
        {
            id: 6,
            text: 'Minima aperiam similique illum, aut omnis libero ut repellat consequatur, temporibus vero voluptates delectus eos totam assumenda. Error laboriosam beatae tempore vel excepturi, nostrum non quo. Minima repudiandae qui iste!',
            offer: false,
            like: 56,
            nolike: 898,
        },
    ]
})


let cunt = ref(1)
let flagIntroduction = ref(true)
let flagSpecifications = ref(false)
let flagopinions = ref(false)
let flagcolaps = ref(false)

// btn colors
let funccolor = (e) => {
    let item = product.colors.find(i => i.name === e.name)
    product.colors.forEach(i => i.flagcolor = false)
    item.flagcolor = true
}
// btn size
let funcsize = (e) => {
    let item = product.sizes.find(i => i.size === e.size)
    product.sizes.forEach(i => i.flagsize = false)
    item.flagsize = true
}

</script>


<style >
::-webkit-scrollbar {
    width: 5px;
    height: 5px;
}

::-webkit-scrollbar-thumb {
    border-radius: 50px;
    background-color: rgb(73, 23, 135);
}
</style>