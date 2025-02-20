import "./conversation.css"
import { Users } from "../../dummyData";

export default function Conversation() {
    return(
        <div className="conversation">
            <img className="conversationImg" src={Users[1].profilePicture} alt=""/>
            <span className="conversationName">{Users[1].username}</span>

        </div>
    )
}