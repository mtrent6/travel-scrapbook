

import CountryTemplate from "../../CountryTemplate"
import croatia from "../../images/backgrounds/croatia.jpeg"

export default function Germany() {
    const data = [
        {
            url: "/germany/wiesbaden",
            name: "Wiesbaden"
        },
        {
            url: "/germany/garmisch",
            name: "Garmisch",
        },
        {
            url: "/germany/munich",
            name: "Munich"
        }
    ]

    return (
        <CountryTemplate data={data} background={croatia} />
    )

}