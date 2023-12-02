<template>
  <div class="cont">
    <div class="tilt_box_warp">
      <span class="_s"></span>
      <span class="_s"></span>
      <span class="_s"></span>
      <span class="_s"></span>
      <span class="_s"></span>
      <span class="_s"></span>
      <span class="_s"></span>
      <span class="_s"></span>
      <span class="_s"></span>
      <div class="tilt_box">
      </div>
    </div>
  </div>
</template>

<style >

.cont{

}
.tilt_box_warp{
/* width: 400px; */
/* height: 400px; */
/* margin: 10px auto; */
position: relativ;
transition: all 0.6s ease-in-out;
perspective: 1000px;
}

.tilt_box_warp:hover{
  transition: all 0.3s linear;
  transform: scale(0.9);
}

.tilt_box{
  /* width: 100%;
  height: 100%; */
  position: relative;
  /* background: rgb(113, 12, 12); */
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: all 0.6s ease-in-out;
  transform: rotateX(0deg) rotateY(0deg);
  perspective: 1000px;
  transform-style: preserve-3d;
}
.tilt_box span{
  transform: translateZ(40px);
}

._s{
  width: 33.333%;
  height: 33.333%;
  position: absolute;
  z-index: 1;
}
._s:nth-child(1){ left:0% ; top:0%}
._s:nth-child(2){ left:33.333% ; top:0%}
._s:nth-child(3){ left:66.666% ; top:0%}
._s:nth-child(4){ left:0% ; top:33.333%}
._s:nth-child(5){ left:33.333% ; top:33.333%}
._s:nth-child(6){ left:66.666% ; top:33.333%}
._s:nth-child(7){ left:0% ; top:66.666%}
._s:nth-child(8){ left:33.333% ; top:66.666%}
._s:nth-child(9){ left:66.666% ; top:66.666%}
/* ///////////////////////////////// */

._s:nth-child(1):hover ~ .tilt_box{ transform: rotateX(-15deg) rotateY(15deg)}
._s:nth-child(2):hover ~ .tilt_box{ transform: rotateX(-15deg) rotateY(0deg)}
._s:nth-child(3):hover ~ .tilt_box{ transform: rotateX(-15deg) rotateY(-15deg)}
._s:nth-child(4):hover ~ .tilt_box{ transform: rotateX(0deg) rotateY(15deg)}
._s:nth-child(5):hover ~ .tilt_box{ transform: rotateX(0deg) rotateY(0deg)}
._s:nth-child(6):hover ~ .tilt_box{ transform: rotateX(0deg) rotateY(-15deg)}
._s:nth-child(7):hover ~ .tilt_box{ transform: rotateX(15deg) rotateY(15deg)}
._s:nth-child(8):hover ~ .tilt_box{ transform: rotateX(15deg) rotateY(0deg)}
._s:nth-child(9):hover ~ .tilt_box{ transform: rotateX(15deg) rotateY(-15deg)}



</style>