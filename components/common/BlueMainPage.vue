<template>
  <v-container fluid class="ma-0 pa-0 pl-9" >
    <v-row no-gutters class="mt-4">
      <v-col cols="8">
        <BlueTitle v-if="title" :text="title"></BlueTitle>
      </v-col>
      <v-col cols="4" class="pr-10" >
        <slot name="botonera" ></slot>
      </v-col>
    </v-row>
    <v-row no-gutters class="mt-4">
      <v-col cols="12" class="pr-10">
        <slot></slot>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BlueTitle from "@/components/common/BlueTitle";
export default {
  components: {BlueTitle},
  props: ['title'],
}
</script>

<style>

</style>
