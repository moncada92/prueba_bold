import { useState, useEffect } from 'react';
import Menu from './components/Menu';
import TotalVentas from './components/TotalVentas';
import Filters from './components/Filters';
import TableInfo from './components/TableInfo';
import './css/App.scss';
import { initialValue, data } from './API/data';
import { getData } from './helpers/getData';
import { convertMoney } from './helpers/convertMoney'

function App() {

  const [fecha, setFecha] = useState(initialValue)
  const [filters, setFilters] = useState([
    {name: 'datafon', check: false},
    {name: 'link pago', check: false},
    {name: 'todos', check: false}
  ])
  const [montoTotal, setMontoTotal] = useState('0')
  let selectFecha = fecha.filter(element => element.value === true);

  const [originData, setOriginData] = useState([])
  const [filterData, setFilterData] = useState([])

  
  useEffect(() => {
    
    getData(data)
      .then(() => setOriginData(data))
      .then(() => {
        const filter = originData.filter(
          el => el.fecha_venta === selectFecha[0].name)
        setFilterData(filter)
        return filter
      })
      .then(getFilter => {
        const total = getFilter.reduce((acom, el) => acom += el.monto, 0)
        setMontoTotal(convertMoney(total))
      })
  }, [originData])

  useEffect(() => {

    getData(originData)
    .then(data => {
      const filter = data.filter(
        el => el.fecha_venta === selectFecha[0].name)
      setFilterData(filter)
      return filter
    })
    .then(getFilter => {
      const total = getFilter.reduce((acom, el) => acom += el.monto, 0)
      setMontoTotal(convertMoney(total))
      return getFilter
    })
    .then(filterApply => {
      const todos = filters.filter(el => el.name === 'todos')
      if (todos[0].check === true){
        return
      };
      
      const getFilters = filters.filter(el => el.check === true)

      if (getFilters.length > 0){

        if (getFilters.length > 1){
          const applyFilters = filterApply.filter(el => 
            el.tipo_cobro === getFilters[0].name || 
            el.tipo_cobro === getFilters[1].name)
          
            setFilterData(applyFilters)
            const total = applyFilters.reduce((acom, el) => acom += el.monto, 0)
            setMontoTotal(convertMoney(total))
          
        }else {
          const applyFilters = filterApply.filter(el => 
            el.tipo_cobro === getFilters[0].name)
          
            setFilterData(applyFilters)
            const total = applyFilters.reduce((acom, el) => acom += el.monto, 0)
            setMontoTotal(convertMoney(total))
        }
      }
    })
    .catch(err => console.log(err))

  }, [fecha, filters])

  return (
    <div className="App">
      <Menu />
      <div className="section">
        <div className="container">
          <div className="row">
            <TotalVentas
              fecha={selectFecha[0].name}
              total={montoTotal}/>
            <Filters 
              setFecha={setFecha}
              fecha={fecha}
              setFilters={setFilters}
              filters={filters}
              />
              
          </div>
        </div>
        <div className="container">
          <TableInfo 
            filterData={filterData}
            fecha={selectFecha[0].name} />
        </div>
      </div>
    </div>
  );
}

export default App;
