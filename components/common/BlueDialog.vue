<template>
  <v-dialog v-model="dialog" persistent max-width="400" >
    <v-card>
      <v-card-title class="headline">
        {{this.title}}
      </v-card-title>
      <v-card-text>{{this.desc}}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn  color="evo_rojo_coral darken-1"  text @click="dialog = false" >
          Cancel
        </v-btn>
        <v-btn color="evo_azul_turquesa darken-1" text  @click="accept" >
          {{ this.accept_text }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "BlueDialog",
  props:['open','title','desc','accept_text'],
  data () {
    return {
      dialog: false,
    }
  },
  watch:{
    open(value){
      this.dialog = value
    },
    dialog(value){
      if(value === false){
        this.$emit('close')
      }
    }
  },
  methods:{
    accept(){this.dialog = false
     this.$emit('accept')
     this.dialog = false;
    }
  }
}
</script>

<style scoped>

</style>
