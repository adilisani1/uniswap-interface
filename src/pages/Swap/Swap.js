import React, { useState } from 'react';
import './Swap.css';

const Swap = () => {
    const [inputValues, setInputValues] = useState({
        "you-pay": "",
        "you-receive": ""
    });

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        const inputName = event.target.name;

        if (/^[0-9]*[.,]?[0-9]*$/.test(inputValue)) {
            setInputValues((prevInputValues) => ({
                ...prevInputValues,
                [inputName]: inputValue
            }));
        }
    };

    return (

        <div className='swap-wrapper'>


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
                                    <label className='youPay-label'>You pay</label>
                                    <div className='paying-wrapper'>
                                        <input id="token-amount" class="token-amount-input"
                                            inputMode="numeric"
                                            autocomplete="off"
                                            autocorrect="off"
                                            type="text"
                                            name="you-pay"
                                            placeholder="0"
                                            minlength="1"
                                            maxlength="79"
                                            spellcheck="false"
                                            value={inputValues["you-pay"]}
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

                        <div className='grid'>
                            <div className='you-receive'>
                                <div id='swap-currency-input' className='swap-currency'>
                                    <div className='input-wrapper'>
                                        <label className='youPay-label'>You receive</label>
                                        <div className='paying-wrapper'>
                                            <input id="token-amount" class="token-amount-input"
                                                inputMode="numeric"
                                                autocomplete="off"
                                                autocorrect="off"
                                                name="you-receive"
                                                type="text"
                                                placeholder="0"
                                                minlength="1"
                                                maxlength="79"
                                                spellcheck="false"
                                                value={inputValues["you-receive"]}
                                                onChange={handleInputChange} />

                                            <div>
                                                <button id="open-currency-select" className='open-currency-btn'>
                                                    <span className=''>
                                                        <div className='cryptocurrency-wrapper'>
                                                            <div class="text-wrapper" >
                                                                <span class="select-token">Select token</span>
                                                            </div>

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
                            <div>
                                <button font-weight="600" id="connectId" class="connect-wallet">
                                    <div class=""></div>
                                    Connect Wallet
                                </button>
                            </div>
                        </div>

                    </div>


                </main>
            </div>
        </div>

    );
}

export default Swap;