// import React from 'react';

// const Wishlist: React.FC = () => {
//   // Sample wishlist data – later you can fetch from API or Redux
//   const wishlistItems = [
//     {
//       id: '1',
//       title: 'Romantic Paris Getaway',
//       description: 'Enjoy a 5-day romantic stay in Paris with Eiffel Tower views.',
//       image: 'https://source.unsplash.com/featured/?paris',
//     },
//     {
//       id: '2',
//       title: 'Adventure in the Swiss Alps',
//       description: 'A thrilling hiking and skiing experience in Switzerland.',
//       image: 'https://source.unsplash.com/featured/?swiss,alps',
//     },
//   ];

//   return (
//     <div style={{ padding: '2rem' }}>
//       <h1>My Wishlist</h1>
//       {wishlistItems.length === 0 ? (
//         <p>No tours in your wishlist yet.</p>
//       ) : (
//         <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
//           {wishlistItems.map((tour) => (
//             <div
//               key={tour.id}
//               style={{
//                 border: '1px solid #ccc',
//                 borderRadius: '8px',
//                 padding: '1rem',
//                 backgroundColor: '#fff',
//               }}
//             >
//               <img
//                 src={tour.image}
//                 alt={tour.title}
//                 style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '6px' }}
//               />
//               <h3 style={{ margin: '1rem 0 0.5rem' }}>{tour.title}</h3>
//               <p>{tour.description}</p>
//               <button
//                 style={{
//                   marginTop: '1rem',
//                   backgroundColor: '#ff4d4f',
//                   color: '#fff',
//                   border: 'none',
//                   padding: '0.5rem 1rem',
//                   borderRadius: '4px',
//                   cursor: 'pointer',
//                 }}
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Wishlist;
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../redux/store';
import { removeFromWishlist } from '../redux/slices/wishlistSlice';

const Wishlist: React.FC = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>My Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <p>No tours in your wishlist yet.</p>
      ) : (
        <ul>
          {wishlistItems.map((id) => (
            <li key={id}>
              {id}
              <button onClick={() => dispatch(removeFromWishlist(id))}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
