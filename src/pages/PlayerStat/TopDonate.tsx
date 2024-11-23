import ava from '../../assets/img/Dung.png';

const TopDonate = () => {
    return (
        <div className="donate-container">
            <div className="donate-banner">
                <b><i>TOP DONATE THÁNG</i></b>
            </div>
            <div className='donate-top-container'>
                <div className="donate-top" style={{width: "200px"}}>
                    <img src={ava} />
                    <i> Dũng Kaka</i>
                    <p>500,000đ</p>
                </div>
                <div className="donate-top" style={{width: "250px"}}>
                    <img src={ava} />
                    <i> Dũng Kaka</i>
                    <p>500,000đ</p>
                </div>
                <div className="donate-top" style={{width: "200px"}}>
                    <img src={ava} />
                    <i> Dũng Kaka</i>
                    <p>500,000đ</p>
                </div>
            </div>
        </div>
    );
}

export default TopDonate;
