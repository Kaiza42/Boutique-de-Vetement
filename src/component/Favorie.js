// import de l'image 
import FavoriteImage from './asset/FavoriteImage.png'
// import du css 
import './favorite.css';


function Favorite(){
return (
    // la div gere tout le block favorie mais aussi le placement 
    <div className='encadrementFavorie'>

        {/* cette div gere uniquement l'image  */}
      <div>  
        {/* l'image de favorite  */}
        <img className='imgfavorite' src={FavoriteImage} alt=''/>
     </div>

{/* cette div gere tout les block de texte de droite  */}
 <div className='partieDroiteFavorie'>  
    {/* la balise ul contient payday,Sale now  */}
<ul className='listAcheterNow'>
    <ol className='payDayList'>PAYDAY</ol>
    <ol> Sale Now</ol>
</ul>
{/* et sa c'est le block de text  */}
<p className='textMillieuFavorie'>Spend minimal $100 get 30% off <br/>
voucher code for your next purchase</p>
<p className='datePromoFavorie'>1 june - 10 june 1994</p>
<p className='conditionFavorie'>*Terms & conditions apply</p>

{/* boutton sale now  */}
<button className='shopNowFavorie'>Shop Now</button>
</div>
    </div>
)
}

export default Favorite