import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

const Header = memo(() => {
  return (
    <div>
      <NavLink to="/">发现音乐</NavLink>
      <NavLink to="/mine">我的</NavLink>
      <NavLink to="/friend">关注</NavLink>
    </div>

  )
})

export default Header