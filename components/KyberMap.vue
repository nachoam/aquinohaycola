<template>

	<div :id="`map-wrap_component_${this.mapId}`" style="width: 100%; height: 100%"></div>
</template>

<script>
export default {
	name: "KyberMap",
	props:['items','mapId','current_x','current_y'],
	data:()=>({
		mymap:null,
		current:null,
		comerceIcon:null,
		userIcon:null,
		currentIcon:null,
    level_1:null,
    level_2:null,
    level_3:null
	}),
	watch:{
		current_x(value){
			console.log('change!!!',value)
			this.mymap.setView([value, this.current_y], 17)
			L.marker([value, this.current_y], {icon: this.currentIcon}).addTo(this.mymap);
		},
		current_y(value){
			this.mymap.setView([this.current_x, value], 17)
			L.marker([this.current_x, value], {icon: this.currentIcon}).addTo(this.mymap);
		},
		items(value){
			console.log('ITEMS')
			this.reloadItems(value)

		}
	},
	mounted() {

		this.mymap = L.map(`map-wrap_component_${this.mapId}`).setView([this.current_x, this.current_y], 17)
		L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
			attribution: '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>',
			tileSize: 512,
			maxZoom: 18,
			zoomOffset: -1,
			id: 'mapbox/streets-v11',
			accessToken: 'pk.eyJ1IjoibmFjaG9hbSIsImEiOiJja3dnenE4eWQwdHNkMnFuc2Nyamg1amxkIn0.uo9JTabPMLxc9lyKQL1Cvg'
		}).addTo(this.mymap);

		//140 x 176
		let percent = 0.4
		var CommerceIcon = L.Icon.extend({
			options: {
				iconUrl:'comerce_icon.png',
				iconSize:     [140 * percent, 176 * percent]
			}
		});
		//139 x 173
		var UserIcon = L.Icon.extend({
			options: {
				iconUrl:'user_icon.png',
				iconSize:     [139 * percent, 173 * percent]
			}
		});

		//139 x 173
		var CurrentIcon = L.Icon.extend({
			options: {
				iconUrl:'current.png',
				iconSize:     [80 * percent, 101 * percent]
			}
		});

    var Level1 = L.Icon.extend({
      options: {
        iconUrl:'level_1_icon.png',
        iconSize:     [133 * percent, 131 * percent]
      }
    });

    var Level2 = L.Icon.extend({
      options: {
        iconUrl:'level_2_icon.png',
        iconSize:     [133 * percent, 131 * percent]
      }
    });

    var Level3 = L.Icon.extend({
      options: {
        iconUrl:'level_3_icon.png',
        iconSize:     [133 * percent, 131 * percent]
      }
    });
    this.level_1 = new Level1();
    this.level_2 = new Level2();
    this.level_3 = new Level3();

		this.comerceIcon = new CommerceIcon();
		this.userIcon = new UserIcon();
		this.currentIcon = new CurrentIcon();

		this.current = L.marker([this.current_x, this.current_y], {icon: this.currentIcon}).addTo(this.mymap);


		if(this.items){
			/*
			this.items.forEach(item => {
				//			{id:1,type:'COMERCIO',coordinates:[40.323232, -3,312323]},
				let instance_marker = L.marker(item.coordinates, {icon: item.type === 'establecimiento' ? this.comerceIcon : this.userIcon}).addTo(this.mymap);
				instance_marker.on("click",  (event) => {
					this.$emit('click_item',item)
				});
			})

			 */

			this.reloadItems(this.items)
		}
		console.log(this.items)


	},
	methods:{
		reloadItems(items){
			items.forEach(item => {
				//			{id:1,type:'COMERCIO',coordinates:[40.323232, -3,312323]},
				//let instance_marker = L.marker(item.coordinates, {icon: item.type === 'establecimiento' ? this.comerceIcon : this.userIcon}).addTo(this.mymap);
        let instance_marker = L.marker(item.coordinates, {icon: item.type === '1' ? this.level_1 : item.type === '2' ? this.level_2 :this.level_3 })
          .addTo(this.mymap)
          .bindPopup(`<span style="font-weight: bold;font-size: 15px;">${item.name}</span><br/><br/><span>${item.time}</span>`);
				instance_marker.on("click",  (event) => {
          instance_marker.openPopup();
					this.$emit('click_item',item)
				});
			})
		}
	}
}
</script>

<style scoped>

</style>
