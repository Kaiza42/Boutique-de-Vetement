// import du css 
import './footer.css';

// import de logo
import facebook from './asset/facebook.png'
import twitter from './asset/twitter.png'
import linkedin from './asset/linkedin.png'
import instagram from './asset/instagram.png'



function Footer (){
    return(
        // debut footer 
<div className='footer'>
<div>
    {/* titre  */}
    <div className='colonneGauche'>

    <h1 className='titreFooter'>Fashion</h1>
    <p className='texteSousTitre'>Complete your style with awesom <br/>
    clothes from us.</p>
   
   
    {/* les button avec les logo  */}

    <button className='buttonFooter'>
    <img className='logoFooter' src={facebook} alt=''/>
    </button>

    <button className='buttonFooter'>
    <img className='logoFooter' src={instagram} alt=''/>
    </button>

    <button className='buttonFooter'>
    <img className='logoFooter' src={twitter} alt=''/>
    </button>

    <button className='buttonFooter'>
    <img className='logoFooter' src={linkedin} alt=''/>
    </button>
    
    </div>
</div>
{/* les contact de l'entreprise  */}
<div className='contactFooter'>
    <ul className='sizeOl'>
        <ol>Compagny</ol>
        <ol>About</ol>
        <ol>Contact us</ol>
        <ol>Support</ol>
        <ol>careers</ol>
    </ul>
</div>
{/* Question de l'entreprise  */}
<div className='faqFooter'>
    <ul className='sizeOl'>
        <ol>Quick link</ol>
        <ol>Share Location</ol>
        <ol>Orders Tracking</ol>
        <ol>Size Guide</ol>
        <ol>FAQs</ol>
    </ul>
</div>
{/* la lois de l'entreprise  */}
<div className='regleFooter'>
    <ul className='sizeOl'>
        <ol>Legal</ol>
        <ol>Therms & conditions</ol>
        <ol>Privacy Policy</ol>
    </ul>
</div>



</div>
    )
}


export default Footer;