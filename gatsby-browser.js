const React = require("react")

const { GlobalStateProvider } = require("./src/context/cartContext")

exports.wrapRootElement = ({ element }) => {
  return <GlobalStateProvider>{element}</GlobalStateProvider>
}
