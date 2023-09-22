import React from 'react'

export default function functiondiscount(price,discount) {
 if(!discount) return price;

 const discountAmount=(price*discount)/100;
 const finalprice=price-discountAmount

 return finalprice

}
