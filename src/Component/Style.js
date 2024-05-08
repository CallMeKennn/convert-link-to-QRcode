import { useContext, useState } from "react";

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
    const { handleChangeQrStyle, handleChangeBorderQrStyle, handleChangeEyeStyle, handleChangeColor } =
        useContext(ImagesContext);

    return (
        <div className="style-container ">
            <div className="mt-3">
                <h3>Mẫu:</h3>
                <div className="flex">
                    <button
                        className="w-1/12 p-2 border border-l-transparent border-black"
                        onClick={() => handleChangeQrStyle("squares")}
                    >
                        <img src={squaresImage} className="w-full h-auto object-cover object-center m-0" />
                    </button>
                    <button
                        className="w-1/12 p-2 border border-l-transparent border-black"
                        onClick={() => handleChangeQrStyle("dots")}
                    >
                        <img src={dotsImage} className="w-full h-auto object-cover object-center m-0" />
                    </button>
                    <button
                        className="w-1/12 p-2 border border-l-transparent border-black"
                        onClick={() => handleChangeQrStyle("fluid")}
                    >
                        <img src={fluidImage} className="w-full h-auto object-cover object-center m-0" />
                    </button>
                </div>
            </div>
            <div className="mt-3">
                <h3>Phong cách góc:</h3>
                <button
                    className="w-1/12 p-2 border border-l-transparent border-black"
                    onClick={() => handleChangeBorderQrStyle(0)}
                >
                    <img src={borderSquareEye} className="w-full h-auto object-cover object-center m-0" />
                </button>
                <button
                    className="w-1/12 p-2 border border-l-transparent border-black"
                    onClick={() => handleChangeBorderQrStyle(10)}
                >
                    <img src={borderHaflEye} className="w-full h-auto object-cover object-center m-0" />
                </button>
                <button
                    className="w-1/12 p-2 border border-l-transparent border-black"
                    onClick={() => handleChangeBorderQrStyle(20)}
                >
                    <img src={borderCircleEye} className="w-full h-auto object-cover object-center m-0" />
                </button>

                <button
                    className="w-1/12 p-2 border border-l-transparent border-black"
                    onClick={() => handleChangeEyeStyle(20)}
                >
                    <img src={circleEye} className="w-full h-auto object-cover object-center m-0" />
                </button>
                <button
                    className="w-1/12 p-2 border border-l-transparent border-black"
                    onClick={() => handleChangeEyeStyle(0)}
                >
                    <img src={squareEye} className="w-full h-auto object-cover object-center m-0" />
                </button>
            </div>

            <div className="mt-3">
                <h3>Màu hoa văn:</h3>
                <input
                    type="color"
                    id="colorPicker"
                    name="colorPicker"
                    onChange={(e) => handleChangeColor(e.target.value)}
                    className="w-1/5 h-14 border border-black p-1"
                />
            </div>
        </div>
    );
};

export default Style;
