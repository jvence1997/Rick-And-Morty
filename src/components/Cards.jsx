import Card from './Card';


const Cards = ({ characters }) => {

   return <div>{
      characters.map((char) => {
         return (<Card
            key={char.id}
            image={char.image}
            name={char.name}
            status={char.status}
            species={char.species}
            gender={char.gender}
            origin={char.origin.name}
            onClose={() => window.alert('Emulamos que se cierra la card')}


         />)
      })
   }
   </div>;
}
export default Cards;