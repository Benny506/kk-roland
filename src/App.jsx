import { useState } from 'react'
import './App.css'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import { HashRouter } from 'react-router-dom'
import AppRouter from './components/appRouter/AppRouter'

function App() {

  return (
    <div>
      <ToastContainer 
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}      
      />


      <HashRouter>
        <AppRouter />
      </HashRouter>
    </div>
  )
}

export default App
