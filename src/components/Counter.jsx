import { Button, ButtonGroup } from '@mui/material'
import React, { useContext, useState } from 'react'
import { context } from '../context/ContextProvider'

const Counter = () => {
   const {count,increase,decrease}=useContext(context)
  return (
    <div>
        <ButtonGroup>
            <Button onClick={()=>decrease()}>-</Button>
            <Button>{count}</Button>
            <Button onClick={()=>increase()}>+</Button>
        </ButtonGroup>
    </div>
  )
}

export default Counter