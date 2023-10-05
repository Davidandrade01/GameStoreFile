import { Icon, Image } from "semantic-ui-react";
import Link from "next/link";
import { useRouter } from "next/router";

import classNames from "classnames";
import styles from '@/scss/stepscart.module.scss'

export default function HeaderCart() {
  const {
    query: { step = 1 },
  } = useRouter();
  

  const steps = [
    { id: 1, title: "Cart" },
    { id: 2, title: "Payment" },
    { id: 3, title: "Confirmation" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Link href="/">
        <img src="/image/logo.png" alt='logo game Store'/>
        </Link>
      </div>

      <div className={styles.center}>
        {steps.map((item)=>
         (
          <div
            key={item.id}
            className={classNames({
              [styles.active]: item.id === Number(step),
              [styles.success]: item.id < Number(step),
            })}
          >
            <span className={styles.number}>
              <Icon name="check" />
              {item.id}
            </span>
            <span>{item.title}</span>
            <span className={styles.space} />
          </div>
        ))}
      </div>

      <div className={styles.right}>
        <Icon name="lock" />
        <div>
          <span>Secure Payment</span>
          
        </div>
      </div>
    </div>
  );
}