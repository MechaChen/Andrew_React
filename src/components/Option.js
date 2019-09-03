import React from "react";

// Directly export Stateless component will make componet in React Dev Tool as a "Anonymous" component
// export default props => {
//   return (
//     <div>
//       {props.optionText}
//       <button onClick={e => props.handleDeleteOption(props.optionText)}>
//         remove
//       </button>
//     </div>
//   );
// };

const Option = props => {
  return (
    <div>
      {props.optionText}
      <button onClick={e => props.handleDeleteOption(props.optionText)}>
        remove
      </button>
    </div>
  );
};

export default Option;
