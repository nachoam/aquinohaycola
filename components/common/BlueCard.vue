<template>
  <v-card class="ma-0 evo-card" :loading="loading">
    <v-card-text>
      <v-container fluid class="ma-0 pa-0">
        <v-row no-gutters class="evo_global_titles">
          <slot name="fulltitle"></slot>
        </v-row>
        <v-row no-gutters>
          <v-col cols="6" class="evo_global_titles">
            <slot name="title">{{title}}</slot>
          </v-col>
          <v-col cols="6">
            <slot name="botonera"></slot>
          </v-col>
        </v-row>
        <v-row no-gutters >
          <v-container fluid class="ma-0 pa-0">
            <slot name="body"></slot>
          </v-container>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "blue-card",
  props: {
    title: {
      type: String
    },
    loading: {
      type: Boolean,
      default: false
    },
  },
  data(){
    return {
      items: [],
    }
  }
}
</script>

<style>

</style>
