import React from 'react'
import styles from './Footer.module.scss'
import CN from 'classnames'
import { Logo } from 'components/atoms'
import { SocialLinks } from 'components/molecules'
import { FooterBg, FooterBgMobile } from 'components/layers/FooterBg'
import Link from 'next/link'
import { useViewport } from 'hooks/useViewport'

const FooterLink = ({ href = '', children }) => {
  return (
    <Link href={href}>
      <a className='px-[18px] font-500'>{children}</a>
    </Link>
  )
}

export const Footer = ({ className, children, ...restProps }) => {
  const { width, height, isMobile, isTablet, isDesktop } = useViewport()
  const copyrightDate = new Date().getFullYear()

  return (
    <div
      className={CN(
        styles['footer'],
        'pb-[120px] lg:py-[160px] mt-[0px] md:mt-[0px] relative',
        className
      )}
      {...restProps}>
      {(isMobile || isTablet) && <FooterBgMobile />}
      
      <div className='container flex flex-col items-center justify-center'>
        <Logo className='mb-[38px]' />
        <SocialLinks />

        <div className='footer__links pt-[40px] pb-[28px]'>
          <FooterLink href=''>About</FooterLink>
          <FooterLink href=''>Careers</FooterLink>
          <FooterLink href=''>FAQ&apos;s</FooterLink>
        </div>

        <div className='font-normal footer__copyright text-off-black text-[14px] text-center'>
          Copyright © {copyrightDate} Innoviza {isDesktop && '—'}{' '}
          <br className='lg:hidden' />
          All rights reserved
        </div>
      </div>

      {/* {isDesktop && <FooterBg />} */}
    </div>
  )
}

export default Footer
