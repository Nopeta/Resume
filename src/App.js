import './App.css';
import AboutMe from "../pages/AboutMe";

if ( 'serviceWorker' in navigator ) { // 檢查browser有無支援serviceWorker
  navigator.serviceWorker
    .register( '/sw.js' ) // 註冊 Service Worker
    .then( function ( reg ) {
      console.log( 'Registration succeeded. Scope is ' + reg.scope ); // 註冊成功
    } )
    .catch( function ( error ) {
      console.log( 'Registration failed with ' + error ); // 註冊失敗
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
    console.log( choiceResult.outcome );

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
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light rounded">
      <div className="container-fluid">
        <div className="collapse navbar-collapse justify-content-md-center">
          <ul className="navbar-nav">
            <li className="nav-item">
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
  return (
    <>
      <Nav />
      <div className="container">
        <AboutMe />
      </div>
      <Footer />
    </>
  );
}

export default App;
