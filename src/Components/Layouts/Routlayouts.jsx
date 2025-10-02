import React from 'react'
import Hader from './Hader'
import Fouter from './Fouter'
import { Outlet } from 'react-router-dom'

const Routlayouts = () => {
  return (
    <>
    <Hader/>
    <Outlet/>
    <Fouter/>
    </>
  )
}

export default Routlayouts
