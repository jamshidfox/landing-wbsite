import Avatar from 'react-avatar';
import Farrukh from "../../../concepts/farrukh.JPG"
const Logo = () => {
    return ( 
            <Avatar style={{ objectFit: "cover" }} src={Farrukh} size="50" round={true}/>  
        );
    }
    
    export default Logo;