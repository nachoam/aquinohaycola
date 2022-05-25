<template>
	<BlueMainPage title="Localizador Comercios">
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
								Comercio Seleccionado
							</template>
							<template v-slot:body>
								<div v-if="last_item" class="mt-4 mb-4">
									COMERCIO:{{last_item.id}}
								</div>
								<v-btn dark rounded    color="green" class="oulined_button_bkg mt-4" :disabled="last_item === null"
								  @click="realizar_pedido">
									<v-icon left>mdi-basket-fill</v-icon> Realizar Pedido
								</v-btn>
							</template>
						</blue-card>
						<blue-card class="mt-8" v-if="last_item !== null" >
							<template v-slot:fulltitle>
								Solicitar Compra
							</template>
							<template v-slot:body>
								<v-textarea
										solo
										name="input-7-4"
										class="mt-4"
										label="Solo textarea"
										v-model="productsList"
								></v-textarea>
								<v-btn dark rounded @click="solicitar_compra()"  color="blue" class="oulined_button_bkg" :disabled="last_item === null">
									<v-icon left>mdi-basket-plus-outline</v-icon> Soliticar Compra
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
		BlueMainPage,BlueCard, KyberMap,CustomList
	},
	async fetch(){
		console.log('USER',this.$store.state.user)
		let {data: homedata, status: status1} = await this.$axios.get('/api/home/' + this.$store.state.user._id)
		console.log("Prueba carga casa", homedata)
		let homeCoordinates = homedata.home[0].coordinates
		console.log("Antes: ", this.current_x, this.current_y)
		this.current_x = parseFloat(homeCoordinates[0])
		this.current_y = parseFloat(homeCoordinates[1])
		console.log("Después:", this.current_x, !isNaN(this.current_x))

		let {data, status} = await this.$axios.post('/api/geo/near', {
			"ownerId": this.$store.state.user._id,
			"radius": 500
		});

		console.log(data)

		this.items = data["findings"].map(item => { return{
			id: item._id,
			coordinates: item.coordinates,
			type: item.type
		}})

		console.log(this.items)


		//this.current_x =  40.4102386;
		//this.current_y = -3.7262625;
	},
	data:()=>({
		productsList: '',
		last_item:null,
		current_x: 40.4102386,
		current_y: -3.7262625,
		items:[],
		/*
		items:[
			{id:1,type:'establecimiento',coordinates:[40.41, -3.76]},
			{id:2,type:'establecimiento',coordinates:[40.395, -3.70]},
			{id:3,type:'establecimiento',coordinates:[40.40, -3.68]},
			{id:4,type:'establecimiento',coordinates:[40.405, -3.735]},
		],

		 */
		last_events:[],
		last_events_loading:false,
		headers_last_events:[
			{ text: 'Name', align: 'start', value: 'name', },
			{ text: 'Tipo',  value: 'tipo', },
			{ text: 'Kw',  value: 'value_kw', },
		],
	}),
	methods: {
		click_item(item) {
			this.last_item = item
			console.log('item_seleccionado', item)
		},
		async solicitar_compra(){
			let { type, id } = this.last_item

			let {data, status} = await this.$axios.post('/api/order', {
				name: `Comercio: ${id}`,
				type,
				kw: Math.floor((Math.random() * (100 - 0 + 1)) + 0),
				products: this.productsList,
				client: this.$store.state.user._id,//"61a173f56edfa3831b007f4a",
				store: id
			});

			this.productsList = ''
			this.$router.push("/");
		},
		realizar_pedido(){
			if(this.last_item){
				this.$router.push(`/establishment/${this.last_item.id}`);
			}
		}
	}
}
</script>

<style scoped>

</style>