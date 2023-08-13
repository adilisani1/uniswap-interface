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


    const [selectedOption, setSelectedOption] = useState(options[0]);
    const [isOpen, setIsOpen] = useState(false);


    const dropDownHandler = () => {
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
                            <button id='crypto-btn' onClick={dropDownHandler}>
                                <div className='crypto-btn-content'>
                                    <div className='text-and-img'>
                                        <img src={selectedOption.imgSrc} alt='selected-crypto-icon' />
                                        {selectedOption.label}
                                    </div>
                                    <span className='icon-drop'>
                                        <i className="ri-arrow-down-s-line"></i>
                                    </span>
                                </div>
                            </button>
                            {/* //Drop down */}
                            {isOpen && (
                                <span className='dropdown-items-wrapper'>
                                    {options.map((option, index) => (
                                        <div id={`dropdownItem-${index}`} className='dropdown-item drop-i' key={index} >
                                            <div className='item-crypto' onClick={() => {
                                                console.log('Selected option:', selectedOption);
                                                console.log('Current option:', option);
                                                setSelectedOption(option);
                                                setIsOpen(false);
                                            }}>
                                                <img src={option.imgSrc} />
                                                {option.label}
                                            </div>
                                            <div className={`tick-mark ${selectedOption === option ? 'active' : ''}`}>
                                                <i className="tick-icon ri-check-line"></i>
                                            </div>
                                        </div>
                                    ))}

                                </span>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Token;