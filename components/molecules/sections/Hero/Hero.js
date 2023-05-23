/* eslint-disable @next/next/no-img-element */
import React,{useState} from 'react'
import styles from './Hero.module.scss'
import CN from 'classnames'
import { Button, Blob1 } from 'components/atoms'
import Image from 'next/image'
import Link from 'next/link'
import { useViewport } from 'hooks/useViewport'
import  { SignUpModal } from 'components/molecules'

export const Hero = ({ className, children, ...restProps }) => {
  const { width, height, isMobile, isTablet, isDesktop } = useViewport()
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handleOpenSignUpModal = (e) => {
    e.preventDefault();
    setShowSignUpModal(true);
  };

  const handleCloseSignUpModal = () => {
    setShowSignUpModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
  };

  return (
    <div
      className={CN(
        styles['hero'],
        'lg:pt-[30px] pb-[10px] lg:pb-[160px] lg:flex',
        className
      )}
      {...restProps}>
      {/* <Blob1 /> */}

      {!isDesktop && (
        <div className='flex justify-center w-full pb-[40px] pt-[20px]'>
          <Image
            unoptimized
            src='/muffin-tech-image-001.png'
            alt='hero'
            width={370}
            height={370}
          />
        </div>
      )}

      <div className='container relative z-[10]'>
        <div className=' hero__left lg:max-w-[500px]'>
          <h3 className='mb-[40px] text-center lg:text-left'>
          AgentX!
          </h3>

          <p className=' mb-[100px] lg:mb-[120px] lg:pr-[10px] lg:text-md text-center max-w-[800px] lg:max-w-none mx-auto lg:mx-0 lg:text-left'>
          AgentX is an AI-powered agent that can automate tasks, generate text and summaries, perform sentiment analysis, create images, and integrate with social media. It is cost-effective, saves time, and increases productivity, allowing you to use it on the go from anywhere. AgentX is the perfect tool for businesses and individuals looking to streamline their work and achieve their goals quickly and efficiently.
          </p>

          <div className='hero__cta md:flex md:justify-center lg:justify-start' >
            <Link href='https://wa.me/6591322590' passHref>
              <Button
                // onClick={handleOpenSignUpModal}
                size='sm'
                mode='filled'
                appearance='default'
                className='w-full md:w-auto lg:mr-[20px] mb-[20px] lg:mb-0'>
                Try AgentX!
              </Button>
            </Link>

            <Link href='https://calendly.com/agentx' passHref>
              <Button size='sm' appearance='default' className='w-full md:w-auto'>
                Schedule a Call
              </Button>
            </Link>
          </div>
        </div>

        {isDesktop && (
          <div className='absolute top-0 bottom-0 right-[-0px] my-auto hero__right w-[500px] h-[500px]'>
            <Image
              unoptimized
              src='/muffin-tech-image-001.png'
              alt='hero'
              width={500}
              height={500}
            />
          </div>
        )}

{showSignUpModal && (
          <SignUpModal
            onClose={handleCloseSignUpModal}
            onSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  )
}

export default Hero
