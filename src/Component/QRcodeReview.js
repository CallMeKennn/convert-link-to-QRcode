import { QRCode } from 'react-qrcode-logo';
import { useEffect, useState } from 'react'
import { Button } from "react-bootstrap"
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const QRcodeReview = ({inputUrl, checkValid}) => {
    const [url, setUrl] = useState(window.location.href)

    console.log(inputUrl)

    const isUrlValid = (url) => {
        try {
          new URL(url);
          return true;
        } catch (error) {
          return false;
        }
    };

    const handleConvertLinkToQRcode = () => {
        if(inputUrl === ""){
            checkValid(false)
            return toast.error("Trường này khong được để trống", {
                position: "top-right",
                autoClose: 5000,
            });
        } else if(!isUrlValid(isUrlValid)) {
            checkValid(false)
            return toast.error("URL không thỏa mãn, yêu cầu nhập lại URL khác, ", {
                position: "top-right",
                autoClose: 5000,
            });
        } else {
            setUrl(inputUrl)
        }
    }

    return (
        <div className="QRcode-container">
            <h1>QRcodeReview</h1>
            <QRCode value={url}/>
            <Button onClick={handleConvertLinkToQRcode}>Xác nhận</Button>

            <ToastContainer position="top-right" autoClose={5000}/>
        </div>
    )
};

export default QRcodeReview;
