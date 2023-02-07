import Dome from "../images/Pula/dome.jpg"
import Snack from "../images/Pula/snack.jpg"
import walk from "../images/Pula/walk.jpg"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Pula() {
    return (
        <>
            <p style={{textAlign: 'center', fontFamily: 'optima', fontSize: 20, fontWeight: 550}}>Pula</p>
            <div style={{ width: "100%", height: 500 }}>
                <LazyLoadImage delayTime={300} alt="island" effect="blur" height={500} width={"100%"} src={Dome} />
            </div>
            <div style={{ width: "100%", height: 600 }}>
                <LazyLoadImage delayTime={300} alt="island" effect="blur" height={600} width={"100%"} src={walk} />
            </div>
            <div style={{ width: "100%", height: 500 }}>
                <LazyLoadImage delayTime={300} alt="island" effect="blur" height={500} width={"100%"} src={Snack} />
            </div>
        </>
    );
}