import { useState } from 'react'
import './App.css'
import Main from './components/main/Main'
import { Bounce, toast, ToastContainer } from 'react-toastify'

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


      <Main />
    </div>
  )
}

export default App
