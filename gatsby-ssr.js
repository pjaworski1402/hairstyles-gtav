const React = require("react")

const { GlobalStateProvider } = require("./src/context/globalContext")

exports.wrapRootElement = ({ element }) => {
  return <GlobalStateProvider>{element}</GlobalStateProvider>
}
