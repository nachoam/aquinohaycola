<template>
  <v-autocomplete
    v-on:input="onInput"
    v-on:change="onChange"
    v-bind:value="value"
    :item-text="itemText"
    :item-value="itemValue"
    :items="items"
    :loading="isLoading"
    :search-input.sync="search"
    :cache-items="cacheItems"
    :label="this.label"
    :placeholder="this.placeholder"
    :prepend-icon="icon"
    :required="required"
    :disabled="isLoading || disabled"
    :rules="rules"
    :return-object="returnObject"
    clearable
  >
    <template v-slot:append-outer>
      <slot name="append"></slot>
    </template>
  </v-autocomplete>
</template>

<script>

  export default {
    name: 'BlueAutoCompleteRest',
    props: {
      icon:{
        type: String,
        required: false,
        default:'mdi-database-search'
      },
      itemText: {
        type: String,
        required: false
      },
      itemValue: {
        type: String,
        required: false
      },
      value: {
        required: true
      },
      activateSearch: {
        type: Boolean,
        required: false
      },
      rules: {
        required: false,
        type: Array
      },
      required: {
        type: Boolean,
        required: false
      },
      disabled: {
        type: Boolean,
        required: false
      },
      loadDisabled: {
        type: Boolean,
        default: false,
        required: false
      },
      filterMethod: {
        type: Function,
        required: false
      },
      placeholder: {
        type: String,
        required: false
      },
      label: {
        type: String,
        required: false
      },
      url: {
        type: String,
        required: true
      },
      urlParams: {
        type: Array,
        required: false
      },
      headerPros: {
        type: Object,
        required: false
      },
      returnObject: {
        type: Boolean,
        default: false,
        required: false
      },
      cacheItems: {
        type: Boolean,
        default: true,
        required: false
      },
      selectItemId:{
        type: Number,
        required: false
      }
    },
    data: () => ({
      entries: [],
      descriptionLimit: 60,
      isLoading: false,
      search: null,
      oldQueryText: '',
      model: null,
    }),

    computed: {
      items: function () {
        if (this.filterMethod) {
          return this.filterMethod(this.entries)
        }
        return this.entries
      },
    },


    watch: {
      search: async function (val) {
        debugger
        (val && val !== this.select || !val) && await this.loadData(val ? val : '')
      },
      async url(){
        await this.loadData(this.search ? this.search : "")
      },
      urlParams: async function () {
        await this.loadData(this.search ? this.search : "")
      },

      activateSearch: async function (val) {
        await this.loadData(this.search ? this.search : "")
      },
      selectItemId: async function(_val){
        console.log("selectItemId",_val)
        if(_val !== null){
          await this.loadData(this.search ? this.search : "")
        }
      }
    },
    async fetch() {
      //Si no se almacenan por defecto los valores al borrar hay que recargar
      await this.loadData()
    },

    methods: {
      loadData: async function (val = "") {
        this.isLoading = true;
        if (!this.disabled || this.loadDisabled) {
          this.loading = true
          // Simulated ajax query
          let params = `?search=${val}`
          if (this.urlParams && this.urlParams.length > 0) {
            this.urlParams.forEach((param) => {
              if (param.value) {
                params = `${params}&&${param.text}=${param.value}`
              }
            })
          }

          let baseUrl = `${this.url}${params}`
          let {data} = await this.$axios.get(baseUrl)
          this.entries = [...data]
          console.log("ENTRIES:" , this.entries)
          this.isLoading = false
          this.$emit('change_entries', this.entries)
        }
        this.isLoading = false;
      },
      onInput: function (event) {
        return this.$emit('input', event ? event : null)
      },
      onChange: function (event) {
        return this.$emit('change', event ? event : null)
      }
    }
  }

</script>
