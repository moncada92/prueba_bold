import {useRef} from 'react'
import { FaPlus } from 'react-icons/fa'

const Filter = ({visible, setVisible, handlerVisible, filters, setFilters}) => {

  const check1 = useRef(null);
  const check2 = useRef(null);
  const check3 = useRef(null);

  const handlerFiltersCheck = () => {

    
    changeFilter(check1.current)
    changeFilter(check2.current)
    changeFilter(check3.current)
   

    function changeFilter(elementCheck){
      const changeFilters = filters.map(el => {
        
        if(elementCheck.value === el.name){
          if (elementCheck.checked){
            el.check = true
          } else {
            el.check = false
          }
          //console.log(el.check)
        } 
        return el;
      })
      //console.log(changeFilters)
      setFilters([...changeFilters])
    }

    setVisible(!visible)

  }

  return ( 
    <div className="filter">
      <div className={`box-filter ${visible ? 'visible' : ''}`}>
        <div className={`head_filter ${visible ? 'visible' : ''}`}>
          <p>Filtrar</p>
          <FaPlus  onClick={handlerVisible}/>
        </div>
        <div className={`body_filter ${visible ? 'visible' : ''}`}>
          <div>
            <label>
              <input ref={check1} type="checkbox" value='datafon' name='datafono'/> Cobro con datáfono
            </label>
          </div>
          <div>
            <label>
              <input ref={check2} type="checkbox" value='link pago' name='link pago'/> Cobro con link de pago
            </label>
          </div>
          <div>
            <label>
              <input ref={check3} type="checkbox" value='todos' name='todos'/> Ver todos
            </label>
          </div>
          <button onClick={handlerFiltersCheck} className="btn btnform">
            Aplicar
          </button>
        </div>
      </div>
    </div>
   );
}
 
export default Filter;