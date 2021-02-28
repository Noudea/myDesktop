import {useEffect,useState} from 'react';

const Clock = () => {
    const [hours,setHours] = useState('')
    const [minutes,setMinutes] = useState('')
    const [seconds,setSeconds] = useState('')

    useEffect(() => {
        setInterval(() => 
        {
            setHours(new Date().getHours())
            setMinutes(new Date().getMinutes())
            setSeconds(new Date().getSeconds())
        }, 1000);
    },[hours,minutes,seconds])

    return(
        <div>
            <style jsx>{`
                p {
                    margin:0px;
                }
                `}</style>
            <p>{hours} : {minutes} : {seconds}</p>
        </div>
    )
}

export default Clock