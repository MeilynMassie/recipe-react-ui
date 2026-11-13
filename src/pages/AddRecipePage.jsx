import { useState } from 'react';
import RecipeForm from '../components/forms/RecipeForm';


function AddRecipePage() {
    const [pageMode, setPageMode] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    return (
      <main>
        <div>
          <h1>Add a new recipe to your kitchen?</h1>

          {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}
          
          {pageMode === '' && (
            <section className="auth-card auth-choice">
              <div className="auth-actions">
                <button className="btn btn-outline-primary" onClick={() => {
                  setPageMode('url');
                  setErrorMessage('');
                }}>
                  URL
                </button>
                <button className="btn btn-outline-primary" onClick={() => {
                  setPageMode('image');
                  setErrorMessage('');
                }}>
                  Image
                </button>
                <button className="btn btn-outline-primary" onClick={() => {
                  setPageMode('create-your-own');
                  setErrorMessage('');
                }}>
                  Create Your Own
                </button>
              </div>
            </section>
          )}

          {pageMode === 'url' && (
            <section className="auth-card auth-choice">
              <div className="auth-actions">
                <h3>Insert link...</h3>
                <p>API CALL</p>
              </div>
            </section>
          )}

          {pageMode === 'image' && (
            <section className="auth-card auth-choice">
              <div className="auth-actions">
                <h3>Upload an Image...</h3>
                <p>API CALL</p>
              </div>
            </section>
          )}

          {pageMode === 'create-your-own' && (
            <section className="auth-card auth-choice">
              <div className="auth-actions">
                < RecipeForm />
              </div>
            </section>
          )}
        </div>
      </main>
    )
}

export default AddRecipePage
