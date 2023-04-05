// import { AiOutlineSearch } from  'react-icons/ai';

import './Footer.css';
import SocialMedia from './SocialMedia';
import SubscribeButtonsFooter from './SubscribeButtonsFooter.js';
function Footer() {
    return (
        <footer>
            <div class="container">
                <div class="column   column-1 col-md-12 ">
                    <div className="logoScContainer">
                    <div class="logo">
                        <img src='logoHelmaCr.png' />
                    </div>
                    <div class="socialMedia">
                      <SocialMedia></SocialMedia>
                    </div>
                    </div>
                </div>

                
                <div class=" column col column-2">
                        <h4>HELMA</h4>
                         <ul>
                            <li>Home</li>
                            <li>Boutique</li>
                            <li>Contacts</li>
                        </ul>
                </div>
                <div class="column col column-3">
                        <h4>POLICY</h4>
                         <ul>
                            <li>Terms of Usage </li>
                            <li>Privacy Policy</li>


                        </ul> 
                </div>
                <div class="column col column-4">
                        <h4>CATEGORIES</h4>
                         <ul>
                            <li>Ring</li>

                        </ul> 
                </div>
                <div class="column col column-5">
                        <h4>SUBSCRIBE</h4>
                        <ul>
                            <li><p>Be the first to receive our news!</p> </li>
                            <li>
                                 <div className='subscribe-btns'>
                                      <SubscribeButtonsFooter></SubscribeButtonsFooter>
                                 </div>
                            </li>
                           
                        </ul>
                        
                        
                </div>
                   
                
            </div>
       
        
<div className='responsiveLogoContacts'>

<div class="logoSomed">
                    <div class="logo">
                        <img src='logoHelmaCr.png' />
                    </div>
                    <div class="socialMedia">
                      <SocialMedia></SocialMedia>
                    </div>
</div>
<div className='contacts'>
    <p className='textC'>CONTACT US</p>
    <p>+216 99 999 999</p>
    <p>helmazomara@gmail.com</p>
</div>
</div>

            
    
            <div className='rights'>
                <p>&copy; 2022 Helma.All Rights Reserved.</p>
            </div>
        </footer>

    )
}
export default Footer;