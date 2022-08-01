import DubrovnikIsland from "../images/Dubrovnik/DubrovnikIsland.jpg"
import Roof from "../images/Dubrovnik/roof.jpeg"
import Rocks from "../images/Dubrovnik/rocks.jpeg"

export default function Dubrovnik() {
    return (
        <>
            <div style={{ width: "100%", height: 300 }}>
                <img style={{ width: "100%", height: "100%" }} src={DubrovnikIsland} alt="island" />
            </div>
            <div style={{ width: "100%", height: 300 }}>
                <img style={{ width: "100%", height: "100%" }} src={Roof} alt="island" />
            </div>
            <div style={{ width: "100%", height: 500 }}>
                <img style={{ width: "100%", height: "100%" }} src={Rocks} alt="island" />
            </div>


        </>
    );
}