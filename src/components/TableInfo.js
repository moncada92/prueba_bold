import {FaCalculator, FaLink} from 'react-icons/fa';
import { convertMoney } from '../helpers/convertMoney'

const TableInfo = ({fecha, filterData}) => {
  return ( 
    <div className="container-table">
      <div className="table-info">
        <div className="table_head">
          <div className="table_title">
            <h3>Tus ventas de {fecha}</h3>
          </div>
          <div className="table_head-row">
            <div>Transacción</div>
            <div>Fecha y Hora</div>
            <div>Método de pago</div>
            <div>ID transacción Bold</div>
            <div>Monto</div>
          </div>
          { filterData.map((el) => (
            <div className="table_body-row" key={el.id}>
              <div 
                className={`cobro ${el.transaccion === 'exitoso'
                ? 'success' : 'pending'}`}
              >
                <p>
                  {
                    el.tipo_cobro === 'link pago' ?
                    <FaLink />
                    :
                    <FaCalculator />
                  }
                  Cobro {el.transaccion}
                </p>
              </div>
              <div>{el.fecha} - {el.hora}</div>
              <div>
                <p className="metodo_pago">
                  <span className="icon"></span>
                  {el.metodo_pago}
                </p>
              </div>
              <div>{el.id}</div>
              <div>
                <span className='monto'>
                  ${convertMoney(el.monto)}
                </span>
                {
                  el.deduccion > 0 &&
                  <p>
                    <span className="text">Deducción Bold</span>
                    <br/>
                    <span className="deduccion">
                      - ${convertMoney(el.deduccion)}
                    </span>
                  </p>
                }
              </div>
            </div>          
            )) 
          }
        </div>
      </div>
    </div>
   );
}
 
export default TableInfo;