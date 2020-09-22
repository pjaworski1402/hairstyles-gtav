const addToCart = (context, data) => {
<<<<<<< HEAD
  const inCart = context.state.find(state => state.strapiId === data.strapiId)
=======
  const inCart = context.state.find(state => state.id === data.id)
>>>>>>> 7f23e4f984630e23292383c7f6d10974f0f73d75
  if (typeof inCart === "undefined") {
    context.addOrder(data)
    return "Hairstyle added to the cart"
  } else {
    alert("This product is already in the cart")
    return "Already added"
  }
}
export default addToCart
