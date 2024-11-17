

import './community.css';

function Community (){
    return(
        <div className='joinComunity'>
<div className='textCommunity'>
     <p className='premierTexte'>join shopping community to <br/>
            get monthly promo</p>

     <p className='deuxiemeTexte'>type your email down below and be young wild generation</p>
</div>
<div>
     <input className='inputComunity' type="text" placeholder="add your email here"></input>

     <button className='buttonSend'>SEND</button>
</div>


   </div>
    )
}

export default Community;