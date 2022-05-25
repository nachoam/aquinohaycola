<template>
	<v-layout column justify-center align-center class="login_card" >
		<transition name="slide-fade">

			<UserAuthForm @login="login" />
		</transition>
	</v-layout>
</template>

<script>
import UserAuthForm from "@/components/common/auth/UserAuthForm"

export default {
	name: "login.vue",
	layout: 'login',
	components: {
		UserAuthForm,
	},
	methods : {
		fetch(){
			this.$store.commit('resetUser')
		},
		async login(info) {
			try{
				console.log(info)
				let {data, status} = await this.$axios.post('/api/auth/login', {
					"email": info.name,
					"password": info.password
				});
				console.log(data,status);
				await this.$store.commit('updateUser', data.user)
				console.log('uppp')
				 this.$router.push("/");
				console.log('fin')

				/*
				{
							"email": "alex@gmail.com",
							"password": "estrellita"
						}
				*/
			} catch (error) {
					console.error(error);
			}
			/*try {
				let infores = await this.$auth.loginWith('local', {
					data: {
						username: info.name,
						password: info.password
					}
				});
				this.$store.commit('updateUser', infores.data)
			} catch (error) {
				if (error.response && error.response.data) {
				} else {
					console.error(error)
				}
			}

			 */
		},
	}
}
</script>

<style scoped>

</style>