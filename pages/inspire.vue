<template>
  <v-container fluid class="ma-0 pa-0 pl-1" style="height: 100%">
    <KyberMap mapId="current" :items="items"  @click_item="click_item"
              :current_x="current_x" :current_y="current_y" style="height: 100%; width:100%;"/>
  </v-container>

</template>
<script>
import BlueCard from "~/components/common/BlueCard";
import BlueMainPage from "~/components/common/BlueMainPage";
import KyberMap from "~/components/KyberMap";
import CustomList from "@/components/common/BlueList";

export default {
	components: {
		BlueMainPage,BlueCard, KyberMap,CustomList
	},
	layout: 'default',
	async fetch() {},
	data:()=>({
		items:[
			{id:1,type:'COMERCIO',coordinates:[40.41, -3.73]},
			{id:2,type:'USUARIO',coordinates:[40.38, -3.70]}
		],
    current_x: 40.4102386,
    current_y: -3.7262625,
	}),
	methods:{
		click_item(item){
			console.log('item_seleccionado',item)
		}
	},

}
</script>
<style></style>
