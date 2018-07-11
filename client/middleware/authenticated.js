
export default function ({ store, error }) {
  console.log("USER", store.state);
  if (store.state.user.user == null) {
    error({
      message: 'You are not connected',
      statusCode: 403
    })
  }

}
