<template>
	<BlueMainPage title="Mi Casa">
		<template v-slot:default>
			<v-container fluid class="pa-0">
				<v-row no-gutters>
					<v-col cols="12" >
						<blue-card title="" >
							<template v-slot:body>
								{{last_item}}
								<KyberMap mapId="comercio" :items="[]"  @click_item="click_item"
													:current_x="current_x" :current_y="current_y" style="height: 100px"/>
							</template>
						</blue-card>
					</v-col>
				</v-row>
				<v-row no-gutters class="mt-8">
					<v-alert
							elevation="8"
							style="width: 100%"
							color="green"
							prominent
							type="info"
					> Recuerda que cuanto mas instalaciones que mejoren la eficiencia energetica o ahorre mas Kw energia ganaras</v-alert>
				</v-row>
				<kyber-card v-for="item in items" :key="item.id" :item="item"/>
			</v-container>
		</template>
	</BlueMainPage>
</template>

<script>
import BlueMainPage from "~/components/common/BlueMainPage";
import BlueCard from "~/components/common/BlueCard";
import CustomList from "@/components/common/BlueList";

export default {
	components: {
		BlueMainPage,BlueCard, CustomList
	},
	fetch() {
		this.user = this.$store.state.user
	},
	data:()=>({
		user:{},
		current_x: 40.4102386,
		current_y: -3.7262625,
		last_events:[],
		last_events_loading:false,
		items:[
			{id:'001',name:'Sistema de provisión fotovoltaica',location:'Finca 7213',qr:'qr_ex.png',status:'COMPLETED',kw:50},
			{id:'002',name:'Aislamiento termico ventanas',location:'Finca 7213',qr:'qr_ex.png',status:'COMPLETED', kw:30},
			{id:'003',name:'Sistema domotica',location:'Finca 7213',qr:'qr_ex.png',status:'COMPLETED', kw:10}
		]
	}),
}
</script>

<style scoped>

</style>