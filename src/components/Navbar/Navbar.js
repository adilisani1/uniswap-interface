import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="sc-1dv6j2d-2 AyiUC">
            <nav className="sc-10o9h38-0 ccVlPa">
                <div className="_1klryar0 rgw6ez44v rgw6ez1dv rgw6ez441">
                    <div className="_1klryar0 rgw6ez44v rgw6ez16v rgw6ez43d rgw6ez3y7 rgw6ez3j rgw6ez47j">
                        <div className="_1klryar0 rgw6ez44v rgw6ezrd rgw6ez3j rgw6ez79z">
                            <svg
                                width="48"
                                height="48"
                                data-testid="uniswap-logo"
                                className="rgw6ez44p rgw6ez4ej"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {/* Add your SVG path here */}
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4.5 8.3L12 12l7.5-3.7v7.4L12 24l-7.5-3.7V8.3zm1.5.737v5.726L12 21l6-2.937V9.037L12 6l-6 2.037zM12 7.264l5.25 2.113L12 11.49l-5.25-2.113L12 7.263zm0 10.987l5.25-2.113L12 21.477l-5.25-2.113L12 18.25zm7.5-3.15l1.5.75v3.562l-1.5.75v-5.062zm-15 0l-1.5.75v5.062l1.5.75V15.1z"
                                    fill="#F3BA2F"
                                />
                            </svg>
                        </div>
                        <div className="_1klryar0 rgw6ez44v rgw6ez44l">
                            <a
                                href="/"
                                className="sc-10o9h38-0 sc-1q2xevf-0 jDmPYK"
                            >
                                Home
                            </a>
                            <a
                                href="/swap"
                                className="sc-10o9h38-0 sc-1q2xevf-0 jDmPYK"
                            >
                                Swap
                            </a>
                            <a
                                href="/liquidity"
                                className="sc-10o9h38-0 sc-1q2xevf-0 jDmPYK"
                            >
                                Liquidity
                            </a>
                            <a
                                href="/farms"
                                className="sc-10o9h38-0 sc-1q2xevf-0 jDmPYK"
                            >
                                Farms
                            </a>
                            <a
                                href="/pools"
                                className="sc-10o9h38-0 sc-1q2xevf-0 jDmPYK"
                            >
                                Pools
                            </a>
                            <a
                                href="/info"
                                className="sc-10o9h38-0 sc-1q2xevf-0 jDmPYK"
                            >
                                Info
                            </a>
                            <a
                                href="/more"
                                className="sc-10o9h38-0 sc-1q2xevf-0 jDmPYK"
                            >
                                More
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;