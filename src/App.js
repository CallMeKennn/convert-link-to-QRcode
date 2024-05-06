import { useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import Style from "./Component/Style";
import Frame from "./Component/Frame";
import Logo from "./Component/Logo";
import QRcodeReview from "./Component/QRcodeReview";

import { faGrip } from "@fortawesome/free-solid-svg-icons";
import { TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImagesProvider from "./Component/ImageProvider";

import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
    const [isStyleComponent, setIsStyleComponent] = useState(false);
    const [isFrameComponent, setIsFrameComponent] = useState(false);
    const [isLogoComponent, setIsLogoComponent] = useState(false);
    const [isUrlValid, setIsUrlValid] = useState(false);
    const [url, setUrl] = useState("");

    const handleValidUrlField = (checkValid) => {
        setIsUrlValid(checkValid);
    };

    const handleMountStyleComponent = () => {
        setIsStyleComponent(true);
        setIsFrameComponent(false);
        setIsLogoComponent(false);
    };

    const handleMountLogoComponent = () => {
        setIsStyleComponent(false);
        setIsFrameComponent(false);
        setIsLogoComponent(true);
    };

    const handleMountFrameComponent = () => {
        setIsStyleComponent(false);
        setIsFrameComponent(true);
        setIsLogoComponent(false);
    };

    return (
        <div className="App d-flex justify-content-betwee">
            <ImagesProvider>
                <div className="col-8 bg-success-subtle">
                    <div className="col-12 d-flex flex-column align-items-center">
                        <h1 className=" ">QR Code Generator</h1>
                        <div className="col-10">
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                label="Name"
                                className="mw-100 mb-4 col-10"
                                placeholder="Đặt tên cho mã QR của bạn"
                            />
                            <TextField
                                {...(isUrlValid ? { error: true } : {})}
                                className="mw-100 mb-3 col-10"
                                onChange={(e) => setUrl(e.target.value)}
                                placeholder="Đặt liên kết của bạn vào đây"
                                fullWidth
                                id="outlined-basic"
                                label="URL"
                            />
                        </div>

                        <div className="d-flex col-4 bg-danger d-flex justify-content-around">
                            <Button onClick={handleMountStyleComponent}>
                                <FontAwesomeIcon icon={faGrip} />
                                <div>Phong Cách</div>
                            </Button>
                            <Button onClick={handleMountLogoComponent}>
                                <FontAwesomeIcon icon={faGrip} />
                                <div>Logo</div>
                            </Button>
                            <Button onClick={handleMountFrameComponent}>
                                <FontAwesomeIcon icon={faGrip} />
                                <div>Khung</div>
                            </Button>
                        </div>
                    </div>

                    {isStyleComponent && <Style />}
                    {isFrameComponent && <Frame />}
                    {isLogoComponent && <Logo />}
                </div>

                <div className="bg-secondary-subtle col-4">
                    <QRcodeReview inputUrl={url} checkValid={handleValidUrlField} />
                </div>
            </ImagesProvider>
        </div>
    );
}

export default App;
