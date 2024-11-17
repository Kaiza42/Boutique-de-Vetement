
// L'import de fashion victim 
import FashionVictim  from './component/Fashion';
// l'import de favorie
import Favorite  from './component/Favorie';
// l'import de Young
import Young from './component/Young';

import Footer from './component/Footer';

// import de Telecharger 
import Telecharger from './component/Telecharger';

// import de community 
import Community from './component/Community';

// Le css de app
import './App.css';




function App() {
  return (
   <div className='main'>
   
  <FashionVictim />
  <Favorite />
  <Young />
  <Telecharger />
  <Community />
  <Footer />


  </div>
 

  
  )
}

export default App;
