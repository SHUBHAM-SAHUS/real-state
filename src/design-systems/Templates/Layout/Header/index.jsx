/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Offcanvas } from 'react-bootstrap'
import style from './style.module.scss'
import Logo from '../../../../assets/images/logo.svg'
import DefaultUser from '../../../../assets/images/User-circle.svg'
import { useCallback, useState } from 'react'
import HamburgerIcon from '../../../../assets/images/List.svg'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { setSignupModal } from '@/Redux-services/AuthSlice'

const CustomDropdownTitle = <Image src={DefaultUser.src} width={24} height={24} alt="user" />

const Header = () => {
  const dispatch = useDispatch()
  const [showOfCanvas, setShowOfCanvas] = useState(false)

  const handleLoginModal = useCallback(() => {
    dispatch(setSignupModal(true))
  }, [dispatch])

  return (
    <>
      <Navbar expand="xl" className={`header_wrp ${style['header_wrp']} `}>
        <Container>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Brand className={`m-0 ${style['logo']}`}>
            <Link href="/" passHref legacyBehavior>
              <a>
                <Image src={Logo} width={209.12} height={48} alt="Indonesia Estate" />
              </a>
            </Link>
          </Navbar.Brand>
          <div className={style['header_menu_wrp']}>
            <Navbar.Collapse id="navbarScroll">
              <Nav className={`ms-auto ${style['navbar_nav']}`} navbarScroll>
                {[
                  'For Buyers',
                  'For Tenants',
                  'For Owners',
                  'For Dealers / Builders',
                  'Property Management',
                  'Legal Services',
                ].map((text, index) => (
                  <Link key={index} href="/" passHref legacyBehavior>
                    <Nav.Link as="a" className={style['nav_link']}>
                      {text}
                    </Nav.Link>
                  </Link>
                ))}
              </Nav>
            </Navbar.Collapse>
            <NavDropdown title={CustomDropdownTitle} id="nav-dropdown">
              <NavDropdown.Item onClick={handleLoginModal}>Login / Register</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">View Profile</NavDropdown.Item>
            </NavDropdown>
            <Image
              alt="Hamburger Menu"
              src={HamburgerIcon}
              width={32}
              height={32}
              className={style['desktop_toggler']}
              onClick={() => setShowOfCanvas(true)}
            />
          </div>
        </Container>
      </Navbar>

      <Offcanvas show={showOfCanvas} onHide={() => setShowOfCanvas(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className={`ms-auto ${style['navbar_nav']}`} navbarScroll>
            {[
              'For Buyers',
              'For Tenants',
              'For Owners',
              'For Dealers / Builders',
              'Property Management',
              'Legal Services',
            ].map((text, index) => (
              <Link key={index} href="/" passHref legacyBehavior>
                <Nav.Link as="a" className={style['nav_link']}>
                  {text}
                </Nav.Link>
              </Link>
            ))}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Header
