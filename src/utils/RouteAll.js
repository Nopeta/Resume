import AboutMe from '../pages/AboutMe';
import Message from '../pages/Message';
import Login from '../pages/Login.js';
// import SignUp from '../pages/SignUp.js';

const routes = [
    {
        path: '/',
        element: <p>回到首頁</p>,
        exact: true,
        breadcrumbName: 'Home'
    },
    {
        path: '/aboutme',
        element: <AboutMe />,
        breadcrumbName: 'About Me'
    },
    {
        path: '/message',
        element: <Message />,
        breadcrumbName: 'Message'
    },
    {
        path: '/login',
        element: <Login />,
        breadcrumbName: 'Login'
    },
    {
        path: '/logout',
        element: <main style={{ padding: "1rem" }}><p>ＮＯ網頁</p></main>,
        breadcrumbName: 'Logout'
    },
    // {
    //     path: '/signup',
    //     element: <SignUp />,
    //     // element: <p>還沒寫</p>,
    //     breadcrumbName: 'Signup'
    // },
    {
        path: '*',
        element: <main style={{ padding: "1rem" }}><p>ＮＯ網頁</p></main>,
        breadcrumbName: '？'
    },
    // {
    //     path: '/electronics',
    //     element: Electronics,
    //     breadcrumbName: 'Electronics',
    //     routes: [
    //         {
    //             path: '/electronics/mobile',
    //             element: Mobile,
    //             breadcrumbName: 'Mobile Phone'
    //         },
    //         {
    //             path: '/electronics/desktop',
    //             element: Desktop,
    //             breadcrumbName: 'Desktop PC'
    //         },
    //         {
    //             path: '/electronics/laptop',
    //             element: Laptop,
    //             breadcrumbName: 'Laptop'
    //         }
    //     ]
    // }
];

export default routes;