const React = require("react")

const { GlobalStateProvider } = require("./src/context/globalContext")

exports.wrapRootElement = ({ element }) => {
  return <GlobalStateProvider>{element}</GlobalStateProvider>
}

exports.shouldUpdateScroll = ({
  prevRouterProps: { location },
  getSavedScrollPosition,
}) => {
  const currentPosition = getSavedScrollPosition(location)
  window.scrollTo(...(currentPosition || [0, 0]))

  return false
}
