import React, { useState } from "react";

function Tile({ hog }) {
    const [showDetails, setShowDetails] = useState(false);
    
    function handleClick() {
        setShowDetails(!showDetails);
    }
    
    return (
        <div className="ui eight wide column">
            <h3>{hog.name}</h3>
            <img src={hog.image} alt={hog.name} style={{maxWidth:550, maxHeight:550}} />
            <button onClick={handleClick}>
                {showDetails ? "Hide Details" : "Show Details"}
            </button>
            {showDetails ? (
                <div>
                    <p>Specialty: {hog.specialty}</p>
                    <p>Greased: {hog.greased ? "Yes" : "No"}</p>
                    <p>Weight: {hog.weight}</p>
                    <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
                </div>
            ) : null}
        </div>
    );
}

export default Tile;