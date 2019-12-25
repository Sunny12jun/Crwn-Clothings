import React from 'react';

import './menu-item.styles.scss';

// const MenuItem = (({ image, size, title }) => {
//     return <div className={`${size} menu-item`}  >
//           <div
//       className='background-image'
//       style={{
//         backgroundImage: `url(${image})`
//       }}
//     />
//         <div className='content'>
//             <div className='title'>{title}</div>
//             <span className='subtitle'>SHOP NOW</span>
//         </div>
     
//     </div>
// })
const MenuItem = ({image, size, title}) => (
    <div className={`${size} menu-item`}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${image})`
        }}
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
export default MenuItem;