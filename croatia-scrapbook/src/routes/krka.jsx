import Split from "../images/Krka/split.jpg"
import Falls from "../images/Krka/falls.jpg"
import Water from "../images/Krka/water.jpg"

export default function Krka() {
    return (
        <>
            <div style={{ width: "100%", height: 500 }}>
                <img style={{ width: "100%", height: "100%" }} src={Split} alt="island" />
            </div>
            <div style={{ width: "100%", height: 500 }}>
                <img style={{ width: "100%", height: "100%" }} src={Falls} alt="island" />
            </div>
            <div style={{ width: "100%", height: 500 }}>
                <img style={{ width: "100%", height: "100%" }} src={Water} alt="island" />
            </div>
        </>
    );
}