import { Portfolio } from '../components/About/Portfolio';
import { Skill } from '../components/About/Skill';
import { Work } from '../components/About/Work';
// import pic from '../personal_pic.webp';
import pic from '../360x360.jpg';

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
                                    <a className="nav-link ms-3 my-1" href="#portfolio-3">僑光科技大學</a>
                                    <a className="nav-link ms-3 my-1" href="#portfolio-4">委託</a>
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
                                        <blockquote>
                                            <p>
                                                <span>喜歡撰寫程式與熟悉多媒體相關操作，軟體上手能力佳，具有良好的學習能力，喜歡學習新的事物和技術。</span>
                                            </p>
                                        </blockquote>
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
                                {/* <span>大學畢業後便在僑光科技大學資訊單位就業十年，協助工程師與使用者間的溝通協調，並額外建置相關小系統供使用者能方便查詢資料與相關伺服器維護；喜歡繪圖與網頁建置，對於動態網頁設計與多媒體相關軟體有高度的興趣。</span>
                                    <p> */}
                                <p style={{ lineHeight: '1.75rem' }}>
                                    &emsp;&emsp;一個喜歡程式撰寫與業餘時間研究多媒體相關工具，對於各種軟體的操作上手度極高，透過自己的學習和不斷嘗試，讓我能夠快速上手各種新軟體和工具。
                                    在學習上，我會自主學習，熱衷於透過各種網路教學和書本資料，不斷地拓展自己的知識領域。對於新的挑戰和問題，帶著熱情和好奇心，將其視為一種成長的機會。
                                </p>
                                <p style={{ lineHeight: '1.75rem' }}>
                                    &emsp;&emsp;在僑光科技大學資訊中心工作任職10年的經驗，讓我學習很多關於人員溝通和協調處理，聆聽使用者的需求，並與廠商協商以利完整呈現所需要的介面與功能；而業務上，保持熱情與負責任的態度，將交代到手上的工作，在所需的時間內完成它們。
                                </p>
                                <p style={{ lineHeight: '1.75rem' }}>
                                    &emsp;&emsp;2022年，開始感受到自身的能力不足，除了尋找相關程式語言的課程，因緣際會下加入MonoSparta的培訓營進行半年的能力培訓，學習到更進階的前端與後端的技能與敏捷訓練，並更加了解到與團隊間的溝通與合作進行才能讓專案快速且順利的進行。
                                </p>
                                <p style={{ lineHeight: '1.75rem' }}>
                                    &emsp;&emsp;2023年至目前任於職瑪裘瑞有限公司，主要負責官網前端設計與建置以及公司內部會計、人資、電子表單與排班的系統建置與維護，這期間學會了更多程式相關技術，運用在工作業務上。
                                </p>
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