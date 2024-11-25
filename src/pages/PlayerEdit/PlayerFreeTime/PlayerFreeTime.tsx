import React from "react";

const TIMESTAMP = [
    { "id": 1, "name": "Sáng", "start_time": "08:00", "end_time": "12:00" },
    { "id": 2, "name": "Trưa", "start_time": "12:00", "end_time": "14:00" },
    { "id": 3, "name": "Chiều", "start_time": "14:00", "end_time": "17:00" },
    { "id": 4, "name": "Tối", "start_time": "17:00", "end_time": "20:00" }
]


const PlayerFreeTime = ({ id }) => {
    const timeSlot = TIMESTAMP.find((time) => time.id === id);

    return (
        <div className="user_game_item">
            {timeSlot ? (
                <div className="time-slot">
                    <h4>{timeSlot.name}</h4>
                    <p>{timeSlot.start_time} - {timeSlot.end_time}</p>
                </div>
            ) : (
                <p>No time slot available for this ID</p>
            )}
        </div>
    );
}

export default PlayerFreeTime;
