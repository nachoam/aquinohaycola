<template>
  <v-row no-gutters align="center" >
    <v-col  class="blueTitle text-bolder" >{{text}}</v-col>
  </v-row>
</template>

<script>
  export default {
    name: 'blue-title',
    props: ['text']
  }
</script>

<style lang="scss">
  .blueTitle {
    letter-spacing: 0.89px;
    color: #384554;
    font-family: "Evolutio", sans-serif;
    font-weight: 500;
    font-size: 20px;
  }
</style>
