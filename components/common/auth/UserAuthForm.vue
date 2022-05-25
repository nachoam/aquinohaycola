<template>
  <v-card color="#384554cc" class="pl-10 pr-10 pb-10 mt-10" width="400px" elevation="24">
    <v-card-title style="color:#66FCF1" class="float-center">Login</v-card-title>
    <v-card-text>
      <v-form v-model="valid" ref="form" lazy-validation>
        <v-text-field color="#FFF" v-model="userInfo.name" placeholder="Usuario" solo />
        <v-text-field v-model="userInfo.password"
                      placeholder="Password"
                      :type="showPassword ? 'text' : 'password'"
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      @click:append="showPassword = !showPassword"
                      @keypress.enter="login"

                      solo/>
        <v-btn @click="login" :disabled="!valid" class="float-right" elevation="5" color="secondary">
          Login
        </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'UserAuthForm',
  data() {
    return {
      valid: false,
      showPassword: false,
      userInfo: {
        email: '',
        password: ''
      }
    }
  },
  props: ["submitForm"],
  methods: {

    login() {
      this.$emit('login', this.userInfo)
    }
  }
}
</script>
