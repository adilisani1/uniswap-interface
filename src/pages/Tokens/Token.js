import React, { useState, useEffect } from 'react';
import './Token.css';

const Token = () => {
    const options = [
        { value: 'etheruim', imgSrc: './assets/images/tokens/eth-icon.png', label: 'Ethereum' },
        { value: 'polygon', imgSrc: './assets/images/tokens/polygon.svg', label: 'Polygon' },
        { value: 'arbitrum', imgSrc: './assets/images/tokens/arbitrum.svg', label: 'Arbitrum' },
        { value: 'optimistic', imgSrc: './assets/images/tokens/optimistic.svg', label: 'Optimistic' },
        { value: 'celo', imgSrc: './assets/images/tokens/celo.svg', label: 'Celo' },
        { value: 'bnbchain', imgSrc: './assets/images/tokens/bnb.svg', label: 'BNB Chain' },
        { value: 'avalanche', imgSrc: './assets/images/tokens/avax.svg', label: 'Avalanche' },
        { value: 'base', imgSrc: './assets/images/tokens/base.svg', label: 'Base' },
    ];

    const updateTime = [
        { value: "1h", label: '1H' },
        { value: "1d", label: '1D' },
        { value: "1w", label: '1W' },
        { value: "1m", label: '1M' },
        { value: "1y", label: '1Y' },
    ]

    const allTableData = [
        {
            id: 1,
            name: 'Ether',
            symbol: 'ETH',
            image: 'assets/images/tokens/eth-icon.png',
            price: '$1,847.65',
            change: "0.12%",
            tvl: "$1.2B",
            volume: "$257.0M",
            label: 'Ethereum'

        },

        {
            id: 2,
            name: 'USD Coin',
            symbol: 'USDC',
            image: 'assets/images/usdt-polygon-icon.png',
            price: '$1.00',
            change: "0.00%",
            tvl: "617.1M",
            volume: "$149.4M",
            label: 'Polygon'
        },
    ]


    // Filter the table data based on the selected option
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const [updateOption, setUpdateOption] = useState(updateTime[1])
    const [isOpen, setIsOpen] = useState(false);
    const [handleOpen, setHandleOpen] = useState(false);

    const [filteredTableData, setFilteredTableData] = useState(allTableData);


    const handleCryptoOpen = () => {
        setIsOpen(!isOpen);
        setHandleOpen(false);
    }

    const handleUpdateOpen = () => {
        setHandleOpen(!handleOpen);
        setIsOpen(false);
    }
    useEffect(() => {
        console.log('Current selected option: ', selectedOption); // Debugging line
        const filteredData = allTableData.filter((data) =>
            data.label === selectedOption.label

        );

        setFilteredTableData(filteredData);
    }, [selectedOption]);


    return (
        <React.Fragment>
            <div className='token-wrapper'>
                <div className='token-container'>
                    <div className='token-title-wrapper'>
                        <div className='token-title'>
                            <p>Top tokens on Uniswap</p>
                        </div>
                    </div>

                    <div className='filter-wrapper'>
                        <div className='filter-dropdowns'>
                            <div className='crypto-currency-drop'>

                                {/* token-btn */}
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


                                {/* token-btn dropdown */}
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
                                            <div className=''>
                                                {selectedOption.value === option.value && <i className="tick-icon ri-check-line"></i>}
                                            </div>
                                        </li>
                                    ))}

                                </ul>
                                }

                                {/* token update button */}
                                <div className='token-update'>
                                    <button id='updateBtn' className='update-btn' onClick={handleUpdateOpen}>
                                        <div className='token-update-text'>
                                            {updateOption.label}
                                            <span className={`icon-drop ${handleOpen ? 'rotated' : ''}`}>
                                                <i className="ri-arrow-down-s-line"></i>
                                            </span>
                                        </div>
                                    </button>

                                    {/* //token update button dropdown */}
                                    {handleOpen && <ul className='igfebL'>
                                        {updateTime.map((op) => (
                                            <li id='' className='chstga iCcgEc'>
                                                <div className='' onClick={() => {
                                                    setUpdateOption(op);
                                                    setHandleOpen(false);
                                                }}>
                                                    {op.label}
                                                </div>
                                                <div className=''>
                                                    {updateOption.value === op.value && <i className="tick-icon ri-check-line"></i>}
                                                </div>
                                            </li>
                                        ))}

                                    </ul>
                                    }
                                </div>

                            </div>

                            <div id='tokenInputWrapper' className="token-input-wrapper">
                                <div className="">
                                    <input
                                        data-cy="explore-tokens-search-input"
                                        type="search"
                                        placeholder="Filter tokens"
                                        id="searchBar"
                                        autoComplete="off"
                                        className="token-input"
                                        defaultValue=""
                                    />
                                </div>
                            </div>

                        </div>
                    </div>


                    {/* Data Head  */}
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



                        {/* Data Body */}
                        <div className="sc-19z0ycm-1 ejgNi">
                            {filteredTableData.map((data, index) => (
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
                                                                src={data.image}
                                                                alt="ETH logo"
                                                                className="sc-12k1pn4-1 bwVixy"
                                                            />
                                                        </div>
                                                        <div className="sc-12k1pn4-4 epsCee" />
                                                    </div>
                                                    <div className="sc-1bit9h6-0 sc-1bit9h6-17 hJyIyF gKCxsP">
                                                        <div data-cy="token-name" className="sc-1bit9h6-18 kSNzln">
                                                            {/* Ether */}{data.name}
                                                        </div>
                                                        <div className="sc-1bit9h6-0 sc-1bit9h6-19 hJyIyF jRVRlR">
                                                            {/* ETH */}{data.symbol}
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
                                                        {data.price}
                                                        {/* $1,847.65 */}
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
                                                    <span className="sc-1nu6e54-2 braSjM">
                                                        {/* 0.05% */}{data.change}
                                                    </span>
                                                </div>
                                            </div>
                                            <div
                                                data-testid="tvl-cell"
                                                className="sc-1bit9h6-0 sc-1bit9h6-6 sc-1bit9h6-7 hJyIyF dQscKx fLGPoq"
                                            >
                                                <div className="sc-1bit9h6-2 bvHTKj">
                                                    {/* $1.2B */}{data.tvl}
                                                </div>
                                            </div>
                                            <div
                                                data-testid="volume-cell"
                                                className="sc-1bit9h6-0 sc-1bit9h6-6 sc-1bit9h6-20 hJyIyF dQscKx gEaRbj"
                                            >
                                                <div className="sc-1bit9h6-2 bvHTKj">
                                                    {/* $133.9M */} {data.volume}
                                                </div>
                                            </div>
                                            <div className="sc-1bit9h6-0 sc-1bit9h6-14 hJyIyF NpKpm">
                                                <div className="sc-1bit9h6-0 sc-1bit9h6-15 hJyIyF FLymZ">
                                                    <div style={{ width: "100%", height: "100%" }}>
                                                        graph-img
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}

                            {/* <div className="sc-19z0ycm-1 ejgNi">
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
                        </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Token;
