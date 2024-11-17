// le carrrer dans le telephone
import iconeCarrer from './asset/iconeTelephone.png'
// icone profil
import profil from './asset/profil.png'
// icone loupe 
import loupe from './asset/Loupe.png'

// image telephone 
import orange from './asset/FilleOrange.jpg'
import rose from './asset/FilleRose.jpg'
import bleu from './asset/FilleBleu.jpg'
import violette from './asset/FilleViolette.jpg'

// icone toolBar 
import maison from './asset/iconeMaison.png'
import barre from './asset/Iconne4barre.png'
import Shop from './asset/iconeShop.png'
import ProfilGris from './asset/iconeProfilGris.png'




// icone apple 
import apple from './asset/apple.png'

// icone google
import GooglePlay from './asset/GooglePlay.png'

// lien css 
import './telecharger.css';


function Telecharger (){
    return(
        // permet de faire la séparation du texte et telephone 
<div className='telechargerSéparation'>

    
   <div className='telechargerText' >
         <p className='vaucherTelecharger'>DOWNLOAD APP & <br/>
           GET THE VAUCHER</p>
         <p className='middleTexte'>Get 30% off for first transaction using <br/>
               rondovision mobile app for now.</p>
    
               <a href="https://www.apple.com/fr/app-store/">
                <button className='buttonTelecharger'><img className='imgTelecharger' src={apple} alt=''/>App Store</button></a>
                <a href="https://play.google.com/store/games?hl=fr">
                <button className='buttonTelecharger'> <img className='imgTelecharger' src={GooglePlay} alt=''/>Google Play</button></a>
       
   </div>   
{/* Askip je fait un mini Tel  */}
    <div className='telephone'>
        {/* Le petit carrer  */}
    <img className='iconneCarrer' src={iconeCarrer} alt=''/>
    {/* icone profil */}
    <img className='iconneProfil' src={profil} alt=''/>
    {/* le titre  */}
    <h1 className='titreTeelephone'> Match your Style</h1>
{/* la div sert a superposer l'icone de la loupe a input  */}
    <div className='superPosition'>
    <img className='loupeInput' src={loupe} alt=''/>
    <input className='inputTelephone' type="text" placeholder="Search"></input>
    </div>
    {/* des button */}
    <div>
        <button className='buttonTrending'>trending Now</button>
        <button className='buttonAllNew'>All</button>
        <button className='buttonAllNew'>New</button>
    </div>

{/* La div permet le placement des image du haut  */}
    <div className='imageDuHaut'>
         <div>
            <img className='imageTelephone' src={orange} alt=''/>
            <p className='descriptionTelephone'>Polkadot red Dress</p>
            <p className='prixTelephone'>res. 1,499.00</p>
        </div>
        <div>
           <img className='imageTelephone' src={rose} alt=''/>
           <p className='descriptionTelephone'>Striped Pink Dress</p>
           <p className='prixTelephone'>res. 1,299.00</p>
        </div>
    </div>

    {/* La div permet le placement des image du bas  */}
    <div className='imageDuBas'>
         <div>
            <img className='imageTelephone' src={bleu} alt=''/>
        </div>
         <div>
        <img className='imageTelephone' src={violette} alt=''/>
        </div>
    </div>

{/* toolbar du telephone  */}
    <div className='toolbarTelephone'>
    <img className='iconeToolbar' src={maison} alt=''/>
    <img className='iconeToolbar' src={barre} alt=''/>
    <img className='iconeToolbar' src={Shop} alt=''/>
    <img className='iconeToolbar' src={ProfilGris} alt=''/>
    </div>


   </div>

  

</div>

    )
}


export default Telecharger