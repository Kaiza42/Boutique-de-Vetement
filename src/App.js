
// L'import de fashion victim 
import FashionVictim  from './component/Fashion';
// l'import de favorie
import Favorite  from './component/Favorie';
// l'import de footer
import Young from './component/Young';
// Le css de app
import './App.css';




function App() {
  return (
   <div className='main'>
   
  <FashionVictim />
  <Favorite />
  <Young />
  </div>
 

  
  )
}

export default App;
