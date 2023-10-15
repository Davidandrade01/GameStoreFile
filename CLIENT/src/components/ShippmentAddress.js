import React, { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import classNames from 'classnames';
// Api
import { Address } from '@/api/address';
// Styles
import styles from '@/scss/shipmentadress.module.scss';

const addressCtrl = new Address();

export default function ShippmentAdress({SetSelectLocation,selectlocation}) {
  const [location, setLocation] = useState(null);
  //console.log(selectlocation)
  const { user } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const response = await addressCtrl.getAll(user.id);
        setLocation(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className={styles.container}>
      <h2>Shippment Address</h2>

      {location && //Nota**
        location.data.map((item) => (
          <div key={item.title} className={classNames(styles.address,{
            [styles.active]:item.id===selectlocation?.id
          })} onClick={()=>SetSelectLocation(item)}>
          
            <p>{item.attributes.name} ({item.attributes.title})</p>
            <p>
              {item.attributes.address},{item.attributes.postal_code},{""}
              {item.attributes.state},{item.attributes.city}
            </p>
          </div>
        ))}
    </div>
  );
}




//Nota** tive que criar uma condicional, pois como o map vai ser feito em um useState, a condicão inicial dele é nula. já que se altera, temos que verificar se ela existe. Sem isso, sempre dará erro no map acusando que o location não existe.  
