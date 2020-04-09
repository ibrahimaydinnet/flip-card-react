# flip-card-react
A react component to card flip

## Install

```bash
npm install flip-card-react
```

## Example

```js
import React, { useState } from 'react';
import FlipCard from 'flip-card-react';

const cardStyle = {
    padding: 25,
    border: "solid 1px",
    borderRadius: 5,
    color: "#fff",
    width: 150
};

const App = () => {
    const [isFlipped, setFlipped] = useState(false);

    const front = (
        <div onClick={() => setFlipped(x => !x)} style={{ ...cardStyle, background: "#999" }}>
            Click to see the back
        </div>
    );

    const back = (
        <div onClick={() => setFlipped(x => !x)} style={{ ...cardStyle, background: "#444" }}>
            Click to see the front
        </div>
    );

    return (
        <div style={{padding: 5, border: "solid", position: "absolute"}}>
            <FlipCard isFlipped={isFlipped} front={front} back={back}/>
        </div>
    );
}

export default App;
```

## Properties

| Props | Type | Description | Default |
| ----- | ---- | ----------- | ------- |
| front | ReactNode | Front face of the card | required |
| back | ReactNode | Back face of the card | required |
| isFlipped | bool | false: show the front of the card, true: show the back of the card | false |
| speed | number | The speed of the flip animation, the higher the slower | 0.6 |
| direction | string | Direction of the flip animation ('horizontal' or 'vertical' ) | horizontal |
| onFlip | function | Function to be triggered when the card flips | undefined |

## License

[MIT](https://choosealicense.com/licenses/mit/)