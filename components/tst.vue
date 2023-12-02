<!-- <template>
  <div id="tiltElement" class="tilt-element w-[200px] mx-auto h-[200px] flex items-center justify-center bg-red-500">
        <p>tst colp</p>
      </div>
</template>
  
<script setup>
import Tilt from 'tilt.js';


if (process.client) {

  let elem = document.getElementById('tiltElement')

  let tilt = new Tilt(elem, {
    max: 25,
    perspective: 1000,
    scale: 1.1,
    speed: 300,
    transition: true
  });
  console.log(tilt);

  onBeforeMount(tilt.destroy(),elem)
}
</script>
  
<style></style> -->