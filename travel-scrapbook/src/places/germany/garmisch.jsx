
import 'react-lazy-load-image-component/src/effects/blur.css';
import PlaceTemplate from "../../PlaceTemplate";


export default function Garmisch() {
    return (
        // this is so scuffed but works for now
        // doesn't work because when passing string as a prop it becomes variable and react gets upset
        <PlaceTemplate name={"Garmisch"} imagePlace={require.context("../../images/germany/garmisch", false, /\.(png|jpe?g|svg|JPE?G|HEIC)$/)}/>
    )
}
