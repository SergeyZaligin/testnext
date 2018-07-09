import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  createPersistedState({
    storage: window.localStorage,
      key: 'auth',
      paths: ['user']
  })(store)
}
