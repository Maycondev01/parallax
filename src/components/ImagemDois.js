import { Parallax } from 'react-parallax';
import satelite from '../img/satelite.jpg'
import './ImagemEst.css'

const ImagemDois = () => (
    <Parallax className='image' bgImage={satelite} strength={800}>
        <div className='content'>
            <span className='img-text' >Viagem pelo espaço</span>
        </div>
    </Parallax>
);

export default ImagemDois;