import './styles.css';
import react, {useState, useEffect} from 'react';
import  Card  from '../../components/Card';

 export default function Home() {
 const [cardName, setCardName] = useState();
 const [cardPerson, setCardPerson] = useState([]);
 const [user, setUser] = useState({ name:'', avatar:''});

 function handleAddName (){
   const newPerson = {
name: cardName, 
time: new Date().toLocaleTimeString("pt-br", {
hour: '2-digit',
minute: '2-digit',
second: '2-digit',

})
   };
   setCardPerson(prevState => [...prevState, newPerson]);
 }

useEffect(() => {
  fetch('https://api.github.com/users/JECATATUBOLA')
  .then(response => response.json())
  .then(data => {
    setUser({
      name:data.name,
      avatar:data.avatar_url,
    })
  });
},[] );

  return (
<div className='container' >
<h1>Lista de nomes</h1>
<header>
 
    <h1>Seu nome: {cardName} </h1>
    
    <div>
<strong>{user.name}</strong>
<img src={user.avatar} alt='Foto de perfil' ></img>

    </div>

</header>

   

    <input
    type="text" 
    placeholder="Digite seu nome..." 
    onChange={e => setCardName(e.target.value)}/>

    <button
     type="button" onClick ={handleAddName}>
       Adicionar

     </button>
{
  cardPerson.map(person =>
     <Card 
     key={person.time}
     name={person.name} 
     time={person.time}
      />)
   
   }


</div>
  )
}


