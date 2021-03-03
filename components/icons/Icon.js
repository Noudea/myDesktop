
import gsap from 'gsap'
import { Power4 } from "gsap";

const Icon = (props) => {

    const onMouseEnter = (e) => {
        console.log('onMouseEnter')
        console.log(e.target)
        gsap.to(e.target,{ duration: 0.3,  y: -20 ,ease: Power4.easeInOut})
    }
    const onMouseLeave = (e) => {
        console.log('onMouseLeave')
        gsap.to(e.target,{ duration: 0.3,  y: 0 ,ease: Power4.easeInOut})
    }

    return(
        <div> 
            <style jsx>{`
                img {
                    width:${props.width};
                    height:${props.height};
                }
                img:hover {
                    cursor:pointer;
                }
                p{
                    margin:0px;
                }
                .iconWrapper {
                    display :flex;
                    flex-direction:column;
                    align-items: center;
                }
                `}</style>
            {/* <Image
                src={props.src}
                width={props.width}
                height={props.height}
                onMouseEnter = {onMouseEnter} onMouseLeave = {onMouseLeave}
            ></Image> */}
            <div className='iconWrapper'>
                <img onClick={props.onClick} onMouseEnter = {onMouseEnter} onMouseLeave = {onMouseLeave} src={props.src}></img>
                <p>{props.name}</p>
            </div>
        </div>
    )
}

export default Icon