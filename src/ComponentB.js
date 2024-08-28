import React from 'react'
import ComponentC from './ComponentC'

const ComponentB = ({a , otherProps , obj}) => {

    console.log('obj', obj)
  return (
    <div>
         <h1> {a}  </h1>   
         <h1> {otherProps} </h1>
         <hr/>
         <ComponentC esmPropsJdid={a} />

    </div>
  )
}


ComponentB.defaultProps = {
    a: 'Foulen',
};

export default ComponentB