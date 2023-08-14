import {React} from "react"
import {styled} from "styled-components"

const Message = ({msg}) => {
    const StyleMessage = styled.div`
        padding:0.2rem;
        border-radius: 1vw;
        text-align: center;
        color: white;
        font-weight: bold;
        background: #3fd150;
        width: 80%;
    ` 
    return <StyleMessage>
        <p>{msg}</p>
    </StyleMessage>;
}

export default Message
