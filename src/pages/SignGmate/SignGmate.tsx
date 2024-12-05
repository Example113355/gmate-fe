import React, { useState } from "react";

const SignGmate: React.FC = () => {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
    alert("You have accepted the terms and conditions.");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 className="text-5xl text-primary font-bold">Trở thành một GMater</h1>
      <p className="text-3xl mt-6 ">
        - Người cho thuê đồng ý với mô hình chia sẻ doanh thu giữa mình và ứng
        dụng, theo tỷ lệ đã được quy định trong chính sách tài chính của ứng
        dụng.
      </p>
      <p className="text-3xl ">
        - Ứng dụng có quyền hủy quyền Người cho thuê nếu phát hiện bất kỳ hành
        vi vi phạm quy định hoặc gian lận nào.
      </p>
      <p className="text-3xl ">
        - Người cho thuê có thể yêu cầu hạ cấp tài khoản về trạng thái ban đầu
        (Người thuê) thông qua hỗ trợ khách hàng.
      </p>
      <p className="text-3xl ">
        - Người dùng đồng ý rằng việc nâng cấp tài khoản là hoàn toàn tự nguyện
        và cam kết tuân thủ đầy đủ các điều khoản của ứng dụng.
      </p>
      <p className="text-3xl ">
        - Mọi tranh chấp phát sinh sẽ được giải quyết theo các quy định đã đề
        cập trong điều khoản sử dụng của ứng dụng.
      </p>
      <p className="text-3xl mt-4 ">
        <h1 className=" font-bold">Lưu ý:</h1> Người dùng nên đọc kỹ và hiểu rõ
        các điều khoản này trước khi yêu cầu nâng cấp tài khoản. Nếu có bất kỳ
        thắc mắc nào, vui lòng liên hệ với bộ phận hỗ trợ khách hàng.
      </p>
      <button
        onClick={handleAccept}
        disabled={accepted}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {accepted ? "Accepted" : "Accept"}
      </button>
    </div>
  );
};

export default SignGmate;
