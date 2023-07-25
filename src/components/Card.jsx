

const Card = ({ id, name, status, species, gender, origin, image, onClose }) => {
   return (
      <div>
         <img src={image} alt='' />
         <h2>name:{name}</h2>
         <h2>status:{status}</h2>
         <h2>species:{species}</h2>
         <h2>gender:{gender}</h2>
         <h2>origin:{origin}</h2>
         <button onClick={onClose}>close</button>

      </div>
   );
}

export default Card;