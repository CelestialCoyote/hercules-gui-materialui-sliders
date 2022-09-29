import { useEffect, useState } from 'react';
import VerticalCoveSlider from '../VerticalCoveSlider/VerticalCoveSlider';
import './Hercules.css';


const Hercules = () => {

    const [red, setRed] = useState(0);
    const [grn, setGrn] = useState(0);
    const [blu, setBlu] = useState(0);

    // Console log out when color values have been changed.
    // Not working currently.
    useEffect(() => {
        console.log(`Red: ${red}, Green: ${grn}, Blue: ${blu}`);
    }, [red, grn, blu]);

    return (
        <div className="hercules">

            <VerticalCoveSlider coveColor="Red" color="#bb0000" setLevel={setRed} level={red} />

            <VerticalCoveSlider coveColor="Grn" color="#00bb00" setLevel={setGrn} level={grn} />

            <VerticalCoveSlider coveColor="Blu" color="#0077bb" setLevel={setBlu} level={blu} />

        </div>
    );
}


export default Hercules;
