import { BrowserRouter, createBrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Title from './components/Title'
import DeployedAt from './components/DeployedAt'

function App() {
  return (
    <main className="app">
      <section className="first-section">
        <Title />
        <DeployedAt />
        <img className="img-wonder" src='/wonder.jpg' alt='wonder' />
      </section>
    </main>
  )
}

export default App
