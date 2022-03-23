import { Parallax } from 'react-parallax';
import nasa from '../img/nasa.jpg'
import './ImagemEst.css'

const ImagemUm = () => (
    <Parallax className='image' bgImage={nasa} strength={800}>
        <div className='content'>
            <span className='img-text' >Viagem pelo espaço</span>
        </div>
    </Parallax>
);

export default ImagemUm;