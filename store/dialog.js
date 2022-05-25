export const state = () => ({
  content: '',
  type: null,
  description: null
})

export const mutations = {
  showMessage (state, payload) {
    state.content = payload.content
    state.type = payload.type
    state.description = payload.description
  }
}
