export default function ({ store, error, redirect }) {

  console.log("USER", store.state);

  if (store.state.user.role !== 'admin' || store.state.user.user === null) {
    return redirect('/login')
  }

}
