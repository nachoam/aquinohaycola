<template>
  <v-dialog v-model="show" persistent  class="blue_dialog" overlay-color="evo_azul_aquamarina" overlay-opacity="0.1"  >
    <v-container fluid class="ma-0 pa-0">
      <v-row style="height: 300px; width: 100%">
        <v-progress-circular
          size="220"
          color="evo_azul_turquesa"
          indeterminate
          class="ml-auto mr-auto"
        />
      </v-row>

    </v-container>
  </v-dialog>
</template>

<script>

export default {
  name: "BlueLoading",
  data () {
    return {
      show: false,
    }
  },
  computed:{
  },
  created () {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'loading/enableLoading') {
        this.show = true
      }else if (mutation.type === 'loading/disableLoading') {
        this.show = false
      }
    })
  },
}
</script>

<style >
.border-success{
  border: 2px #1E9FB0 solid;
}
.border-error{

}


.v-dialog{
  box-shadow: none;
}
</style>
