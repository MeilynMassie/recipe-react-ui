import { BrowserRouter } from 'react-router'
import Navbar from './components/common/Navbar'
import AppRouter from './routes/AppRouter'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App