import { useState } from "react";

import Style from "../../Component/Style";
import Logo from "../../Component/Logo";
import QRcodeReview from "../../Component/QRcodeReview";

import React from "react";
import { faGrip } from "@fortawesome/free-solid-svg-icons";
import { TextField } from "@mui/material";
import { faMicroblog } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles.css";

const ConverLinkToQRcodePage = () => {
    const [nameDownload, setNameDownload] = useState("");
    const [isStyleComponent, setIsStyleComponent] = useState(true);
    const [isLogoComponent, setIsLogoComponent] = useState(false);
    const [isUrlValid, setIsUrlValid] = useState(false);
    const [url, setUrl] = useState("");

    const handleValidUrlField = (checkValid) => {
        setIsUrlValid(checkValid);
    };

    const handleMountStyleComponent = () => {
        setIsStyleComponent(true);
        setIsLogoComponent(false);
    };

    const handleMountLogoComponent = () => {
        setIsStyleComponent(false);
        setIsLogoComponent(true);
    };

    return (
        <>
            <div className="w-10/12 flex justify-around py-8 px-4 lg:w-full md:w-full sm:w-full">
                <div className="col-8 h-auto bg-white px-8 pt-5 pb-8 rounded box-shadow sm:col-span-12">
                    <div className="d-flex flex-column align-items-center">
                        <h1 className="font-robotoCondensed mb-3 text-center">CHUYỂN ĐỔI LINK SANG MÃ QR CODE</h1>
                        <div className="w-11/12">
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                label="Tên"
                                className="mb-4 col-10"
                                onChange={(e) => setNameDownload(e.target.value)}
                                placeholder="Đặt tên cho mã QR của bạn"
                            />
                            <TextField
                                {...(isUrlValid ? { error: true } : {})}
                                className="mb-3 col-10"
                                onChange={(e) => setUrl(e.target.value)}
                                placeholder="Đặt liên kết của bạn vào đây"
                                fullWidth
                                id="outlined-basic"
                                label="URL"
                            />
                        </div>

                        <div className="pt-5 pb-8 bg-white h-auto md:hidden lg:hidden xl:hidden 2xl:hidden">
                            <QRcodeReview nameDownload={nameDownload} inputUrl={url} checkValid={handleValidUrlField} />
                        </div>

                        <div className="d-flex w-56 d-flex justify-content-around text-lg">
                            <button onClick={handleMountStyleComponent} className="">
                                <FontAwesomeIcon icon={faGrip} />
                                <div className="font-robotoCondensed">Phong Cách</div>
                            </button>
                            <div className="w-0.5 bg-gray-400"></div>
                            <button onClick={handleMountLogoComponent} className="">
                                <FontAwesomeIcon icon={faMicroblog} />
                                <div className="font-robotoCondensed">Logo</div>
                            </button>
                        </div>
                    </div>

                    {isStyleComponent && <Style />}
                    {isLogoComponent && <Logo />}
                </div>

                <div className="col-3 pt-5 pb-8 bg-white box-shadow h-auto sm:hidden">
                    <QRcodeReview nameDownload={nameDownload} inputUrl={url} checkValid={handleValidUrlField} />
                </div>
            </div>
        </>
    );
};

export default ConverLinkToQRcodePage;
