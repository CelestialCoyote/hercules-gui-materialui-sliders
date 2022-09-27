import { useState } from 'react';
import Slider from '@mui/material/Slider';
import './VerticalCoveSlider.css';


const VerticalCoveSlider = ({ coveColor, color, setRed, setGrn, setBlu }) => {
    const [value, setValue] = useState(0);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
        console.log(`${coveColor} sliderValue: ${value}`);
        if (coveColor === "red") {
            setRed(newValue);
        } else if (coveColor === "grn") {
            setGrn(newValue);
        } else if (coveColor === "blu") {
            setBlu(newValue);
        }
    };


    return (

        <div className="cove-slider-group">
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
                onChange={handleSliderChange}
            />

            <label className="cove-text">{value}</label>

        </div>

    );
}


export default VerticalCoveSlider;