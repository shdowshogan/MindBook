import React from "react";

export default function Alert(props) {
  // function capitalize(word){
  //   const lower = word.toLowerCase()
  //   return lower.charAt(0).toUpperCase() + lower.slice(1)
  // }
  return (
    <div style={{height:'20px'}}>
      {
        props.alert &&
        <div >
          <div style={{width:'fit-content',}} className={`alert text-center w-25 mx-auto alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            {/* <strong>{capitalize(props.alert.type)}</strong>  */}
            <strong>{props.alert.msg}</strong> 
          </div>
        </div>
      }
    </div>
  );
}
