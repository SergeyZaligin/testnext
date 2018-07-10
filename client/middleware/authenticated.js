
export default function ({ store, error }) {
  if (store.state.user.user) {
    error({
      message: 'You are not connected',
      statusCode: 403
    })
  }

}
