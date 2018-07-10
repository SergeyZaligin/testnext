
export default function ({ store, redirect }) {
  // If the user is not authenticated
  console.log(store.state.user);
  if (store.state.user === null) {
    return redirect('/login')
  }

}
