import { Portfolio } from '../components/About/Portfolio';
import { Skill } from '../components/About/Skill';
import { Work } from '../components/About/Work';
import pic from '../personal_pic.webp';

const Nav = () => {
    return ( <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
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

export default function AboutMe() {
    return ( <>

        <div>
            <Nav />
            <div className="container">
                <br />
                <div className="row">
                    <div className="col-sm">
                        <h2>陳鈺欣</h2><h4>Chen Yu-Shin</h4>
                        <hr />
                        <ul>
                            <li><span>生日：1989 / 01 / 28</span></li>
                            <li><span>居住：台灣，台中</span></li>
                            <li><span>信箱：Noiecat128@gmail.com</span></li>
                        </ul>
                    </div>
                    <div className="col-sm">
                        <div className="text-left">
                            <img src={pic} className="rounded img-fluid d-block w-75 w-75" alt="個人照片" />
                        </div>
                    </div>
                </div>

                <br />

                <h2>簡歷</h2><h4>Summary</h4>
                <hr />
                <blockquote>
                    <p><span>大學畢業後便在僑光科技大學資訊單位就業十年，協助工程師與使用者間的溝通協調，並額外建置相關小系統供使用者能方便查詢資料與相關伺服器維護；喜歡繪圖與網頁建置，對於動態網頁設計與多媒體相關軟體有高度的興趣。</span>
                    </p>
                </blockquote>
                <br />
                <h2>學歷</h2><h4>Education</h4>
                <hr />
                <table className="table  table-bordered table-striped table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col"><span>起訖</span></th>
                            <th scope="col"><span>學校</span></th>
                            <th scope="col"><span>科系</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th><span>2009/09 - 2011/06</span></th>
                            <td><span>嶺東科技大學</span></td>
                            <td><span>視覺傳達系</span></td>
                        </tr>
                        <tr>
                            <th><span>2004/09 - 2009/06</span></th>
                            <td ><span>僑光科技大學</span></td>
                            <td><span>資訊管理系</span></td>
                        </tr>
                    </tbody>
                </table>

                <br />

                <Work />

                <br />

                <Skill />

                <br />

                <Portfolio />
            </div>
            <br />
            <br />
        </div >
    </> );
}