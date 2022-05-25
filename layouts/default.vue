<template>
	<v-app class="blueApp" ref="blueApp">
		<v-navigation-drawer v-model="drawer"  fixed app clipped
												 class="ocean_left_bar elevation-23"
												 mini-variant-width="70">
                         <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router  exact >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
		</v-navigation-drawer>
		<v-app-bar dark app clipped-left color="white" height="55px" >

      <v-img  contain src="logo.png"  max-width="50" class="logo ml-n1 mb-1 mr-4" @click.stop="drawer = !drawer"/>
      <span style="color:black" >Aquí no hay cola </span>
			<v-spacer/>
			<!--blue-user-menu /-->
		</v-app-bar>
		<v-main class="ocean_main">
			<v-container fluid class="ma-0 pa-0">
				<nuxt/>
			</v-container>
		</v-main>
		<v-footer app fixed color="primary" height="25px" class="justify-center pa-0">
			<span style="color:#FFF;font-size:0.8em">* NovaHack {{ new Date().getFullYear() }} - Kyber </span>
		</v-footer>
	</v-app>
</template>

<script>

import BlueSnackBar from "@/components/common/BlueSnackBar";
import BlueSidebarMenu from "~/components/common/BlueSidebarMenu";
import BlueDialogInfo from "@/components/common/BlueDialogInfo";
import BlueUserMenu from "@/components/common/BlueUserMenu";

export default {
	components: {
		BlueDialogInfo,
		BlueUserMenu,
		BlueSnackBar,
		BlueSidebarMenu
	},
	middleware: 'authenticated',
	fetch() {
		this.user = this.$store.state.user
	},
	mounted() {
		this.refreshToken()
		setInterval(async ()=>{
			this.refreshToken()
		},1000 * 60 * 5 )
	},
	data() {
		return {
			user:{},
			fullscreen: false,
			usermenu: false,
			flagmenu: false,
			clipped: false,
			drawer: false,
			fixed: false,
			miniVariant: false,
			right: true,
			rightDrawer: false,
			title: 'Vuetify.js',
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        }
      ]
		}
	},
	computed:{

	},
	methods:{

		async refreshToken(){

		},

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
		}
	}
}
</script>
<style lang="scss">
.v-application {
	font-family: "Evolutio", sans-serif;
	line-height: 1.5;
}

.ocean_main{
	background: #F6F8F9;
}
.label_orgId {
	color:#66FCF1;
}


.theme--light.v-input--switch .v-input--switch__track {
	color: #EC6579;
}
.theme--light.v-input--switch .v-input--switch__thumb {
	color: #EC6579;
}

</style>

