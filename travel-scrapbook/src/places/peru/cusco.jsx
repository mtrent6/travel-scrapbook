import PlaceTemplate from "../../PlaceTemplate"

export default function Cusco() {
    return (
        // this is so scuffed but works for now
        // doesn't work because when passing string as a prop it becomes variable and react gets upset
        <PlaceTemplate name={"Cusco"} imagePlace={require.context("../../images/peru/Cusco_and_Sacred_Valley", false, /\.(png|jpe?g|svg|JPE?G|HEIC)$/)}/>
    )
}