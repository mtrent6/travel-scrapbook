

import CountryTemplate from "../../CountryTemplate"
import croatia from "../../images/backgrounds/croatia.jpeg"

export default function Peru() {
    const data = [
        {
            url: "/peru/lima",
            name: "Lima"
        },
        {
            url: "/peru/cusco",
            name: "Cusco",
        },
        {
            url: "/peru/machupicchu",
            name: "Machu Picchu"
        }
    ]

    return (
        <CountryTemplate data={data} background={croatia} />
    )

}