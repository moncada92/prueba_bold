import Button from './Button';

const ListBtn = ({setFecha, fecha}) => {

  const handlerChangeFecha = (e) => {
    const selectFecha = fecha.map(el => {

      if (el.value && e.target.textContent === el.name ){
        return el
      }
      if (el.value !== true){
        if (e.target.textContent === el.name){
          el.value = true
        }
      } else {
        el.value = false
      }

      return el
    })

    setFecha(selectFecha)
  }

  return ( 
    <div className="list-btn">
      {
        fecha.map((el, idx) => (
          <Button
            handlerEvent={handlerChangeFecha}
            key={idx}
            type={`fechas ${el.value === true ? 'active' : ''}`}
            text={el.name}
          />
        ))
      }
    </div>
   );
}
 
export default ListBtn;