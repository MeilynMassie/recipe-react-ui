import RecipeForm from '../components/forms/RecipeForm'
import { useAuth } from '../context/AuthContext'
import { capitalizeWords } from '../services/Helpers'



function HomePage() {
    const { chef } = useAuth()
    return (
      <main>
          <h1>Welcome to Salty Chef's Kitchen!</h1>
          <h3>It is nice to meet you Chef {capitalizeWords(chef?.username)}!</h3>
          < RecipeForm />    
      </main>
    )
}

export default HomePage
