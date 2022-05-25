<template lang="html">
  <v-text-field
    :name="name"
    :label="label"
    single-line
    hide-details
    outlined
    rounded
    dense
    clearable
    v-model="searchText"
    @keyup="$emit('update:searchText', searchText)"
    @click:clear="$emit('update:searchText', '')"
    class="blue-search"
    :placeholder="placeholder"
  >
    <template v-slot:prepend-inner>
      <v-icon medium color="#384554" class="mr-2">mdi-magnify</v-icon>
    </template>
  </v-text-field>
</template>

<script lang="js">

  export default {
    name: 'blue-search',
    props: ['label','placeholder','name'],

    data: function () {
      return {
        searchText: ''
      }
    },
  }
</script>

<style lang="scss" scoped>
.blue-search {
  background-color: white;
  width: 600px;
}
</style>
