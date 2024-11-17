
// L'import de fashion victim 
import FashionVictim  from './component/Fashion';
// l'import de favorie
import Favorite  from './component/Favorie';
// l'import de Young
import Young from './component/Young';

import Telecharger from './component/Telecharger';
// Le css de app

import './App.css';




function App() {
  return (
   <div className='main'>
   
  <FashionVictim />
  <Favorite />
  <Young />
  <Telecharger />

  </div>
 

  
  )
}

export default App;
