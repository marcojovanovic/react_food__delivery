import React, { useState, useEffect } from 'react';

import { products } from '../data';

function Products() {
  const [foodItems, setFoodItems] = useState(products);

 

  console.log(foodItems);

  return <div></div>;
}

export default Products;
