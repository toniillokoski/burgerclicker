import React, {useState} from 'react';
import burger from './images/burger.png';

function Burger(props) {
const [pressed, setPressed] = useState(false);
const classValue = pressed ? "burger__img : burger__img--pressed" : "burger__img";
return (
<div className="burger">
<img
src={burger} 
alt="" 
className={classValue} 
onClick={props.onClick}
onPointerDown={() => setPressed(true)}
onPointerUp={() => setPressed(false)}
/>
</div>
);
}

export default Burger;