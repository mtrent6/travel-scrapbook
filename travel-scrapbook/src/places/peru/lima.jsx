import PlaceTemplate from "../../PlaceTemplate"


export default function Lima() {
    return (
        // this is so scuffed but works for now
        // doesn't work because when passing string as a prop it becomes variable and react gets upset
        <PlaceTemplate country={"peru"} name={"Lima"} imagePlace={require.context("../../images/peru/Lima", false, /\.(png|jpe?g|svg|JPE?G|HEIC)$/)}/>
    )
}