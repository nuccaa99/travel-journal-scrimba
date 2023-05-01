import React from "react";
import "./styles.css";
import data from "./data";
import Place from "./Place.js";
import earth from "./earth.png";


export default function App() {


    return (
        <div>
            <header>
                <img src={earth} alt="earth-icn" />
                <p>my travel journal</p>
            </header>
            <main>
                {data.map(item => {
                    return (
                        <Place info={item} key={item.id}/>
                    )
                })}
            </main>
        </div>

    )

}

