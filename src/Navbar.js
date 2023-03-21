import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon,EnvelopeIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {Styled, NavBarStyle, Logo, NavItems, LeftNav, RightNav, ProfileDropdown, DisclosurePanel, BeforePanel, MobileButton} from './styles/styleIndex.js';


  const NavBar = () => {
    const navigation = [
        { name: 'Daily Itinerary', href: '/itinerary', current: true },
        { name: 'Projects', href: '/projects', current: false },
        // { name: 'Contact', href: '/contact', current: false }
      ]

    return (
        <NavBarStyle>
            <Disclosure as="nav" className="disclosure">
                {({ open }) => (
                    <>
                        <BeforePanel>
                            <div className='justify'>
                                <div className="mobile">
                                    <MobileButton>
                                            <Disclosure.Button className="button">
                                                <span className="sr-only">Open main menu</span>
                                                {open ? (
                                                <XMarkIcon className="xmark" aria-hidden="true" />
                                                ) : (
                                                <Bars3Icon className="bars" aria-hidden="true" />
                                                )}
                                            </Disclosure.Button>
                                    </MobileButton>
                                </div>
                                <LeftNav>
                                    <div className='left'>
                                        <Logo>
                                            <div className='shrink'>
                                                <a href="/" className="-m-2.5 p-1.5">
                                                    <img
                                                    className="block"
                                                    src="https://github.com/katherineyuneman/portfolio/blob/master/public/K.png?raw=true"
                                                    alt="Katherine Yuneman"
                                                    />
                                                    <img
                                                    className="hidden"
                                                    src="https://github.com/katherineyuneman/portfolio/blob/master/public/K.png?raw=true"
                                                    alt="Katherine Yuneman"
                                                    />
                                                </a>
                                            </div>
                                        </Logo>
                                        <NavItems>
                                            <div className='hidden'>
                                                <div className= 'flexspace'>
                                                    {navigation.map((item) => (
                                                        <Link className='navitems' to={item.href}>{item.name}</Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </NavItems>
                                    </div>
                                </LeftNav>
                                <RightNav>
                                    <div className='right'>
                                        <button type="button">
                                            <span>View notifications</span>
                                            <BellIcon className="bell" aria-hidden="true" />
                                        </button>
                                        <ProfileDropdown>
                                            <Menu as="div" className="top">
                                                <div>
                                                    <Menu.Button className="menubutton">
                                                        <span>Open user menu</span>
                                                        <img
                                                        src="https://github.com/katherineyuneman/portfolio/blob/master/public/K.png?raw=true"
                                                        alt=""
                                                        />
                                                    </Menu.Button>
                                                </div>
                                                <Transition as={Fragment}>
                                                    <div className='menuitems'>
                                                        <Menu.Items className="menuitems">
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                <a href="#">Your Profile</a>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                <a href="#">Settings</a>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                <a href="#"> Sign out </a>
                                                                )}
                                                            </Menu.Item>
                                                        </Menu.Items>
                                                    </div>
                                                </Transition>
                                            </Menu>
                                        </ProfileDropdown>
                                    </div>
                                </RightNav>
                            </div>
                        </BeforePanel>
                        <DisclosurePanel>            
                            <Disclosure.Panel className="hidden">
                                <div className="space">
                                    {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className='disclosurebutton'
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                    ))}
                                </div>
                            </Disclosure.Panel>
                        </DisclosurePanel> 
                    </>
                )}
            </Disclosure>
        </NavBarStyle>
    )
  }
  export default NavBar;