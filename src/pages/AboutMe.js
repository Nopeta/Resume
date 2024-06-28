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
            <div className="container-fluid">
                <div className="row">
                    <div className="col-0 col-md-2">
                        <nav id="navbar-example3" className=" h-100 flex-column align-items-stretch pe-4 border-end">
                            <nav className="sticky-top nav nav-pills flex-column" style={{ top: '9rem' }}>
                                <a className="nav-link" href="#profile">基本資料</a>
                                <a className="nav-link" href="#summary">履歷 Summary</a>
                                <a className="nav-link" href="#education">學歷 Education</a>
                                <a className="nav-link" href="#work">工作經歷 Professional Experience</a>
                                <a className="nav-link" href="#skill">技能 Skills</a>
                                <a className="nav-link" href="#portfolio">專案 Portfolio</a>
                                <nav className="nav nav-pills flex-column">
                                    <a className="nav-link ms-3 my-1" href="#portfolio-1">瑪裘瑞有限公司</a>
                                    <a className="nav-link ms-3 my-1" href="#portfolio-2">創科資訊股份有限公司</a>
                                    <a className="nav-link ms-3 my-1" href="#portfolio-2">僑光科技大學</a>
                                </nav>
                            </nav>
                        </nav>
                    </div>

                    <div className="col-12 col-md-10">
                        <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" className="scrollspy-example-2" tabIndex="0">
                            <div id="profile">
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
                            </div>

                            <br />

                            <div id="summary">
                                <h2>簡歷</h2><h4>Summary</h4>
                                <hr />
                                <blockquote>
                                    <p><span>大學畢業後便在僑光科技大學資訊單位就業十年，協助工程師與使用者間的溝通協調，並額外建置相關小系統供使用者能方便查詢資料與相關伺服器維護；喜歡繪圖與網頁建置，對於動態網頁設計與多媒體相關軟體有高度的興趣。</span>
                                    </p>
                                </blockquote>
                            </div>

                            <br />

                            <div id="education">
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
                            </div>

                            <br />

                            <div id="work">
                                <Work />
                            </div>

                            <br />

                            <div id="skill">
                                <Skill />
                            </div>

                            <br />

                            <div id="portfolio">
                                <Portfolio />
                            </div>

                            <br />

                            {/* <div id="item-3-1">
                                <h5>Item 3-1</h5>
                                <p>...</p>
                            </div>
                            <div id="item-3-2">
                                <h5>Item 3-2</h5>
                                <p>...</p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
        </div >
    </> );
}