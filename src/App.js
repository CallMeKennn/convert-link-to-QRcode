import { useState } from "react";
import { InputGroup, Form } from "react-bootstrap";
import Style from "./Component/Style";
import Frame from "./Component/Frame";
import Logo from "./Component/Logo";
import { faGrip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
    return (
        <div className="App d-flex justify-content-between">
            <div className="bg-success-subtle col-8">
                <div>
                    <h1>QR Code Generator</h1>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">Name</InputGroup.Text>
                        <Form.Control
                            aria-label="Đặt tên cho mã QR của bạn"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">URL</InputGroup.Text>
                        <Form.Control
                            aria-label="Đặt liên kết của bạn vào đây"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>
                </div>

                <div className="d-flex">
                    <div>
                        <FontAwesomeIcon icon={faGrip} />
                        <div>Phong Cách</div>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faGrip} />
                        <div>Logo</div>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faGrip} />
                        <div>Khung</div>
                    </div>
                </div>
            </div>
            <div className="bg-secondary-subtle col-4">sfsff</div>
        </div>
    );
}

export default App;
