import React, { createContext, useState } from "react";

export const ImagesContext = createContext();

const ImagesProvider = ({ children }) => {
    const [imageUrl, setImageUrl] = useState(null);
    const [size, setSize] = useState(null);
    const [checked, setChecked] = useState(true);
    const [qrStyle, setQrStyle] = useState("squares");
    const [borderEye, setBorderEye] = useState(0)
    const [eye, setEye] = useState(0)

    const handleSetLogoImage = (imageUrl) => {
        setImageUrl(imageUrl);
    };

    const handleChangeSizeLogo = (newSize) => {
        setSize(newSize);
    };

    const handleHiddenBackgroundLogo = (hidden) => {
        setChecked(hidden);
    };

    const handleChangeQrStyle = (typeQrStyle) => {
        setQrStyle(typeQrStyle);
    };

    const handleChangeBorderQrStyle = (typeBorder) => {
        setBorderEye(styleBorder)
    }

    const handleChangeEyeStyle = (typeEye) => {
        setEye(typeBorder)
    }

    return (
        <ImagesContext.Provider
            value={{
                imageUrl,
                size,
                checked,
                qrStyle,
                borderEye,
                handleSetLogoImage,
                handleChangeSizeLogo,
                handleHiddenBackgroundLogo,
                handleChangeQrStyle,
                handleChangeBorderQrStyle,
            }}
        >
            {children}
        </ImagesContext.Provider>
    );
};

export default ImagesProvider;
