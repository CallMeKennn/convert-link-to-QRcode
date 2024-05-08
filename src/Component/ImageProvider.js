import React, { createContext, useState } from "react";

export const ImagesContext = createContext();

const ImagesProvider = ({ children }) => {
    const [imageUrl, setImageUrl] = useState(null);
    const [size, setSize] = useState(null);
    const [checked, setChecked] = useState(true);
    const [qrStyle, setQrStyle] = useState("squares");
    const [borderEye, setBorderEye] = useState(0)
    const [eye, setEye] = useState(0)
    const [color, setColor] = useState("#000000")

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
        setBorderEye(typeBorder)
    }

    const handleChangeEyeStyle = (typeEye) => {
        setEye(typeEye)
    }

    const handleChangeColor = (color) => {
        setColor(color)
    }

    return (
        <ImagesContext.Provider
            value={{
                imageUrl,
                size,
                checked,
                qrStyle,
                borderEye,
                eye,
                color,
                handleSetLogoImage,
                handleChangeSizeLogo,
                handleHiddenBackgroundLogo,
                handleChangeQrStyle,
                handleChangeBorderQrStyle,
                handleChangeEyeStyle,
                handleChangeColor,
            }}
        >
            {children}
        </ImagesContext.Provider>
    );
};

export default ImagesProvider;
