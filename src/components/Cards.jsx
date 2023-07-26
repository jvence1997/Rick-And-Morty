import Card from './Card';


const Cards = ({ characters, onClose }) => {

   return <div>{
      characters.map((char) => {
         return (<Card
            id={char.id}
            key={char.id}
            image={char.image}
            name={char.name}
            status={char.status}
            species={char.species}
            gender={char.gender}
            origin={char.origin.name}
            onClose={onClose}


         />)
      })
   }
   </div>;
}
export default Cards;