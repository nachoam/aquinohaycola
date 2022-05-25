<template>
	<BlueMainPage title="Seleccionar Compras a Realizar">
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
				<v-row no-gutters>
					<v-col cols="12" class="mt-8">
						<blue-card title="Solicitudes" >
							<template v-slot:botonera>
								<v-btn
										color="green"
										rounded dark
										class="float-right"
										@click="realizarPedido()"
										:disabled="selected === null"
								>
									<v-icon  class="mr-4">mdi-basket-fill</v-icon>
									Realizar Pedido
								</v-btn>
							</template>
							<template v-slot:body>
								<custom-list class="mt-4" :items="last_events" :headers="headers_last_events"
														 :loading="last_events_loading" :showSearch="false"
														 :select-item="true"
														 @selectedItem="selectedItem"
														 :custom-items="[]">
								</custom-list>
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
import KyberPila from "~/components/KyberPila";
import CustomList from "~/components/common/BlueList";

export default {
	components: {
		BlueMainPage,BlueCard, KyberMap, KyberPila,CustomList
	},
	async asyncData({ params }) {
		const id = params.id
		return { id }
	},
	async fetch(){
		console.log("ID",this.id)
		/*
		this.last_item = this.mock.find(item=>{return item.id == this.id})
		if(this.last_item){
			this.current_x = this.last_item.coordinates[0]
			this.current_y= this.last_item.coordinates[1]
		}
		console.log("LAST ITEM",this.last_item)
		*/

		//this.current_x = parseFloat(homeCoordinates[0])
		//this.current_y = parseFloat(homeCoordinates[1])
		let {data, status} = await this.$axios.post('/api/geo/near', {
			"ownerId": this.$store.state.user._id,
			"radius": 500
		});
		this.items = data["findings"].map(item => { return{
			id: item._id,
			coordinates: item.coordinates,
			type: item.type
		}})
		console.log("ITEMS2",this.items)
		this.last_item = this.items.find(item=>{return item.id == this.id})
		if(this.last_item){
			this.current_x = this.last_item.coordinates[0]
			this.current_y= this.last_item.coordinates[1]
		}
		this.last_events = await this.fetchOrdersByEstablishment(this.id)

	},
	data:()=>({
		selected:null,
		last_events: [],
		last_events_loading:false,
		headers_last_events:[
			{ text: 'Name', align: 'start', value: 'name', },
			{ text: 'Tipo',  value: 'type', },
			{ text: 'Kw',  value: 'kw', },
		],
		current_x: 0,
		current_y: 0,
		last_item:null,
		items:[ ]
		/*
		{
    "name": "Super Manoli",
    "type": "comercio",
    "kw": 55,
    "products": "2kg de Patatas, 2L de leche, chocolate milka",
    "store": "61a1fd56564989a2ff4a4130",
    "delivery_man": null,
    "status": "open",
    "_id": "61a1feb71b8feed398428d19"
  }
		 */
	}),
	methods: {
		async realizarPedido(){
			if(this.selected){
///api/order
	//			post

				//{ "_id": "61a22c5b9f44235777e34ff0",
				// "name": "Comercio: 61a16c168a1919180949ccb0",
				// "type": "establecimiento",
				// "kw": 23,
				// "products": "Cereales", "client": { "name": "Alex", "surname": "Cantón García" }, "store": "61a16c168a1919180949ccb0", "status": "open", "__v": 0 }
				let {data, status} = await this.$axios.put('/api/order/assign/'+this.$store.state.user._id, {
					orderId:this.selected._id
				});
				this.$router.push("/");
			}
		},
		selectedItem(item){
			this.selected = item
		},
		click_item(item) {
			this.last_item = item
			console.log('item_seleccionado', item)
		},
		async fetchOrdersByEstablishment(id) {
			const response = await fetch(`http://localhost:3001/api/order/${id}`)
			const orders = await response.json()
			return orders.order
		}
	}
}
</script>

<style scoped>

</style>