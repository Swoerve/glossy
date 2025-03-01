import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import LoginView from "@/views/LoginView.vue"
import AccountTeacherView from "@/views/AccountTeacherView.vue"
import SignUpView from "@/views/SignUpView.vue"
import AccountStudentView from "@/views/AccountStudentView.vue"
import CreateQuizView from "@/views/CreateQuizView.vue"
import QuizView from "@/views/QuizView.vue"
import CreateCourseView from "@/views/CreateCourseView.vue"
import TeacherCourseView from "@/views/TeacherCourseView.vue"
import StudentProfileView from "@/views/StudentProfileView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Generic Routes
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/login",
      name: "login",

      component: () => import("../views/LoginView.vue")
    },
    {
      path: "/loginview",
      name: "loginview",
      component: LoginView
    },
    {
      path: "/signupview",
      name: "signupview",
      component: SignUpView
    },
    // Student routes
    {
      path: "/student/:studentid",
      name: "accountstudentview",
      component: AccountStudentView
    },
    {
      path: "/student/:studentid/studentprofileview",
      name: "studentprofile",
      component: StudentProfileView
    },
    {
      path: "/accountstudentview/quizview",
      name: "quizview",
      component: QuizView
    },
    // Teacher routes
    {
      path: "/teacher/:userid",
      name: "accountteacherview",
      component: AccountTeacherView
    },
    {
      path: "/teacher/:userid/course/:courseid",
      name: "TeacherCourseView",
      component: TeacherCourseView
    },
    {
      path: "/teacher/:userid/course/:courseid/newquiz",
      name: "newquiz",
      component: CreateQuizView
    },
    {
      path: "/createcourseview",
      name: "createcourseview",
      component: CreateCourseView
    }
  ]
})

export default router
