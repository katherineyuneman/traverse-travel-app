import logo from './logo.svg';
import {Styled, NavBarStyle} from './styles/styleIndex.js';
import Navbar from './Navbar.js'
import {Route, Routes, useNavigate} from "react-router-dom"
import ItineraryContainer from './containers/ItineraryContainer.js'


function App() {
  const navigate = useNavigate()

  return (
    <>
    <Navbar />
    <Routes>
          <Route path="/itinerary" element={<ItineraryContainer />} />
          {/* <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home handleFoodSubmit={handleFoodSubmit}/>} />
          <Route path="/foods" element={<FoodContainer homeSearchedFoods={homeSearchedFoods}/>} />
          <Route path="foods/:id" element={<FoodDetail />} />
          <Route path="foods/:id/recipes" element={<FoodRecipes />} />
          <Route path="/recipes" element={<RecipeContainer />} />
          <Route path="/recipes/new" element={<RecipeForm />} />
          <Route path="/recipes/edit/:id" element={<RecipeEditForm />} />
          <Route path="/recipes/:id" element={<Recipe />} /> */}
          </Routes>
    {/* <Styled>

      <form>
        <input type="text" placeholder="Full name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button>Sign In</button>
      </form>
    </Styled> */}
    </>
  );
}

export default App;
