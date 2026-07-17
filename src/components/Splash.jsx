export default function Splash({ hide }) {
    return (
        <div id="splash" className={hide ? 'hide' : ''}>
            <div className="splash-inner">
                <div className="mark">
                    <div className="brick bottom"></div>
                    <div className="brick top"></div>
                </div>
                <div className="splash-wordmark">build<span className="quiet">quiet</span><span className="dot">.</span></div>
                <div className="loader">
                    <div className="fill"></div>
                </div>
            </div>
        </div>
    )
}
