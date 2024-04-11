// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCommentList } from '../utils/APl';
import { CommentList } from '../components/CommentList';


export default function Message() {
    // const [ data, setData ] = useState( [ { id: '', message: '', created_at: '', updated_at: '', user: '' } ] );
    // const user_id = '00000000-0000-0000-0000-000000000000';
    const [ data, setData ] = useState( [] );
    useEffect( () => {
        async function fetchMyAPI() {
            const response = await getCommentList();
            // console.log( response.data );
            setData( response.data );
        }
        fetchMyAPI();
        // console.log( data );
    }, [] );

    return ( <>
        {/* {console.log( data )} */}
        <div>
            <div className="container">
                <br />
                <div className="row row-cols-1 align-items-start d-flex  justify-content-center">
                    <div className="col d-flex justify-content-star">
                        <h1>Comments</h1>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <div className="row">
                            <div className="col d-flex justify-content-star">
                                <h1>post</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="col d-flex justify-content-center">
                            <CommentList comments={data} />
                        </div>
                    </div>
                </div>
                <br />
                <br />
            </div>
        </div>
    </> );
}