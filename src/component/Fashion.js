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
      {/* les lien sont a atribué en fonction de si on reussi a faire les page ou non  */}
      <a href="#">
          <ol>Catalogue</ol></a>
          <a href="#">
          <ol>Fashion</ol> </a> 
          <a href="#">
          <ol>Favourite</ol></a>
          <a href="#">
          <ol>LifeStyle</ol></a>
          {/* A la base c'etait un ol Mais je voyais plus sa comme un button du coup je l'ai mis en button  */}
          <a href="#">
          <button className="signUp">Sign-Up</button></a>
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
       <a href="https://www2.hm.com/fr_fr/index.html">
          <img className='marque' src={HM} alt=''/></a>
          <a href="https://obeyclothing.eu/">
          <img className='marque' src={Obey} alt=''/></a>
          <a href="https://www.shopify.com/fr/essai-gratuit?term=shopify&adid=589001292160&campaignid=15439903106&branded_enterprise=1&BOID=brand&utm_medium=cpc&utm_source=google&gad_source=1&gclid=Cj0KCQiA_9u5BhCUARIsABbMSPthjsQJ6Zq0rQXGoeiTJ0mrryIXJA-pY4lVVXJM_R_u0pbHWR4x3pMaAmtaEALw_wcB&cmadid=516586848;cmadvertiserid=10730501;cmcampaignid=26990768;cmplacementid=324286430;cmcreativeid=163722649;cmsiteid=5500011">
          <img className='marque' src={Shopify} alt=''/></a>
          <a href="https://www.lacoste.com/fr/homme.html?wiz_content=649543756281&gad_source=1&gclid=Cj0KCQiA_9u5BhCUARIsABbMSPtkA_S9uJN64a1b2SNH-vyA6VxMuZlUsPZ4ZIuGE8DUWkCI_GPMsFEaAqLWEALw_wcB&wiz_source=google&wiz_campaign=55114290&wiz_term=lacoste&wiz_medium=cpc">
          <img className='marque' src={lacoste} alt=''/></a>
          <a href="https://www.levi.com/BE/fr_BE/?camp=PaidSearch_DR_AO_LV_BP_B_BE_ROAS_GLE_fr_Brand-Pure-Core&gad_source=1&gclid=Cj0KCQiA_9u5BhCUARIsABbMSPtveKPducCZphtTQd_Q6pEz1-PvkaFoSRnBhA3nntBkHyDEj86zVUAaArH6EALw_wcB&gclsrc=aw.ds">
          <img className='marque' src={Levis} alt=''/></a>
          <a href="https://www.amazon.fr/?&tag=hydraamazon05-21&ref=pd_sl_e0e6pyak8_e&adgrpid=154637622682&hvpone=&hvptwo=&hvadid=683560492208&hvpos=&hvnetw=g&hvrand=11903061701033311757&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9055729&hvtargid=kwd-29089120&hydadcr=&gad_source=1">
          <img className='marque' src={Amazone} alt=''/></a>
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
