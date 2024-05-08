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
    const [bgColor, setBgColor] = useState("#FFFFFF")

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

    const handleChangeColorBackground = (backgroundColor) => {
        setBgColor(backgroundColor)
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
                bgColor,
                handleSetLogoImage,
                handleChangeSizeLogo,
                handleHiddenBackgroundLogo,
                handleChangeQrStyle,
                handleChangeBorderQrStyle,
                handleChangeEyeStyle,
                handleChangeColor,
                handleChangeColorBackground,
            }}
        >
            {children}
        </ImagesContext.Provider>
    );
};

export default ImagesProvider;
