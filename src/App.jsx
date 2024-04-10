import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/e-commerce/Header'
import Home from './components/e-commerce/Home'
import ViewCart from './components/e-commerce/ViewCart'
import { useState } from 'react'
import { DataProvider } from './components/e-commerce/context'
//import WeatherApp from './components/weather-app/WeatherApp'
// import GetAdvice from './components/get-advice/GetAdvice'
//import QrCode from './components/qr-code-generator/QrCode'
//import Calendar from './components/calendar/Calendar'
// import Quiz from './components/quiz/Quiz'
// import UserCard from './assets/UserCard/UserCard'

function App() {
 

  return (
    <>
      {/* <UserCard/> */}
      {/* <QrCode/> */}
      {/* <GetAdvice/> */}
      {/* <WeatherApp/> */}
      {/* <Calendar/> */}
      {/* <Quiz/> */}
      <DataProvider>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/viewcart" element={<ViewCart/>}></Route>
        </Routes>
      </BrowserRouter>
      </DataProvider>
    </>
  )
}

export default App
