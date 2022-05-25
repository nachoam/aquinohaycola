<template>
	<BlueMainPage title="Reciclaje">
		<template v-slot:default>
			<v-container fluid class="pa-0">
				<v-row no-gutters >
					<v-alert
							elevation="8"
							style="width: 100%"
							color="green"
							prominent
							type="info"
					> Recuerda que cuanto mas recicles  mas Kw energia ganaras</v-alert>
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
		last_events:[],
		last_events_loading:false,
		items:[
			{id:'001',name:'Reciclaje 10 botellas vidrio ',location:'Maq Parque sur 002',qr:'qr_ex.png',status:'COMPLETED',kw:10},
			{id:'002',name:'Reciclaje carton 1Kg ',location:'Maq norte 702',qr:'qr_ex.png',status:'COMPLETED', kw:30},
			{id:'003',name:'Reciclaje electrodomestico ',location:'Punto limpio polvoranca',qr:'qr_ex.png',status:'COMPLETED', kw:12}
		]
	}),
}
</script>

<style scoped>

</style>