import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import Modal from '../Modal/Modal';

const Navbar = () => {
    const [isActiveHeader, setIsActiveHeader] = useState(false);

    const [isNavOpen, setIsNavOpen] = useState(false);

    const [searchTerm, setSearchTerm] = useState('');
    const [isSearchOpen, setSearchOpen] = useState(false);

    const ref = useRef(null);

    const connectHandler = () => {
        setIsNavOpen(true)
    }

    const [isOpen, setIsOpen] = useState(false);
    const options = [
        { value: 'etheruim', label: "Etheruim", imgSrc: 'assets/images/tokens/eth-icon.png' },
        { value: 'polygon', label: "Polygon", imgSrc: 'assets/images/tokens/polygon.svg' },
        { value: 'optimistic', label: "Optimistic", imgSrc: 'assets/images/tokens/optimistic.svg' },
    ];

    const [selectedOption, setSelectedOption] = useState(options[0]);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    }

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const filteredOptions = options.filter(option =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // useEffect(() => {
    //     document.addEventListener('click', handleClickOutside);
    //     return () => {
    //         document.removeEventListener('click', handleClickOutside);
    //     };
    // }, []);

    // const handleClickOutside = (event) => {
    //     if (ref.current && !ref.current.contains(event.target)) {
    //         setSearchOpen(false);
    //     }
    // };


    //For header
    useEffect(() => {
        function handleScroll() {
            if (window.pageYOffset > 50) {
                setIsActiveHeader(true);
            } else {
                setIsActiveHeader(false);
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <div className={`sc-1dv6j2d-2 hirdVF ${isActiveHeader ? "sticky" : ""}`}>
            <header id="header" className="header">
                <nav className="nav ">
                    {/* left________Nav */}
                    <div className="left-nav">
                        <a className="logo-wrap" href="/">
                            <img className="logo-image" src="assets/images/logo/logo-two.png" />
                        </a>
                        <div className="nav-menu" id="nav-menu">
                            <ul className="list-unstyled nav-list">
                                <li className="nav-item">
                                    <a className="nav-link" href="/swap">Swap</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/tokens">Tokens</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/nfts">NFTs</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/nfts">Pools</a>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link " href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <i className="ri-more-fill"></i>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#"><i className="me-1 icons ri-apple-fill"></i>Download Uniswap Wallet</a></li>
                                        <li><a className="dropdown-item" href="#">Vote in governance</a></li>
                                        <li><a className="dropdown-item" href="#">View more analytics</a></li>
                                        <div className='borderr'></div>
                                        <li><a className="dropdown-item" href="#">Help center</a></li>
                                        <li><a className="dropdown-item" href="#">Documentation</a></li>
                                        <li><a className="dropdown-item" href="#">Feedback</a></li>
                                        <li><a className="dropdown-item" href="#">Legal & Privacy</a></li>

                                        <div className="icons-wrapper">
                                            <a
                                                className="discord"
                                                href="https://discord.com/invite/FCfyBSbCU5"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img src='/images/discord-icon.svg' />
                                            </a>
                                            <a
                                                className="twitter"
                                                href="https://twitter.com/Uniswap"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img src='/images/twitter-icon.svg' />
                                            </a>
                                            <a
                                                className="github"
                                                href="https://github.com/Uniswap"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img style={{ width: "25px" }} src='/images/github-icon.svg' />
                                            </a>
                                        </div>

                                    </ul>
                                </li>
                            </ul>
                        </div>

                    </div>

                    {/*center________Nav */}
                    <div className="center-nav">
                        <div className="custom-search-dropdown">
                            <div className='custom-search-inside inside-search'>
                                {/* <img className='search-icon' style={{ width: "20px" }} src='assets/images/search.svg' /> */}
                                <i className="search-icon ri-search-line"></i>
                                <input
                                    className=''
                                    type='search'
                                    placeholder='Search tokens and NFT collections'
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    onClick={() => setSearchOpen(true)}
                                />
                                <div className='slash' style={{ display: isSearchOpen ? 'none' : 'block' }}>/</div>
                            </div>

                            {isSearchOpen && (
                                <ul className="search-options">
                                    <div className=''>Popular tokens</div>

                                    {filteredOptions.map((option, index) => (
                                        <li key={index} onClick={() => {
                                            handleOptionClick(option);
                                            setSearchTerm(option.label);
                                            setSearchOpen(false);
                                        }}
                                        >
                                            <div className='options-name'>
                                                <img src={option.imgSrc} alt={option.label} />
                                                <span>{option.label}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>

                    {/* right________Nav */}
                    <div className="right-nav">
                        <div className="custom-dropdown">
                            <div className="selected-option" onClick={toggleDropdown}>
                                <img src={selectedOption.imgSrc} alt={selectedOption.value} />
                                <span className='dropdown'> <i className="ri-arrow-drop-down-line"></i></span>

                            </div>
                            {isOpen && (
                                <ul className="options">
                                    {options.map((option, index) => (
                                        <li key={index} onClick={() => handleOptionClick(option)}>
                                            <div className='options-name'>
                                                <img src={option.imgSrc} alt={option.label} />
                                                <span>{option.label}</span>
                                            </div>
                                            <div>
                                                {selectedOption.value === option.value && <i className="tick-icon ri-check-line"></i>}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div className='connect'>
                            <button className='connect-btn' onClick={connectHandler}> Connect</button>
                        </div>
                    </div>
                </nav>
            </header>
            <Modal isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        </div>

    );
}

export default Navbar;