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
                <h2>工作經歷</h2><h4>Professional Experience</h4>
                <hr />
                <table className="table  table-bordered table-striped table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th><span>公司</span></th>
                            <th><span>職位</span></th>
                            <th><span>在職期間</span></th>
                            <th><span>工作內容</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span>易栗有限公司</span></td>
                            <td><span>前端工程師</span></td>
                            <td><span>2023/04 - 尚在任職</span></td>
                            <td>
                                <ul>
                                    <li>前端軟體開發與設計</li>
                                    <li>UI / UX 設計</li>
                                    <li>協助後端串接</li>
                                    <li>主管交辦資訊專案</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td><span>僑光科技大學</span></td>
                            <td><span>書記</span></td>
                            <td><span>2011/04 - 2023/02</span></td>
                            <td>
                                <ul>
                                    <li>全校校務行政系統之軟硬體維護管理</li>
                                    <li>協調校內人員與軟體廠商的溝通</li>
                                    <li>協助廠商架接伺服器之Web service服務</li>
                                    <li>建置校內單位所需功能之系統或網頁提供</li>
                                    <li>VMWare伺服器軟硬體管理及維護</li>
                                    <li>單位所需之美術相關繪圖、影片剪輯作業</li>
                                    <li>Google G Suite for Education服務架設與功能提供</li>
                                    <li>主管交辦之事項</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <h2>技能</h2><h4>Skill</h4>
                <hr />
                <table className="table table-bordered table-striped table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th><span>技能</span></th>
                            <th><span>工具</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>文書處理</td>
                            <td><ul>
                                <li>Microsoft  Office</li>
                            </ul></td>
                        </tr>
                        <tr>
                            <td>繪畫</td>
                            <td>
                                <ul>
                                    <li>Adobe PhotoShop</li>
                                    <li>Adobe Illustrator</li>
                                    <li>CLIP STUDIO PAINT</li>
                                    <li>Procreate</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>剪輯</td>
                            <td>
                                <ul>
                                    <li>Adobe After Effects</li>
                                    <li>Adobe Premiere Pro</li>
                                    <li>Final Cut Pro</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>程式撰寫</td>
                            <td>
                                <ul>
                                    <li>Visual Studio 2013
                                        <ul>
                                            <li>Asp.net</li>
                                            <li>VB.net</li>
                                        </ul>
                                    </li>
                                    <li>Visual Studio Code
                                        <ul>
                                            <li>Html5</li>
                                            <li>Css
                                                <ul>
                                                    <li>Tailwind</li>
                                                </ul>
                                            </li>
                                            <li>JavaScript
                                                <ul>
                                                    <li>ReactJS</li>
                                                    <li>VueJS</li>
                                                </ul>
                                            </li>
                                            {/* <li>Python</li> */}
                                        </ul>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>資料庫</td>
                            <td>
                                <ul>
                                    <li>Microsoft SQL Server</li>
                                    <li>MySQL</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>語言</td>
                            <td>
                                <ul>
                                    <li>中文（精通）</li>
                                    <li>英文（略懂）</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <h2>專案</h2><h4>Portfolio</h4>
                <hr />

                <div className="row row-cols-1 row-cols-md-5 g-1 w-100 mb-1">
                    <div className="col col-md-3">
                        <div className="card p-3">
                            <h5 className="card-title">學生銀行帳號系統</h5>
                            <br></br>
                            <blockquote>
                                <p className="card-text">學生填寫匯款銀行帳號，行政單位檢核學生帳戶資料以便後續退款作業。<br /><br /></p></blockquote>
                            <ul>
                                <li>使用工具：VS 2013</li>
                                <li>使用程式語言：VB.NET、ASP.NET</li>
                            </ul>
                            <a href="https://ocuap.ocu.edu.tw/stuacc/login.aspx" className="btn btn-dark stretched-link">學生銀行帳號系統</a>
                        </div>
                    </div>
                    <div className="col col-md-3">
                        <div className="card p-3">
                            <h5 className="card-title">績優導師評量</h5>
                            <br></br>
                            <blockquote>
                                <p className="card-text">提供學生評量導師指導狀況，並留下感想；後臺提供行政單位查看並統計數據。<br /><br /></p></blockquote>
                            <ul>
                                <li>使用工具：VS 2013</li>
                                <li>使用程式語言：VB.NET、ASP.NET</li>
                            </ul>
                            <a href="https://ocuap.ocu.edu.tw/teasatest/login.aspx" className="btn btn-dark stretched-link">績優導師評量</a>
                        </div>
                    </div>
                    <div className="col col-md-3">
                        <div className="card p-3">
                            <h5 className="card-title">畢業生領取學位證書方式調查</h5>
                            <blockquote>
                                <p className="card-text">疫情期間，因畢業典禮未舉行，故需向畢業生進行調查領取學位證書的方式要以寄送或到校領取的方式產生之系統。</p></blockquote>
                            <ul>
                                <li>使用工具：VS 2013</li>
                                <li>使用程式語言：VB.NET、ASP.NET</li>
                            </ul>
                            <a href="https://ocuap.ocu.edu.tw/geg_adres/index.aspx#https://ocuap.ocu.edu.tw/geg_adres/index.aspx" className="btn btn-dark stretched-link">領取學位證書方式意願調查</a>
                        </div>
                    </div>
                    <div className="col col-md-3">
                        <div className="card p-3">
                            <h5 className="card-title">學雜分費查詢系統（已撤下）</h5>
                            <blockquote>
                                <p className="card-text">提供學生查看學雜費資訊，行政人員檢核學生註冊狀況。<br /><br /><br /></p></blockquote>
                            <ul>
                                <li>使用工具：VS 2013</li>
                                <li>使用程式語言：VB.NET、ASP.NET</li>
                            </ul>
                            <a href="#" className="btn btn-light stretched-link">連結已撤下</a>
                        </div>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-2 w-100 mb-1">
                    <div className="col card">
                        <div className="card-body">
                            <h5 className="card-title">修課名單查詢</h5>
                            <blockquote>
                                <p className="card-text">每年重覆需要提供相似查詢資料，為求便利與使用者可不需要再度跨單位求資料，建置出可讓單位自行匯出所需要的報表明細。</p></blockquote>
                            <ul>
                                <li>使用工具：VS 2010</li>
                                <li>使用程式語言：VB.NET</li>
                            </ul>
                        </div>
                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://i.imgur.com/vu8hUhe.jpg" alt="說明頁" className="d-block w-100" />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://i.imgur.com/DgOiwz1.jpg" alt="功能1" className="d-block w-100" />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://i.imgur.com/IXxsmD3.jpg" alt="功能2" className="d-block w-100" />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://i.imgur.com/e54iE1s.jpg" alt="功能2" className="d-block w-100" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="col card">
                        <div className="card-body">
                            <h5 className="card-title">號與打卡紀錄查詢</h5>
                            <blockquote>
                                <p className="card-text">查看學生與教職員卡號，並可查看職員打卡紀錄。<br /><br /></p></blockquote>
                            <ul>
                                <li>使用工具：VS 2010</li>
                                <li>使用程式語言：VB.NET</li>
                            </ul>
                        </div>
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://i.imgur.com/wNZv9jO.jpg" alt="查詢卡號" className="d-block w-100" />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://i.imgur.com/GqfIaxL.jpg" alt="打卡記錄" className="d-block w-100" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
        </div >
    </> );
}