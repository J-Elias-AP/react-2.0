import './styles.css';

 export default function Card(props){

return(
<div className='Card'>
    <strong>{props.name}</strong>
    <small>{props.time}</small>



</div>
)
}

