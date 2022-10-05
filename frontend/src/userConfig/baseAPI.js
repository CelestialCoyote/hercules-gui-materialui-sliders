import Axios from "axios";
//import backend from './backendIP';

//const backend = {"IP": "http://192.168.1.37:3042"}; // InfiniteImprobabilityDrive
const backend = {"IP": "http://192.168.1.147:3009"}; // PanGalacticGargleBlaster


const baseAPI = Axios.create({
    baseURL: `${backend.IP}/hercules/`
});


export { baseAPI };
