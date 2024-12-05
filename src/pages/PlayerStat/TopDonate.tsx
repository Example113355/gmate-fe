import { useEffect, useState } from "react";
import { getTopClient } from '../PlayerEdit/ApiService';
import { useParams } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";

const TopDonate = () => {
    const [users, setUsers] = useState([]);
    const { user } = useUser();
    const id = user._id;
    useEffect(() => {
        const fetchTopUser = async () => {
            try {
                const temp = await getTopClient(id);
                console.log(temp)
                setUsers(temp)
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };

        fetchTopUser();
        

    }, [id]);
    return (
        <div className="donate-container">
            <div className="donate-banner">
                <b><i>TOP NGƯỜI THUÊ THÁNG</i></b>
            </div>
            <div className='donate-top-container'>
                {users.length > 1 ? (
                    <div className="donate-top" style={{ width: "200px" }}>
                        <img src={users[1].avatar} alt="User Avatar" />
                        <i>{users[1].lastName}</i>
                        <p>{users[1].totalHoursRent} giờ</p>
                    </div>
                ) : (
                    <div className="donate-top" style={{ width: "200px" }}>
                        <img src="https://t4.ftcdn.net/jpg/03/49/49/79/360_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg" alt="User Avatar" />
                        <i>Quá ít người thuê</i>
                    </div>
                )}
                {users.length > 0 ? (
                    <div className="donate-top" style={{ width: "250px" }}>
                        <img src={users[0].avatar} alt="User Avatar" />
                        <i>{users[0].lastName}</i>
                        <p>{users[0].totalHoursRent} giờ</p>
                    </div>
                ) : (
                    <div className="donate-top" style={{ width: "250px" }}>
                        <img src="https://t4.ftcdn.net/jpg/03/49/49/79/360_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg" alt="User Avatar" />
                        <i>Quá ít người thuê</i>
                    </div>
                )}
                 {users.length > 2 ? (
                    <div className="donate-top" style={{ width: "200px" }}>
                        <img src={users[1].avatar} alt="User Avatar" />
                        <i>{users[2].lastName}</i>
                        <p>{users[2].totalHoursRent} giờ</p>
                    </div>
                ) : (
                    <div className="donate-top" style={{ width: "200px" }}>
                        <img src="https://t4.ftcdn.net/jpg/03/49/49/79/360_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg" alt="User Avatar" />
                        <i>Quá ít người thuê</i>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TopDonate;
