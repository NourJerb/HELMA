import './Swiper.css';
import ImageSlider2 from './ImageSlider2';
import { SliderData } from './SliderData';

function Swiper() {
  return <ImageSlider2 slides={SliderData} />;
}

export default Swiper;