<template>
  <v-list dense>
			<v-list-item class="mb-4" >
				<v-list-item-content v-if="!drawer">
					<v-list-item-title class="nav_bar_heading">General</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
			<v-list-item class="mt-n4" to="/" >
				<v-list-item-icon class="ml-4 mr-4">
					<v-icon medium>mdi-information</v-icon>
				</v-list-item-icon>
				<v-list-item-content v-if="!drawer">
					<v-list-item-title>Información</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
			<v-list-item  link to="/establishment" >
				<v-list-item-icon class="ml-4 mr-4">
					<v-icon medium>mdi-store</v-icon>
				</v-list-item-icon>
				<v-list-item-content v-if="!drawer">
					<v-list-item-title>Localizador Comercios</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
			<v-list-item  link to="/resources" >
				<v-list-item-icon class="ml-4 mr-4">
					<v-icon medium>mdi-death-star</v-icon>
				</v-list-item-icon>
				<v-list-item-content v-if="!drawer">
					<v-list-item-title>Localizador Recursos</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
			<v-list-item  link to="/recycle" >
				<v-list-item-icon class="ml-4 mr-4">
					<v-icon medium>mdi-recycle</v-icon>
				</v-list-item-icon>
				<v-list-item-content v-if="!drawer">
					<v-list-item-title>Reciclaje</v-list-item-title>
				</v-list-item-content>
			</v-list-item>

			<v-list-item  link to="/home" >
				<v-list-item-icon class="ml-4 mr-4">
					<v-icon medium>mdi-home-city</v-icon>
				</v-list-item-icon>
				<v-list-item-content v-if="!drawer">
					<v-list-item-title>Mi Casa</v-list-item-title>
				</v-list-item-content>
			</v-list-item>

  </v-list>
</template>

<script>
export default {
  name: "BlueSidebarMenu",
  props: {
    drawer: {
      type: Boolean,
      required: true
    }
  },
  fetchOnServer:false,
  fetch() {

  },
  data () {
    return {

    }
  },
  watch:{

  },
  computed:{
  },
  methods: {
  }
}
</script>

<style lang="scss">

.ocean_left_bar{
  background-color: #FFF !important;
}

.ocean_left_bar .nav_bar_heading{
  color: #1E9FB0;
  font-size: 0.9em !important;
  font-weight: bold !important;
}


.ocean_left_bar .v-navigation-drawer__border{
  background: none !important;
}

.ocean_left_bar div:first-child::-webkit-scrollbar {
  width: 0px; /* hide scroll bar */
}
</style>
