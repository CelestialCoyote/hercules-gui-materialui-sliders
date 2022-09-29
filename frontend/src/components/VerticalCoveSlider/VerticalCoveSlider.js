import Slider from '@mui/material/Slider';
import './VerticalCoveSlider.css';


const VerticalCoveSlider = ({ coveColor, color, setLevel, level }) => {

    const handleSliderChange = (_event, value) => {
    //const handleSliderChange = (value) => {
        setLevel(value);

        // Console.log changes as slider moves on selected color.
        //console.log(`${coveColor} sliderValue: ${level}`);
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

            <label className="cove-text">{level}</label>

        </div>

    );
}


export default VerticalCoveSlider;