<template>
    <svg  xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 48 48" aria-hidden="true">
      <circle class="circle" fill="#F9A175" cx="24" cy="24" r="22"/>
      <!--path class="tick" fill="none" stroke="#FFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
            stroke-miterlimit="10" d="M 24 10 l 12 20 l -20 0 "/-->
      <!--path class="tick" fill="none" stroke="#FFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
            stroke-miterlimit="10" d="M 24 10 l 12 20"/>
      <path class="tick" fill="none" stroke="#FFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
            stroke-miterlimit="10" d="M 36 30 l -24 0"/>
      <path class="tick" fill="none" stroke="#FFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
            stroke-miterlimit="10" d="M 36 30 l -24 0"/-->
      <circle  fill="#FFF" cx="24" cy="12" r="4"/>
      <path class="tick" fill="none" stroke="#FFF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"
            stroke-miterlimit="10" d="M 24 22 l 0 15"/>
    </svg>
</template>

<script>
export default {
  name: "WarningIcon",
  data:()=>({
    type:'warning'
  })
}
</script>

<style scoped>
@supports (animation: grow .5s cubic-bezier(.25, .25, .25, 1) forwards) {
  .tick {
    stroke-opacity: 0;
    stroke-dasharray: 29px;
    stroke-dashoffset: 29px;
    animation: draw .5s cubic-bezier(.25, .25, .25, 1) forwards;
    animation-delay: .6s
  }

  .circle {
    fill-opacity: 0;
    stroke: #F9A175;
    stroke-width: 16px;
    transform-origin: center;
    transform: scale(0);
    animation: grow 1s cubic-bezier(.25, .25, .25, 1.25) forwards;
  }
}

@keyframes grow {
  60% {
    transform: scale(.8);
    stroke-width: 4px;
    fill-opacity: 0;
  }
  100% {
    transform: scale(.9);
    stroke-width: 8px;
    fill-opacity: 1;
    fill: #F9A175;
  }
}

@keyframes draw {
  0%, 100% { stroke-opacity: 1; }
  100% { stroke-dashoffset: 0; }
}
</style>
