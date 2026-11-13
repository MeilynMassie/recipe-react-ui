import { Routes, Route } from 'react-router'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import NotFoundPage from '../pages/NotFoundPage'
import ViewRecipesPage from '../pages/ViewRecipesPage'
import AddRecipePage from '../pages/AddRecipePage'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/recipes" element={<ViewRecipesPage />} />
       <Route path="/recipes/new" element={<AddRecipePage />} />
      <Route path="/notfound" element={<NotFoundPage />} />
    </Routes>
  )
}

export default AppRouter