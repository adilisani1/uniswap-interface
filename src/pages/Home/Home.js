import React from 'react';

import './Home.css';

const Home = () => {
    return (
        <div className='container'>
            <div className='shade-parent'>
                <div className='shade'></div>
            </div>
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

                            </div>
                        </main>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Home;