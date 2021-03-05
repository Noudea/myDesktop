import {useEffect,useState,useContext} from 'react';
import ThemeContext from '../contexts/ThemeContext';
import { themeColors } from '../themes/themes';

const Clock = () => {
    const [hours,setHours] = useState('')
    const [minutes,setMinutes] = useState('')
    const [seconds,setSeconds] = useState('')

    const colors = themeColors[useContext(ThemeContext).theme]

    useEffect(() => {
        setInterval(() => 
        {  
            setHours(('0'+new Date().getHours()).slice(-2))
            // setMinutes(new Date().getMinutes())
            setMinutes( ('0'+new Date().getMinutes()).slice(-2))
            setSeconds(('0'+new Date().getSeconds()).slice(-2))
        }, 1000);
    },[hours,minutes,seconds])

    return(
        <div>
            <style jsx>{`
                p {
                    margin:0px;
                    font-weight : 600;
                    color : ${colors.inverted}
                }
                `}</style>
            <p>{hours} : {minutes} : {seconds}</p>
        </div>
    )
}

export default Clock