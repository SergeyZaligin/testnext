
export default function ({ store, error }) {
  if (store.state.user.user == null) {
    error({
      message: 'You are not connected',
      statusCode: 403
    })
  }

}
