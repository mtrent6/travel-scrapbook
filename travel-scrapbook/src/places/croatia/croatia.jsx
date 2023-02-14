

import CountryTemplate from "../../CountryTemplate"
import croatia from "../../images/backgrounds/croatia.jpeg"

export default function Croatia() {
    const data = [
        {
            url: "/croatia/dubrovnik",
            name: "Dubrovnik"
        },
        {
            url: "/croatia/krka",
            name: "Krka",
        },
        {
            url: "/croatia/pula",
            name: "Pula"
        }
    ]

    return (
        <CountryTemplate data={data} background={croatia} />
    )

}