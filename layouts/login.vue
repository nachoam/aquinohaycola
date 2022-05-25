<template>
	<v-app class="blueApp" ref="blueApp"  >
		<v-main>
			<v-container>
				<nuxt/>
			</v-container>
		</v-main>
		<v-footer :fixed="fixed" app style="background: none;" >
			<span style="color:#FFF;font-size:0.8em">* NovaHack {{ new Date().getFullYear() }} - Kyber </span>
		</v-footer>
	</v-app>
</template>

<script>

export default {
	components: {

	},
	data() {
		return {
			fullscreen: false,
			usermenu: false,
			flagmenu: false,
			clipped: false,
			drawer: false,
			fixed: false,
			items: [
				{
					icon: 'mdi-apps',
					title: 'Welcome',
					to: '/'
				}
			],
			miniVariant: false,
			right: true,
			rightDrawer: false,
			title: 'Vuetify.js',
			bgi :'../assets/inovacion_imaginacion.webp'
		}
	},
	methods:{
		toggleFS () {
			let elem = this.$refs.blueApp.$el
			if (!document.fullscreenElement) {
				if (elem.requestFullscreen) {
					elem.requestFullscreen();
				} else if (elem.webkitRequestFullscreen) { /* Safari */
					elem.webkitRequestFullscreen();
				} else if (elem.msRequestFullscreen) { /* IE11 */
					elem.msRequestFullscreen();
				}
				this.fullscreen = true;
			} else {
				if (document.exitFullscreen) {
					document.exitFullscreen();
				} else if (document.webkitExitFullscreen) { /* Safari */
					document.webkitExitFullscreen();
				} else if (document.msExitFullscreen) { /* IE11 */
					document.msExitFullscreen();
				}
				this.fullscreen = false;
			}
		},
		async logout(){
			try{
				await this.$auth.logout('local')
			}catch(err){
				console.error(err)
			}
		}
	}
}
</script>
<style scoped>
.blueApp{
	background-image: url('../assets/backgroung.jpeg') !important;
	/*background-image: url('../assets/inovacion_imaginacion.webp') !important;*/
	/* opacity: 0.65; */
	background-position: center !important;
	background-repeat: no-repeat !important;
	background-size: cover !important;
}



</style>

