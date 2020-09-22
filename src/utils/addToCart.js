const addToCart = (context, data) => {
  const inCart = context.state.find(state => state.strapiId === data.strapiId)
  if (typeof inCart === "undefined") {
    context.addOrder(data)
    return "Hairstyle added to the cart"
  } else {
    alert("This product is already in the cart")
    return "Already added"
  }
}
export default addToCart
