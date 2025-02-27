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

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      path: "/teacher/:userid",
      name: "accountteacherview",
      component: AccountTeacherView
    },
    {
      path: "/signupview",
      name: "signupview",
      component: SignUpView
    },
    {
      path: "/student/:studentid",
      name: "studentview",
      component: AccountStudentView
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
      path: "/accountstudentview/quizview",
      name: "quizview",
      component: QuizView
    },
    {
      path: "/createcourseview",
      name: "createcourseview",
      component: CreateCourseView
    }
  ]
})

export default router
