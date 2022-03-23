import { Parallax } from 'react-parallax';
import lua from '../img/lua.jpg'
import './ImagemEst.css'

const ImagemTres = () => (
    <Parallax className='image' bgImage={lua} strength={800}>
        <div className='content'>
            <span className='img-text' >Viagem pelo espaço</span>
        </div>
    </Parallax>
);

export default ImagemTres;