import { useState, useEffect } from "react";

const state = function () {
    const [cpt, setcpt] = useState(0);
    useEffect(() => {
        document.title = `${cpt} click${cpt > 1 ? 's' : ''}`
    })
    return (
        <div>
            <button onClick={() => setcpt(cpt + 1)}> + </button>
            <button onClick={() => setcpt(cpt - 1)}> - </button>
            test {cpt}
        </div>
    )
}
export default state;