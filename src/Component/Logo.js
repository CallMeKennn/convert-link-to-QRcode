import { useContext } from "react";

import closeImage from "../Assets/Images/close-images.png";
import addImage from "../Assets/Images/add-images.png";
import facebookLogo from "../Assets/Images/facebook-logo.png";
import instagramLogo from "../Assets/Images/instagram-logo.png";
import linkedinLogo from "../Assets/Images/linkedin-logo.png";
import pinterestLogo from "../Assets/Images/pinterest-logo.png";
import twitterLogo from "../Assets/Images/twitter-logo.png";
import youtubeLogo from "../Assets/Images/youtube-logo.png";

import { ImagesContext } from "./ImageProvider";
import { Slider, Switch, FormControlLabel } from "@mui/material";

const Logo = () => {
    const { handleSetLogoImage, handleChangeSizeLogo, handleHiddenBackgroundLogo } = useContext(ImagesContext);

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        handleSetLogoImage(selectedImage);
    };

    const handleChooseLogoImage = (logoName) => {
        handleSetLogoImage(logoName);
    };

    const handleChangeSize = (event, newValue) => {
        handleChangeSizeLogo(newValue);
    };

    const handleChangeHiddenBackground = (e) => {
        handleHiddenBackgroundLogo(e.target.checked);
    };

    return (
        <div className="logo-containe mt-7">
            <div className="flex ml-4 w-4/5">
                <button className="w-2/12 p-2 border border-black ">
                    <img
                        src={closeImage}
                        className="w-full h-auto object-cover object-center m-0"
                        onClick={() => handleChooseLogoImage("Clear")}
                    />
                </button>
                <button className="w-2/12 p-2 border border-black ">
                    <label htmlFor="upload-button" className="upload-button ">
                        <input
                            onChange={handleImageChange}
                            type="file"
                            id="upload-button"
                            accept="image/*"
                            style={{ display: "none" }}
                        />
                        <img src={addImage} className="w-full h-auto object-cover object-center m-0" />
                    </label>
                </button>
                <button className="w-2/12 p-2 border border-black ">
                    <img
                        src={facebookLogo}
                        className="w-full h-auto object-cover object-center m-0"
                        onClick={() => handleChooseLogoImage("Facebook")}
                    />
                </button>
                <button className="w-2/12 p-2 border border-black ">
                    <img
                        src={instagramLogo}
                        className="w-full h-auto object-cover object-center m-0"
                        onClick={() => handleChooseLogoImage("Instagram")}
                    />
                </button>
                <button className="w-2/12 p-2 border border-black ">
                    <img
                        src={linkedinLogo}
                        className="w-full h-auto object-cover object-center m-0"
                        onClick={() => handleChooseLogoImage("Linkedin")}
                    />
                </button>
                <button className="w-2/12 p-2 border border-black ">
                    <img
                        src={pinterestLogo}
                        className="w-full h-auto object-cover object-center m-0"
                        onClick={() => handleChooseLogoImage("Pinterest")}
                    />
                </button>
                <button className="w-2/12 p-2 border border-black ">
                    <img
                        src={twitterLogo}
                        className="w-full h-auto object-cover object-center m-0"
                        onClick={() => handleChooseLogoImage("Twitter")}
                    />
                </button>
                <button className="w-2/12 p-2 border border-black ">
                    <img
                        src={youtubeLogo}
                        className="w-full h-auto object-cover object-center m-0"
                        onClick={() => handleChooseLogoImage("Youtube")}
                    />
                </button>
            </div>

            <div>
                <FormControlLabel
                    className="mr-0"
                    value="start"
                    control={<Switch onChange={handleChangeHiddenBackground} />}
                    label="Ẩn dấu chấm nền"
                    labelPlacement="start"
                />
            </div>

            <div className="w-1/2 ml-4">
                <div>Kích thước logo</div>
                <Slider
                    onChange={handleChangeSize}
                    aria-label="sizeLogo"
                    defaultValue={40}
                    valueLabelDisplay="auto"
                    step={5}
                    marks
                    min={30}
                    max={60}
                />
            </div>
        </div>
    );
};

export default Logo;
