

import './App.css';
import { Link } from "react-router-dom";

export default function CountryTemplate(props) {

    const { data, background } = props


    return (
        <div className='App'>
            <a href="/" style={{position: 'absolute', top: 10, left: 10, borderRadius: "10px"}}>&#8249;</a>

            {data.map(d => {
                return <>
                    <div className='link-div'>
                        <Link to={d.url}>{d.name}</Link>
                    </div>
                </>
            })}
        </div>
    )

}