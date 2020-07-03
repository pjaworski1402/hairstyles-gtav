const addToCart = (context, data) => {
  const inCart = context.state.find(state => state.id === data.id)
  if (typeof inCart === "undefined") {
    context.addOrder(data)
  } else {
    window.alert("Already added!")
  }
}
export default addToCart
