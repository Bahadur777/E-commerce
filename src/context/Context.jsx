// import React, {createContext} from 'react';
// import all_product from '../images/all_product'


// export const ShopContext = createContext(null);


// const shopContextProvider =(props)=>{
//     const contextValue ={all_product};
//     return(
//         <ShopContext.Provider value={contextValue}>
//             {props.banner}
//         </ShopContext.Provider>
//     )
// }
// export default shopContextProvider;
import React, { createContext } from 'react';
import all_product from '../images/all_product';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = { all_product };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;