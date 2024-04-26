import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/navbar/Navbar"
import { Home } from "./components/home/Home"
import { Contact } from "./components/contact/Contact"
import { useFetchCSVData } from './components/fetch_csv_data/useFetchCSVData'
import { CardProps } from './components/project_card/Card'

function App() {
  const { data, loading, error } = useFetchCSVData<CardProps>("github_portfolio.csv");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(data)
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
