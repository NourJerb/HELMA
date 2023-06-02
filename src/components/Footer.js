// import { AiOutlineSearch } from  'react-icons/ai';

import styles from './Footer.module.css';
import SocialMedia from './SocialMedia';
import SubscribeButtonsFooter from './SubscribeButtonsFooter.js';
import logoHelmaCreations from './../assets/logoHelmaCreations.png' 
function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="column   column-1 col-md-12 ">
                    <div className="logoScContainer">
                       <div class="logo">
                           <img  className='imgLogo' src={logoHelmaCreations} />
                       </div>
                       <div className="socialMedia">
                         <SocialMedia></SocialMedia>
                       </div>
                    </div>
                </div>

                
                <div className=" column col column-2">
                        <h4 className='titleColumn'>HELMA</h4>
                         <ul >
                            <li>Home</li>
                            <li>Boutique</li>
                            <li>Contacts</li>
                        </ul>
                </div>
                <div className="column col column-3">
                        <h4 className='titleColumn'>POLICY</h4>
                         <ul>
                            <li>Terms of Usage </li>
                            <li>Privacy Policy</li>


                        </ul> 
                </div>
                <div className="column col column-4">
                        <h4 className='titleColumn'>CATEGORIES</h4>
                         <ul>
                            <li>Ring</li>

                        </ul> 
                </div>
                <div className="column col column-5">
                        <h4 className='titleColumn'>SUBSCRIBE</h4>
                        <ul>
                            <li className='beTheFirst'>Be the first to receive our news! </li>
                            <div className='respElemList'>
                            <div className='responsiveElementdivst'>Be the first</div>
                            <div className='responsiveElementList'>to receive</div>
                            <div className='responsiveElementList last'>our news !</div>
                            </div>
                        </ul>
                        
                        <div className='subscribe-btns'>
                            <SubscribeButtonsFooter></SubscribeButtonsFooter>
                        </div> 
                            
                        
                        
                </div>
                   
                
            </div>
       
        
<div className='responsiveLogoContacts'>

<div className="logoSomed">
                    <div class="logo">
                        <img src={logoHelmaCreations} />
                    </div>
                    <div class="socialMedia">
                      <SocialMedia></SocialMedia>
                    </div>
</div>
<div className='contacts'>
    <p className='textC textC1'>CONTACT US</p>
    <p className='textC textC2'>+216 25 662 889</p>
    <p className='textC textC3'>helmacreations@gmail.com</p>
</div>
</div>

            
    
            <div className='rights'>
                <p>&copy;{new Date().getFullYear()} Helma. All Rights Reserved.</p>
            </div>
        </footer>

    )
}
export default Footer;