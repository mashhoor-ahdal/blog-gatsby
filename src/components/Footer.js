// // Import the CSS into your component

// import * as React from 'react';
// import {} from './Footer.module.css'; // Adjust the path based on your file structure

// const BubbleComponent = () => {
//   const generateBubbles = () => {
//     const bubbles = [];
//     for (let i = 0; i < 128; i++) {
//       const style = {
//         '--size': `${2 + Math.random() * 4}rem`,
//         '--distance': `${6 + Math.random() * 4}rem`,
//         '--position': `${-5 + Math.random() * 110}%`,
//         '--time': `${2 + Math.random() * 2}s`,
//         '--delay': `${-1 * (2 + Math.random() * 2)}s`,
//       };
//       bubbles.push(<div key={i} className="bubble" style={style}></div>);
//     }
//     return bubbles;
//   };

//   return (
//     <div className="main">
//       <div className="footer">
//         <div className="bubbles">{generateBubbles()}</div>
//       </div>
//       <div className="content">
//         {/* Add your content here */}
//       </div>
//     </div>
//   );
// };

// export default BubbleComponent;
