import { BrowserRouter } from 'react-router'
import Navbar from './components/Navbar'
import AppRouter from './routes/AppRouter'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  )
}

export default App