import React from 'react'
import Navbar from 'Components/Navbar'

const Contact = ({user,logout}) => {
  return (
    <div>
      <Navbar user={user} logout={logout} heading="Contact"/>
    </div>
  )
}

export default Contact
