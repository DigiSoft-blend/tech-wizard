import Home from "./components/Home";
import Login from "./components/Login";
import LoginUser from "./components/LoginUser";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
import Register from "./components/Register";
import Logout from "./components/Logout";
import Users from "./components/Users";
import AllQuestions from "./components/All-Questions";
import Questions from "./components/Questions";
import Profile from "./components/Profile";
import UserProfile from "./components/UserProfile";
import EditProfile from "./components/EditProfile";
import AddGithubProject from "./components/AddGithubProject";
import AllProjects from "./components/AllProjects";
import AskQuestion from "./components/AskQuestion";
import UserQuestions from "./components/UserQuestions";
import UserPost from "./components/UserPost";
import EditPost from "./components/EditPost";
import EditQuestion from "./components/EditQuestion";
import EditAnswer from "./components/EditAnswer";
import Admin from "./components/Admin";
import AdminPage from "./components/AdminPage";
import store from './store/modules/auth' // your vuex store 


export default{


    mode: 'history',
    routes: [
        {
            path: '*',
            component: NotFound
        },
        {
            path: '/',
            component: Home,
            name: 'Home',
         
        },
        {
            path: '/login',
            component: Login,
            name: 'login',
            meta: {
                requiresVisitor: true,
            }
        },
        {
            path: '/loginuser',
            component: LoginUser,
            meta: {
                requiresVisitor: true,
            }
        },
        {
            path: '/dashboard',
            component: Dashboard,
            name: 'dashboard',
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: '/register',
            component: Register,
            name: 'register',
            meta: {
                requiresVisitor: true,
            }
        },
      
        {
            path: '/logout',
            component: Logout,
           name: 'logout',
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: '/users',
            component: Users,
            meta: {
                requiresVisitor: true,
            }
        },
        {
            path: '/all-questions',
            component: AllQuestions,
            meta: {
                requiresVisitor: true,
            }
        },
        {
            path: '/question/:id',
            component: Questions,
            meta: {
                requiresVisitor: true,
            }
        },
        {
            path: '/user/:id',
            component: Profile,
            meta: {
                requiresVisitor: true,
            }
        },
        {
            path: '/user-profile',
            component: UserProfile,
            name: 'user-profile',
            meta: {
                requiresVisitor: true,
            }
        },
        {
            path: '/edit-profile',
            component: EditProfile,
            name: 'edit-profile',
            meta: {
                requiresVisitor: true,
            }
        },
        {
            path: '/add-github-project',
            component: AddGithubProject,
            name: 'edit-profile-project',
            meta: {
                requiresVisitor: true,
            }
        },
        {
            path: '/all-projects',
            component: AllProjects,
            name: 'all-projects',
            meta: {
                requiresVisitor: true,
            }
        },
        {
            path: '/ask-question',
            component: AskQuestion,
            name: 'ask-question',
            meta: {
                requiresVisitor: true,
            }
        },
        {
            path: '/user-questions',
            component: UserQuestions,
            name: 'user-questions',
            meta: {
                requiresVisitor: true,
            }
        },
        {
            path: '/user-post',
            component: UserPost,
            name: 'user-post',
            meta: {
                requiresVisitor: true,
            }
        },
        {
            path: '/edit-post/:id',
            component: EditPost,
            name: 'edit-post',
            meta: {
                requiresVisitor: true,
            }
        },
        {
            path: '/edit-question/:id',
            component: EditQuestion,
            name: 'edit-question',
            meta: {
                requiresVisitor: true,
            }
        },
        {
            path: '/edit-answer/:id',
            component: EditAnswer,
            name: 'edit-answer',
            meta: {
                requiresVisitor: true,
            }
        },
        {
            path: '/Admin-Login',
            component: Admin,
            name: 'admin-login',
            meta: {
                requiresVisitor: true,
            }
        },
        {
            path: '/Admins',
            component: AdminPage,
            name: 'admins',
            meta: {
                requiresAdmin: true
            }
        },
    ]
}