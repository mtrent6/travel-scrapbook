
import 'react-lazy-load-image-component/src/effects/blur.css';
import PlaceTemplate from "../../PlaceTemplate";


export default function Munich() {
    return (
        // this is so scuffed but works for now
        // doesn't work because when passing string as a prop it becomes variable and react gets upset
        <PlaceTemplate name={"Munich"} imagePlace={require.context("../../images/germany/munich", false, /\.(png|jpe?g|svg|JPE?G|HEIC)$/)}/>
    )
}
