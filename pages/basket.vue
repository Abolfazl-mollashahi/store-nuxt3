<template>
  <div class=" w-[90%] py-5 mx-auto flex gap-1 justify-center items-center ">

    <div
      :class="flagbaskettik ? ' bg-green-200 dark:bg-green-900 text-green-700 ' : 'bg-violet-100 hover:bg-violet-300 dark:bg-violet-900 dark:hover:bg-violet-950'"
      class=" w-[100px] h-[80px] p-2 sm:w-[150px] md:w-[200px] lg:w-[300px] flex rounded-lg justify-center items-center gap-1 flex-col transition-all ">
      <i>
        <svg v-if="!flagbaskettik" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
        <!-- tik -->
        <svg v-if="flagbaskettik" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>

      </i>
      <p>سبدخرید</p>
    </div>

    <div
      :class="flagSendingmethodtik ? ' bg-green-200 dark:bg-green-900 text-green-700 ' : 'bg-violet-100 hover:bg-violet-300 dark:bg-violet-900 dark:hover:bg-violet-950'"
      class=" w-[100px] h-[80px] p-2 sm:w-[150px] md:w-[200px] lg:w-[300px] flex rounded-lg justify-center items-center gap-1 flex-col transition-all">
      <i >
        <svg v-if="!flagSendingmethodtik" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
        </svg>
        <!-- tik -->
        <svg v-if="flagSendingmethodtik" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      </i>
      <p>شیوه ارسال</p>
    </div>

    <div
      :class="flagpaymenttik ? ' bg-green-200 dark:bg-green-900 text-green-700 ' : 'bg-violet-100 hover:bg-violet-300 dark:bg-violet-900 dark:hover:bg-violet-950'"
      class=" w-[100px] h-[80px] p-2 sm:w-[150px] md:w-[200px] lg:w-[300px] flex rounded-lg justify-center items-center gap-1 flex-col transition-all">
      <i class="flex">
        <svg v-if="!flagpaymenttik" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
        </svg>
        <!-- tik - ok -->
        <svg v-if="flagpaymenttik" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
        <!-- tik - error -->
        <svg v-if="flagpaymenttik" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
        </svg>

      </i>
      <p>پرداخت</p>
    </div>

  </div>

  <!-- bascket -->
  <div v-if="flagbasket" class="w-[100%] mt-5 flex flex-col items-center md:flex-row md:p-2 md:items-start  ">

    <div
      class="w-[95%] h-max flex flex-col gap-2 mx-auto p-2 pb-10 md:w-[50%] shadow-lg shadow-violet-900 rounded-2xl bg-violet-100 dark:bg-[#1a0c54] dark:text-white">
      <div class="flex my-3 justify-between items-center">
        <div class="flex items-center gap-2">
          <p class="text-[18px]">سبدخرید</p>
          <p class="text-[13px] text-green-600">(4 مورد)</p>
        </div>
        <button
          class=" flex flex-row-reverse gap-1 p-1 transition-all text-red-700 hover:border-2 hover:border-red-700 rounded-lg">
          حذف همه
          <i>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>

          </i>
        </button>
      </div>
      <!-- procusts -->
      <div
        class="flex mt-4 dd relative p-3 flex-col gap-4 md:w-[90%] mx-auto shadow-lg shadow-violet-900 rounded-lg transition-all bg-violet-200 hover:bg-violet-300 dark:bg-[#160a45] dark:hover:bg-violet-900"
        v-for="i in 4">
        <button
          class="hidden d w-8 h-8 transition-all absolute -top-1 -right-1 bg-red-700 rounded-full text-white">X</button>
        <div class="flex gap-4">
          <img class="w-[100px] h-[100px] rounded-lg" src="/img/m-p001.webp" alt="">
          <div class="flex gap-5 flex-col items-start">
            <p>کیف دستی دلسی مدل CHATELET AIR </p>
            <p class="flex flex-row-reverse gap-2">سیاه <span class=" w-6 h-6 rounded-full bg-black"></span></p>
          </div>
        </div>
        <div class="flex gap-5 justify-center items-center ">
          <div class="flex items-center gap-2">
            <button @click="cunt--"
              class="w-8 h-8 flex justify-center items-center text-red-700 rounded-full border-2 border-violet-400 transition-all hover:border-red-700  ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
              </svg>
            </button>
            <p class="w-[40px] h-[40px] text-[20px] flex justify-center items-center">{{ cunt }}</p>
            <button @click="cunt++"
              class="w-8 h-8 flex justify-center items-center text-green-700 rounded-full border-2 border-violet-400 transition-all hover:border-green-700 ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </button>
          </div>
          <p class="flex gap-1 flex-row-reverse text-green-800 dark:text-green-500">مبلغ <span>120000</span></p>
        </div>
      </div>
    </div>

    <div
      class=" w-[100%] md:w-[40%] mx-auto p-2 rounded-2xl shadow-lg shadow-violet-900 bg-violet-100 dark:bg-[#1a0c54] dark:text-white">
      <!-- mobile tem -->
      <div class=" flex flex-col gap-2 md:hidden">
        <div
          class=" w-full fixed bottom-0 left-0 p-2 flex justify-center gap-5 items-center bg-slate-100 dark:bg-[#100734] md:hidden">
          <button @click="flagbaskettik = true, flagbasket = false, flagSendingmethod = true"
            class=" w-[50%] h-[40px] rounded-xl transition-all bg-green-400 text-green-800 dark:bg-green-800 dark:text-green-300 hover:bg-green-700 hover:text-green-100 dark:hover:bg-green-700 ">ادامه
            فرایند خرید</button>
          <div class=" w-max flex flex-col">
            <p class=""> مبلغ قابل پرداخت</p>
            <p class="flex gap-2 flex-row-reverse text-green-500"><span class="">تومان</span> <span class="">200000</span>
            </p>
          </div>
        </div>
      </div>

      <!-- descktop tem -->
      <div class="hidden  md:flex p items-center flex-col gap-4 ">

        <div class=" w-full flex flex-col justify-center gap-3 items-center ">
          <div class=" w-[250px] flex justify-between items-center gap-5">
            <p class="">قیمت کل کالا ها</p>
            <p class="flex gap-2 flex-row-reverse"><span class="">تومان</span> <span class="">1200000</span></p>
          </div>
          <div class=" w-[250px] flex justify-between items-center gap-5 text-red-500">
            <p class="">تخفیف</p>
            <p class="flex gap-2 flex-row-reverse"><span class="">تومان</span> <span class="">500000</span></p>
          </div>
          <div class=" w-[250px] flex justify-between items-center gap-5">
            <p class="">مبلغ قابل پرداخت</p>
            <p class="flex gap-2 flex-row-reverse"><span class="">تومان</span> <span class="">700000</span></p>
          </div>
          <button @click="flagbaskettik = true, flagbasket = false, flagSendingmethod = true"
            class=" w-[95%] h-[40px] rounded-xl transition-all bg-green-400 text-green-800 dark:bg-green-800 dark:text-green-300 hover:bg-green-700 hover:text-green-100 dark:hover:bg-green-700 ">ادامه
            فرایند خرید</button>
        </div>

      </div>
    </div>

  </div>

  <!-- Sendingmethod -->
  <div v-if="flagSendingmethod" class=" w-[100%] mt-5 flex flex-col items-center md:flex-row md:p-2 md:items-start">

    <div
      class="w-[95%] flex flex-col p-5 md:w-[50%] mx-auto rounded-2xl shadow-lg shadow-violet-900 bg-violet-100 dark:bg-[#1a0c54] dark:text-white ">
      <div class="w-full my-2 flex justify-start">
        <span>آدرس تحویل سفارش :</span>
      </div>
      <textarea dir="rtl" class=" w-[100%] p-2 mx-auto outline-none rounded-lg dark:bg-[#271571]" name="" id="" cols="40"
        rows="5"></textarea>
      <p class=" my-2">شیوه ارسال : </p>
      <div class="w-full flex flex-col  md:flex-row gap-4">

        <div @click=" flagtipax.tipax_Money = true, flagtipax.tipax_NoMoney = false"
          :class="flagtipax.tipax_Money ? 'border-2 border-green-700' : ''"
          class=" w-[90%] sm:w-[350px] shadow-md shadow-violet-900 cursor-pointer mx-auto p-2 h-max flex flex-col bg-violet-200 hover:bg-violet-300 dark:bg-[#251957] rounded-2xl ">
          <div class=" flex px-3 items-center justify-between ">
            <p>تیپاکس</p>
            <img class=" w-[100px] h-[70px] rounded-lg" src="/tipax.png" alt="">
          </div>
          <p class="flex flex-row-reverse justify-end gap-1"> تومان <span>100000</span></p>
        </div>

        <div @click=" flagtipax.tipax_Money = false, flagtipax.tipax_NoMoney = true"
          :class="flagtipax.tipax_NoMoney ? 'border-2 border-green-700' : ''"
          class=" w-[90%] sm:w-[350px] shadow-md shadow-violet-900 cursor-pointer mx-auto p-2 h-max flex flex-col bg-violet-200 hover:bg-violet-300 dark:bg-[#251957] rounded-2xl ">
          <div class=" flex px-3 items-center justify-between ">
            <p>تیپاکس</p>
            <img class=" w-[100px] h-[70px] rounded-lg" src="/tipax.png" alt="">
          </div>
          <p>پرداخت در مقصد</p>
        </div>

      </div>
    </div>

    <div
      class=" w-[100%] md:w-[40%] mx-auto p-2 rounded-2xl shadow-lg shadow-violet-900 bg-violet-100 dark:bg-[#1a0c54] dark:text-white">
      <!-- mobile tem -->
      <div class=" flex flex-col gap-2 md:hidden">
        <div
          class=" w-full fixed bottom-0 left-0 p-2 flex justify-center gap-5 items-center bg-slate-100 dark:bg-[#100734] md:hidden">
          <button @click="flagSendingmethodtik = true, flagSendingmethod = false, flagpayment = true"
            class=" w-[50%] h-[40px] rounded-xl transition-all bg-green-400 text-green-800 dark:bg-green-800 dark:text-green-300 hover:bg-green-700 hover:text-green-100 dark:hover:bg-green-700 ">ادامه
            فرایند خرید</button>
          <div class=" w-max flex flex-col">
            <p class=""> مبلغ قابل پرداخت</p>
            <p class="flex gap-2 flex-row-reverse text-green-500"><span class="">تومان</span> <span class="">200000</span>
            </p>
          </div>
        </div>
      </div>
      <!-- descktop tem -->
      <div class="hidden  md:flex p items-center flex-col gap-4 ">

        <div class=" w-full flex flex-col justify-center gap-3 items-center ">
          <div class=" w-[250px] flex justify-between items-center gap-5">
            <p class="">قیمت کل کالا ها</p>
            <p class="flex gap-2 flex-row-reverse"><span class="">تومان</span> <span class="">1200000</span></p>
          </div>
          <div class=" w-[250px] flex justify-between items-center gap-5 text-red-500">
            <p class="">تخفیف</p>
            <p class="flex gap-2 flex-row-reverse"><span class="">تومان</span> <span class="">500000</span></p>
          </div>
          <div class=" w-[250px] flex justify-between items-center gap-5 text-sky-700">
            <p class="">هزینه ارسال</p>
            <p v-if="flagtipax.tipax_NoMoney" class="">رایگان</p>
            <p v-if="flagtipax.tipax_Money" class="flex gap-2 flex-row-reverse"><span class="">تومان</span> <span
                class="">500000</span></p>
          </div>
          <div class=" w-[250px] flex justify-between items-center gap-5">
            <p class="">مبلغ قابل پرداخت</p>
            <p class="flex gap-2 flex-row-reverse"><span class="">تومان</span> <span class="">700000</span></p>
          </div>
          <button @click="flagSendingmethodtik = true, flagSendingmethod = false, flagpayment = true"
            class=" w-[95%] h-[40px] rounded-xl transition-all bg-green-400 text-green-800 dark:bg-green-800 dark:text-green-300 hover:bg-green-700 hover:text-green-100 dark:hover:bg-green-700 ">ادامه
            فرایند خرید</button>
        </div>

      </div>
    </div>

  </div>

  <!-- payment -->
  <div v-if="flagpayment" class="w-[100%] mt-5 flex flex-col gap-5">
    <div
      class=" w-[90%]  mx-auto p-2 sm:w-[500px] flex items-center flex-col gap-4 rounded-2xl shadow-lg shadow-violet-900 bg-violet-100 dark:bg-[#1a0c54] dark:text-white  ">
      <div class=" w-full flex flex-col justify-center gap-6 items-center ">
        <h3 class="my-2">جزئیات سفارش</h3>
        <div class=" w-[230px] sm:w-[400px] flex justify-between items-center gap-5">
          <p class="w-1/3">کد تخفیف</p>
          <div class=" w-2/3 flex flex-row-reverse bg-green-300 rounded-xl">
            <button class=" p-1 text-green-700">اعمال</button>
            <input class=" w-[100%] px-2 border outline-none rounded-r-xl" type="text">
          </div>
        </div>
        <div class=" w-[250px] sm:w-[400px] flex justify-between items-center gap-5 text-red-500">
          <p class="">تخفیف</p>
          <p class="flex gap-2 flex-row-reverse"><span class="">تومان</span> <span class="">500000</span></p>
        </div>
        <div class=" w-[250px] sm:w-[400px] flex justify-between items-center gap-5 text-sky-700">
          <p class="">هزینه ارسال</p>
          <p v-if="flagtipax.tipax_NoMoney">رایگان</p>
          <p v-if="flagtipax.tipax_Money" class="flex gap-2 flex-row-reverse"><span class="">تومان</span> <span
              class="">500000</span></p>
        </div>
        <div class=" w-[250px] sm:w-[400px] flex justify-between items-center gap-5">
          <p class="">مبلغ قابل پرداخت</p>
          <p class="flex gap-2 flex-row-reverse"><span class="">تومان</span> <span class="">700000</span></p>
        </div>

        <div class=" w-[250px] sm:w-[400px] h-max p-2 mx-auto grid grid-cols-2 justify-center items-center gap-5">
          <button @click=" bank.zrin = true, bank.melat = false, bank.melie = false, bank.saman = false"
            :class="bank.zrin ? 'border-[3px] border-green-700 dark:border-orange-500' : ''"
            class=" shadow-md shadow-violet-700 rounded-2xl overflow-hidden mx-auto flex gap-1 items-center">
            <img class=" w-[70px] h-[70px]  " src="/zrin.png" alt="">
          </button>
          <button @click=" bank.zrin = false, bank.melat = false, bank.melie = true, bank.saman = false"
            :class="bank.melie ? 'border-[3px] border-green-700 dark:border-orange-500' : ''"
            class=" border-2 shadow-md shadow-violet-700 h-max rounded-2xl overflow-hidden mx-auto flex gap-1 items-center">
            <img class=" w-[70px] h-[70px]  " src="/b-melie.jpg" alt="">
          </button>
          <button @click=" bank.zrin = false, bank.melat = false, bank.melie = false, bank.saman = true"
            :class="bank.saman ? 'border-[3px] border-green-700 dark:border-orange-500' : ''"
            class=" border-2 shadow-md shadow-violet-700 h-max rounded-2xl overflow-hidden mx-auto flex gap-1 items-center">
            <img class=" w-[70px] h-[70px] " src="/b-saman.png" alt="">
          </button>
          <button @click=" bank.zrin = false, bank.melat = true, bank.melie = false, bank.saman = false"
            :class="bank.melat ? 'border-[3px] border-green-700 dark:border-orange-500' : ''"
            class=" border-2 shadow-md shadow-violet-700 h-max rounded-2xl overflow-hidden mx-auto flex gap-1 items-center">
            <img class=" w-[70px] h-[70px]  " src="/b-melat.png" alt="">
          </button>

        </div>

        <button @click="flagpaymenttik = true, flagpayment = false"
          class=" w-[95%] h-[40px] rounded-xl transition-all bg-green-400 text-green-800 dark:bg-green-800 dark:text-green-300 hover:bg-green-700 hover:text-green-100 dark:hover:bg-green-700 ">پرداخت</button>
      </div>

    </div>

    <!-- payment - ok -->
    <div
      class=" w-[90%] p-3 mx-auto sm:w-[500px] gap-5 flex justify-center items-center shadow-lg shadow-violet-900 flex-col mt-10 rounded-2xl bg-violet-100 dark:bg-[#1a0c54] dark:text-white">
      <i>
        <svg v-if="flagSendingmethodtik" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-green-700">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      </i>
      <p class=" text-green-600">پرداخت سفارش 1234 موفق بود!</p>
      <p>جزئیات پرداخت</p>
      <div class="flex gap-3">
        <p>تاریخ <span>1404/02/12</span></p>
        <p>شماره پیگیری <span>123456789</span></p>
      </div>
      <div class=" flex gap-4 ">
        <button class=" w-[120px] py-2 text-white rounded-lg bg-green-600">پیگیری سفارش</button>
        <button class=" w-[120px] py-2 text-white rounded-lg bg-sky-800">بازگشت</button>
      </div>
    </div>


    <!-- payment - error -->
    <div
      class=" w-[90%] p-3 mx-auto sm:w-[500px] gap-5 flex justify-center items-center shadow-lg shadow-violet-900 flex-col mt-10 rounded-2xl bg-violet-100 dark:bg-[#1a0c54] dark:text-white">
      <i>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-10 h-10 text-red-700">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
        </svg>

      </i>
      <p class=" text-red-600">پرداخت سفارش 1234 ناموفق بود!</p>
      <p class="flex gap-1 text-red-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
        </svg>
        سفارش شما تا 30 دقیقه دیگر حذف میشود برای تکمیل نهایی سفارش نسبت به پرداخت اقدام نمایید.
      </p>
      <p class="flex gap-1 text-red-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
        </svg>
        چنانچه مبلغی از حساب شما کسر شده است تا 24 ساعت آینده به حساب شما باز خواهد گشت.
      </p>
      <p>جزئیات پرداخت</p>
      <div class="flex gap-3">
        <p>تاریخ <span>1404/02/12</span></p>
        <p>شماره پیگیری <span>123456789</span></p>
      </div>
      <div class=" flex gap-4 ">
        <button class=" w-[120px] py-2 text-white rounded-lg bg-green-600">پرداخت مجدد</button>
        <button class=" w-[120px] py-2 text-white rounded-lg bg-sky-800">بازگشت</button>
      </div>
    </div>

  </div>
</template>

<script setup>

let flagbasket = ref(true)
let flagSendingmethod = ref(false)
let flagpayment = ref(false)
let flagbaskettik = ref(false)
let flagSendingmethodtik = ref(false)
let flagpaymenttik = ref(false)

let flagtipax = reactive({
  tipax_Money: true,
  tipax_NoMoney: false,
})
let bank = reactive({
  zrin: true,
  melie: false,
  melat: false,
  saman: false,
})


</script>

<style scoped>.dd:hover .d {
  display: block;
}</style>