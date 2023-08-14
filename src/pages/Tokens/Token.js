import React, { useState } from 'react';
import './Token.css';

const Token = () => {
    const options = [
        { imgSrc: './assets/images/eth-icon.png', label: 'Ethereum' },
        { imgSrc: './assets/images/polygon.svg', label: 'Polygon' },
        { imgSrc: './assets/images/arbitrum.svg', label: 'Arbitrum' },
        { imgSrc: './assets/images/optimistic.svg', label: 'Optimistic' },
        { imgSrc: './assets/images/celo.svg', label: 'Celo' },
        { imgSrc: './assets/images/bnb.svg', label: 'BNB Chain' },
        { imgSrc: './assets/images/avax.svg', label: 'Avalanche' },
        { imgSrc: './assets/images/base.svg', label: 'Base' },
    ];

    const allTableData = [
        { id: 1, name: 'Token 1', price: '$100', label: 'Ethereum' },
        { id: 2, name: 'Token 2', price: '$200', label: 'Polygon' },
        { id: 3, name: 'Token 3', price: '$150', label: 'Arbitrum' },

    ];

    // Filter the table data based on the selected option
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const [isOpen, setIsOpen] = useState(false);
    const filteredTableData = allTableData.filter(data => data.label === selectedOption.label);


    const handleCryptoOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <React.Fragment>
            <div className='token-container'>
                <div className='token-title-wrapper'>
                    <div className='token-title'>
                        <p>Top tokens on Uniswap</p>
                    </div>
                </div>

                <div className='filter-wrapper'>
                    <div className='filter-dropdowns'>
                        <div className='crypto-currency-drop'>
                            <button id='crypto-btn ' className='me-2' onClick={handleCryptoOpen}>
                                <div className='crypto-btn-content'>
                                    <div className='text-and-img'>
                                        <img src={selectedOption.imgSrc} alt='selected-crypto-icon' />
                                        {selectedOption.label}
                                    </div>
                                    <span className={`icon-drop ${isOpen ? 'rotated' : ''}`}>
                                        <i className="ri-arrow-down-s-line"></i>
                                    </span>
                                </div>
                            </button>

                            <div className='token-update'>
                                <button id='updateBtn' className='update-btn'>
                                    <div className='token-update-text'>1D
                                        <span className="">
                                            <i className="ri-arrow-down-s-line"></i>
                                        </span>
                                    </div>
                                </button>
                            </div>


                            {/* //Drop down */}

                            {isOpen && <ul className='dropdown-items-wrapper'>
                                {options.map((option) => (
                                    <li id='dropdownItem' className='dropdown-item'>
                                        <div className='item-crypto' onClick={() => {
                                            setSelectedOption(option);
                                            setIsOpen(false);
                                        }}>
                                            <img src={option.imgSrc} />
                                            {option.label}
                                        </div>
                                    </li>
                                ))}

                            </ul>
                            }

                        </div>
                    </div>
                </div>

                {/* Add the table */}
                {/* <div className='table-container'>
                    <table className='token-table'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTableData.map((row) => (
                                <tr key={row.id}>
                                    <td>{row.id}</td>
                                    <td>{row.name}</td>
                                    <td>{row.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div> */}

                {/* Data  */}
                <div className="sc-kjm4pc-4 EQdYt">
                    <div className="sc-kjm4pc-2 jDpEBx">
                        <div className="sc-1gm0luq-3 hMzHak">
                            <button
                                aria-label="networkFilter"
                                data-testid="tokens-network-filter-selected"
                                className="sc-12m0hk4-0 sc-1gm0luq-9 VWsYV kbPnAK"
                            >
                                <div className="sc-1gm0luq-4 ckIpkw">
                                    <div className="sc-1gm0luq-6 efeJnn">
                                        <img
                                            src="assets/images/eth-icon.png"
                                            className="sc-1gm0luq-7 jDZnZF"
                                        />{" "}
                                        Ethereum
                                    </div>
                                    <span className={`icon-drop`}>
                                        <i className="ri-arrow-down-s-line"></i>
                                    </span>
                                </div>
                            </button>
                        </div>
                        <div className="sc-sagiue-3 cATJqe">
                            <button
                                aria-label="timeSelector"
                                data-testid="time-selector"
                                className="sc-12m0hk4-0 VWsYV"
                            >
                                <div className="sc-sagiue-4 evBCeR">
                                    1D
                                    <span className={`icon-drop`}>
                                        <i className="ri-arrow-down-s-line"></i>
                                    </span>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="sc-kjm4pc-2 sc-kjm4pc-3 jDpEBx yEGMT">
                        <div className="sc-135flk-0 jQnlQZ">
                            <input
                                data-cy="explore-tokens-search-input"
                                type="search"
                                placeholder="Filter tokens"
                                id="searchBar"
                                autoComplete="off"
                                className="sc-135flk-1 bYBVFE"
                                defaultValue=""
                            />
                        </div>
                    </div>
                </div>


                <div className="sc-19z0ycm-0 frDKYg">
                    <div
                        data-testid="header-row"
                        className="sc-1bit9h6-1 sc-1bit9h6-4 fTDqns giptel"
                    >
                        <div className="sc-1bit9h6-0 sc-1bit9h6-5 hJyIyF bwVaNf">#</div>
                        <div
                            data-testid="name-cell"
                            className="sc-1bit9h6-0 sc-1bit9h6-8 hJyIyF fLXlBW"
                        >
                            Token name
                        </div>
                        <div
                            data-testid="price-cell"
                            className="sc-1bit9h6-0 sc-1bit9h6-6 sc-1bit9h6-9 hJyIyF knzTRi igka-dA"
                        >
                            <span className="sc-1bit9h6-13 jxjqhR">Price</span>
                        </div>
                        <div
                            data-testid="percent-change-cell"
                            className="sc-1bit9h6-0 sc-1bit9h6-6 sc-1bit9h6-10 hJyIyF knzTRi fLOBMM"
                        >
                            <span className="sc-1bit9h6-13 jxjqhR">Change</span>
                        </div>
                        <div
                            data-testid="tvl-cell"
                            className="sc-1bit9h6-0 sc-1bit9h6-6 sc-1bit9h6-7 hJyIyF knzTRi fLGPoq"
                        >
                            <span className="sc-1bit9h6-13 jxjqhR">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={20}
                                    height={20}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#4C82FB"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1={12} y1={5} x2={12} y2={19} />
                                    <polyline points="19 12 12 19 5 12" />
                                </svg>
                                TVL
                                <div className="sc-d5tbhs-1 cSretk">
                                    <div>
                                        <div className="sc-1bit9h6-26 bcYQwk">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={14}
                                                height={14}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <circle cx={12} cy={12} r={10} />
                                                <line x1={12} y1={16} x2={12} y2={12} />
                                                <line x1={12} y1={8} x2="12.01" y2={8} />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </span>
                        </div>
                        <div
                            data-testid="volume-cell"
                            className="sc-1bit9h6-0 sc-1bit9h6-6 sc-1bit9h6-20 hJyIyF knzTRi gEaRbj"
                        >
                            <span className="sc-1bit9h6-13 jxjqhR">
                                Volume
                                <div className="sc-d5tbhs-1 cSretk">
                                    <div>
                                        <div className="sc-1bit9h6-26 bcYQwk">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={14}
                                                height={14}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <circle cx={12} cy={12} r={10} />
                                                <line x1={12} y1={16} x2={12} y2={12} />
                                                <line x1={12} y1={8} x2="12.01" y2={8} />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </span>
                        </div>
                        <div className="sc-1bit9h6-0 sc-1bit9h6-14 hJyIyF NpKpm" />
                    </div>
                    <div className="sc-19z0ycm-1 ejgNi">
                        <div data-testid="token-table-row-NATIVE">
                            <a className="sc-1bit9h6-16 kiPA-dv" href="#/tokens/ethereum/NATIVE">
                                <div className="sc-1bit9h6-1 cQmpaP">
                                    <div className="sc-1bit9h6-0 sc-1bit9h6-5 hJyIyF bwVaNf">1</div>
                                    <div
                                        data-testid="name-cell"
                                        className="sc-1bit9h6-0 sc-1bit9h6-8 hJyIyF fLXlBW"
                                    >
                                        <div className="sc-1bit9h6-2 sc-1bit9h6-3 bvHTKj jqxpYK">
                                            <div className="sc-12k1pn4-3 eLvYRk">
                                                <div className="sc-12k1pn4-2 ckpBIe">
                                                    <img
                                                        src="assets/images/eth-icon.png"
                                                        alt="ETH logo"
                                                        className="sc-12k1pn4-1 bwVixy"
                                                    />
                                                </div>
                                                <div className="sc-12k1pn4-4 epsCee" />
                                            </div>
                                            <div className="sc-1bit9h6-0 sc-1bit9h6-17 hJyIyF gKCxsP">
                                                <div data-cy="token-name" className="sc-1bit9h6-18 kSNzln">
                                                    Ether
                                                </div>
                                                <div className="sc-1bit9h6-0 sc-1bit9h6-19 hJyIyF jRVRlR">
                                                    ETH
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        data-testid="price-cell"
                                        className="sc-1bit9h6-0 sc-1bit9h6-6 sc-1bit9h6-9 hJyIyF dQscKx igka-dA"
                                    >
                                        <div className="sc-1bit9h6-2 bvHTKj">
                                            <div className="sc-1bit9h6-0 sc-1bit9h6-12 hJyIyF eNYLXF">
                                                $1,847.65
                                                <div className="sc-1bit9h6-0 sc-1bit9h6-11 hJyIyF iQNhmM">
                                                    <div className="sc-1nu6e54-7 cLYUzV">
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        data-testid="percent-change-cell"
                                        className="sc-1bit9h6-0 sc-1bit9h6-6 sc-1bit9h6-10 hJyIyF dQscKx fLOBMM"
                                    >
                                        <div className="sc-1bit9h6-2 bvHTKj">
                                            <div className="sc-1nu6e54-7 cLYUzV">

                                            </div>
                                            <span className="sc-1nu6e54-2 braSjM">0.05%</span>
                                        </div>
                                    </div>
                                    <div
                                        data-testid="tvl-cell"
                                        className="sc-1bit9h6-0 sc-1bit9h6-6 sc-1bit9h6-7 hJyIyF dQscKx fLGPoq"
                                    >
                                        <div className="sc-1bit9h6-2 bvHTKj">$1.2B</div>
                                    </div>
                                    <div
                                        data-testid="volume-cell"
                                        className="sc-1bit9h6-0 sc-1bit9h6-6 sc-1bit9h6-20 hJyIyF dQscKx gEaRbj"
                                    >
                                        <div className="sc-1bit9h6-2 bvHTKj">$133.9M</div>
                                    </div>
                                    <div className="sc-1bit9h6-0 sc-1bit9h6-14 hJyIyF NpKpm">
                                        <div className="sc-1bit9h6-0 sc-1bit9h6-15 hJyIyF FLymZ">
                                            <div style={{ width: "100%", height: "100%" }}>
                                                xyz
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="sc-19z0ycm-1 ejgNi">
                            <div data-testid="token-table-row-NATIVE">
                                <a className="sc-1bit9h6-16 kiPA-dv" href="#/tokens/ethereum/NATIVE">
                                    <div className="sc-1bit9h6-1 cQmpaP">
                                        <div className="sc-1bit9h6-0 sc-1bit9h6-5 hJyIyF bwVaNf">2</div>
                                        <div
                                            data-testid="name-cell"
                                            className="sc-1bit9h6-0 sc-1bit9h6-8 hJyIyF fLXlBW"
                                        >
                                            <div className="sc-1bit9h6-2 sc-1bit9h6-3 bvHTKj jqxpYK">
                                                <div className="sc-12k1pn4-3 eLvYRk">
                                                    <div className="sc-12k1pn4-2 ckpBIe">
                                                        <img
                                                            src="assets/images/usdt-icon.png"
                                                            alt="USDT LOGO"
                                                            className="sc-12k1pn4-1 bwVixy"
                                                        />
                                                    </div>
                                                    <div className="sc-12k1pn4-4 epsCee" />
                                                </div>
                                                <div className="sc-1bit9h6-0 sc-1bit9h6-17 hJyIyF gKCxsP">
                                                    <div data-cy="token-name" className="sc-1bit9h6-18 kSNzln">
                                                        USD Coin
                                                    </div>
                                                    <div className="sc-1bit9h6-0 sc-1bit9h6-19 hJyIyF jRVRlR">
                                                        USDC
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            data-testid="price-cell"
                                            className="sc-1bit9h6-0 sc-1bit9h6-6 sc-1bit9h6-9 hJyIyF dQscKx igka-dA"
                                        >
                                            <div className="sc-1bit9h6-2 bvHTKj">
                                                <div className="sc-1bit9h6-0 sc-1bit9h6-12 hJyIyF eNYLXF">
                                                    $1.00
                                                    <div className="sc-1bit9h6-0 sc-1bit9h6-11 hJyIyF iQNhmM">
                                                        <div className="sc-1nu6e54-7 cLYUzV">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            data-testid="percent-change-cell"
                                            className="sc-1bit9h6-0 sc-1bit9h6-6 sc-1bit9h6-10 hJyIyF dQscKx fLOBMM"
                                        >
                                            <div className="sc-1bit9h6-2 bvHTKj">
                                                <div className="sc-1nu6e54-7 cLYUzV">

                                                </div>
                                                <span className="sc-1nu6e54-2 braSjM">0.00%</span>
                                            </div>
                                        </div>
                                        <div
                                            data-testid="tvl-cell"
                                            className="sc-1bit9h6-0 sc-1bit9h6-6 sc-1bit9h6-7 hJyIyF dQscKx fLGPoq"
                                        >
                                            <div className="sc-1bit9h6-2 bvHTKj">$624.1M</div>
                                        </div>
                                        <div
                                            data-testid="volume-cell"
                                            className="sc-1bit9h6-0 sc-1bit9h6-6 sc-1bit9h6-20 hJyIyF dQscKx gEaRbj"
                                        >
                                            <div className="sc-1bit9h6-2 bvHTKj">$61.8M</div>
                                        </div>
                                        <div className="sc-1bit9h6-0 sc-1bit9h6-14 hJyIyF NpKpm">
                                            <div className="sc-1bit9h6-0 sc-1bit9h6-15 hJyIyF FLymZ">
                                                <div style={{ width: "100%", height: "100%" }}>
                                                    xyz
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Token;
