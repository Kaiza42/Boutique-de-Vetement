import './fashion.css';
import img1 from './asset/Vector.png'


function FashionVictim(){
    return(
        <div className='Fashion'>

    <header className ="tete">
        
         <ul className ="listeTete">
        <img className='imageDeMort' src={img1} alt=''/>
        <h1 className="titreFashion"> fashion</h1>
       
      
          <ol>Catalogue</ol>
          <ol>Fashion</ol>  
          <ol>Favourite</ol>
          <ol>LifeStyle</ol>
          <button className="signUp">Sign-Up</button>
       </ul>
</header>
<div className='corpsFashion'>
        <ul className='listUnique'>
          <ol className='colorLet'>Let's</ol>
          <ol>Explore</ol>  
          <ol className='colorUnique'>Unique</ol>
          <ol>Clothes.</ol>
        </ul>
        <p>Live for influential and innovative fashion!</p>
        <button className='shopNow'>SHOP NOW</button>
</div>

</div>
    )

}

export default FashionVictim;
