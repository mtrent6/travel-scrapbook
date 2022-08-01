import Dome from "../images/Pula/dome.jpg"
import Snack from "../images/Pula/snack.jpg"
import walk from "../images/Pula/walk.jpg"

export default function Pula() {
    return (
        <>
            <div style={{ width: "100%", height: 500 }}>
                <img style={{ width: "100%", height: "100%" }} src={Dome} alt="island" />
            </div>
            <div style={{ width: "100%", height: 600 }}>
                <img style={{ width: "100%", height: "100%" }} src={walk} alt="island" />
            </div>
            <div style={{ width: "100%", height: 500 }}>
                <img style={{ width: "100%", height: "100%" }} src={Snack} alt="island" />
            </div>
        </>
    );
}