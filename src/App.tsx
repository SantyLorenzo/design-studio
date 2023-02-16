import { BrowserRouter, createBrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout'
import About from './components/About'
import './App.css'
import BlobScene from './scenes/BlobScene'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<BlobScene />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
