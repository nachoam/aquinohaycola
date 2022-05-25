<template>
	<BlueMainPage title="Localizador Recursos">
		<template v-slot:default>
			<v-container fluid class="pa-0">
				<v-row no-gutters>
					<v-col cols="8" class="pr-4">
						<blue-card title="" >
							<template v-slot:body>
								<KyberMap mapId="current" :items="items"  @click_item="click_item"
													:current_x="current_x" :current_y="current_y" style="height: 500px"/>

							</template>
						</blue-card>
					</v-col>
					<v-col cols="4" class="pl-4">
						<blue-card  >
							<template v-slot:fulltitle>
								Usuario Seleccionado
							</template>
							<template v-slot:body>
								<div v-if="last_item" class="mt-4 mb-4">
									USUARIO:{{last_item.id}}
									<br />
									--- listado de recursos disponibles ---
								</div>
								<v-btn dark rounded   color="blue" class="oulined_button_bkg" :disabled="last_item === null">
									<v-icon left>mdi-teddy-bear</v-icon> Soliticar
								</v-btn>

							</template>
						</blue-card>
					</v-col>
				</v-row>
			</v-container>
		</template>
	</BlueMainPage>
</template>

<script>
import BlueCard from "~/components/common/BlueCard";
import BlueMainPage from "~/components/common/BlueMainPage";
import KyberMap from "~/components/KyberMap";
import CustomList from "~/components/common/BlueList";

export default {
	components: {
		BlueMainPage,BlueCard, KyberMap ,CustomList
	},
	data:()=>({
		last_item:null,
		current_x: 40.4102386,
		current_y: -3.7262625,
		items:[
			{id:1,type:'USUARIO',coordinates:[40.41, -3.76]},
			{id:2,type:'USUARIO',coordinates:[40.395, -3.70]},
			{id:3,type:'USUARIO',coordinates:[40.4054, -3.6983]},
			{id:4,type:'USUARIO',coordinates:[40.44, -3.735]},
		]
	}),
	methods: {
		click_item(item) {
			this.last_item = item
			console.log('item_seleccionado', item)
		},
	}
}
</script>

<style scoped>

</style>