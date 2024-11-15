// Le css 
import './fashion.css';


// Le petit icone a coter de "Fashion"
import iconeACoterDeTitre from './asset/Vector.png'
// image de femme a l'envers a coter de "l'et's explore new clothes"
import img2 from './asset/femmeFashion.png'


// image des logo de marque
import HM from './asset/H&M.png'
import Obey from './asset/Obey.png'
import Shopify from './asset/Shopify.png'
import lacoste from './asset/lacoste.png'
import Levis from './asset/Levis.png'
import Amazone from './asset/Amazone.png'

// Image des new arrivals
import PhotoGris from './asset/PhotoGris.png'
import photoViolette from './asset/photoViolette.png'
import PhotoBleu from './asset/PhotoBleu.png'


// la function qui permetra d'etre réutiliser pour une autre page 
function FashionVictim(){
    return(
      // pourquoi la div car Fallais que je délimiter le périmettre du contenue je l'utilise un pue comme un "body"
        <div className='Fashion'>
{/* Pourquoi un header la ? car j'en avais besoin pour le titre et faire comprendre que c'est le haut de la page  */}
    <header className ="tete">
        
         <ul className ="listeTete">
          {/* Mettre une img et un h1 dans une UL sa me derange un peu en sois mais sa me facilite le placement  */}
        <img className='imageDeMort' src={iconeACoterDeTitre} alt=''/>
        <h1 className="titreFashion"> fashion</h1>
       
      {/* Sa c'est a liste du haut de la page  */}
      <a href="">
          <ol>Catalogue</ol></a>
          <ol>Fashion</ol>  
          <ol>Favourite</ol>
          <ol>LifeStyle</ol>
          {/* A la base c'etait un ol Mais je voyais plus sa comme un button du coup je l'ai mis en button  */}
          <button className="signUp">Sign-Up</button>
       </ul>
</header>

<div className='corpsFashion'>
{/* L'image de la femme fashion a l'envers Pourquoi a l'envers sa m'amuser..  */}
        <img className='imgFashion' src={img2} alt=''/>
{/* la list était pas réelement nécéssaire je pense mais c'etait plus simple ainsi */}
        <ul className='listUnique'>
          <ol className='colorLet'>Let's</ol>
          <ol>Explore</ol>  
          <ol className='colorUnique'>Unique</ol>
          <ol>Clothes.</ol>
        </ul>
        {/* la balise P aurais pu etre dans "ul" mais je souhaite le diférencier des autre  */}
        <p className='innovationFashion'>Live for influential and innovative fashion!</p>

        <button className='shopNow'>SHOP NOW</button>

</div>
{/* Les image de marque, la div permet la couleur et lalignement */}
       <div className='listMarque'>
          <img className='marque' src={HM} alt=''/>
          <img className='marque' src={Obey} alt=''/>
          <img className='marque' src={Shopify} alt=''/>
          <img className='marque' src={lacoste} alt=''/>
          <img className='marque' src={Levis} alt=''/>
          <img className='marque' src={Amazone} alt=''/>
       </div>

{/* La partie basse de la "page" */}
<p className='titreNewArrivals'> New arrivals</p>

{/* div pour placement des image  */}
<div>
  {/* Les image pour les "New Arrivals" */}
<img className='imgNewArrivals' src={PhotoGris} alt=''/>
<img className='imgNewArrivals' src={photoViolette} alt=''/>
<img className='imgNewArrivals' src={PhotoBleu} alt=''/>
</div>


</div>
    )

}

export default FashionVictim;
