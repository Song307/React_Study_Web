import './Home.css';
import { useRef, useState } from "react";

function Home() {
    const startRef = useRef();
    return (
        <div className='background'>
            <div className="Home">
                <div className="video_box">
                    <video muted autoPlay loop>
                        <source src="Main.mp4" type="video/mp4" />
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
                    <span className='list_red'>
                        <h1>HTML</h1>
                        <div className='nav_box'>
                            HTML(하이퍼텍스트 마크업 언어)은 웹 페이지와 웹 애플리케이션의 구조와 콘텐츠를 정의하는 표준 마크업 언어입니다. 태그를 사용하여 텍스트, 이미지, 링크, 비디오 등의 요소를 웹 페이지에 배치하고 구성합니다. 브라우저가 HTML 문서를 해석하여 사용자에게 웹 페이지를 표시합니다.
                        </div>
                    </span>
                    <span className='list_green'>
                        <h1>CSS</h1>
                        <div className='nav_box'>
                        CSS (Cascading Style Sheets)는 웹 페이지의 스타일과 레이아웃을 정의하는 언어입니다. HTML 요소들의 외관을 제어하며, 색상, 글꼴, 여백, 배치 등을 설정할 수 있습니다. CSS는 HTML과 분리되어 있어 콘텐츠와 디자인을 독립적으로 관리할 수 있습니다.
                        </div>
                    </span>
                    <span className='list_gray'>
                        <h1>JavaScript</h1>
                        <div className='nav_box'>
                        JavaScript는 웹 페이지에 동적인 기능을 추가하기 위해 사용하는 프로그래밍 언어입니다. 브라우저에서 실행되며, 사용자 인터랙션, 애니메이션, 데이터 처리 등을 가능하게 합니다. HTML과 CSS와 함께 웹의 핵심 기술 중 하나로, 클라이언트와 서버 측 모두에서 사용될 수 있습니다.
                        </div>
                    </span>
                    <span>
                        <h1>hello</h1>
                        <div className='nav_box'>
                        JavaScript는 웹 페이지에 동적인 기능을 추가하기 위해 사용하는 프로그래밍 언어입니다. 브라우저에서 실행되며, 사용자 인터랙션, 애니메이션, 데이터 처리 등을 가능하게 합니다. HTML과 CSS와 함께 웹의 핵심 기술 중 하나로, 클라이언트와 서버 측 모두에서 사용될 수 있습니다.
                        </div>
                    </span>
                    <span>
                        <h1>Database</h1>
                        <div className='nav_box'>
                        데이터베이스(Database)는 데이터를 체계적으로 저장하고 관리하는 시스템입니다. 효율적인 데이터 검색, 삽입, 삭제, 업데이트를 지원하며, 데이터의 무결성과 일관성을 유지합니다. 다양한 형태의 데이터베이스가 있으며, 관계형 데이터베이스(SQL 기반)와 비관계형 데이터베이스(NoSQL 기반)가 대표적입니다.
                        </div>
                    </span>
                    
                </div>
            </div>

            
            <div className="contents">
            </div>
            <div className='center'>
                <div class='field'>
                    <button class='has-tooltip'>This is a button</button>
                    <span class='tooltip red'>
                    <p>This is a red tooltip</p>
                    </span>
                </div>
            </div>
            
            <div class="contents">
            
            </div>
            
        </div>
    );
}

export default Home;