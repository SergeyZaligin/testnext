import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  createPersistedState({
      key: 'auth',
      paths: [user]
  })(store)
}
