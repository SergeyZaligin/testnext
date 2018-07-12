export default function ({ store, error, redirect }) {

  console.log("USER", store.state);

  if (store.state.user.role !== 'admin') {
    return redirect('/login')
  }

}
