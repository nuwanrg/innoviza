import React from 'react'
import styles from './TechScroll.module.scss'
import CN from 'classnames'
import { TechChip, Blob2 } from 'components/atoms'
import Image from 'next/image'
import { useViewport } from 'hooks/useViewport'
import Marquee from 'react-fast-marquee'

const renderList = (items = []) => {
  let itemsList = items.map((item) => {
    return <TechChip key={item.id} item={item} />
  })
  return itemsList
}

export const TechScroll = ({ className, children, id, ...restProps }) => {
  const { width, height, isMobile, isTablet, isDesktop } = useViewport()

  return (
    <div
      className={CN(
        styles['tech-scroll'],
        'relative lg:mt-[80px] pb-[60px] lg:pb-[120px] z-[0]',
        className
      )}
      {...restProps}
      id={id || 'technologies'}>
      <div className='container flex justify-end md:!pr-[95px] relative'>
        <Blob2 />

        {/* <h3 className='md:text-right mb-[84px] relative z-[1000] text-center w-full'>
          We only use the <br className='lg:hidden' /> best
          <br className='hidden lg:block' /> ingredients
        </h3> */}
          <h3 className='md:text-center mb-[84px] relative z-[0] text-center w-full'>
          Build and Deploy Custom AI Applications for your need <br className='lg:hidden' />
          
        </h3>
      </div>

      {/* <div className='relative z-[9999] w-full overflow-hidden py-[12px] lg:py-[40px] my-[-40px]'> */}
        {/* <Marquee gradient={false}>
          <div className=' flex justify-center gap-[20px] mb-[12px] lg:mb-[20px]'>
            {renderList([
              { label: 'WhatsApp', logo: '/whatsapp.png' },
              { label: 'Facebook', logo: '/facebook.png' },
              // { label: 'Salesforce', logo: '/salesforce.png' },
              { label: 'Hubspot', logo: '/hubspot.png' },
              // { label: 'Rust', logo: '/scroll-logos/6.svg' },
              // { label: 'React.js', logo: '/scroll-logos/1.svg' },
              // { label: 'Python', logo: '/scroll-logos/5.svg' },
              // { label: 'Amazon', logo: '/scroll-logos/3.svg' },
              // { label: 'Ethereum', logo: '/scroll-logos/2.svg' },
              // { label: 'Solidity', logo: '/scroll-logos/4.svg' },
              // { label: 'Solana', logo: '/scroll-logos/7.svg' },
              // { label: 'Rust', logo: '/scroll-logos/6.svg' },
              // { label: 'React.js', logo: '/scroll-logos/1.svg' },
              // { label: 'Python', logo: '/scroll-logos/5.svg' },
              // { label: 'Amazon', logo: '/scroll-logos/3.svg' },
            ])}
          </div>
        </Marquee> */}

        {/* <Marquee gradient={false} direction='right'>
          <div className='tech-scroll__slider flex justify-center gap-[20px]'>
            {renderList([
              { label: 'Solana', logo: '/scroll-logos/7.svg' },
              { label: 'Ethereum', logo: '/scroll-logos/2.svg' },
              { label: 'React.js', logo: '/scroll-logos/1.svg' },
              { label: 'Python', logo: '/scroll-logos/5.svg' },
              { label: 'Rust', logo: '/scroll-logos/6.svg' },
              { label: 'Solidity', logo: '/scroll-logos/4.svg' },
              { label: 'Amazon', logo: '/scroll-logos/3.svg' },
              { label: 'Solana', logo: '/scroll-logos/7.svg' },
              { label: 'Ethereum', logo: '/scroll-logos/2.svg' },
              { label: 'React.js', logo: '/scroll-logos/1.svg' },
              { label: 'Python', logo: '/scroll-logos/5.svg' },
              { label: 'Rust', logo: '/scroll-logos/6.svg' },
              { label: 'Solidity', logo: '/scroll-logos/4.svg' },
              { label: 'Amazon', logo: '/scroll-logos/3.svg' },
            ])}
          </div> 
        </Marquee>*/}
      {/* </div>  */}

      <div className='container flex justify-start !pl-[68px] lg:pl-[95px] pt-[0px] z-[1000] relative'>
        <p className='max-w-[540px] text-sm lg:text-md'>
          Inoviza uses the most applicable technology for the each project
          ensuring the best outcome.
        </p>
      </div>

      <div
        className={CN(
          'container z-[100] absolute top-[38px] lg:top-[62px] bottom-0 left-[32px] lg:left-0 lg:right-0 right-[32px] w-auto lg:w-full rounded-[12px] lg:rounded-[28px]',
          styles['tech-scroll__bg']
        )}
      />
    </div>
  )
}

export default TechScroll
