<template>
  <div>
    <v-icon class="mr-2" color="secondary" v-if="isTrue">
      mdi-check-circle-outline
    </v-icon>
    <v-icon class="mr-2" color="red darken-2" v-else>
      mdi-close-circle-outline
    </v-icon>
    <label class="v-label theme--light" v-if="label">{{label}}</label>
  </div>
</template>

<script lang="js">
export default {
  name: "blue-display-boolean",
  props: {
    isTrue: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    }

  }
};
</script>
