import { BrowserRouter } from "react-router-dom"
import "./App.css"
import Layout from "./layout"
import RoutesFile from "./routes"

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <RoutesFile/>
      </Layout>
    </BrowserRouter>
  )
}

export default App
