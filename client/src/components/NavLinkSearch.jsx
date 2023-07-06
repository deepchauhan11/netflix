/* eslint-disable react/prop-types */

import NavbarLinks from './NavbarLinks'
import NavbarSearch from './NavbarSearch'

const NavLinkSearch = ({ links, setInputHover, setShowSearch, showSearch, inputHover }) => {
    return (
        <>
            {/* navbar links component  */}
            <NavbarLinks links={links} />
            {/* navbar search component  */}
            <NavbarSearch setInputHover={setInputHover} setShowSearch={setShowSearch} showSearch={showSearch} inputHover={inputHover} />
        </>
    )
}

export default NavLinkSearch
