import React from 'react';
import { useState, useEffect } from 'react';



//Styles
import styles from '@/scss/listadress.module.scss';

//component
import { ENV } from '@/utils';
import { Address } from '@/api/address';
import { useAuth } from '@/hooks/useAuth';
import AdressTemplate from './AdressTemplate';

const addressCtrl = new Address();

export default function ListAdress({reload, onReload}) {
  const [listAddresses, setListAddresses] = useState(null);

  const { user } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const response = await addressCtrl.getAll(user.id);
        
        setListAddresses(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [reload]);//Exibe a lista(atualizada com o novo endereço criado) a assim qeu detecta a mudança do estado!

  if (!listAddresses) return null;

  return (
    <>
      <div className={styles.container}>
        {listAddresses.map((item) => (
          <>
            <AdressTemplate key={item.id} endereco={item.attributes} 
            enderecoId={item.id} onReload={onReload}  />
          </>
        ))}
      </div>
    </>
  );
}
