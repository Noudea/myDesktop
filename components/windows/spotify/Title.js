const Title = (props) => {
    return(
        <>
        <style jsx>{`
            
            .titleContainer {
                -webkit-box-align: center;
                background-color: transparent;
                display: flex;
                flex-direction: column;
                -webkit-box-flex: 0;
                flex-grow: 0;
                height: 72px;
                position: relative;
                width: 100%;
                padding: 8px 16px;
                text-align: left;
            }
            .titleContainer:hover {
                cursor: pointer;
                background-color: #fff;
            }
            .title{
                color:white;
                margin:0px;
                font-size:25px;
            }
            .artiste {
                color:white;
                margin:0px;
            }
        `}</style>
            <div onClick = {props.onClick} data-src= {props.data} className='titleContainer'>
                <p className='title'  data-src= {props.data}  >{props.title}</p>
                <p className='artiste'  data-src= {props.data}  >{props.artiste}</p>
            </div>
        </>
    )
}

export default Title