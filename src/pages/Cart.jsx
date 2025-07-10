// import { useCart } from '../context/CartContext';

// const Cart = () => {
//   const { cart, removeFromCart } = useCart();
//   const total = cart.reduce((sum, item) => sum + item.price, 0);

//   return (
//     <div style={{ maxWidth: '800px', margin: '20px auto', padding: '1rem' }}>
//       <h1 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Your Cart</h1>

//       {cart.length === 0 ? (
//         <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>Your cart is empty.</p>
//       ) : (
//         <table
//           style={{
//             width: '100%',
//             borderCollapse: 'separate',
//             borderSpacing: '0 1rem',
//           }}
//         >
//           <thead>
//             <tr>
//               <th
//                 style={{
//                   textAlign: 'left',
//                   padding: '0.75rem 1rem',
//                   fontSize: '1.1rem',
//                   borderBottom: '2px solid #1976d2',
//                 }}
//               >
//                 Product
//               </th>
//               <th
//                 style={{
//                   textAlign: 'center',
//                   padding: '0.75rem 1rem',
//                   fontSize: '1.1rem',
//                   borderBottom: '2px solid #1976d2',
//                 }}
//               >
//                 Price
//               </th>
//               <th
//                 style={{
//                   textAlign: 'center',
//                   padding: '0.75rem 1rem',
//                   fontSize: '1.1rem',
//                   borderBottom: '2px solid #1976d2',
//                 }}
//               >
//                 Action
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {cart.map((item, index) => (
//               <tr
//                 key={index}
//                 style={{
//                   backgroundColor: '#f9f9f9',
//                   boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
//                   borderRadius: '8px',
//                 }}
//               >
//                 <td style={{ padding: '1rem', borderRadius: '8px 0 0 8px' }}>
//                   <strong>{item.title}</strong>
//                 </td>
//                 <td
//                   style={{
//                     textAlign: 'center',
//                     padding: '1rem',
//                     fontWeight: 'bold',
//                     color: '#1976d2',
//                   }}
//                 >
//                   Tk {item.price.toFixed(2)}
//                 </td>
//                 <td
//                   style={{
//                     textAlign: 'center',
//                     padding: '1rem',
//                     borderRadius: '0 8px 8px 0',
//                   }}
//                 >
//                   <button
//                     onClick={() => removeFromCart(index)}
//                     style={{
//                       backgroundColor: '#d32f2f',
//                       color: 'white',
//                       border: 'none',
//                       padding: '0.5rem 1rem',
//                       borderRadius: '4px',
//                       cursor: 'pointer',
//                       transition: 'background-color 0.3s ease',
//                     }}
//                     onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#b71c1c')}
//                     onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#d32f2f')}
//                   >
//                     Remove
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

//       <h2
//         style={{
//           marginTop: '2rem',
//           textAlign: 'right',
//           fontSize: '1.5rem',
//           color: '#1976d2',
//         }}
//       >
//         Total:Tk {total.toFixed(2)}
//       </h2>
//     </div>
//   );
// };

// export default Cart;


import { useCart } from '../context/CartContext';
import Footer from '../components/Footer';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
    <div style={{ maxWidth: '800px', margin: '20px auto', padding: '1rem',height:'100vh' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Your Cart</h1>

      {cart.length === 0 ? (
        <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>Your cart is empty.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 1rem' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', padding: '0.75rem 1rem' }}>Product</th>
              <th style={{ textAlign: 'center' }}>Price</th>
              <th style={{ textAlign: 'center' }}>Quantity</th>
              <th style={{ textAlign: 'center' }}>Total</th>
              <th style={{ textAlign: 'center' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index} style={{ backgroundColor: '#f9f9f9', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
                <td style={{ padding: '1rem',color:'#3E0478' }}><strong>{item.title}</strong></td>
                <td style={{ textAlign: 'center', padding: '1rem', color: '#3E0478' }}>
                  Tk {item.price.toFixed(2)}
                </td>
                <td style={{ textAlign: 'center' }}>
                  <button onClick={() => updateQuantity(index, -1)} disabled={item.quantity <= 1}
                    style={{ padding: '0.3rem 0.6rem', margin: '0 5px' }}>−</button>
                  <span className='text-[#3E0478]'>{item.quantity}</span>
                  <button onClick={() => updateQuantity(index, 1)}
                    style={{ padding: '0.3rem 0.6rem', margin: '0 5px' }}>+</button>
                </td>
                <td style={{ textAlign: 'center' }}>
                  Tk {(item.price * item.quantity).toFixed(2)}
                </td>
                <td style={{ textAlign: 'center' }}>
                  <button
                    onClick={() => removeFromCart(index)}
                    style={{
                      backgroundColor: '#d32f2f',
                      color: 'white',
                      border: 'none',
                      padding: '0.5rem 1rem',
                      borderRadius: '4px',
                      cursor: 'pointer',
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <h2 style={{ marginTop: '2rem', textAlign: 'right', fontSize: '1.5rem', color: '#3E0478', fontWeight:'600' }}>
        Total: Tk {total.toFixed(2)}
      </h2>
    </div>
    <Footer/>
    </>

  );
};

export default Cart;
