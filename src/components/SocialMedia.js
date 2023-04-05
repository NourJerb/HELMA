import './SocialMedia.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const handleButtonClickInstagram = () => {
    window.open('https://www.instagram.com/association.robotique.ensi/', '_blank');
  };
  
  const handleButtonClickFacebook = () => {
      window.open('https://www.facebook.com/association.robotique.ensi', '_blank');
    };
    const handleButtonClickWhatsapp = () => {
        window.open('https://www.facebook.com/association.robotique.ensi', '_blank');
      };

function SocialMedia() {
    return (
        <div className='logos'>
             <div className='logo'>
                {/* <button  className='btns' type='submit'> */}
                    <FontAwesomeIcon icon={faFacebook}  onClick={handleButtonClickFacebook}/>
                {/* </button> */}
            </div>

              <div className='logo'>
              
                <FontAwesomeIcon icon={faInstagram}  onClick={handleButtonClickInstagram}/>
                
                </div>
                

             <div className='logo'>
             
                <FontAwesomeIcon icon={faWhatsapp} onClick={handleButtonClickWhatsapp} />
              
            </div>


        </div>
    )
}
export default SocialMedia;