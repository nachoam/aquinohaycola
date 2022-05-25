<template>
  <v-speed-dial v-model="userMenu" direction="bottom" transition="slide-y-reverse-transition" class="ocean_bar_menu">
    <template #activator>
      <v-btn v-model="userMenu" class="mx-2" fab small color="#1E9FB0">
        <v-icon v-if="userMenu">
          mdi-close
        </v-icon>
        <v-icon v-else>
          mdi-account
        </v-icon>
        <span></span>
      </v-btn>
    </template>
    <v-btn rounded small color="evo_rojo_coral" @click="logout">
      <v-icon left>mdi-logout</v-icon>
      Logout
    </v-btn>
  </v-speed-dial>
</template>

<script>
export default {
  name: "BlueUserMenu",
  data() {
    return {
      userMenu: false
    }
  },
  computed: {

  },
  methods: {
     logout() {
      try {
				this.$router.push("/login");


			} catch (err) {
        console.error(err)
      }
    },
    openChangePasswordDialog() {
      console.log('estoy emitiendo')
      this.$emit('open_password_modal')
    }
  }
}
</script>

<style scoped>

.v-speed-dial__list button {
  width: 200px !important;
  margin-right: 150px !important;
}
</style>
