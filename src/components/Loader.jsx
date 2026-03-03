import React from 'react';

const Loader = () => {
    return (
        <div className="landing-loader">
            <div className="loader-content">
                <div className="mango-spinner">
                    <span className="mango-emoji">🥭</span>
                </div>
                <div className="loader-text">
                    <h2>Fresh Picks</h2>
                    <div className="loading-bar">
                        <div className="loading-progress"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
