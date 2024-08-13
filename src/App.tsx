import GameContextProvider from "./ContextProvider"
import Layout from "./Layout/Layout"

function App() {

  return (
    <GameContextProvider>
      <Layout />
    </GameContextProvider>
  )
}

export default App
