import DubrovnikIsland from "../images/Dubrovnik/DubrovnikIsland.jpg"
export default function Dubrovnik() {
    return (
        <>
            <h2>Dubrovnik</h2>
            <div style={{ width: "100%", height: 300 }}>
                <img style={{ width: "100%", height: "100%" }} src={DubrovnikIsland} alt="island" />
            </div>

        </>
    );
}