// import React from 'react'
// import './AppDownload.css'
// import { assets } from '../../assets/assets'

// const AppDownload = () => {
//     return (
//         <div className='app-download' id='app-download'>
//             <p>For Better Experience Download <br />Tomato App</p>
//             <div className="app-download-platforms">
//                 <img src={assets.play_store} alt="" />
//                 <img src={assets.app_store} alt="" />
//             </div>
//         </div>
//     )
// }

// export default AppDownload

import React from 'react';
import './AppDownload.css';
import { assets } from '../../assets/assets';

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better Experience Download <br />Tomato App</p>
      <div className="app-download-platforms">
        <a href="https://play.google.com/store/search?q=zomato&c=apps&hl=en" target="_blank" rel="noopener noreferrer">
          <img src={assets.play_store} alt="Download on Google Play" />
        </a>
        <a href="https://apps.apple.com/in/app/zomato-food-delivery-dining/id434613896" target="_blank" rel="noopener noreferrer">
          <img src={assets.app_store} alt="Download on the App Store" />
        </a>
      </div>
    </div>
  );
};

export default AppDownload;
