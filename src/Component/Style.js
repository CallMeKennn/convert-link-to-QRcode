import { useConteaxt } from "react";

import squaresImage from "../Assets/Images/squares.png";
import dotsImage from "../Assets/Images/dots.png";
import fluidImage from "../Assets/Images/fluid.png";
import borderCircleEye from "../Assets/Images/square2.png";
import borderSquareEye from "../Assets/Images/square1.png";
import borderHaflEye from "../Assets/Images/square3.png";
import circleEye from "../Assets/Images/sqdot2.png";
import squareEye from "../Assets/Images/sqdot1.png";

import { ImagesContext } from "./ImageProvider";

const Style = () => {
    const {
        handleChangeQrStyle,
        handleChangeBorderQrStyle,
        handleChangeEyeStyle,
        handleChangeColor,
        handleChangeColorBackground,
        bgColor,
    } = useContext(ImagesContext);

    return (
        <div className="style-container flex flex-col items-center">
            <div className="mt-2 w-4/5 m-auto">
                <div className="text-lg font-robotoCondensed">Mẫu:</div>
                <div className="flex">
                    <button
                        className="w-16 p-2 border border-l-transparent border-black"
                        onClick={() => handleChangeQrStyle("squares")}
                    >
                        <img src={squaresImage} className="w-full h-auto object-cover object-center m-0" alt="squaresImage"/>
                    </button>
                    <button
                        className="w-16 p-2 border border-l-transparent border-black"
                        onClick={() => handleChangeQrStyle("dots")}
                    >
                        <img src={dotsImage} className="w-full h-auto object-cover object-center m-0" alt="dotsImage"/>
                    </button>
                    <button
                        className="w-16 p-2 border border-l-transparent border-black"
                        onClick={() => handleChangeQrStyle("fluid")}
                    >
                        <img src={fluidImage} className="w-full h-auto object-cover object-center m-0" alt="fluidImage"/>
                    </button>
                </div>
            </div>
            <div className="mt-2 w-4/5 m-auto">
                <div className="text-lg font-robotoCondensed">Phong cách góc:</div>
                <button
                    className="w-16 p-2 border border-l-transparent border-black"
                    onClick={() => handleChangeBorderQrStyle(0)}
                >
                    <img src={borderSquareEye} className="w-full h-auto object-cover object-center m-0" alt="borderSquareEye"/>
                </button>
                <button
                    className="w-16 p-2 border border-l-transparent border-black"
                    onClick={() => handleChangeBorderQrStyle(10)}
                >
                    <img src={borderHaflEye} className="w-full h-auto object-cover object-center m-0" alt="borderHaflEye"/>
                </button>
                <button
                    className="w-16 p-2 border border-l-transparent border-black"
                    onClick={() => handleChangeBorderQrStyle(20)}
                >
                    <img src={borderCircleEye} className="w-full h-auto object-cover object-center m-0" alt="borderCircleEye"/>
                </button>

                <button
                    className="w-16 p-2 border border-l-transparent border-black"
                    onClick={() => handleChangeEyeStyle(20)}
                >
                    <img src={circleEye} className="w-full h-auto object-cover object-center m-0" alt="circleEye"/>
                </button>
                <button
                    className="w-16 p-2 border border-l-transparent border-black"
                    onClick={() => handleChangeEyeStyle(0)}
                >
                    <img src={squareEye} className="w-full h-auto object-cover object-center m-0" alt="squareEye"/>
                </button>
            </div>

            <div className="mt-2 w-4/5 m-auto flex justify-between">
                <div className="w-full">
                    <div className="text-lg font-robotoCondensed">Màu hoa văn:</div>
                    <input
                        type="color"
                        id="colorPicker"
                        name="colorPicker"
                        onChange={(e) => handleChangeColor(e.target.value)}
                        className="w-2/3 h-14 border border-black p-1"
                    />
                </div>
                <div className="w-full">
                    <div className="text-lg">Màu nền hoa văn:</div>
                    <input
                        value={bgColor}
                        type="color"
                        id="colorPicker"
                        name="colorPicker"
                        onChange={(e) => handleChangeColorBackground(e.target.value)}
                        className="w-2/3 h-14 border border-black p-1"
                    />
                </div>
            </div>
        </div>
    );
};

export default Style;
