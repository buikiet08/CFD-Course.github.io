import React,{useState,useEffect} from 'react'
import Api from '../services/api'
import CourseItem from '../component/Course'

function Course() {
    const [course,setCourse] = useState([])
    useEffect(() => {
        Api.get('/elearning/v4/courses')
        .then(res => 
            setCourse(res.data.data)    
        )
    }, [])
    console.log(course)
    return (
        <main className="homepage" id="main">
            <section className="section-1">
                <div className="container">
                    <h2 className="main-title">KHÓA HỌC CFD</h2>
                    <p className="top-des">
                        The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                        has
                        a more-or-less normal
                    </p>
                    <div className="textbox">
                        <h3 className="sub-title">KHÓA HỌC</h3>
                        <h2 className="main-title">ONLINE</h2>
                    </div>
                    <div className="list row">
                        {course.map(item => (
                            <CourseItem 
                            key={item.id} 
                            image={item.thumbnailUrl} 
                            name={item.title} 
                            description={item.short_description} 
                            avatar={item.teacher.avatar}
                            user={item.teacher.title}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Course