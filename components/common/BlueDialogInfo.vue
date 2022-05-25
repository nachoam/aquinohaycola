<template>
  <v-dialog v-model="show" persistent max-width="400" class="blue_dialog" >
    <v-container style="height: 50px; background-color:#00000000 !important" />
    <v-card class="evo-card border-success pa-4" :color="color_card">
      <v-card-title class="headline">
        <v-container>
          <v-row no-gutters  class="justify-center" style="height: 0px">
            <SucessIcon v-if="type === 'success'" style="margin-top: -90px" />
            <WarningIcon v-else-if="type === 'warning'" style="margin-top: -90px" />
            <ErrorIcon v-else style="margin-top: -90px" />
          </v-row>
        </v-container>
      </v-card-title>
      <v-card-text class="pb-4 pt-4 pl-2 pr-2">
        <v-row v-if="description !== null" no-gutters :class="['blue_sub_title text-justify justify-center',color_text+'--text']"  >
          {{ description }}
        </v-row>
        <v-row v-else no-gutters :class="['blue_sub_title text-justify justify-center',color_text+'--text']"  >
          {{  message }}
        </v-row>

      </v-card-text>
      <v-card-actions class="pa-0 pt-4">
        <v-row no-gutters  class="justify-center">
        <v-btn rounded dark block :color="color_principal"  style="font-weight: bolder"  @click="show = false" >
          OK
        </v-btn>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

export default {
  name: "BlueDialogInfo",
  components: {
    ErrorIcon: ()=> import('./svg/ErrorIcon.vue'),
    SucessIcon: ()=> import('./svg/SucessIcon.vue'),
    WarningIcon: ()=> import('./svg/WarningIcon.vue'),
  },
  data () {
    return {
      show: false,
      message: '',
      type: null,
      description: null,
    }
  },
  computed:{
    color_card(){
      return this.type === 'error' || this.type === 'warning'? '#FFFFFF' : 'evo_azul_grafito'
    },
    color_principal(){
      return this.type === 'error' ? 'evo_rojo_coral' :  this.type === 'warning'? 'evo_naranja_salmon' : 'evo_azul_turquesa'
    },
    color_text(){
      return this.type === 'error' ? 'evo_rojo_coral' : this.type === 'warning'? 'evo_naranja_salmon' : 'white'
    }
  },
  created () {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'dialog/showMessage') {
        this.message = state.dialog.content
        this.type = state.dialog.type
        this.show = true
        this.description = state.dialog.description === undefined ? null :state.dialog.description
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
  box-shadow: 0px 11px 15px -17px rgba(0, 0, 0, 0.2);

}
</style>
