import React, { useEffect, useState } from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'
import CN from 'classnames'
import { Button, Logo } from 'components/atoms'
import { Menu } from 'components/molecules'
import { useViewport } from 'hooks/useViewport'
import  { SignUpModal } from 'components/molecules'
import { useAuth } from "../../../contexts/AuthContext"
import Image from 'next/image'
import { useRouter } from 'next/router'

function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter()
  const { currentUser,logout } = useAuth();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = async (event) => {
    event.preventDefault();
    await logout();
    router.push("/")
    //onClose();
  };

  return (
    <div className="relative inline-block text-left  z-[100]">
      <div>
        <button
          type="button"
          onClick={handleToggle}
          className="inline-flex justify-center items-center"
        >
          <img
            src="/user.png"
            alt="Profile Icon"
            className="h-8 w-8 rounded-full"
          />
          {/* <span className="ml-4">{email}</span> */}
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white border divide-y divide-gray-100 focus:outline-none">
          <div className="py-1">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700">
              Profile
            </a>
          </div>
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700"
              onClick={handleSignOut}
            >
              Sign Out
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export const Header = props => {
  const { width, height, isMobile, isTablet, isDesktop } = useViewport()
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const { currentUser,logout } = useAuth();

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
    <div className={CN(styles['header'], 'relative ')}>
      <div className='container flex items-center justify-between py-[40px] lg:py-[60px]'>
        <Link href='/' passHref>
          <Logo className='flex items-center' />
        </Link>

        {!isMobile && <Menu />}

        <div className='flex items-center'>
          <Link href='https://calendly.com/agentx' passHref>
            {isDesktop ? (
              <Button appearance='default' size='sm'>
                Let&apos;s Talk
              </Button>
            ) : (
              <a>Let&apos;s Talk</a>
            )}
          </Link>
        </div>

        <div className='flex items-center'>
          <Link href='#' passHref>
            {isDesktop ? (
<>
              {currentUser ? (
                <ProfileDropdown/>
      //                 <div>
      //                 <Button size='sm'
      //                   type="button"
      //                   // onClick={handleToggle}
      //                   className="inline-flex justify-center items-center"
      //                 >
      //                         <Image
      //   src='/user.png'
      //   alt='Muffin Tech Logo'
      //   width={30}
      //   height={30}
      //   unoptimized
      // />
      //                   {/* <span className="ml-4">{currentUser.email}</span> */}
      //                 </Button>
      //               </div>
    
              ) : (
                <Button appearance='default' size='sm' onClick={handleOpenSignUpModal}>
                Sign Up
              </Button>
              )}
</>

            ) : (
              <a>Sign Up</a>
            )}
          </Link>

          {showSignUpModal && (
          <SignUpModal
            onClose={handleCloseSignUpModal}
            onSubmit={handleSubmit}
          />
        )}
        </div>
      </div>
    </div>
  )
}

export default Header
