<template>
  <v-container fluid class="ma-0 pa-0 pl-1" >
    <KyberMap mapId="current" :items="items"  @click_item="click_item"
              :current_x="current_x" :current_y="current_y" style="height: 90vh; width:100%;"/>
  </v-container>

</template>
<script>
import BlueCard from "~/components/common/BlueCard";
import BlueMainPage from "~/components/common/BlueMainPage";
import KyberMap from "~/components/KyberMap";
import CustomList from "@/components/common/BlueList";

function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default {
	components: {
		BlueMainPage,BlueCard, KyberMap,CustomList
	},
	layout: 'default',
	async fetch() {
	  console.log('ITEMS')
    this.recalculateInfo();
  },
	data:()=>({
		items:[
      {id:1,name:' Hospital Universitario La Paz ',type:'1',coordinates:[40.48532574738553, -3.680433997151214]},
      {id:2,name:' Hospital Universitario Ramon y Cajal ',type:'2',coordinates:[40.49095891684048, -3.69350481787013]},
      {id:3,name:' Hospital Emergencias Enfermera Isable Zendal ',type:'2',coordinates:[40.487645345011735, -3.5946022744303296]},
      {id:4,name:' Hospital Emergencias Universitario HM Sanchinarro ',type:'3',coordinates:[40.49261564140141, -3.6501532624857247]},
      {id:5,name:' Clinica CEMTRO II ',type:'1',coordinates:[40.49857951114308, -3.7028722393853535]},
      {id:6,name:' Hospital San Rafael  ',type:'3',coordinates:[40.452870091780305, -3.6815034085371643]},
      {id:7,name:' Hospital Universitario HM Nuevo Belén  ',type:'1',coordinates:[40.455427678262915, -3.6576616347981417]},
      {id:8,name:' Hospital Urgencias Asisa  ',type:'1',coordinates:[40.449869066185784, -3.6517908220917286]},
      {id:9,name:' Hospital Nuestra Señora del Rosario  ',type:'2',coordinates:[40.44277231467843, -3.6832733618824247]},
      {id:10,name:' Urgencias la Milagrosa  ',type:'3',coordinates:[40.437579953410605, -3.695804165055726]},
      {id:11,name:' Urgencias la Princesa  ',type:'2',coordinates:[40.43402984295582, -3.6753371865393345]},
      {id:14,name:' Hospital Central Gómez Ulla ',type:'1',coordinates:[40.38950016681927, -3.7465459722114156]},
      {id:15,name:' Hospital 12 de Octubre ',type:'1',coordinates:[40.376223188880836, -3.69992595531074]},
      {id:16,name:' Hospital Centro Ciudad Laguna',type:'3',coordinates:[40.40110005565852, -3.7472195939164403]},
			{id:12,name:' Hospital Tetuan',type:'3',coordinates:[40.41, -3.73]},
			{id:13,name:' Hospital Centro Ciudad Laguna',type:'2',coordinates:[40.38, -3.70]}
		],
    current_x: 40.4102386,
    current_y: -3.7262625,
    //current_x: 40.43652023857209,
    //current_y: -3.6853618290779746,
	}),
	methods:{
		click_item(item){
			console.log('item_seleccionado',item)
		},
    recalculateInfo(){
		  let recalc_items = JSON.parse(JSON.stringify(this.items));
		  recalc_items.forEach(item=>{
		    let prior = randomIntFromInterval(1,3);
		    console.log(prior)
        item.type = '' + prior;
        let time = randomIntFromInterval(1800,45);
		    if(prior === 1){
		       time = '<span style="font-size: 12px;">Servicio operativo,</span><span style="color:green;font-size: 12px;font-weight: bold;"> tiempo de espera de 30 minutos.</span>';
        }else if(prior === 2){
          time = '<span style="font-size: 12px;">Servicio congestionado,</span><span style="color:darkorange;font-size: 12px;font-weight: bold;"> tiempo de espera de 1 hora.</span>';
        }else{
          time = '<span style="font-size: 12px;">Servicio saturado,</span><span style="color:darkred;font-size: 12px;font-weight: bold;"> mas de 2 horas de espera.</span>';
        }
		    item.time = time
      });
		  console.log('RECALCULADOxx',recalc_items);
		  this.items = recalc_items;
      setTimeout(this.recalculateInfo, 5000);
    }
	},

}
</script>
<style></style>
