"use client"

import { useEffect, useState } from "react";


const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log ("la page à charger")
    }, [])

    useEffect(() => {
        console.log ("le count à changer")
    }, [count])

    return (
        <div>
            <p>
                Nombre d'articles : {count}
            </p>
            <button onClick={() => {setCount(count +1)}}>Ajouter</button>
            <button onClick={() => {setCount(count -1)}}>Retirer</button>
        </div>
    );
};

export default Counter;