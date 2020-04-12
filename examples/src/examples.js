import React, { useState } from 'react'
import FlipCard from 'flip-card-react'

const Face = ({flipTo, type, color, onClick}) => {
    return (
        <div className="face" style={{background: color}} onClick={onClick}>
            Click to see the {flipTo} <br/> {type}
        </div>
    )
}

const Examples = (props) => {
    const [horizontalFlipped, flipHorizontal] = useState(false)
    const [verticalFlipped, flipVertical] = useState(false)
    const [slowFlipped, flipSlow] = useState(false)
    const [fastFlipped, flipFast] = useState(false)

    // examples with Function expression
    const horizontalFront = Face({flipTo: "back", type: "(Horizontal)", color: "rgb(150,75,75)", onClick:() => flipHorizontal(x => !x)})
    const horizontalBack = Face({flipTo: "front", type: "(Horizontal)", color: "rgba(150,75,75,0.5)", onClick:() => flipHorizontal(x => !x)})
    const verticalFront = Face({flipTo: "back", type: "(Vertical)", color: "rgb(200,150,0)", onClick:() => flipVertical(x => !x)})
    const verticalBack = Face({flipTo: "front", type: "(Vertical)", color: "rgba(200,150,0,0.5)", onClick:() => flipVertical(x => !x)})

    // examples with ReactNode expression
    const fastFront = <Face flipTo="back" type="(Fast)" color="rgb(75,75,150)" onClick={() => flipFast(x => !x)}/>
    const fastBack = <Face flipTo="front" type="(Fast)" color="rgba(75,75,150,0.5)" onClick={() => flipFast(x => !x)}/>
    const slowFront = <Face flipTo="back" type="(Slow)" color="rgb(75,150,75)" onClick={() => flipSlow(x => !x)}/>
    const slowBack = <Face flipTo="front" type="(Slow)" color="rgba(75,150,75,0.5)" onClick={() => flipSlow(x => !x)}/>

    return (
        <div className="row">
            <div className="column">
                <div className="card">
                    <FlipCard {...props} isFlipped={horizontalFlipped} front={horizontalFront} back={horizontalBack}/>
                </div>
            </div>
            <div className="column">
                <div className="card">
                    <FlipCard {...props} isFlipped={verticalFlipped} front={verticalFront} back={verticalBack} direction="vertical"/>
                </div>
            </div>
            <div className="column">
                <div className="card">
                    <FlipCard {...props} isFlipped={fastFlipped} front={fastFront} back={fastBack} direction="horizontal" speed={0.1}/>
                </div>
            </div>
            <div className="column">
                <div className="card">
                    <FlipCard {...props} isFlipped={slowFlipped} front={slowFront} back={slowBack} direction="horizontal" speed={2}/>
                </div>
            </div>
        </div>
    )
}

export default Examples