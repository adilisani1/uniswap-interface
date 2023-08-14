import React from 'react';
import './Pools.css';

const Pools = () => {
    return (
        <div className='container-pool'>
            <div className='pools-container'>
                <div className='pools-wrapper' style={{ width: "100%" }}>
                    <div id="poolsHead" className='pools-head-content' >
                        <p className="pools-left">Pools</p>
                        <div id='poolRight' class="pool-right right knSXeI">
                            <div id="moreDrop" class="more-drop">
                                <button id='moreBtn' class="bYPKDz kDGCpp mJyk more-btn btn-more">
                                    <div id="moreText" class="more-text bYPKDz">More
                                        <i className="drop ri-arrow-down-s-line"></i>
                                    </div>
                                </button>
                            </div>
                            <a data-cy="join-pool-button" id="join-pool-button"
                                className="bYPKDz kEIpOD hPbqJv" href="#/add/ETH">
                                + New Position
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Pools;
