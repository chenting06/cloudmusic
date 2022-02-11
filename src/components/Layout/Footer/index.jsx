import React, { memo, Fragment } from 'react'

import {
  FooterLinks,
  FooterImages
} from '@/common/local-data'

import {
  FooterWrapper,
  FooterLeft,
  FooterRight
} from './style'

const Footer = memo(() => {
  return (
    <FooterWrapper>
      <div className='wrap-v2 content'>
        <FooterLeft className='left'>
          <div className='link'>
            {
              FooterLinks.map((item) => {
                return (
                  <Fragment key={item.title}>

                    <a href={item.link}
                      target="_blank"
                      rel="noopener noreferrer">
                      {item.title}
                    </a>
                    <span className="line">|</span>
                  </Fragment>)
              })
            }
          </div>
          <div className="copyright">
            <span>紫菜蛋花汤©2202-2022</span>
            <span>
            紫菜蛋花汤：
              <a href="https://github.com/seaweed-and-egg-soup/cloudmusic" rel="noopener noreferrer" target="_blank">14325</a>
            </span>
          </div>
          <div className="report">
            <span>举报电话：0571-89853516</span>
            <span>
              举报邮箱：
              <a href="mailto:seaweed14325@163.com" target="_blank" rel="noopener noreferrer">seaweed14325@163.com</a>
            </span>
          </div>
          <div className="info">
            <span>测2022试</span>
            <a href="https://github.com/seaweed-and-egg-soup/cloudmusic" rel="noopener noreferrer" target="_blank">
              工业和信息化部备案管理系统网站
            </a>
          </div>
        </FooterLeft>
        <FooterRight>
          {FooterImages.map((item) => {
            return (
              <li className="item" key={item.link}>
                <a className="link" href={item.link} rel="noopener noreferrer" target="_blank"> </a>
                <span className="title">{item.title}</span>
              </li>
            )
          })}
        </FooterRight>
      </div>
    </FooterWrapper>
  )
})

export default Footer