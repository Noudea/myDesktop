import Image from 'next/image';
import gsap from 'gsap'
import { Power4 } from "gsap";

const PageIcon = (props) => {
    const onMouseEnter = (e) => {
        console.log('onMouseEnter')
        console.log(e.target)
        gsap.to(e.target,{ duration: 0.3,  scale:1.05 ,ease: Power4.easeInOut})
    }
    const onMouseLeave = (e) => {
        console.log('onMouseLeave')
        gsap.to(e.target,{ duration: 0.3,   scale:1 ,ease: Power4.easeInOut})
    }

    return(
        <div> 
            <style jsx>{`
                img {
                    width:${props.width};
                    height:${props.height};
                    border-radius:20px;
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
            <div className='pageIconContainer'>
                <img onClick={props.onClick} onMouseEnter = {onMouseEnter} onMouseLeave = {onMouseLeave} src={props.src}></img>
                <p>{props.name}</p>
            </div>


        </div>
    )
}

export default PageIcon