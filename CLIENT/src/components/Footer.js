import React from 'react'
import Link from 'next/link'
// Styles
import styles from '@/scss/footer.module.scss'

//Semantic ui

import { Container, Image,Button } from 'semantic-ui-react'

export default function Footer() {
    return (
      <div className={styles.footer}>
        <Container>
          <div className={styles.columns}>
            <div>
              <Link href="/">
                <Image src="/image/logo.png" alt="Gaming" />
                
              </Link>
            </div>
  
            <div>
              <ul>
                <Link href="#">Policy and Condition</Link>
                <Link href="#">Contacts</Link>
                <Link href="#">Blog</Link>
                <Link href="#">FAQs</Link>
              </ul>
            </div>
  
            <div className={styles.social}>
              <Button  href="#" circular color="facebook" icon="facebook" />
              <Button  href="#" circular color="twitter" icon="twitter" />
              <Button  href="#" circular color="linkedin" icon="linkedin" />
              <Button  href="#" circular color="youtube" icon="youtube" />
              
            </div>
          </div>
  
          <div className={styles.copyright}>
            <span>Copyright © 2023 Gaming - All rights reserved</span>
          </div>
        </Container>
      </div>
    );
  }
