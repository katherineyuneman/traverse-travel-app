
import styled from "styled-components";
import tw from "twin.macro";


const Styled = styled.main.attrs({
  className: "flex flex-col h-screen justify-center items-center bg-gray-100",
})`
  & {
    form {
      ${tw`bg-white text-center rounded py-8 px-5 shadow max-w-xs`}
    }
    input {
      ${tw`border-gray-300 mb-4 w-full border-solid border rounded py-2 px-4`}
    }
    button {
      ${tw`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded`}
    }
    nav {
      ${tw`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded`}
    }
    
  }
`


const NavBarStyle = styled.main.attrs({
    className: "",
  })`
    & {
      .disclosure {
      ${tw`bg-gray-800`}
      }
      span {
      ${tw`sr-only`}
    }
    }
  `
const BeforePanel = styled.main.attrs({
  className: "",
})`
  & {
    div {
      ${tw`mx-auto max-w-7xl px-2 sm:px-6 lg:px-8`}
    }
    .justify {
      ${tw`relative flex h-24 items-center justify-between`}
    }
    .mobile {
      ${tw`absolute inset-y-0 left-0 flex items-center sm:hidden`}
    }
  }
`
const MobileButton = styled.main.attrs({
  className: "",
})`
  & {
    .button {
      ${tw`inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
    }
    .xmark {
      ${tw`block h-6 w-6`}
    }
    .bars {
      ${tw`block h-6 w-6`}
    }
  }
`
const LeftNav = styled.main.attrs({
  className: "",
})`
  & {
    .left {
      ${tw`flex flex-1 items-center justify-center sm:items-stretch sm:justify-start`}
    }
    
  }
`

const Logo = styled.main.attrs({
  className: "",
})`
  & {
    .shrink {
      ${tw`flex flex-shrink-0 items-center`}
    }
    a {
      ${tw`-m-1.5 p-1.5`}
    }
    nav {
      ${tw`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded`}
    }
    .hidden {
      ${tw`hidden h-20 w-auto rounded-full sm:block`}
    }
    .block {
      ${tw`block h-20 w-auto rounded-full sm:hidden`}
    }
  }
`

const NavItems = styled.main.attrs({
  className: "",
})`
  & {
    .hidden {
      ${tw`hidden sm:ml-2 sm:block`}
    }
    .flexspace {
      ${tw`hidden flex space-x-2 flex items-center pr-3 sm:block`}
    }
    .navitems {
      ${tw`text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium`}
    }
  }
`

const RightNav = styled.main.attrs({
  className: "",
})`
  & {
    .right {
      ${tw`absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0`}
    }
    button {
      ${tw`rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800`}
    }
    span {
      ${tw`sr-only`}
    }
    .bell {
      ${tw`h-6 w-6`}
    }
  }
`
const ProfileDropdown = styled.main.attrs({
  className: "",
})`
  & {
    .top {
      ${tw`relative ml-3`}
    }
    .menubutton {
      ${tw`flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800`}
    }
    img {
      ${tw`h-8 w-8 rounded-full`}
    }
    .menuitems {
      ${tw`absolute right-0 top-5 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
    }
    .enter {
      ${tw`transition ease-out duration-100`}
    }
    .enterFrom {
      ${tw`transform opacity-0 scale-95`}
    }
    .enterTo {
      ${tw`transform opacity-100 scale-100`}
    }
    .leave {
      ${tw`transition ease-in duration-75`}
    }
    .leaveFrom {
      ${tw`transform opacity-100 scale-100`}
    }
    .leaveTo {
      ${tw`transform opacity-0 scale-95`}
    }
    a {
      ${tw`block px-4 py-2 text-sm text-gray-800`}
    }
    

  }
`
const DisclosurePanel = styled.main.attrs({
  className: "",
})`
  & {
    .hidden {
      ${tw`sm:hidden`}
    }
    .space {
      ${tw`space-y-1 px-2 pt-2 pb-3`}
    }
    .disclosurebutton {
      ${tw`text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium`}
    }
  }
`

export {
  Styled, NavBarStyle, Logo, NavItems, LeftNav, RightNav, ProfileDropdown, DisclosurePanel, BeforePanel, MobileButton
}