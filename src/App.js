import { useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import Style from "./Component/Style";
import Frame from "./Component/Frame";
import Logo from "./Component/Logo";
import QRcodeReview from "./Component/QRcodeReview";

import { faGrip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
    const [isStyleComponent, setIsStyleComponent] = useState(false);
    const [isFrameComponent, setIsFrameComponent] = useState(false);
    const [isLogoComponent, setIsLogoComponent] = useState(false);
    const [isUrlValid, setIsUrlValid] = useState(true)
    const [url, setUrl] = useState('')

    const handleValidUrlField = (checkValid) => {
        setIsUrlValid(checkValid)
    }

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
        <div className="App d-flex justify-content-between">
            <div className="bg-success-subtle col-8 ">
                <h1>QR Code Generator</h1>
                <div className="col-11">
                    <InputGroup className="mb-3 col-11 ">
                        <InputGroup.Text id="inputGroup-sizing-default">Name</InputGroup.Text>
                        <Form.Control

                            className="d-flex"
                            placeholder="Đặt tên cho mã QR của bạn"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">URL</InputGroup.Text>
                        <Form.Control
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="Đặt liên kết của bạn vào đây"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>
                </div>

                <div className="d-flex">
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

                {isStyleComponent && <Style />}
                {isFrameComponent && <Frame />}
                {isLogoComponent && <Logo />}
            </div>
            <div className="bg-secondary-subtle col-4">
                <QRcodeReview inputUrl={url} checkValid={handleValidUrlField}/>
            </div>
        </div>
    );
}

export default App;
