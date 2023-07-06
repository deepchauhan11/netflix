/* eslint-disable react/prop-types */
import { FaPowerOff, FaSearch } from "react-icons/fa";
import { firebaseAuth } from "../utils/firebase-config";
import { signOut } from "firebase/auth";


const NavbarSearch = ({ showSearch, setShowSearch, setInputHover, inputHover }) => {
    return (
        <div className="right flex a-center navbarSearchContainer">
            {/* when show search is true show-search will be added to class  */}
            <div className={`search ${showSearch ? "show-search" : ""}`}>
                <button
                    onFocus={() => setShowSearch(true)}
                    onBlur={() => {
                        if (!inputHover) {
                            setShowSearch(false);
                        }
                    }}
                >
                    <FaSearch />
                </button>
                <input
                    type="text"
                    placeholder="Search"
                    onMouseEnter={() => setInputHover(true)}
                    onMouseLeave={() => setInputHover(false)}
                    onBlur={() => {
                        setShowSearch(false);
                        setInputHover(false);
                    }}
                />
            </div>
            <button onClick={() => signOut(firebaseAuth)}>
                <FaPowerOff />
            </button>
        </div>
    )
}

export default NavbarSearch
