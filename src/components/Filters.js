import { useState } from 'react'
import ListBtn from "./ListBtn";
import Button from "./Button";
import Filter from "./Filter";

const Filters = ({setFecha, fecha, filters, setFilters}) => {

  const [visible, setVisible] = useState(false);

  const handlerVisibleFilters = () => {
    setVisible(!visible);
  }

  return ( 
    <div className="fitlers">
      <ListBtn 
        setFecha={setFecha}
        fecha={fecha}
      />
      <div className="content_filter">
        <Button 
          handlerEvent={handlerVisibleFilters}
          type='filter'
          text="Filtrar" 
        />
        <Filter
          setVisible={setVisible}
          visible={visible} 
          handlerVisible={handlerVisibleFilters}
          setFilters={setFilters}
          filters={filters}
        />
      </div>
      
    </div>
   );
}
 
export default Filters;