// Les deux image de droite 
import imageYoung from './asset/imageYoung.png'
import flecheYoung from './asset/fleche.png'

// les deux image de gauche 
import imageYoung2 from './asset/ImageYoung2.png'
import flecheYoung2 from './asset/fleche.png'

// import du css 
import './young.css';


function Young (){
return(
    // div qui gere tout Young
<div className='bodyYoung'>
    {/* le titre de young  */}
    <h1 className='titreYoung'>Young's favorite</h1>
    {/* la div qui gere l'encadrement  */}
 <div className='encadrementYoung'>
    {/* la div qui gere l'image et le text  de droite  */}
    <div className='youngDroite'>
        {/* image de droite  */}
        <img className='imageYoung' src={imageYoung} alt=''/>
        {/* texte en dessous de l'image  */}
        <p className='textDessousImageYoung'>Trending on instagram</p>
        <p className='textAdessusFleche'>Explore Now!</p>
        {/* fleche endessous du text  */}
        <img className='flecheYoung' src={flecheYoung} alt=''/>
    </div>
    {/* div qui gere l'image et le text de gauche  */}
    <div className='youngGauche'>
{/* image de gauche  */}
        <img className='imageYoung' src={imageYoung2} alt=''/>
        {/* text endessous de l'image  */}
        <p className='textDessousImageYoung'>all under $800</p>
        <p className='textAdessusFleche'>Explore Now!</p>
        {/* fleche endessous du text */}
        <img className='flecheYoung' src={flecheYoung2} alt=''/>

    </div>
 </div>
</div>
)
}


export default Young;