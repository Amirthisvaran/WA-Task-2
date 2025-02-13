import Form from "./components/Form"
import FormData from "./components/FormData"
import { Routes, Route, BrowserRouter } from "react-router-dom"

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form/>} />
          <Route path="/feedback" element={<FormData/>} />
        </Routes>
      </BrowserRouter>
    )
}

export default App
