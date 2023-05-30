import './SocialMedia.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const handleButtonClickInstagram = () => {
    window.open('', '_blank');
  };
  
  const handleButtonClickFacebook = () => {
      window.open('https://www.facebook.com/profile.php?id=100063541813622', '_blank');
    };
    const handleButtonClickWhatsapp = () => {
        window.open('https://api.whatsapp.com/send?phone=%2B21622573654&data=AWBNjW3N5y4Sia2k9sItO6nkN8r45mJErBtrWceUBuNZZ4TA_0MDNV-BltEEI78mx6fx_dJgfcel1fZlAEXV6UFw5OZPbri0M9wrTm2Kp2Ws_KEpbYsXg4iqlOiUMdl48HKLZ520OxD8VrP68ihLJuZJCd8ayHwifwWPLJx2I1OMQ_akRUZLa99qjOAvCxxBhqfLdqr_RVCAvggtQNZAKaLgvKKisKMve-EVe4KquWaFfbigOjaLHOgcX9VQJyzRAKD0Jcw6xTXTCX9IfIwPCE_YWMC2ahQozm27sDF4EBnoQl-8E9Y&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR3V5J-0KyUSLfxN6E9dhb1xxZZTlS9cE1n9pTtWvh52aJM_BMBrRPBEih0', '_blank');
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