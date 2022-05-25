<template>
	<BlueMainPage title="Home">
		<template v-slot:default>
			<v-container fluid class="pa-0">
				<v-row no-gutters>
					<v-col cols="12" class="pr-0">
						<v-card class="ma-0 evo-card" height="100%">
							<v-card-text class="pt-1 pl-6 pr-6 pb-0">
								<!--v-btn dark rounded small    @click="loadItems" class="oulined_button_bkg" >
									<v-icon left>mdi-delete</v-icon> Load
								</v-btn-->
								<KyberPila />
								<KyberMap mapId="current" :items="items"  @click_item="click_item"/>
							</v-card-text>
						</v-card>
					</v-col>
				</v-row>
			</v-container>
		</template>
	</BlueMainPage>
</template>
<script>
import BlueMainPage from "~/components/common/BlueMainPage";
import KyberMap from "~/components/KyberMap";
import KyberPila from "~/components/KyberPila";
export default {
	components: {
		BlueMainPage, KyberMap, KyberPila
	},
	layout: 'default',
	data:()=>({
		items:[
			{id:1,type:'COMERCIO',coordinates:[40.41, -3.73]},
			{id:2,type:'USUARIO',coordinates:[40.38, -3.70]}
		]
	}),
	methods:{
		click_item(item){
			console.log('item_seleccionado',item)
		},
		loadItems(){
			var mGreen = L.marker([40.41, -3.73], {icon: this.comerceIcon}).addTo(this.mymap);
			var mRed = L.marker([40.38, -3.70], {icon: this.userIcon}).addTo(this.mymap);
			//var mRed = L.marker([51.495, -0.083], {icon: houseIcon}).bindPopup("I am a red leaf.").addTo(mymap);
			//var mOrange = L.marker([51.49, -0.1], {icon: houseIcon}).bindPopup("I am an orange leaf.").addTo(mymap);

			mGreen.on("click", function (event) {
				var clickedMarker = event.layer;
				alert('helllou')
				// do some stuff…
			});

		}
	},

}
</script>
<style></style>
