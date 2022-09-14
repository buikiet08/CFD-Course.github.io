import { Route, Routes } from 'react-router-dom'
import Home from './Pages/home'
import Project from './Pages/project'
import Page404 from './Pages/404'
import Course from './Pages/khoa-hoc'
import Profile from './Pages/ca-nhan'
import Coin from './Pages/ca-nhan/coin'
import MyCourse from './Pages/ca-nhan/course'
import Payment from './Pages/ca-nhan/payment'
import MyProject from './Pages/ca-nhan/du-an'
import MainLayout from './layout/MainLayout'
import ProfileLayout from './layout/ProfileLayout'
import CourseDetail from './Pages/[slug]'

import {COURSE_DETAIL} from './config/path'

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/khoa-hoc' element={<Course />} />
          <Route path='/du-an' element={<Project />} />
          <Route path={COURSE_DETAIL} element={<CourseDetail />} />
          <Route path='*' element={<Page404 />} />
          <Route path='/ca-nhan' element={<ProfileLayout />}>
              <Route index element={<Profile />} />
              <Route path='/ca-nhan/du-an' element={<MyProject />} />
              <Route path='/ca-nhan/khoa-hoc' element={<MyCourse />} />
              <Route path='/ca-nhan/thanh-toan' element={<Payment />} />
              <Route path='/ca-nhan/coin' element={<Coin />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
