import "./chatOnline.css"
import { Users } from "../../dummyData";
export default function ChatOnline(){
    return(
        <div className="chatOnline">
            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img 
                    className="chatOnlineImg"
                    src={Users[1].profilePicture}  
                    alt="" 
                    />
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">{Users[1].username} </span>
            </div>
            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img 
                    className="chatOnlineImg"
                    src={Users[1].profilePicture}  
                    alt="" 
                    />
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">{Users[1].username} </span>
            </div>
            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img 
                    className="chatOnlineImg"
                    src={Users[1].profilePicture}  
                    alt="" 
                    />
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">{Users[1].username} </span>
            </div>

        </div>
    )
}