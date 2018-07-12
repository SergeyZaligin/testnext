
export default function ({ store, error, redirect }) {
  console.log("USER", store.state);
  if (store.state.user.user === null && (store.state.user.role !== 'register' || store.state.user.role !== 'admin')) {
    return redirect('/login')
  }
}
