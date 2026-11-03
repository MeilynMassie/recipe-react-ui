import RecipeForm from '../components/RecipeForm'

function HomePage() {
    // TODO: Change to be dynamic with login
    const chef = 'Dope'
    return (
      <main>
          <h1>Welcome to Salty Chef's Kitchen!</h1>
          <h3>It is nice to meet you Chef {chef}!</h3>
          < RecipeForm/>    
      </main>
    )
}

export default HomePage
