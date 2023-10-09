import React from 'react'

import ThemeToggle from '@/components/theme-toggle'

const Navbar = () => {
  return (
    <div className='flex justify-between'>
    <div>Navbar</div>
    <div>
      <ThemeToggle />
    </div>
    </div>
  )
}

export default Navbar