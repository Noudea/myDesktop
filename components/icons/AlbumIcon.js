
const AlbumIcon = (props) => {


    const dragStart = (e) => {
        e.preventDefault()
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
                    color:${props.textColor}
                }
                .iconWrapper {
                    display :flex;
                    flex-direction:column;
                    align-items: center;
                    padding:8px;
                }
                `}</style>
            {/* <Image
                src={props.src}
                width={props.width}
                height={props.height}
                onMouseEnter = {onMouseEnter} onMouseLeave = {onMouseLeave}
            ></Image> */}
            <div className='iconWrapper'>
                <img onClick={props.onClick} onDragStart={dragStart} src={props.src}></img>
                <p>{props.name}</p>
            </div>
        </div>
    )
}

export default AlbumIcon