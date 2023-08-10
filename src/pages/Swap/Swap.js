import React, { useState } from 'react';
import './Swap.css';

const Swap = () => {

    const [inputVal, setInputValue] = useState("");

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        if (/^[0-9]*[.,]?[0-9]*$/.test(inputValue)) {
            setInputValue(inputValue);
        }
    };

    return (
        <div className='container'>
            <div className='swap-card'>
                <a className='card-anchor' href='#/swap'>
                    <div className='card-section'>
                        <main className='card-bg'>
                            <div id="card-top" className='card-top-parent'>
                                <div id="btns-top" className='top-btns'>
                                    <span className='swap-btn'>Swap</span>
                                    <div className='buy'>
                                        <button id='btn-id' className='buy-btn'>Buy</button>
                                    </div>
                                </div>

                                <div className='gear'>
                                    <button className='gear-btn'>
                                        <div>
                                            {/* <i className="fa-solid fa-gear"></i> */}
                                            <i class="ri-settings-3-fill gear-icon"></i>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            {/* You Pay Tab */}
                            <div>
                                <div className='you-pay'>
                                    <div id='swap-currency-input' className='swap-currency'>
                                        <div className='input-wrapper'>
                                            <label className='youPay-label'>You Pay</label>
                                            <div className='paying-wrapper'>
                                                <input id="token-amount" class="token-amount-input"
                                                    inputMode="numeric"
                                                    autocomplete="off"
                                                    autocorrect="off"
                                                    type="text"
                                                    placeholder="0"
                                                    minlength="1"
                                                    maxlength="79"
                                                    spellcheck="false"
                                                    value={inputVal}
                                                    onChange={handleInputChange} />

                                                <div>
                                                    <button id="open-currency-select" className='open-currency-btn'>
                                                        <span className=''>
                                                            <div className='cryptocurrency-wrapper'>
                                                                <div class="image-wrapper " >
                                                                    <div>
                                                                        <img className='icon-image' src='./assets/images/eth-icon.png' alt='eth-icon' />
                                                                    </div>
                                                                </div>
                                                                <span class="token-name">ETH</span>
                                                            </div>
                                                            <div className='dropdown-icon'>
                                                                <i className="ri-arrow-down-s-line"></i>                                                            </div>
                                                        </span>

                                                    </button>
                                                </div>


                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div className='switch-button'>
                                    <div className='switch-bg'>
                                        <i className="arrow-down ri-arrow-down-line" ></i>
                                    </div>
                                </div>
                            </div>


                        </main>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Swap;