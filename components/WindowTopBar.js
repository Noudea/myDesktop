import { useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext'
import { themeColors } from '../themes/themes'

const WindowTopBar = (props) => {

    const colors = themeColors[useContext(ThemeContext).theme]
    return (
        <>
            <style jsx>{`
                .titleBar {
                    width: 100%;
                    height: 22px;
                    position: fixed;
                    top: -1px;
                    left: 0px;
                    z-index : 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding:2px;
                    border: 1px solid ${colors.titleBar};
                    background-color : ${colors.titleBar};
                    border-radius : 10px 10px 0px 0px;
                    cursor:pointer;
                }
                p {
                    margin: 0px;
                }
                .buttonContainer {
                    display: flex;
                    position: absolute;
                    top: 5px;
                    left: 5px;
                }
                .button {
                    user-select: none;
                    -webkit-app-region: no-drag;
                    cursor: pointer;
                    width: 12px;
                    height: 12px;
                    box-sizing: border-box;
                    border-radius: 50%;
                    margin-top: 1px;
                    margin-left: 4px;
                    margin-right: 4px;
                    line-height: 0;
                }
                .green {
                    background-color: #00ca4e;
                }

                .orange {
                    background-color: #ffbd44;
                }

                .red {
                    background-color: #ff605c;
                }
            `}</style>
            <div className="titleBar">
                <div className='buttonContainer'>
                    <div
                        onClick={props.onCloseClick}
                        className="button red"
                    ></div>
                    <div onClick={props.onCloseClick} className="button orange"></div>
                    <div
                        onClick={props.onResizeClick}
                        className="button green"
                    >
                    </div>
                </div>
                <p>{props.name}</p>
            </div>
        </>
    )
}

export default WindowTopBar
