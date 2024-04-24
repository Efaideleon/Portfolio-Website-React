import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/navbar/Navbar"
import { Home } from "./components/home/Home"
import { Contact } from "./components/contact/Contact"

function App() {

  const cardsData =
    [
      {
        title: 'Project Title',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: "./boat-webp-animated.webp",
        link: "https://www.google.com"
      },
      {
        title: 'Project Title',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: "./boat-webp-animated.webp",
        link: "https://www.google.com"
      },
      {
        title: 'Project Title',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: "./boat-webp-animated.webp",
        link: "https://www.google.com"
      }
    ]
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home data={cardsData} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
