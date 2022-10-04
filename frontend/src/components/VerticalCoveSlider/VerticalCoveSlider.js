import { useState } from 'react';
import Slider from '@mui/material/Slider';
import './VerticalCoveSlider.css';


const VerticalCoveSlider = ({ coveColor, color, setLevel, level }) => {

    const [isOff, setIsOff] = useState(true);
    const [temp, setTemp] = useState(0);

    //const handleSliderChange = (_event, value) => {
    //    setLevel(value);
    //};


    return (

        <div className="cove-slider-group">

            <div className="fade-buttons">

                {/*<button
                    className="cove-button red-button"
                    onClick={() => {
                        setLevel(255);
                    }}
                >
                    {coveColor} On
                </button>

                <button
                    className="cove-button red-button"
                    onClick={() => {
                        setLevel(0);
                    }}
                >
                    {coveColor} Off
                </button>*/}

                <button
                    className="cove-button red-button"
                    onClick={() => {
                        if (level > 0) {
                            setTemp(level);
                            setLevel(0);
                            setIsOff(true);
                        } else {
                            if (temp === 0) {
                                setTemp(255);
                                setLevel(255);
                            } else {
                                setLevel(temp);
                            }
                            setIsOff(false);
                        }
                    }}
                >
                    {coveColor} {isOff ? "On" : "Off"}
                </button>

            </div>

            <label className="cove-text">{coveColor}</label>

            <Slider
                sx={{
                    color: { color },
                    height: "100%",
                    '& .MuiSlider-thumb': {
                        borderRadius: '0.25rem',
                        height: "1.5rem",
                        width: "3.0rem"
                    },
                    '& .MuiSlider-rail': {
                        borderRadius: '0.25rem',
                        width: "1.0rem"
                    },
                    '& .MuiSlider-track': {
                        width: "0.5rem"
                    },
                    '& input[type="range"]': {
                        WebkitAppearance: 'slider-vertical',
                    },
                }}
                orientation="vertical"
                min={0}
                max={255}
                step={1}
                value={level}
                //onChange={handleSliderChange}
                onChange={(e) => {
                    setLevel(e.target.value);
                    if (e.target.value > 0) setIsOff(false);
                    if (e.target.value === 0) {
                        setTemp(0);
                        setIsOff(true);
                    }
                }}
            />

            <label className="cove-text">{level}</label>

        </div>

    );
}


export default VerticalCoveSlider;