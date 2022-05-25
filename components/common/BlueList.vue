<template>
  <v-container fluid class="ma-0 pa-0 pt-4 pb-4">
    <v-row no-gutters v-if="showSearch">
      <v-col cols="5">
        <blue-search  :label="'Service Number'" :placeholder="labelSearch" :searchText.sync="searchText" name="cn_filter"></blue-search>
      </v-col>
      <v-col cols="7">
        <slot name="buttons"></slot>
      </v-col>
    </v-row>
    <v-row no-gutters :class="showSearch?'mt-4':''">
      <v-col class="custom-list">
          <v-data-table dense
                        :headers="headers"
                        :items="items"
                        :item-key="list_key"
                        sort-by="sortBy"
                        :hide-default-footer="true"
                        no-data-text=""
                        class="row-pointer"
                        :search="searchText"
                        :loading="loading"
                        @page-count="pageCount = $event"
                        :page.sync="page"
                        :items-per-page="itemsPerPage"
                        single-select
                        @click:row="handleClickRow"
                        :value="selectedItem"
          >
            <template v-slot:item.controls="{item}">
              <slot name="controls" v-bind:item="item"></slot>
            </template>
            <template v-for="custom in customItems"  v-slot:[custom.name]="{ item }">
              <v-container fluid v-if="item" class="ma-0 pa-0">
                <nuxt-link v-if="custom.type === 'link'" to="/" class="list_link">{{ item[custom.value]}}</nuxt-link>
                <v-container fluid v-if="custom.type === 'bool'" class="ma-0 pa-0">
                  <v-icon  color="secondary" v-if="custom.expr?executeExpr(item[custom.value],custom.expr):(item[custom.value] === true || item[custom.value] === 1)" >
                    mdi-check-circle-outline
                  </v-icon>
                  <v-icon  color="red darken-2" v-else >
                    mdi-close-circle-outline
                  </v-icon>
                </v-container>
                <slot v-if="custom.type === 'custom'" :name="custom.slot" v-bind:item="item"></slot>
              </v-container>
            </template>
          </v-data-table>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="6">
        <v-container class="max-width">
          <v-pagination
            v-model="page"
            :length="pageCount"
            circle
            class="float-left"
          ></v-pagination>
        </v-container>
      </v-col>
      <v-col cols="4" class="mt-6 ">
        Total {{items?items.length:0}}
      </v-col>
      <v-col cols="2">
        <v-select v-if="!loading"
                  class="mt-2"
                  dense
                  :items="[5,10,20,50]"
                  label="Items por pagina"
                  v-model="itemsPerPage"
                  outlined
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BlueSearch from "./BlueSearch";

export default {
  name: 'custom-list',
  components:{BlueSearch},
  props: {
    items: {
      type: Array,
      required: true
    },
    headers: {
      type: Array,
      required: true
    },
    sortBy: {
      type: String
    },
    showSearch:{
      type:Boolean,
      default:true
    },
    loading:{
      type:Boolean,
      default: false
    },
    customItems:{
      type:Array,
      default: function () {
        return []
      }
    },
    labelSearch:{
      type: String
    },
    selectItem:{
      type: Boolean,
      default:false
    },
    list_key:{
      type:String,
      default:'id'
    },
    init_items:{
      type:Number,
      default:10
    }
  },
  mounted() {
    this.itemsPerPage = this.init_items
  },
  data: function () {
    return {
      filter:{
        customerName: ''
      },
      rowsSelected: [],
      dialog: false,
      itemSelected: [],
      searchText: '',
      itemsPerPage:10,
      page: 1,
      pageCount:0,
      selectedItem:[]
    }
  },
  computed:{
    itemCount(){
      return this.items.length;
    }
  },
  methods: {
    handleClickRow(value){
      if(this.selectItem) {
        if (this.selectedItem.length > 0 && this.selectedItem[0][this.list_key] === value[this.list_key]) {
          this.selectedItem = [];
          this.$emit('selectedItem', null)
        } else {
          this.selectedItem = [value];
          this.$emit('selectedItem', value)
        }
      }
    },
    executeExpr(value,expr){
      return eval(expr)
    },

    rowClick(item, row) {
      if (row.isSelected) {
        row.select(false);
      } else {
        row.select(true);
      }
      this.$emit("click", item)
    }
  }
}
</script>

<style scoped>

</style>
