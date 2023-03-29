// import { AiOutlineSearch } from  'react-icons/ai';
import './Footer.css';
function Footer() {
    return (
        <footer>
            <div class="container">
                <div class="logoSocialMedia">
                    <div class="logo">
                        <img src='logoHelmaCr.png' />
                    </div>
                    <div class="socialMedia">
                        <ul>
                            <li className='item'>Twitter</li>
                            <li className='item'>Instagram</li>
                            <li className='item'>Facebook</li>
                        </ul>

                    </div>
                </div>

                <div class="columns">
                    <div class="column">
                        <h4>MIRAIAH</h4>
                        <ul>
                            <li>Home</li>
                            <li>Boutique</li>
                            <li>Contacts</li>
                        </ul>
                    </div>
                    <div class="column">
                        <h4>POLICY</h4>
                        <ul>
                            <li>Terms of Usage </li>
                            <li>Privacy Policy</li>


                        </ul>
                    </div>
                    <div class="column">
                        <h4>CATEGORIES</h4>
                        <ul>
                            <li>Ring</li>

                        </ul>
                    </div>
                    <div class="column">
                        <h4>SUBSCRIBE</h4>
                        <p>Soyez le premier à recevoir nos nouveautés!</p>
                        
                    </div>
                </div>

            </div>
            <div className='rights'>
                <p >&copy; 2022 Helma.All Rights Reserved.</p>
            </div>
        </footer>

    )
}
export default Footer;