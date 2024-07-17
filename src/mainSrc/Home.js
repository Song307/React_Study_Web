import './Home.css';
import { useRef, useState } from "react";

function Home() {
    const startRef = useRef();
    return (
        <div>
            <div className="Home">
                <div className="video_box">
                    <video muted autoPlay loop>
                        <source src="mouse_coding.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="titleNav">
                    <div className="title_box">
                        <h1>React Master </h1>
                        <h2>웹 개발 및 자바스크립트 공부</h2>
                    </div>
                </div>
            </div>
            <div className="contents">
                <div className='nav'>
                    <div className='list_html'>
                        <h1>HTML</h1>
                        <div className='nav_box'>
                        HTML(하이퍼텍스트 마크업 언어)은 웹 페이지와 웹 애플리케이션의 구조와 콘텐츠를 정의하는 표준 마크업 언어입니다. 태그를 사용하여 텍스트, 이미지, 링크, 비디오 등의 요소를 웹 페이지에 배치하고 구성합니다. 브라우저가 HTML 문서를 해석하여 사용자에게 웹 페이지를 표시합니다.
                        </div>
                    </div>
                    <div className='list'>
                        <h1>CSS</h1>
                    </div>
                    <div className='list'>
                        <h1>JavaScript</h1>
                    </div>
                    <div className='list'>
                        <h1>hello</h1>
                    </div>
                    <div className='list_database'>
                        <h1>Database</h1>
                    </div>
                </div>
                
            </div>
            
            <div className="contents">
            </div>
            
            <div class="contents">
    
            </div>
            
        </div>
    );
}

export default Home;