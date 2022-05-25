
export const state = () => ({
  user: {
    name:'nachoam'
  }
})

export const mutations = {

  updateUser(state,user){
    state.user = user
  },
  resetUser(state){
    state.user = null
  },
  copyNode(state,node){
    state.node = node
  }
}
