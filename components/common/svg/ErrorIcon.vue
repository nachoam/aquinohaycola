<template>
    <svg  xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 48 48" aria-hidden="true">
      <circle class="circle" fill="#EC6579" cx="24" cy="24" r="22"/>
      <path class="tick" fill="none" stroke="#FFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"
            stroke-miterlimit="10" d="M 14 15 l 20 20"/>
      <path class="tick" fill="none" stroke="#FFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"
            stroke-miterlimit="10" d="M 34 15 l -20 20"/>
    </svg>
</template>

<script>
export default {
  name: "ErrorIcon",
  data:()=>({
    type:'error'
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
    stroke: #EC6579;
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
    fill: #EC6579;
  }
}

@keyframes draw {
  0%, 100% { stroke-opacity: 1; }
  100% { stroke-dashoffset: 0; }
}
</style>
