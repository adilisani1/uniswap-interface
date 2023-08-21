import React from 'react';
import './LiquidityModal.css';

const LiquidityModal = () => {
    return (

        <div>

            <div className="sc-1dv6j2d-0 bCNYil">
                <div
                    data-testid="popups"
                    className="sc-1kykgp9-2 sc-fo3pji-2 kqyYZZ hoPRWs"
                />
                <div className="sc-bczRLJ sc-nrd8cx-0 sc-nrd8cx-4 hJYFVB add-liquidity-head-content leSroW">
                    <div className="sc-8msj8j-0 jyEmZw">
                        <div className="sc-sx9n2y-0 kandXm sc-8msj8j-1 dihEkF css-x9zcw6">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://etherscan.io/block/17947455"
                                className="sc-7yzmni-9 jnMVFj"
                            >
                                <div className="sc-d5tbhs-1 cSretk">
                                    <div>17947455 </div>
                                </div>
                            </a>
                        </div>
                        <div className="sc-8msj8j-2 ePKXce" />{" "}
                    </div>
                </div>
                <div className="sc-1evvmet-0 kopCVp">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        data-testid="uniswap-wallet-banner"
                        className="sc-1evvmet-2 bqwZaK"
                    >
                        <line x1={18} y1={6} x2={6} y2={18} />
                        <line x1={6} y1={6} x2={18} y2={18} />
                    </svg>
                    <div className="sc-1kykgp9-2 hinRyL">
                        <div className="sc-sx9n2y-0 EngNh css-10k34qy">
                            Uniswap in your pocket
                        </div>
                    </div>
                    <div className="sc-bczRLJ sc-nrd8cx-0 sc-1evvmet-1 hJYFVB add-liquidity-head-content hMzltt">
                        <button
                            width="125px"
                            className="sc-bczRLJ jnEFg sc-fwrjc2-1 sc-1evvmet-3 hgZoRv cXqfrP"
                        >
                            <div className="sc-sx9n2y-0 bhqxth css-18hn7mq">Learn more</div>
                        </button>
                    </div>
                </div>
                <div className="sc-dphd4z-2 fpzixd">
                    <main className="sc-ebxalf-0 sc-dphd4z-0 fuZLkx ldkNfj">
                        <div className="sc-iwajx4-0 jMTqNW">
                            <div
                                className="sc-bczRLJ sc-nrd8cx-0 sc-nrd8cx-1 hJYFVB add-liquidity-head-content select-pair-title"
                                style={{ padding: "1rem 1rem 0px" }}
                            >
                                <a flex={1} className="sc-iwajx4-1 dskEvD" href="#/pools">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#7780A0"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="sc-iwajx4-3 ilaylC"
                                    >
                                        <line x1={19} y1={12} x2={5} y2={12} />
                                        <polyline points="12 19 5 12 12 5" />
                                    </svg>
                                </a>
                                <div
                                    className="sc-sx9n2y-0 kandXm css-68pfx3"
                                    style={{ flex: "1 1 0%", margin: "auto", textAlign: "start" }}
                                >
                                    Add Liquidity
                                </div>
                                <div className="css-vurnku" style={{ marginRight: "0.5rem" }}>
                                    <div
                                        className="sc-bczRLJ sc-nrd8cx-0 fgCeff add-liquidity-head-content"
                                        style={{ width: "fit-content", minWidth: "fit-content" }}
                                    >
                                        <div className="sc-dphd4z-10 ibkJdv">
                                            <button className="sc-bczRLJ eVFBbS sc-fwrjc2-1 sc-fwrjc2-9 iXNcpp fUHoaN">
                                                <div className="sc-sx9n2y-0 gOBtVo css-15li2d9">
                                                    Clear All
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="sc-1ndknrv-0 geRwLC">
                                    <button
                                        id="open-settings-dialog-button"
                                        data-testid="open-settings-dialog-button"
                                        aria-label="Transaction Settings"
                                        className="sc-1x8ot1t-1 fqDOUX"
                                    >
                                        <div className="sc-bczRLJ sc-nrd8cx-0 sc-1x8ot1t-2 hJYFVB add-liquidity-head-content jTEzgt">
                                            <svg
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="sc-1x8ot1t-0 bcMbuY"
                                            >
                                                <path
                                                    d="M20.83 14.6C19.9 14.06 19.33 13.07 19.33 12C19.33 10.93 19.9 9.93999 20.83 9.39999C20.99 9.29999 21.05 9.1 20.95 8.94L19.28 6.06C19.22 5.95 19.11 5.89001 19 5.89001C18.94 5.89001 18.88 5.91 18.83 5.94C18.37 6.2 17.85 6.34 17.33 6.34C16.8 6.34 16.28 6.19999 15.81 5.92999C14.88 5.38999 14.31 4.41 14.31 3.34C14.31 3.15 14.16 3 13.98 3H10.02C9.83999 3 9.69 3.15 9.69 3.34C9.69 4.41 9.12 5.38999 8.19 5.92999C7.72 6.19999 7.20001 6.34 6.67001 6.34C6.15001 6.34 5.63001 6.2 5.17001 5.94C5.01001 5.84 4.81 5.9 4.72 6.06L3.04001 8.94C3.01001 8.99 3 9.05001 3 9.10001C3 9.22001 3.06001 9.32999 3.17001 9.39999C4.10001 9.93999 4.67001 10.92 4.67001 11.99C4.67001 13.07 4.09999 14.06 3.17999 14.6H3.17001C3.01001 14.7 2.94999 14.9 3.04999 15.06L4.72 17.94C4.78 18.05 4.89 18.11 5 18.11C5.06 18.11 5.12001 18.09 5.17001 18.06C6.11001 17.53 7.26 17.53 8.19 18.07C9.11 18.61 9.67999 19.59 9.67999 20.66C9.67999 20.85 9.82999 21 10.02 21H13.98C14.16 21 14.31 20.85 14.31 20.66C14.31 19.59 14.88 18.61 15.81 18.07C16.28 17.8 16.8 17.66 17.33 17.66C17.85 17.66 18.37 17.8 18.83 18.06C18.99 18.16 19.19 18.1 19.28 17.94L20.96 15.06C20.99 15.01 21 14.95 21 14.9C21 14.78 20.94 14.67 20.83 14.6ZM12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="sc-dphd4z-1 kyrmAc">
                            <div className="sc-dphd4z-6 bZciRa">
                                <div className="sc-1kykgp9-2 kqAail">
                                    <div className="sc-1kykgp9-2 select-pair">
                                        <div className="sc-bczRLJ sc-nrd8cx-0 sc-nrd8cx-1 eYHTYx add-liquidity-head-content select-pair-title">
                                            <div className="sc-sx9n2y-0 kivXvb css-1lohbqv">
                                                Select Pair
                                            </div>
                                        </div>
                                        <div className="sc-bczRLJ sc-nrd8cx-0 sc-nrd8cx-1 hJYFVB add-liquidity-head-content select-pair-title">
                                            <div
                                                id="add-liquidity-input-tokena LfrBf "
                                                className="sc-33m4yg-0 bwZKda sc-dphd4z-4 " >
                                                <div className="sc-33m4yg-2 fLWrtM">
                                                    <div
                                                        className="sc-33m4yg-4 ixomhB"
                                                        style={{ padding: 0, borderRadius: 8 }}
                                                    >
                                                        <button className="sc-bczRLJ lfsInV sc-fwrjc2-1 sc-fwrjc2-5 sc-33m4yg-3 iXNcpp gABegM byfJNE open-currency-select-button">
                                                            <span className="sc-33m4yg-7 exaBa-D">
                                                                <div className="sc-bczRLJ sc-nrd8cx-0 sc-nrd8cx-4 hJYFVB add-liquidity-head-content leSroW">
                                                                    <div
                                                                        className="sc-12k1pn4-3 eLvYRk"
                                                                        style={{ marginRight: "0.5rem" }}
                                                                    >
                                                                        <div className="sc-12k1pn4-2 ckpBIe">
                                                                            <img
                                                                                src="/assets/images/tokens/eth-icon.png"
                                                                                alt="ETH logo"
                                                                                className="sc-12k1pn4-1 bwVixy"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <span className="sc-33m4yg-9 QedwV token-symbol-container">
                                                                        ETH
                                                                    </span>
                                                                </div>
                                                                <svg
                                                                    width={12}
                                                                    height={7}
                                                                    viewBox="0 0 12 7"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    className="sc-33m4yg-8 eybeQL"
                                                                >
                                                                    <path
                                                                        d="M0.97168 1L6.20532 6L11.439 1"
                                                                        stroke="#AEAEAE"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ width: 12 }} />
                                            <div
                                                id="add-liquidity-input-tokenb"
                                                className="sc-33m4yg-0 bwZKda sc-dphd4z-4 LfrBf"
                                            >
                                                <div className="sc-33m4yg-2 fLWrtM">
                                                    <div
                                                        className="sc-33m4yg-4 ixomhB"
                                                        style={{ padding: 0, borderRadius: 8 }}
                                                    >
                                                        <button id='selectTokenLiquidity' className="lfsInV iXNcpp gABegM btn-select-token xyzz open-currency-select-button">
                                                            <span className="sc-33m4yg-7 exaBa-D">
                                                                <div className="sc-bczRLJ sc-nrd8cx-0 sc-nrd8cx-4 hJYFVB add-liquidity-head-content leSroW">
                                                                    <span className="sc-33m4yg-9 QedwV token-symbol-container">
                                                                        Select a token
                                                                    </span>
                                                                </div>
                                                                <svg
                                                                    width={12}
                                                                    height={7}
                                                                    viewBox="0 0 12 7"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    className="sc-33m4yg-8 jsUfgJ"
                                                                >
                                                                    <path
                                                                        d="M0.97168 1L6.20532 6L11.439 1"
                                                                        stroke="#AEAEAE"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sc-1kykgp9-2 kqzAOQ">
                                            <div
                                                disabled=""
                                                className="sc-1kykgp9-2 sc-dphd4z-3 select-pair abeVB"
                                            >
                                                <div className="sc-bczRLJ sc-57i8km-0 sc-1xk2z0e-0 hJYFVB hqshMl daCIQp">
                                                    <div className="sc-bczRLJ sc-nrd8cx-0 sc-nrd8cx-1 hJYFVB add-liquidity-head-content select-pair-title">
                                                        <div
                                                            id="add-liquidity-selected-fee"
                                                            className="sc-1kykgp9-2 jdTKGL"
                                                        >
                                                            <div className="sc-sx9n2y-0 kivXvb css-1lohbqv">
                                                                Fee tier
                                                            </div>
                                                            <div className="sc-sx9n2y-0 bftkTM css-fczr0v">
                                                                The % you will earn in fees.
                                                            </div>
                                                        </div>
                                                        <button
                                                            width="auto"
                                                            className="sc-bczRLJ cBKomN sc-fwrjc2-1 sc-fwrjc2-5 bNtdbJ gABegM"
                                                        >
                                                            Hide
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="sc-1xk2z0e-1 cAVgDY">
                                                    <button className="sc-bczRLJ lbXqUa sc-fwrjc2-1 sc-fwrjc2-7 bLeoBs cjlwMK">
                                                        <div className="sc-bczRLJ sc-nrd8cx-0 sc-nrd8cx-1 hJYFVB add-liquidity-head-content select-pair-title">
                                                            <div className="sc-1kykgp9-2 ftmvKp">
                                                                <div className="sc-1kykgp9-2 gHHFoz">
                                                                    <div className="sc-sx9n2y-0 kivXvb sc-1k0cth1-0 gRnevX css-1lohbqv">
                                                                        0.01%
                                                                    </div>
                                                                    <div className="sc-sx9n2y-0 bftkTM css-fczr0v">
                                                                        Best for very stable pairs.
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                    <button className="sc-bczRLJ lbXqUa sc-fwrjc2-1 sc-fwrjc2-7 bLeoBs cjlwMK">
                                                        <div className="sc-bczRLJ sc-nrd8cx-0 sc-nrd8cx-1 hJYFVB add-liquidity-head-content select-pair-title">
                                                            <div className="sc-1kykgp9-2 ftmvKp">
                                                                <div className="sc-1kykgp9-2 gHHFoz">
                                                                    <div className="sc-sx9n2y-0 kivXvb sc-1k0cth1-0 gRnevX css-1lohbqv">
                                                                        0.05%
                                                                    </div>
                                                                    <div className="sc-sx9n2y-0 bftkTM css-fczr0v">
                                                                        Best for stable pairs.
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                    <button className="sc-bczRLJ lbXqUa sc-fwrjc2-1 sc-fwrjc2-7 bLeoBs cjlwMK">
                                                        <div className="sc-bczRLJ sc-nrd8cx-0 sc-nrd8cx-1 hJYFVB add-liquidity-head-content select-pair-title">
                                                            <div className="sc-1kykgp9-2 ftmvKp">
                                                                <div className="sc-1kykgp9-2 gHHFoz">
                                                                    <div className="sc-sx9n2y-0 kivXvb sc-1k0cth1-0 gRnevX css-1lohbqv">
                                                                        0.3%
                                                                    </div>
                                                                    <div className="sc-sx9n2y-0 bftkTM css-fczr0v">
                                                                        Best for most pairs.
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                    <button className="sc-bczRLJ lbXqUa sc-fwrjc2-1 sc-fwrjc2-7 bLeoBs cjlwMK">
                                                        <div className="sc-bczRLJ sc-nrd8cx-0 sc-nrd8cx-1 hJYFVB add-liquidity-head-content select-pair-title">
                                                            <div className="sc-1kykgp9-2 ftmvKp">
                                                                <div className="sc-1kykgp9-2 gHHFoz">
                                                                    <div className="sc-sx9n2y-0 kivXvb sc-1k0cth1-0 gRnevX css-1lohbqv">
                                                                        1%
                                                                    </div>
                                                                    <div className="sc-sx9n2y-0 bftkTM css-fczr0v">
                                                                        Best for exotic pairs.
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{" "}
                                </div>
                                <div>
                                    <div disabled="" className="sc-1kykgp9-2 sc-dphd4z-3 jdTKGL abeVB">
                                        <div className="sc-1kykgp9-2 select-pair">
                                            <div className="sc-sx9n2y-0 kivXvb css-1lohbqv">
                                                Deposit Amounts
                                            </div>
                                            <div
                                                id="add-liquidity-input-tokena"
                                                className="sc-33m4yg-0 bWBBwH"
                                            >
                                                <div className="sc-33m4yg-2 eixZHY">
                                                    <div className="sc-33m4yg-4 hGEJDw">
                                                        <input
                                                            className="sc-1x3stf0-0 iIWDYd sc-33m4yg-11 jLdqNm token-amount-input"
                                                            inputMode="decimal"
                                                            autoComplete="off"
                                                            autoCorrect="off"
                                                            type="text"
                                                            pattern="^[0-9]*[.,]?[0-9]*$"
                                                            placeholder={0}
                                                            minLength={1}
                                                            maxLength={79}
                                                            spellCheck="false"
                                                            defaultValue=""
                                                        />
                                                        <button
                                                            className="sc-bczRLJ lfsInV sc-fwrjc2-1 sc-fwrjc2-5 sc-33m4yg-3 iXNcpp gABegM FCsuo open-currency-select-button"
                                                            pointerEvents="none"
                                                        >
                                                            <span className="sc-33m4yg-7 exaBa-D">
                                                                <div className="sc-bczRLJ sc-nrd8cx-0 sc-nrd8cx-4 hJYFVB add-liquidity-head-content leSroW">
                                                                    <div
                                                                        className="sc-12k1pn4-3 eLvYRk"
                                                                        style={{ marginRight: "0.5rem" }}
                                                                    >
                                                                        <div className="sc-12k1pn4-2 ckpBIe">
                                                                            <img
                                                                                src="/assets/images/tokens/eth-icon.png"
                                                                                alt="ETH logo"
                                                                                className="sc-12k1pn4-1 bwVixy"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <span className="sc-33m4yg-9 QedwV token-symbol-container">
                                                                        ETH
                                                                    </span>
                                                                </div>
                                                            </span>
                                                        </button>
                                                    </div>
                                                    <div className="sc-33m4yg-5 sc-33m4yg-6 bhOLmY iOHrah">
                                                        <div className="sc-bczRLJ sc-nrd8cx-0 sc-nrd8cx-1 hJYFVB add-liquidity-head-content select-pair-title">
                                                            <div className="sc-u7b06n-1 eaouLI">
                                                                <div className="sc-bczRLJ sc-nrd8cx-0 hJYFVB cTSGwR">
                                                                    <div className="sc-sx9n2y-0 bftkTM css-zhpkf8">
                                                                        <div className="sc-d5tbhs-1 cSretk">
                                                                            <div>-</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <span />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                id="add-liquidity-input-tokenb"
                                                className="sc-33m4yg-0 bWBBwH"
                                            >
                                                <div className="sc-33m4yg-2 eixZHY">
                                                    <div className="sc-33m4yg-4 hGEJDw">
                                                        <input
                                                            className="sc-1x3stf0-0 iIWDYd sc-33m4yg-11 jLdqNm token-amount-input"
                                                            inputMode="decimal"
                                                            autoComplete="off"
                                                            autoCorrect="off"
                                                            type="text"
                                                            pattern="^[0-9]*[.,]?[0-9]*$"
                                                            placeholder={0}
                                                            minLength={1}
                                                            maxLength={79}
                                                            spellCheck="false"
                                                            defaultValue=""
                                                        />
                                                        <button
                                                            className="sc-bczRLJ lfsInV sc-fwrjc2-1 sc-fwrjc2-5 sc-33m4yg-3 iXNcpp gABegM gsotQf open-currency-select-button"
                                                            pointerEvents="none"
                                                        >
                                                            <span className="sc-33m4yg-7 exaBa-D">
                                                                <div className="sc-bczRLJ sc-nrd8cx-0 sc-nrd8cx-4 hJYFVB add-liquidity-head-content leSroW">
                                                                    <span className="sc-33m4yg-9 QedwV token-symbol-container">
                                                                        Select a token
                                                                    </span>
                                                                </div>
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sc-dphd4z-11 gDjDiY">
                                    <button className="sc-bczRLJ gIjoKy sc-fwrjc2-1 sc-fwrjc2-4 jpJVsM gcLzky">
                                        <div className="sc-fwrjc2-0 iBwqId" />
                                        Connect Wallet
                                    </button>
                                </div>
                                <div className="sc-1kykgp9-2 sc-dphd4z-7 kqAail kDKqNI">
                                    <div disabled="" className="sc-1kykgp9-2 sc-dphd4z-3 select-pair abeVB">
                                        <div className="sc-bczRLJ sc-nrd8cx-0 sc-nrd8cx-1 hJYFVB add-liquidity-head-content select-pair-title">
                                            <div className="sc-sx9n2y-0 kivXvb css-1lohbqv">
                                                Set Price Range
                                            </div>
                                        </div>
                                        <div className="sc-1kykgp9-2 select-pair" style={{ minHeight: 200 }}>
                                            <div
                                                className="sc-1kykgp9-0 sc-1kykgp9-1 iCxowP iHDZL"
                                                style={{ height: "100%", justifyContent: "center" }}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={56}
                                                    height={56}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="#0D111C"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                                                    <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                                                </svg>
                                                <div className="sc-sx9n2y-0 kandXm css-2c5569">
                                                    Your position will appear here.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div disabled="" className="sc-1kykgp9-2 sc-dphd4z-3 select-pair abeVB">
                                        <div className="sc-dphd4z-8 iEFlEd">
                                            <div className="sc-dphd4z-9 ica-dCy">
                                                <div className="sc-1kykgp9-2 select-pair">
                                                    <div className="sc-1kykgp9-2 select-pair">
                                                        <div className="sc-bczRLJ sc-nrd8cx-0 sc-nrd8cx-1 hJYFVB add-liquidity-head-content select-pair-title">
                                                            <div
                                                                width="48%"
                                                                className="sc-bczRLJ sc-57i8km-0 sc-57i8km-5 sc-kflffs-2 QbmbL fzKOCE jEMLXw juzULa"
                                                            >
                                                                <div className="sc-1kykgp9-2 hinVCB">
                                                                    <div className="sc-sx9n2y-0 kandXm sc-kflffs-4 sOAUt css-9bv76i">
                                                                        Min Price
                                                                    </div>
                                                                    <div className="sc-kflffs-0 doiTNY">
                                                                        <button
                                                                            data-testid="decrement-price-range"
                                                                            disabled=""
                                                                            className="sc-bczRLJ lfsInV sc-fwrjc2-1 sc-fwrjc2-5 sc-kflffs-1 iXNcpp fwMHli fVdqbr"
                                                                        >
                                                                            <div
                                                                                disabled=""
                                                                                className="sc-sx9n2y-0 EngNh sc-kflffs-5 bBLeJU css-15li2d9"
                                                                            >
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width={18}
                                                                                    height={18}
                                                                                    viewBox="0 0 24 24"
                                                                                    fill="none"
                                                                                    stroke="currentColor"
                                                                                    strokeWidth={2}
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                >
                                                                                    <line x1={5} y1={12} x2={19} y2={12} />
                                                                                </svg>
                                                                            </div>
                                                                        </button>
                                                                        <input
                                                                            className="sc-1x3stf0-0 gOAndh sc-kflffs-3 FNRPD rate-input-0"
                                                                            fontSize="20px"
                                                                            inputMode="decimal"
                                                                            autoComplete="off"
                                                                            autoCorrect="off"
                                                                            type="text"
                                                                            pattern="^[0-9]*[.,]?[0-9]*$"
                                                                            placeholder={0}
                                                                            minLength={1}
                                                                            maxLength={79}
                                                                            spellCheck="false"
                                                                            defaultValue=""
                                                                        />
                                                                        <button
                                                                            data-testid="increment-price-range"
                                                                            disabled=""
                                                                            className="sc-bczRLJ lfsInV sc-fwrjc2-1 sc-fwrjc2-5 sc-kflffs-1 iXNcpp fwMHli fVdqbr"
                                                                        >
                                                                            <div
                                                                                disabled=""
                                                                                className="sc-sx9n2y-0 EngNh sc-kflffs-5 bBLeJU css-15li2d9"
                                                                            >
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width={18}
                                                                                    height={18}
                                                                                    viewBox="0 0 24 24"
                                                                                    fill="none"
                                                                                    stroke="currentColor"
                                                                                    strokeWidth={2}
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                >
                                                                                    <line x1={12} y1={5} x2={12} y2={19} />
                                                                                    <line x1={5} y1={12} x2={19} y2={12} />
                                                                                </svg>
                                                                            </div>
                                                                        </button>
                                                                    </div>
                                                                    <div className="sc-sx9n2y-0 kandXm sc-kflffs-4 sOAUt css-9bv76i">
                                                                        per ETH
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                width="48%"
                                                                className="sc-bczRLJ sc-57i8km-0 sc-57i8km-5 sc-kflffs-2 QbmbL fzKOCE jEMLXw juzULa"
                                                            >
                                                                <div className="sc-1kykgp9-2 hinVCB">
                                                                    <div className="sc-sx9n2y-0 kandXm sc-kflffs-4 sOAUt css-9bv76i">
                                                                        Max Price
                                                                    </div>
                                                                    <div className="sc-kflffs-0 doiTNY">
                                                                        <button
                                                                            data-testid="decrement-price-range"
                                                                            disabled=""
                                                                            className="sc-bczRLJ lfsInV sc-fwrjc2-1 sc-fwrjc2-5 sc-kflffs-1 iXNcpp fwMHli fVdqbr"
                                                                        >
                                                                            <div
                                                                                disabled=""
                                                                                className="sc-sx9n2y-0 EngNh sc-kflffs-5 bBLeJU css-15li2d9"
                                                                            >
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width={18}
                                                                                    height={18}
                                                                                    viewBox="0 0 24 24"
                                                                                    fill="none"
                                                                                    stroke="currentColor"
                                                                                    strokeWidth={2}
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                >
                                                                                    <line x1={5} y1={12} x2={19} y2={12} />
                                                                                </svg>
                                                                            </div>
                                                                        </button>
                                                                        <input
                                                                            className="sc-1x3stf0-0 gOAndh sc-kflffs-3 FNRPD rate-input-0"
                                                                            fontSize="20px"
                                                                            inputMode="decimal"
                                                                            autoComplete="off"
                                                                            autoCorrect="off"
                                                                            type="text"
                                                                            pattern="^[0-9]*[.,]?[0-9]*$"
                                                                            placeholder={0}
                                                                            minLength={1}
                                                                            maxLength={79}
                                                                            spellCheck="false"
                                                                            defaultValue=""
                                                                        />
                                                                        <button
                                                                            data-testid="increment-price-range"
                                                                            disabled=""
                                                                            className="sc-bczRLJ lfsInV sc-fwrjc2-1 sc-fwrjc2-5 sc-kflffs-1 iXNcpp fwMHli fVdqbr"
                                                                        >
                                                                            <div
                                                                                disabled=""
                                                                                className="sc-sx9n2y-0 EngNh sc-kflffs-5 bBLeJU css-15li2d9"
                                                                            >
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width={18}
                                                                                    height={18}
                                                                                    viewBox="0 0 24 24"
                                                                                    fill="none"
                                                                                    stroke="currentColor"
                                                                                    strokeWidth={2}
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                >
                                                                                    <line x1={12} y1={5} x2={12} y2={19} />
                                                                                    <line x1={5} y1={12} x2={19} y2={12} />
                                                                                </svg>
                                                                            </div>
                                                                        </button>
                                                                    </div>
                                                                    <div className="sc-sx9n2y-0 kandXm sc-kflffs-4 sOAUt css-9bv76i">
                                                                        per ETH
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        width="auto"
                                                        className="sc-bczRLJ sc-nrd8cx-0 sc-nrd8cx-3 jPOzlZ cJKRtO bORAza"
                                                    >
                                                        <button
                                                            data-testid="set-full-range"
                                                            className="sc-bczRLJ kiUgJx sc-fwrjc2-1 sc-fwrjc2-7 sc-ko0mcr-0 iA-dDQ cjlwMK dIKhsY"
                                                        >
                                                            <div className="sc-sx9n2y-0 kivXvb css-4u0e4f">
                                                                Full Range
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sc-dphd4z-10 ibkJdv">
                                        <button className="sc-bczRLJ gIjoKy sc-fwrjc2-1 sc-fwrjc2-4 jpJVsM gcLzky">
                                            <div className="sc-fwrjc2-0 iBwqId" />
                                            Connect Wallet
                                        </button>
                                    </div>
                                </div>
                                <div className="sc-1dv6j2d-1 gTYdKd">
                                    <a
                                        className="ucmwgad rgw6ezcv rgw6ezb1 rgw6ezed rgw6ez2e1 rgw6ez2jj rgw6ez2oj rgw6ez281 rgw6ezw7 rgw6ezfp rgw6ez7bj rgw6ez7on rgw6ez1e1 rgw6ez16v rgw6ez46d rgw6ez44v rgw6ez3j rgw6ez3sv rgw6ez4ep"
                                        href="#/swap"
                                        style={{ textDecoration: "none" }}
                                    >
                                        Swap
                                    </a>
                                    <a
                                        className="ucmwgad rgw6ezcv rgw6ezb1 rgw6ezed rgw6ez2e1 rgw6ez2jj rgw6ez2oj rgw6ez281 rgw6ezw7 rgw6ezfp rgw6ez7bj rgw6ez7on rgw6ez1e1 rgw6ez16v rgw6ez46d rgw6ez44v rgw6ez3j rgw6ez3sv rgw6ez4ep"
                                        href="#/tokens/ethereum"
                                        style={{ textDecoration: "none" }}
                                    >
                                        Tokens
                                    </a>
                                    <a
                                        data-testid="nft-nav"
                                        className="ucmwgad rgw6ezcv rgw6ezb1 rgw6ezed rgw6ez2e1 rgw6ez2jj rgw6ez2oj rgw6ez281 rgw6ezw7 rgw6ezfp rgw6ez7bj rgw6ez7on rgw6ez1e1 rgw6ez16v rgw6ez46d rgw6ez44v rgw6ez3j rgw6ez3sv rgw6ez4ep"
                                        href="#/nfts"
                                        style={{ textDecoration: "none" }}
                                    >
                                        NFTs
                                    </a>
                                    <div className="_1klryar0 rgw6ez44v rgw6ez44l rgw6ez44z rgw6ez16v">
                                        <a
                                            data-testid="pool-nav-link"
                                            className="ucmwgad rgw6ezcv rgw6ezb1 rgw6ezed rgw6ez2e1 rgw6ez2jj rgw6ez2oj rgw6ez281 rgw6ezw7 rgw6ezfp rgw6ez7bj rgw6ez7on rgw6ez1e1 rgw6ez16v rgw6ez46d rgw6ez44v rgw6ez3j rgw6ez3sv rgw6ez4ej rgw6ez4op"
                                            href="#/pools"
                                            style={{ textDecoration: "none" }}
                                        >
                                            Pools
                                        </a>
                                    </div>
                                    <div className="_1klryar0 rgw6ezw7 rgw6ez112 rgw6ezfp rgw6ezkk">
                                        <div className="_1klryar0 rgw6ez491 rgw6ezqp">
                                            <button
                                                className="_1klryar0 rgw6ez4ep rgw6ez1ad rgw6ez13d rgw6ez6fj _1973yvc1 rgw6ez3j rgw6ez4sd rgw6ez491 rgw6ez44v rgw6ez477 rgw6ez7iz rgw6ez47p rgw6ez46d rgw6ez79z rgw6ez7bb rgw6ez7on"
                                                aria-label="Hide resources"
                                            >
                                                <svg
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    width={24}
                                                    height={24}
                                                >
                                                    <path
                                                        d="M10 10.8334C10.4603 10.8334 10.8334 10.4603 10.8334 10C10.8334 9.53978 10.4603 9.16669 10 9.16669C9.5398 9.16669 9.16671 9.53978 9.16671 10C9.16671 10.4603 9.5398 10.8334 10 10.8334Z"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M15.8334 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10C16.6667 9.53978 16.2936 9.16669 15.8334 9.16669C15.3731 9.16669 15 9.53978 15 10C15 10.4603 15.3731 10.8334 15.8334 10.8334Z"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M4.16671 10.8334C4.62694 10.8334 5.00004 10.4603 5.00004 10C5.00004 9.53978 4.62694 9.16669 4.16671 9.16669C3.70647 9.16669 3.33337 9.53978 3.33337 10C3.33337 10.4603 3.70647 10.8334 4.16671 10.8334Z"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </main>
                </div>
            </div>

        </div>

    )
}

export default LiquidityModal