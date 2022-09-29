import Slider from '@mui/material/Slider';
import './VerticalCoveSlider.css';


const VerticalCoveSlider = ({ coveColor, color, setLevel, level }) => {

    //const handleSliderChange = (_event, value) => {
    //    setLevel(value);
    //};


    return (

        <div className="cove-slider-group">

            <div className="fade-buttons">

                <button
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
                onChange={(e) => { setLevel(e.target.value); }}
            />

            <label className="cove-text">{level}</label>

        </div>

    );
}


export default VerticalCoveSlider;