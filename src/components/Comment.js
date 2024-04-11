

import { BsJournalText, BsPencilSquare, BsFillTrashFill } from "react-icons/bs";
import { useState, useRef, useEffect } from 'react';
export const Comment = ( { id, message, user, created_at } ) => {
    const [ rewriteTextInputStatus, setIsRewriteTextInputStatus ] = useState( false );
    // const openRewriteTextInput = useRef( false )

    const MessageShow = () => {
        return <>
            <p className="card-text "> {message}</p>
            <button className="btn" onClick={( e ) => {
                setIsRewriteTextInputStatus( true );
            }} ><BsPencilSquare aria-label="update" /></button>    <a href="/" className="btn" value={id} >  <BsFillTrashFill aria-label="delete" /></a>
        </>
    }

    return <>
        {console.log( rewriteTextInputStatus )}
        <div className="card" style={{ width: '85vw' }}>
            <div className="card-header" >
                <h5 className="row" >
                    <div className="col ">
                        <BsJournalText /> {user.name} 's message
                    </div>
                    <div className="col text-end">
                        {created_at}
                    </div>
                </h5>
            </div>
            <div className="card-body">
                {rewriteTextInputStatus === false ? <MessageShow /> : <div>假裝文字視窗</div>}

            </div>
        </div>
    </>
}