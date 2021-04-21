import filter from '../img/filter2.png'

const Botton = ({type, text, handlerEvent}) => {
  return ( 
    <button onClick={handlerEvent} className={`btn ${type}`}>
      {text}
      {type === 'filter' &&
        <img src={filter} width='20' alt="filter" />
      }
    </button>
   );
}
 
export default Botton;