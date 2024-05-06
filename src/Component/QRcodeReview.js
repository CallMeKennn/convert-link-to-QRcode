import { QRCode } from 'react-qrcode-logo';
import { useState, useContext } from 'react'
import { Button } from "react-bootstrap"

import { ToastContainer, toast } from 'react-toastify';
import { ImagesContext } from "./ImageProvider";
import 'react-toastify/dist/ReactToastify.css';

import facebookLogo from "../Assets/Images/facebook-logo.png"
import instagramLogo from "../Assets/Images/instagram-logo.png"
import linkedinLogo from "../Assets/Images/linkedin-logo.png"
import pinterestLogo from "../Assets/Images/pinterest-logo.png"
import twitterLogo from "../Assets/Images/twitter-logo.png"
import youtubeLogo from "../Assets/Images/youtube-logo.png"

const QRcodeReview = ({ inputUrl, checkValid }) => {
    const [url, setUrl] = useState(window.location.href)

    const { imageUrl, size, checked } = useContext(ImagesContext)

    const convertToImage = (image) => {
        switch (image) {
            case "Clear":
                return "";
            case "Facebook":
                return facebookLogo;
            case "Instagram":
                return instagramLogo;
            case "Linkedin":
                return linkedinLogo;
            case "Pinterest":
                return pinterestLogo;
            case "Twitter":
                return twitterLogo;
            case "Youtube":
                return youtubeLogo;
            default:
                return URL.createObjectURL(image)
        }
    }

    console.log(size);

    const isUrlValid = (url) => {
        try {
            new URL(url);
            return true;
        } catch (error) {
            return false;
        }
    };


    const handleConvertLinkToQRcode = () => {
        if (inputUrl === "") {
            checkValid(true)
            return toast.error("Trường này khong được để trống", {
                position: "top-right",
                autoClose: 5000,
            });
        } else if (!isUrlValid(inputUrl)) {
            checkValid(true)
            return toast.error("URL không thỏa mãn, yêu cầu nhập lại URL khác", {
                position: "top-right",
                autoClose: 5000,
            });
        } else {
            checkValid(false)
            setUrl(inputUrl)
            return toast.success("Chuyển đổi thành công ", {
                position: "top-right",
                autoClose: 5000,
            });
        }
    }

    return (
        <div className="QRcode-container">
            <h1>QRcodeReview</h1>
            <div className='d-flex flex-column align-items-center'>
                <QRCode value={url} logoImage={imageUrl && convertToImage(imageUrl)} logoHeight={size} logoWidth={size} logoPadding={checked && 0.5}/>
                <Button className='mt-4' onClick={handleConvertLinkToQRcode}>Xác nhận</Button>
            </div>

            <ToastContainer position="top-right" autoClose={5000} />
        </div>
    )
};

export default QRcodeReview;
