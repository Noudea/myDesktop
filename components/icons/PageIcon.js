import Image from 'next/image';
import gsap from 'gsap'
import { Power4 } from "gsap";
import { useState , useEffect } from 'react'
import { ProgressCircle } from 'react-desktop/macOs';

const PageIcon = (props) => {
    const [isLoaded,setIsLoaded] = useState(false)
    
    
    const onMouseEnter = (e) => {
        console.log('onMouseEnter')
        console.log(e.target)
        gsap.to(e.target,{ duration: 0.3,  scale:1.03 ,ease: Power4.easeInOut})
    }
    const onMouseLeave = (e) => {
        console.log('onMouseLeave')
        gsap.to(e.target,{ duration: 0.3,   scale:1 ,ease: Power4.easeInOut})
    }

    useEffect(() => {
        setIsLoaded(true)
    })

    return(
        <div> 
            <style jsx>{`
                img {
                    width:${props.width};
                    height:${props.height};
                    border-radius:${props.borderRadius};
                    max-width : 100%;
                }
                img:hover {
                    cursor:pointer;
                }
                .pageIconContainer {
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    cursor:pointer;
                }
                .pageIconContainer p {
                    margin:0px;
                }
                `}</style>
            {/* <Image
                src={props.src}
                width={props.width}
                height={props.height}
                onMouseEnter = {onMouseEnter} onMouseLeave = {onMouseLeave}
            ></Image> */}
            {
                isLoaded ?
                <div className='pageIconContainer'>
                    <img onClick={props.onClick} onMouseEnter = {onMouseEnter} onMouseLeave = {onMouseLeave} src={props.src}></img>
                    <p>{props.name}</p>
                </div>
                : <ProgressCircle size={25}/>
            }


        </div>
    )
}

export default PageIcon