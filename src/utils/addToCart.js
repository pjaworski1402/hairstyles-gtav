const addToCart = (context, data) => {
  const inCart = context.state.find(state => state.id === data.id)
  if (typeof inCart === "undefined") {
    context.addOrder(data)
    return "Hairstyle added to the cart"
  } else {
    return "Already added"
  }
}
export default addToCart
