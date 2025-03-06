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
import StudentCourseView from "@/views/StudentCourseView.vue"
import StudentProfileView from "@/views/StudentProfileView.vue"
import TeacherProfileView from "@/views/TeacherProfileView.vue"
import CourseStatisticsView from "@/views/statistics/CourseStatisticsView.vue"
import QuizStatisticsView from "@/views/statistics/QuizStatisticsView.vue"
import StudentStatisticsView from "@/views/statistics/StudentStatisticsView.vue"

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
      path: "/student/:userid",
      name: "accountstudentview",
      component: AccountStudentView
    },
    {
      path: "/student/:userid/course/:courseid",
      name: "studentcourse",
      component: StudentCourseView
    },
    {
      path: "/student/:userid/studentprofileview",
      name: "studentprofile",
      component: StudentProfileView
    },
    {
      path: "/student/:userid/course/:courseid/quiz/:quizid",
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
      path: "/teacher/:userid/createcourseview",
      name: "createcourseview",
      component: CreateCourseView
    },
    {
      path: "/teacher/:userid/teacherprofileview",
      name: "teacherprofile",
      component: TeacherProfileView
    },
    //Statistics Routes
    {
      path: "/teacher/:userid/coursestatistics",
      name: "coursestats",
      component: CourseStatisticsView
    },
    {
      path: "/teacher/:userid/quizstatistics",
      name: "quizstats",
      component: QuizStatisticsView
    },
    {
      path: "/teacher/:userid/studentstatistics",
      name: "studentstats",
      component: StudentStatisticsView
    }
  ]
})

export default router
