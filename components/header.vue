<template>
  <div class="w-full h-[100px] lg:h-[125px] flex gap-2 flex-col p-5 bg-gray-100 dark:text-white dark:bg-[#0d0d25]">
    <div class="w-full flex items-centsr gap-5 justify-between lg:justify-around">

      <div class="w-max flex relative justify-center items-center gap-10 lg:gap-32">
        <!-- btn-menu_right -->
        <button @click="menu_right = true" class="w-[35px] h-[35px] lg:hidden">
          <img src="/menu_icon.png" alt="" />
        </button>

        <!-- logo -->
        <div class="w-max">
          <NuxtLink class="text-[#3e96af] text-[20px] font-bold lg:text-[40px]" to="///">logo site</NuxtLink>
        </div>

        <!-- serch-lg -->
        <div class="hidden w-[90%] md:flex md:w-[350px] md:flex-col lg:w-[500px] items-center  p-1 dark:text-white dark:bg-[#0d0d25] dark:shadow-gray-500">
          <div class="w-[100%] flex justify-center items-end relative">
            <button class="absolute right-2 top-2 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class=""
                viewBox="0 0 16 16">
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
            <input dir="rtl" class="w-full h-[45px] px-10 outline-none rounded-lg bg-violet-300 dark:bg-violet-950"
              type="text" name="" v-model="inpserch" id="" />
          </div>
          <div :class="inpserch
              ? ' '
              : '', inpserch == '' ? 'hidden' : 'block '
            " class=" w-[100%] h-[300px] z-[3] p-1 absolute top-14  rounded-lg shadow-lg shadow-violet-800 bg-violet-50 dark:text-white dark:bg-[#0d0d25] dark:shadow-violet-800">
            <div class=" w-full px-1  ">
              <!-- products -->
              <div dir="rtl" class="' w-[100%] h-[90px] px-1 flex items-center gap-2 overflow-scroll overflow-y-hidden '">
                <!-- cart -->
                <div :class="dark ? 'text-white bg-[#101045]' : 'text-sky-900 bg-[#c8c8c8]'
                  " class="w-max h-[60px] px-1 flex justify-center items-center rounded-xl text-[13px]">
                  <p class="w-[140px] text-center">کفش اسپورت</p>
                  <img class="w-[50px] h-[50px]" src="/imgg/p4.png" alt="" />
                </div>
                <!-- cart -->
                <div :class="dark ? 'text-white bg-[#101045]' : 'text-sky-900 bg-[#c8c8c8]'
                  " class="w-max h-[60px] px-1 flex justify-center items-center rounded-xl text-[13px]">
                  <p class="w-[140px] text-center">کفش اسپورت</p>
                  <img class="w-[50px] h-[50px]" src="/imgg/p4.png" alt="" />
                </div>
                <!-- cart -->
                <div :class="dark ? 'text-white bg-[#101045]' : 'text-sky-900 bg-[#c8c8c8]'
                  " class="w-max h-[60px] px-1 flex justify-center items-center rounded-xl text-[13px]">
                  <p class="w-[140px] text-center">کفش اسپورت</p>
                  <img class="w-[50px] h-[50px]" src="/imgg/p4.png" alt="" />
                </div>
                <!-- cart -->
                <div :class="dark ? 'text-white bg-[#101045]' : 'text-sky-900 bg-[#c8c8c8]'
                  " class="w-max h-[60px] px-1 flex justify-center items-center rounded-xl text-[13px]">
                  <p class="w-[140px] text-center">کفش اسپورت</p>
                  <img class="w-[50px] h-[50px]" src="/imgg/p4.png" alt="" />
                </div>
                <!-- cart -->
                <div :class="dark ? 'text-white bg-[#101045]' : 'text-sky-900 bg-[#c8c8c8]'
                  " class="w-max h-[60px] px-1 flex justify-center items-center rounded-xl text-[13px]">
                  <p class="w-[140px] text-center">کفش اسپورت</p>
                  <img class="w-[50px] h-[50px]" src="/imgg/p4.png" alt="" />
                </div>
              </div>

              <!-- serch-your -->
              <div dir="rtl" class="my-2">
                <h1 class="">جستجوهای اخیر شما</h1>
                <div class="w-full h-[70px] flex items-center gap-2 overflow-scroll overflow-y-hidden">
                  <!-- item -->
                  <div :class="dark ? 'text-white bg-[#101045]' : 'text-sky-900 bg-[#c8c8c8]'
                    " class="w-max h-[50px] flex justify-center items-center rounded-xl text-[13px]">
                    <p class="w-[100px] text-center">تست اول</p>
                  </div>
                  <!-- item -->
                  <div :class="dark ? 'text-white bg-[#101045]' : 'text-sky-900 bg-[#c8c8c8]'
                    " class="w-max h-[50px] flex justify-center items-center rounded-xl text-[13px]">
                    <p class="w-[100px] text-center">تست اول</p>
                  </div>
                  <!-- item -->
                  <div :class="dark ? 'text-white bg-[#101045]' : 'text-sky-900 bg-[#c8c8c8]'
                    " class="w-max h-[50px] flex justify-center items-center rounded-xl text-[13px]">
                    <p class="w-[100px] text-center">تست اول</p>
                  </div>
                  <!-- item -->
                  <div :class="dark ? 'text-white bg-[#101045]' : 'text-sky-900 bg-[#c8c8c8]'
                    " class="w-max h-[50px] flex justify-center items-center rounded-xl text-[13px]">
                    <p class="w-[100px] text-center">تست اول</p>
                  </div>
                  <!-- item -->
                  <div :class="dark ? 'text-white bg-[#101045]' : 'text-sky-900 bg-[#c8c8c8]'
                    " class="w-max h-[50px] flex justify-center items-center rounded-xl text-[13px]">
                    <p class="w-[100px] text-center">تست اول</p>
                  </div>
                  <!-- item -->
                  <div :class="dark ? 'text-white bg-[#101045]' : 'text-sky-900 bg-[#c8c8c8]'
                    " class="w-max h-[50px] flex justify-center items-center rounded-xl text-[13px]">
                    <p class="w-[100px] text-center">تست اول</p>
                  </div>
                </div>
              </div>

              <!-- serch-all-hot -->
              <div dir="rtl" class="my-2">
                <h1 class="">جستجوهای پرطرفدار</h1>
                <div class="w-full h-[70px] flex items-center gap-2 overflow-scroll overflow-y-hidden">
                  <!-- item -->
                  <div :class="dark ? 'text-white bg-[#101045]' : 'text-sky-900 bg-[#c8c8c8]'
                    " class="w-max h-[50px] flex justify-center items-center rounded-xl text-[13px]">
                    <p class="w-[100px] text-center">تست اول</p>
                  </div>
                  <!-- item -->
                  <div :class="dark ? 'text-white bg-[#101045]' : 'text-sky-900 bg-[#c8c8c8]'
                    " class="w-max h-[50px] flex justify-center items-center rounded-xl text-[13px]">
                    <p class="w-[100px] text-center">تست اول</p>
                  </div>
                  <!-- item -->
                  <div :class="dark ? 'text-white bg-[#101045]' : 'text-sky-900 bg-[#c8c8c8]'
                    " class="w-max h-[50px] flex justify-center items-center rounded-xl text-[13px]">
                    <p class="w-[100px] text-center">تست اول</p>
                  </div>
                  <!-- item -->
                  <div :class="dark ? 'text-white bg-[#101045]' : 'text-sky-900 bg-[#c8c8c8]'
                    " class="w-max h-[50px] flex justify-center items-center rounded-xl text-[13px]">
                    <p class="w-[100px] text-center">تست اول</p>
                  </div>
                  <!-- item -->
                  <div :class="dark ? 'text-white bg-[#101045]' : 'text-sky-900 bg-[#c8c8c8]'
                    " class="w-max h-[50px] flex justify-center items-center rounded-xl text-[13px]">
                    <p class="w-[100px] text-center">تست اول</p>
                  </div>
                  <!-- item -->
                  <div :class="dark ? 'text-white bg-[#101045]' : 'text-sky-900 bg-[#c8c8c8]'
                    " class="w-max h-[50px] flex justify-center items-center rounded-xl text-[13px]">
                    <p class="w-[100px] text-center">تست اول</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>


      </div>

      <!-- btns -->
      <div class="w-max flex gap-5 items-center transition-all">
        <!-- btn-person -->
        <button @click="person_full = true" class="w-[35px] h-[35px] hover:text-violet-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="currentColor"
            class="text-violet-950 dark:text-violet-600" viewBox="0 0 16 16">
            <path
              d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
          </svg>
        </button>
        <!-- btn-basket -->
        <button @click="backet_left_full = true" class="w-[35px] h-[35px] relative hover:text-violet-800">
          <span class="px-1 absolute -top-3 -right-1 rounded-full text-white bg-green-700">10</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16"
            class="tst text-violet-950 dark:text-violet-600">
            <path
              d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z" />
          </svg>
        </button>
        <!-- btn-dark-mode -->
        <button
          class=" w-[35px] h-[35px] relative text-violet-950 dark:text-violet-600 dark:border-violet-600 hover:text-violet-800 hover:border-violet-800 border-2 p-1 rounded-full "
          @click=" setcolorthem($colorMode.preference == 'dark' ? 'light' : 'dark')">
          <svg v-if="$colorMode.preference == 'light'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </svg>

          <svg v-if="$colorMode.preference == 'dark'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
        </button>
      </div>

    </div>

    <!-- menu-list  lg -->
    <div class="hidden  w-full lg:block">
      <ul class="flex flex-row gap-5 items-start lg:text-[17px]">
        <li class="w-max drap relative">
          <p class="hover:text-sky-500 cursor-pointer">دسته بندی ها</p>
          <div class="hidden drap-menu z-[2] w-[800px] h-max absolute top-[25px] p-2 right-0">
            <div :class="dark ? ' text-white bg-[#0d0d25]' : ' bg-violet-200'"
              class="w-[100%] h-[450px] flex p-2 rounded-2xl">

              <div :class="dark ? ' text-white bg-[#191946]' : ' bg-violet-300'" class="w-full h-full rounded-xl">
                <!-- men -->
                <div v-if="flagmen || flagwomen || flagChildish || flagbag || flagCosmetics || flagPerfume_and_cologne"
                  class=" w-[100%] h-full">

                </div>

              </div>

              <!-- item-menu -->
              <div class="w-[150px] p-2 h-full text-[13px] font-bold">
                <ul dir="rtl" class="w-full h-full flex gap-3 flex-col justify-start items-senter">
                  <li>
                    <button @click="
                      flagmen = true,
                      flagwomen = false,
                      flagChildish = false,
                      flagbag = false,
                      flagCosmetics = false,
                      flagPerfume_and_cologne = false"
                      :class="dark ? ' text-white bg-sky-600 hover:text-sky-200' : 'bg-sky-300 text-black hover:text-sky-800 '"
                      class=" w-[120px] h-[40px] flex gap-3 items-center justify-center hover:-translate-x-3 rounded-lg">
                      مردانه
                    </button>

                  </li>
                  <li>
                    <button @click="
                      flagmen = false,
                      flagwomen = true,
                      flagChildish = false,
                      flagbag = false,
                      flagCosmetics = false,
                      flagPerfume_and_cologne = false"
                      :class="dark ? ' text-white bg-sky-600 hover:text-sky-200' : 'bg-sky-300 text-black hover:text-sky-800 '"
                      class=" w-[120px] h-[40px] flex gap-3 items-center justify-center hover:-translate-x-3 rounded-lg">
                      زتانه
                    </button>
                  </li>
                  <li>
                    <button @click="
                      flagmen = false,
                      flagwomen = false,
                      flagChildish = true,
                      flagbag = false,
                      flagCosmetics = false,
                      flagPerfume_and_cologne = false"
                      :class="dark ? ' text-white bg-sky-600 hover:text-sky-200' : 'bg-sky-300 text-black hover:text-sky-800 '"
                      class=" w-[120px] h-[40px] flex gap-3 items-center justify-center hover:-translate-x-3 rounded-lg">
                      بچه گانه
                    </button>
                  </li>
                  <li>
                    <button @click="
                      flagmen = false,
                      flagwomen = false,
                      flagChildish = false,
                      flagbag = true,
                      flagCosmetics = false,
                      flagPerfume_and_cologne = false"
                      :class="dark ? ' text-white bg-sky-600 hover:text-sky-200' : 'bg-sky-300 text-black hover:text-sky-800 '"
                      class=" w-[120px] h-[40px] flex gap-3 items-center justify-center hover:-translate-x-3 rounded-lg">
                      کیف
                    </button>
                  </li>
                  <li>
                    <button @click="
                      flagmen = false,
                      flagwomen = false,
                      flagChildish = false,
                      flagbag = false,
                      flagCosmetics = true,
                      flagPerfume_and_cologne = false"
                      :class="dark ? ' text-white bg-sky-600 hover:text-sky-200' : 'bg-sky-300 text-black hover:text-sky-800 '"
                      class=" w-[120px] h-[40px] flex gap-3 items-center justify-center hover:-translate-x-3 rounded-lg">
                      آرایشی بهداشتی
                    </button>
                  </li>
                  <li>
                    <button @click="
                      flagmen = false,
                      flagwomen = false,
                      flagChildish = false,
                      flagbag = false,
                      flagCosmetics = false,
                      flagPerfume_and_cologne = true"
                      :class="dark ? ' text-white bg-sky-600 hover:text-sky-200' : 'bg-sky-300 text-black hover:text-sky-800 '"
                      class=" w-[120px] h-[40px] flex gap-3 items-center justify-center hover:-translate-x-3 rounded-lg">
                      عطر و ادکلن
                    </button>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </li>
        <li class="w-max">فروش ویزه</li>
        <li class="w-max">چرا روتی کالا</li>
        <li class="w-max">راهنمای خرید</li>
        <li class="w-max">...سایر</li>
      </ul>
    </div>

    <!-- menu-right -->
    <div :class="menu_right ? 'flex z-[40] lg:hidden' : 'hidden'"
      class="w-full h-full fixed top-0 right-0 bg-[#000000a4]">
      <div class="w-[60%] px-2 rounded-l-2xl text-violet-950 bg-gray-100 dark:text-white dark:bg-[#0d0d25]">
        <div class="flex justify-between px-5 items-center">
          <button @click="menu_right = false" class="w-[30px] h-[30px] bg-red-600 text-white rounded-lg">
            X
          </button>
          <NuxtLink class="text-[#3e96af] text-[40px] font-bold" to="/">logo</NuxtLink>
        </div>
        <!-- menu -->
        <div class="w-full mt-5 flex pr-5">
          <ul class="flex flex-col gap-5 items-start">
            
            <li class="w-max">
              <NuxtLink class="block scale-95 hover:scale-110 hover:text-sky-500" to="/">صفحه اصلی</NuxtLink>
            </li>
            <li class="w-max">
              <NuxtLink class="block scale-95 hover:scale-110 hover:text-sky-500" to="//">فروش ویزه</NuxtLink>
            </li>
            <li class="w-max">
              <NuxtLink class="block scale-95 hover:scale-110 hover:text-sky-500" to="///">چرا روتی کالا</NuxtLink>
            </li>
            <li class="w-max">
              <NuxtLink class="block scale-95 hover:scale-110 hover:text-sky-500" to="//">راهنمای خرید</NuxtLink>
            </li>
            <li class="w-max">
              <NuxtLink class="block scale-95 hover:scale-110 hover:text-sky-500" to="//">تماس با ما</NuxtLink>
            </li>
            <li class="w-max">
              <NuxtLink class="block scale-95 hover:scale-110 hover:text-sky-500" to="//">سوالات متداول</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- backet-left-full -->
    <div :class="backet_left_full ? 'flex z-[40] lg:hidden' : 'hidden'"
      class="w-full h-full flex justify-start fixed top-0 left-0 bg-[#0000006d]">
      <div class="w-[60%] h-screen px-2 pt-5 rounded-r-2xl bg-gray-100 dark:text-white dark:bg-[#0d0d25]">
        <div class="flex items-center justify-between">
          <h1>سبد خرید</h1>
          <button @click="backet_left_full = false" class="w-[30px] h-[30px] bg-red-600 text-white rounded-lg">
            X
          </button>
        </div>
        <!-- products -->
        <div
          class="w-full my-3 p-2 pb-3 h-[620px] flex flex-col justify-start overflow-scroll overflow-x-auto overflow-y-auto">
          <!-- box-cart -->
          <div
            class="w-[95%] sm:w-[320px] drap mx-auto text-[14px] mt-3 relative flex font-bold justify-center items-center rounded-2xl text-sky-900 bg-[#c8c8c8] shadow-md shadow-gray-700 dark:text-white dark:bg-[#101045]"
            v-for="i in 9">
            <button
              class="hidden drap-menu justify-center items-center shadow-md shadow-gray-500 absolute top-1 right-1 w-[30px] h-[30px] bg-red-600 text-white rounded-full">
              X
            </button>
            <div class="w-[200px] flex flex-col justify-center items-center gap-2 h-[170px]">
              <p>کفش اسپورت</p>
              <p><span> رنگ :</span> آبی</p>
              <div class="flex justify-center gap-1">
                <span>تومان</span>
                <span>1,300,000</span>
              </div>
              <div class="flex gap-2 justify-center items-center">
                <button @click="cunt--"
                  class="w-[30px] h-[30px] text-lg hover:bg-red-700 hover:text-white transition-all rounded-lg border border-red-600">
                  -
                </button>
                <h3 class="px-1">{{ cunt }}</h3>
                <button @click="cunt++"
                  class="w-[30px] h-[30px] text-lg hover:bg-red-700 hover:text-white transition-all rounded-lg border border-red-600">
                  +
                </button>
                <p>: تعداد</p>
              </div>
            </div>
            <img class="w-[100px] h-[100px]" src="/imgg/p2.png" alt="" />
          </div>

        </div>
        <!-- btn buy -->
        <div class="w-full p-2 flex items-center justify-between md:gap-10 md:justify-center">
          <button class="w-[100px] h-[40px] rounded-lg text-white bg-[#11871b]">
            buy
          </button>
          <div class=" text-green-700 w-max flex flex-col font-bold text-[14px] justify-center items-center">
            <p>مبلغ قابل پرداخت</p>
            <p>1,300,000</p>
          </div>
        </div>
      </div>
    </div>

    <!-- backet-absolute -->
    <div :class="
      backet_left_full ? 'hidden z-[40] lg:block' : 'hidden'
      " class="w-[400px] h-[450px] absolute shadow-md top-20 left-5 rounded-2xl p-2 text-[#28701e] bg-gray-100 shadow-violet-900 dark:text-[#42bb32] dark:bg-[#0d0d25] dark:shadow-violet-600">
      <button @click="backet_left_full = false"
        class="w-[30px] h-[30px] absolute top-1 right-1 shadow-md shadow-gray-700 text-white rounded-full bg-red-600">
        X
      </button>
      <div class="w-full flex px-5 mt-8 justify-between items-center">
        <h3>سبد خرید</h3>
        <h2 class="flex gap-1"><span>مورد</span>4</h2>
      </div>
      <!-- products -->
      <div class="w-full my-3 pb-3 h-[300px] flex flex-col justify-start overflow-scroll overflow-x-auto overflow-y-auto">
        <!-- box-cart -->
        <div
          class="w-[95%] sm:w-[320px] drap mx-auto text-[14px] mt-3 relative flex font-bold justify-center items-center rounded-2xl shadow-md shadow-gray-700 text-sky-900 bg-[#c8c8c8] dark:text-white dark:bg-[#101045]">
          <button
            class="hidden drap-menu justify-center items-center shadow-md shadow-gray-500 absolute top-1 right-1 w-[30px] h-[30px] bg-red-600 text-white rounded-full">
            X
          </button>
          <div class="w-[200px] flex flex-col justify-center items-center gap-2 h-[170px]">
            <p>کفش اسپورت</p>
            <p><span> رنگ :</span> آبی</p>
            <div class="flex justify-center gap-1">
              <span>تومان</span>
              <span>1,300,000</span>
            </div>
            <div class="flex gap-2 justify-center items-center">
              <button @click="cunt--"
                class="w-[30px] h-[30px] text-lg hover:bg-red-700 hover:text-white transition-all rounded-lg border border-red-600">
                -
              </button>
              <h3 class="px-1">{{ cunt }}</h3>
              <button @click="cunt++"
                class="w-[30px] h-[30px] text-lg hover:bg-red-700 hover:text-white transition-all rounded-lg border border-red-600">
                +
              </button>
              <p>: تعداد</p>
            </div>
          </div>
          <img class="w-[100px] h-[100px]" src="/imgg/p2.png" alt="" />
        </div>
        <!--  -->
        <div
          class="w-[95%] sm:w-[320px] drap mx-auto text-[14px] mt-3 relative flex font-bold justify-center items-center rounded-2xl shadow-md shadow-gray-700 text-sky-900 bg-[#c8c8c8] dark:text-white dark:bg-[#101045]">
          <button
            class="hidden drap-menu justify-center items-center shadow-md shadow-gray-500 absolute top-1 right-1 w-[30px] h-[30px] bg-red-600 text-white rounded-full">
            X
          </button>
          <div class="w-[200px] flex flex-col justify-center items-center gap-2 h-[170px]">
            <p>کفش اسپورت</p>
            <p><span> رنگ :</span> آبی</p>
            <div class="flex justify-center gap-1">
              <span>تومان</span>
              <span>1,300,000</span>
            </div>
            <div class="flex gap-2 justify-center items-center">
              <button @click="cunt--"
                class="w-[30px] h-[30px] text-lg hover:bg-red-700 hover:text-white transition-all rounded-lg border border-red-600">
                -
              </button>
              <h3 class="px-1">{{ cunt }}</h3>
              <button @click="cunt++"
                class="w-[30px] h-[30px] text-lg hover:bg-red-700 hover:text-white transition-all rounded-lg border border-red-600">
                +
              </button>
              <p>: تعداد</p>
            </div>
          </div>
          <img class="w-[100px] h-[100px]" src="/imgg/p2.png" alt="" />
        </div>
        <!--  -->
      </div>
      <!-- btn buy -->
      <div class="w-full p-2 flex items-center justify-between">
        <button class="w-[100px] h-[40px] rounded-lg text-white bg-[#11871b]">
          buy
        </button>
        <div class="flex flex-col font-bold text-[14px] justify-center items-center">
          <p>مبلغ قابل پرداخت</p>
          <p>1,300,000</p>
        </div>
      </div>

    </div>


    <!-- person-full -->
    <div :class="person_full ? 'flex z-[40] lg:hidden' : 'hidden'"
      class="w-full h-full flex justify-start fixed top-0 left-0 bg-[#0000006d]">
      <div class="w-[60%] h-screen px-2 pt-2 font-bold rounded-r-2xl bg-gray-100 dark:text-white dark:bg-[#0d0d25]">
        <div class="flex items-center justify-between p-3">
          <h1>حساب کاربری</h1>
          <button @click="person_full = false" class="w-[30px] h-[30px] bg-red-600 text-white rounded-lg">
            X
          </button>
        </div>
        <div dir="rtl" class="w-full bg-red-300w flex flex-col justify-center items-right relative right-10 gap-5">
          <NuxtLink class="flex gap-3 mt-5 items-center scale-95 hover:scale-105 hover:text-sky-500" to="//">
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 532 532"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <g>
                <g>
                  <circle cx="270.759" cy="260.92941" r="86.34897" fill="#a0616a" />
                  <polygon
                    points="199.2879 366.61365 217.2879 320.61365 310.2879 306.61365 320.28003 408.44043 226.28003 410.44043 199.2879 366.61365"
                    fill="#a0616a" />
                </g>
                <path
                  d="M357.94449,276.8613c-1.12067,4.48965-3.38602,15.17972-6.9238,15.23233-2.89023,.04208-5.65668-46.33466-2.76953-54.00568,3.31638-8.81271-5.39886-19.96062-11.96411-25.6832-11.80423-10.2894-38.00696,11.80466-64.65118,1.79587-.70633-.26482-.56558-.23502-8.97934-3.59174-25.88966-10.32974-27.2506-10.62788-28.73386-10.77521-12.55046-1.24167-27.86705,9.02844-34.12146,21.55038-6.50168,13.01653-1.06937,24.18106-7.18346,55.67184-.71246,3.67065-1.83138,8.90216-3.59174,8.97934-3.21819,.14029-6.3605-17.04846-7.18346-21.55038-3.44792-18.86186-6.7722-37.04675,0-57.46771,.73878-2.22729,5.29158-10.49458,14.36693-26.93799,13.0744-23.68825,19.65018-35.57709,21.55038-37.7132,13.62859-15.32624,38.43575-29.30734,59.26357-23.34626,10.52704,3.01299,8.63953,7.85691,21.55038,12.57105,23.00821,8.40057,43.00476-1.87303,46.69254,5.3876,1.9537,3.84602-3.51236,7.01686-3.59174,14.36693-.13593,12.6114,15.81424,16.25575,25.14212,28.73386,5.01447,6.70819,13.59753,6.78012-8.87228,96.78212l.00003,.00003Z"
                  fill="#2f2e41" />
              </g>
              <path
                d="M464.92017,442.61035c-3.48022,3.91016-7.09009,7.74023-10.83008,11.48047-50.23999,50.23926-117.04004,77.90918-188.09009,77.90918-61.40991,0-119.63989-20.66992-166.75-58.71973-.03003-.01953-.05005-.04004-.07983-.07031-6.25-5.03906-12.30005-10.39941-18.14014-16.05957,.10986-.87988,.22998-1.75,.35986-2.61035,.82007-5.7998,1.73022-11.33008,2.75-16.41992,8.3501-41.71973,118.22021-85.51953,121.08008-86.66016,.04004-.00977,.06006-.01953,.06006-.01953,0,0,14.14014,52.12012,74.72998,51.4502,41.27002-.4502,33.27002-51.4502,33.27002-51.4502,0,0,.5,.09961,1.43994,.2998,11.91992,2.53027,94.68018,20.70996,127.33008,45.52051,9.94995,7.55957,17.08984,23.66016,22.21997,42.85938,.21997,.82031,.42993,1.66016,.65015,2.49023Z"
                fill="#6c63ff" />
              <path
                d="M454.09009,77.91016C403.8501,27.6709,337.05005,0,266,0S128.15015,27.6709,77.90991,77.91016C27.67017,128.15039,0,194.9502,0,266c0,64.85059,23.05005,126.16016,65.29004,174.57031,4.03003,4.62988,8.23999,9.13965,12.61987,13.52051,1.03003,1.0293,2.07007,2.05957,3.12012,3.05957,5.84009,5.66016,11.89014,11.02051,18.14014,16.05957,.02979,.03027,.0498,.05078,.07983,.07031,47.11012,38.0498,105.3401,58.71973,166.75001,58.71973,71.05005,0,137.8501-27.66992,188.09009-77.90918,3.73999-3.74023,7.34985-7.57031,10.83008-11.48047,43.36987-48.71973,67.07983-110.83984,67.07983-176.61035,0-71.0498-27.66992-137.84961-77.90991-188.08984Zm10.17993,362.20996c-7.86987,8.9502-16.33008,17.37012-25.33008,25.18066-17.06982,14.84961-36.06982,27.5293-56.55981,37.62988-7.19019,3.5498-14.56006,6.7793-22.1001,9.66992-29.29004,11.24023-61.08008,17.39941-94.28003,17.39941-32.04004,0-62.76001-5.73926-91.18994-16.23926-11.67017-4.30078-22.94995-9.41016-33.78003-15.26074-1.59009-.85938-3.16992-1.72949-4.73999-2.61914-8.26001-4.68066-16.25-9.79004-23.91992-15.31055-10.98999-7.87988-21.3501-16.58984-30.98022-26.03027-5.3999-5.29004-10.55981-10.7998-15.48975-16.5293C26.09009,391.77051,2,331.65039,2,266,2,120.43066,120.42993,2,266,2s264,118.43066,264,264c0,66.66016-24.82983,127.62012-65.72998,174.12012Z"
                fill="#3f3d56" />
            </svg>
            نام کاربر
          </NuxtLink>
          <ul class="flex flex-col gap-5">
            <li>
              <NuxtLink class="flex gap-3 items-center scale-95 hover:scale-105 hover:text-sky-500" to="//">
                سفارش ها
              </NuxtLink>
            </li>
            <li>
              <NuxtLink class="flex gap-3 items-center scale-95 hover:scale-105 hover:text-sky-500" to="//">
                علاقه مندی ها
              </NuxtLink>
            </li>
            <li>
              <NuxtLink class="flex gap-3 items-center scale-95 hover:scale-105 hover:text-sky-500" to="//">
                پیام ها
              </NuxtLink>
            </li>
            <li>
              <button class="flex gap-3 items-center scale-95 hover:scale-105 text-red-500 hover:text-red-700">
                خروج
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- person-absolute -->
    <div :class="person_full ? 'hidden z-[40] lg:block' : 'hidden'"
      class="w-[350px] h-[400px]d pb-5 font-bold absolute shadow-md top-20 left-5 rounded-2xl p-2 text-[#28701e] bg-gray-100 dark:text-white dark:bg-[#0d0d25] shadow-gray-500">
      <button @click="person_full = false"
        class="w-[30px] h-[30px] absolute top-1 right-1 shadow-md shadow-gray-700 text-white rounded-full bg-red-600">
        X
      </button>
      <!-- <div class=" w-full flex px-5 mt-8 justify-between items-center">
        dee
      </div> -->
      <div dir="rtl" class="w-full bg-red-300w flex flex-col justify-center items-right relative right-10 gap-5">
        <NuxtLink class="flex gap-3 mt-5 items-center scale-95 hover:scale-105 hover:text-sky-500" to="//">
          <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 532 532"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <g>
              <g>
                <circle cx="270.759" cy="260.92941" r="86.34897" fill="#a0616a" />
                <polygon
                  points="199.2879 366.61365 217.2879 320.61365 310.2879 306.61365 320.28003 408.44043 226.28003 410.44043 199.2879 366.61365"
                  fill="#a0616a" />
              </g>
              <path
                d="M357.94449,276.8613c-1.12067,4.48965-3.38602,15.17972-6.9238,15.23233-2.89023,.04208-5.65668-46.33466-2.76953-54.00568,3.31638-8.81271-5.39886-19.96062-11.96411-25.6832-11.80423-10.2894-38.00696,11.80466-64.65118,1.79587-.70633-.26482-.56558-.23502-8.97934-3.59174-25.88966-10.32974-27.2506-10.62788-28.73386-10.77521-12.55046-1.24167-27.86705,9.02844-34.12146,21.55038-6.50168,13.01653-1.06937,24.18106-7.18346,55.67184-.71246,3.67065-1.83138,8.90216-3.59174,8.97934-3.21819,.14029-6.3605-17.04846-7.18346-21.55038-3.44792-18.86186-6.7722-37.04675,0-57.46771,.73878-2.22729,5.29158-10.49458,14.36693-26.93799,13.0744-23.68825,19.65018-35.57709,21.55038-37.7132,13.62859-15.32624,38.43575-29.30734,59.26357-23.34626,10.52704,3.01299,8.63953,7.85691,21.55038,12.57105,23.00821,8.40057,43.00476-1.87303,46.69254,5.3876,1.9537,3.84602-3.51236,7.01686-3.59174,14.36693-.13593,12.6114,15.81424,16.25575,25.14212,28.73386,5.01447,6.70819,13.59753,6.78012-8.87228,96.78212l.00003,.00003Z"
                fill="#2f2e41" />
            </g>
            <path
              d="M464.92017,442.61035c-3.48022,3.91016-7.09009,7.74023-10.83008,11.48047-50.23999,50.23926-117.04004,77.90918-188.09009,77.90918-61.40991,0-119.63989-20.66992-166.75-58.71973-.03003-.01953-.05005-.04004-.07983-.07031-6.25-5.03906-12.30005-10.39941-18.14014-16.05957,.10986-.87988,.22998-1.75,.35986-2.61035,.82007-5.7998,1.73022-11.33008,2.75-16.41992,8.3501-41.71973,118.22021-85.51953,121.08008-86.66016,.04004-.00977,.06006-.01953,.06006-.01953,0,0,14.14014,52.12012,74.72998,51.4502,41.27002-.4502,33.27002-51.4502,33.27002-51.4502,0,0,.5,.09961,1.43994,.2998,11.91992,2.53027,94.68018,20.70996,127.33008,45.52051,9.94995,7.55957,17.08984,23.66016,22.21997,42.85938,.21997,.82031,.42993,1.66016,.65015,2.49023Z"
              fill="#6c63ff" />
            <path
              d="M454.09009,77.91016C403.8501,27.6709,337.05005,0,266,0S128.15015,27.6709,77.90991,77.91016C27.67017,128.15039,0,194.9502,0,266c0,64.85059,23.05005,126.16016,65.29004,174.57031,4.03003,4.62988,8.23999,9.13965,12.61987,13.52051,1.03003,1.0293,2.07007,2.05957,3.12012,3.05957,5.84009,5.66016,11.89014,11.02051,18.14014,16.05957,.02979,.03027,.0498,.05078,.07983,.07031,47.11012,38.0498,105.3401,58.71973,166.75001,58.71973,71.05005,0,137.8501-27.66992,188.09009-77.90918,3.73999-3.74023,7.34985-7.57031,10.83008-11.48047,43.36987-48.71973,67.07983-110.83984,67.07983-176.61035,0-71.0498-27.66992-137.84961-77.90991-188.08984Zm10.17993,362.20996c-7.86987,8.9502-16.33008,17.37012-25.33008,25.18066-17.06982,14.84961-36.06982,27.5293-56.55981,37.62988-7.19019,3.5498-14.56006,6.7793-22.1001,9.66992-29.29004,11.24023-61.08008,17.39941-94.28003,17.39941-32.04004,0-62.76001-5.73926-91.18994-16.23926-11.67017-4.30078-22.94995-9.41016-33.78003-15.26074-1.59009-.85938-3.16992-1.72949-4.73999-2.61914-8.26001-4.68066-16.25-9.79004-23.91992-15.31055-10.98999-7.87988-21.3501-16.58984-30.98022-26.03027-5.3999-5.29004-10.55981-10.7998-15.48975-16.5293C26.09009,391.77051,2,331.65039,2,266,2,120.43066,120.42993,2,266,2s264,118.43066,264,264c0,66.66016-24.82983,127.62012-65.72998,174.12012Z"
              fill="#3f3d56" />
          </svg>
          نام کاربر
        </NuxtLink>
        <ul class="flex flex-col gap-5">
          <li>
            <NuxtLink class="flex gap-3 items-center scale-95 hover:scale-105 hover:text-sky-500" to="//">
              سفارش ها
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="flex gap-3 items-center scale-95 hover:scale-105 hover:text-sky-500" to="//">
              علاقه مندی ها
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="flex gap-3 items-center scale-95 hover:scale-105 hover:text-sky-500" to="//">
              پیام ها
            </NuxtLink>
          </li>
          <li>
            <button class="flex gap-3 items-center scale-95 hover:scale-105 text-red-500 hover:text-red-700">
              خروج
            </button>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script setup>
// import useDarkMode from "~/composables/darkmode";
// let { isdarkmode: dark } = useDarkMode();

const inpserch = ref("");
const menu_right = ref(false);
const backet_left_full = ref(false);
const person_full = ref(false);
const cunt = ref(1);

const flagmen = ref(true);
const flagwomen = ref(false);
const flagChildish = ref(false);
const flagbag = ref(false);
const flagCosmetics = ref(false);
const flagPerfume_and_cologne = ref(false);

// darkmode
// if(process.client){
const setcolorthem = (them) => {
  useColorMode().preference = them
}
// }

</script>

<style scoped>
.drap:hover .drap-menu {
  display: flex;
}

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

::-webkit-scrollbar-thumb {
  border-radius: 50px;
  background-color: rgb(73, 23, 135);
}</style>
