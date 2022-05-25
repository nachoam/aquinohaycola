<template>
  <v-snackbar v-model="show" dark :color="color" centered top  rounded="xl"
              elevation="2" @input="inputEvent" :class="['blue_snackbar mb-10',color + '_custom']" timeout="-1"
              >
    <v-row no-gutters align="center" @click="show = false" style="cursor: pointer">
      <v-col cols="1"  class="text-center"><v-icon color="#FFF" >{{icon}}</v-icon></v-col>
      <v-col cols="11">
        {{message }}
      </v-col>
    </v-row>
  </v-snackbar>
</template>

<script>
export default {
  name: "BlueSnackBar",
  data () {
    return {
      show: false,
      message: '',
      color: ''
    }
  },
  computed:{
    icon(){
      if(this.color === 'info'){
        return 'mdi-check-circle'
      }else if(this.color === 'error'){
        return 'mdi-alert-circle'
      }else if(this.color === 'warning'){
        return 'mdi-alert'
      }
    },
  },
  created () {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'snackbar/showMessage') {
        this.message = state.snackbar.content
        this.color = state.snackbar.color
        this.show = true
      }
    })
  },
  methods:{
    inputEvent(value){
    }
  }
}
</script>

<style >
  .blue_snackbar{}
  .v-snack__wrapper{
    width: 60vw;
  }
  .info_custom .v-snack__wrapper {
  }
  .error_custom .v-snack__wrapper {
  }

  .blue_snackbar .v-sheet .v-snack__content{
    padding:  0px 0px 0px 0px;
    font-weight: bolder;
  }
</style>
