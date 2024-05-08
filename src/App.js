import { useState } from "react";
import Style from "./Component/Style";
import Logo from "./Component/Logo";
import QRcodeReview from "./Component/QRcodeReview";

import { faGrip } from "@fortawesome/free-solid-svg-icons";
import { TextField, Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImagesProvider from "./Component/ImageProvider";

import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
    const [nameDownload, setNameDownload] = useState("")
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
        <div className="App flex justify-center bg-[#EEEEEE] h-screen">
            <ImagesProvider>
                <div className="w-4/5 flex justify-around py-8 px-4">
                    <div className="col-8 bg-white px-8 pt-4 pb-8 rounded box-shadow">
                        <div className="d-flex flex-column align-items-center">
                            <h1 className="font-robotoCondensed mb-3">Chuyển đổi Link sang mã QR code</h1>
                            <div className="w-4/5">
                                <TextField
                                    fullWidth
                                    id="outlined-basic"
                                    label="Name"
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

                            <div className="d-flex col-4 d-flex justify-content-around text-lg">
                                <button onClick={handleMountStyleComponent}>
                                    <FontAwesomeIcon icon={faGrip} />
                                    <div className="font-robotoCondensed">Phong Cách</div>
                                </button>
                                <div className="w-0.5 bg-gray-400"></div>
                                <button onClick={handleMountLogoComponent}>
                                    <FontAwesomeIcon icon={faGrip} />
                                    <div className="font-robotoCondensed">Logo</div>
                                </button>
                            </div>
                        </div>

                        {isStyleComponent && <Style />}
                        {isLogoComponent && <Logo />}
                    </div>

                    <div className="col-3 px-8 pt-4 pb-8 bg-white box-shadow h-2/3">
                        <QRcodeReview nameDownload={nameDownload} inputUrl={url} checkValid={handleValidUrlField} />
                    </div>
                </div>
            </ImagesProvider>
        </div>
    );
}

export default App;
