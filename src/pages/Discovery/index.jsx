import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'

import { DiscoveryMenu } from '@/common/local-data'
import { NavLink } from 'react-router-dom'

import {
  DiscoverWrapper,
  TopMenu
} from './style'

const Discovery = memo((props) => {
  // 从props拿到route 子路由
  const { route } = props
  return (
    <DiscoverWrapper>
      <div className='top'>
        <TopMenu className="wrap-v1">
          {
            DiscoveryMenu.map((item) => {
              return (
                <div className='item' key={item.title}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </TopMenu>
      </div>
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  )
})

export default Discovery