export const Work = () => {


    return <>
        <h2>工作經歷</h2><h4>Professional Experience</h4>
        <hr />
        <table className="table  table-bordered table-striped table-hover">
            <thead className="table-dark">
                <tr>
                    <th>公司</th>
                    <th>職位</th>
                    <th>在職期間</th>
                    <th>工作內容</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>瑪裘瑞有限公司</td>
                    <td>前端工程師</td>
                    <td>2023/04 - 尚在任職</td>
                    <td>
                        <ul>
                            <li>前端軟體開發與設計</li>
                            <li>UI / UX 設計</li>
                            <li>協助後端串接</li>
                            <li>
                                主要負責：
                                <ul>
                                    <li>官方網站（前端）</li>
                                    <li>會計系統建置與維護</li>
                                    <li>人資系統建置與維護</li>
                                    <li>電子表單建置與維護</li>
                                    <li>簽呈建置與維護</li>
                                    <li>排班系統建置與維護</li>
                                </ul>
                            </li>
                            <li>主管交辦資訊專案</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>僑光科技大學</td>
                    <td>書記</td>
                    <td>2011/04 - 2023/02</td>
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
    </>
}