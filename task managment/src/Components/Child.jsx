import React from 'react'

const Child = ({count, counter})=> {
  const ClickButton =() =>{
    counter(count + 40);
  }
  return (
    <div>
      <button onClick={ClickButton}>click</button>
    </div>
  )
}

export default Child


