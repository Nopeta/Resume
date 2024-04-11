import './App.css';

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import NavScrollExample from "./components/NavScrollExample"
import routes from './utils/RouteAll';
import { useState } from 'react'
import { AuthContext, UserNameContext } from './utils/Context'


if ( 'serviceWorker' in navigator ) { // 檢查browser有無支援serviceWorker
    navigator.serviceWorker
        .register( '/sw.js' ) // 註冊 Service Worker
        .then( function ( reg ) {
            // console.log( 'Registration succeeded. Scope is ' + reg.scope ); // 註冊成功
        } )
        .catch( function ( error ) {
            // console.log( 'Registration failed with ' + error ); // 註冊失敗
        } );
}

let deferredPrompt;

window.addEventListener( 'beforeinstallprompt', function ( event ) {
    console.log( 'beforeinstallprompt fired' );
    event.preventDefault();  // 取消預設的直接跳出通知設定
    deferredPrompt = event;  // 將監聽到的install banner事件傳到deferredPrompt變數

    return false;
} );

if ( deferredPrompt ) {   // 確定我們有「攔截」到chrome所發出的install banner事件
    deferredPrompt.prompt();   // 決定要跳出通知

    // 根據用戶的選擇進行不同處理，這邊我指印出log結果
    deferredPrompt.userChoice.then( function ( choiceResult ) {
        // console.log( choiceResult.outcome );

        if ( choiceResult.outcome === 'dismissed' ) {
            console.log( 'User cancelled installation' );
        } else {
            console.log( 'User added to home screen' );
        }
    } );
    deferredPrompt = null; // 一旦用戶允許加入後，之後就不會再出現通知
}

const Footer = () => {
    return (
        <>
            <footer className='footer mt-auto py-1 bg-light'>
                <div className="container">
                    <p className="text-center text-muted">© 2022 Cat</p>
                </div>
            </footer>

        </>
    );
}

const Nav = () => {
    return ( <>
        <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light rounded">
            <div class="container-fluid">
                <div class="collapse navbar-collapse justify-content-md-center">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <h1>Yu-Shin Chen's Resume</h1>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
    )
}

function App() {
    const [ token, setToken ] = useState( null )
    const [ userName, setUserName ] = useState( '' )
    return (
        <>
            <AuthContext.Provider value={{ token, setToken }}>
                {console.log( token )}
                <UserNameContext.Provider value={{ userName, setUserName }}>
                    <Router>
                        <NavScrollExample />
                        {/* <div className="container"> */}
                        <Routes>
                            {routes.map( ( route, i ) => {
                                const { path, exact, element } = route;
                                return ( < Route key={i} path={path} exact={exact} element={element} /> );
                            } )}
                        </Routes>
                        {/* </div > */}
                    </Router>
                    <hr style={{ marginTop: '20px', marginBottom: '0' }} />
                    <Footer />
                </UserNameContext.Provider>
            </AuthContext.Provider>
        </>
    );
}

export default App;
