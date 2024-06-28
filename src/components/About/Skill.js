export const Skill = () => {


    return <>
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
                    <td>程式語言與框架</td>
                    <td>
                        <ul>
                            <li>Html5</li>
                            <li>Css
                                <ul>
                                    <li>Tailwind</li>
                                    <li>Bootstrap</li>
                                </ul>
                            </li>
                            <li>JavaScript
                                <ul>
                                    <li>AlpineJS</li>
                                    <li>VueJS</li>
                                    <li>ReactJS</li>
                                </ul>
                            </li>
                            <li>php
                                <ul>
                                    <li>Laravel 10
                                        <ul>
                                            <li>Livewire 3</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>Asp.net</li>
                            <li>VB.net</li>
                            {/* <li>Python</li> */}
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
    </>
}