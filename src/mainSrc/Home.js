import './Home.css';
import { useRef, useState } from "react";


function icon(icon, width, height){
    if(icon=="html"){
        return( <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="currentColor" class="bi bi-filetype-html" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zm-9.736 7.35v3.999h-.791v-1.714H1.79v1.714H1V11.85h.791v1.626h1.682V11.85h.79Zm2.251.662v3.337h-.794v-3.337H4.588v-.662h3.064v.662zm2.176 3.337v-2.66h.038l.952 2.159h.516l.946-2.16h.038v2.661h.715V11.85h-.8l-1.14 2.596H9.93L8.79 11.85h-.805v3.999zm4.71-.674h1.696v.674H12.61V11.85h.79v3.325Z"/></svg>
        )
    } else if(icon=="css"){
        return( <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="currentColor" class="bi bi-filetype-css" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM3.397 14.841a1.13 1.13 0 0 0 .401.823q.195.162.478.252.284.091.665.091.507 0 .859-.158.354-.158.539-.44.187-.284.187-.656 0-.336-.134-.56a1 1 0 0 0-.375-.357 2 2 0 0 0-.566-.21l-.621-.144a1 1 0 0 1-.404-.176.37.37 0 0 1-.144-.299q0-.234.185-.384.188-.152.512-.152.214 0 .37.068a.6.6 0 0 1 .246.181.56.56 0 0 1 .12.258h.75a1.1 1.1 0 0 0-.2-.566 1.2 1.2 0 0 0-.5-.41 1.8 1.8 0 0 0-.78-.152q-.439 0-.776.15-.337.149-.527.421-.19.273-.19.639 0 .302.122.524.124.223.352.367.228.143.539.213l.618.144q.31.073.463.193a.39.39 0 0 1 .152.326.5.5 0 0 1-.085.29.56.56 0 0 1-.255.193q-.167.07-.413.07-.175 0-.32-.04a.8.8 0 0 1-.248-.115.58.58 0 0 1-.255-.384zM.806 13.693q0-.373.102-.633a.87.87 0 0 1 .302-.399.8.8 0 0 1 .475-.137q.225 0 .398.097a.7.7 0 0 1 .272.26.85.85 0 0 1 .12.381h.765v-.072a1.33 1.33 0 0 0-.466-.964 1.4 1.4 0 0 0-.489-.272 1.8 1.8 0 0 0-.606-.097q-.534 0-.911.223-.375.222-.572.632-.195.41-.196.979v.498q0 .568.193.976.197.407.572.626.375.217.914.217.439 0 .785-.164t.55-.454a1.27 1.27 0 0 0 .226-.674v-.076h-.764a.8.8 0 0 1-.118.363.7.7 0 0 1-.272.25.9.9 0 0 1-.401.087.85.85 0 0 1-.478-.132.83.83 0 0 1-.299-.392 1.7 1.7 0 0 1-.102-.627zM6.78 15.29a1.2 1.2 0 0 1-.111-.449h.764a.58.58 0 0 0 .255.384q.106.073.25.114.142.041.319.041.245 0 .413-.07a.56.56 0 0 0 .255-.193.5.5 0 0 0 .085-.29.39.39 0 0 0-.153-.326q-.152-.12-.463-.193l-.618-.143a1.7 1.7 0 0 1-.539-.214 1 1 0 0 1-.351-.367 1.1 1.1 0 0 1-.123-.524q0-.366.19-.639.19-.272.527-.422t.777-.149q.456 0 .779.152.326.153.5.41.18.255.2.566h-.75a.56.56 0 0 0-.12-.258.6.6 0 0 0-.246-.181.9.9 0 0 0-.37-.068q-.324 0-.512.152a.47.47 0 0 0-.184.384q0 .18.143.3a1 1 0 0 0 .404.175l.621.143q.326.075.566.211t.375.358.135.56q0 .37-.188.656a1.2 1.2 0 0 1-.539.439q-.351.158-.858.158-.381 0-.665-.09a1.4 1.4 0 0 1-.478-.252 1.1 1.1 0 0 1-.29-.375"/>
            </svg> )
    } else if(icon=="javascript"){
        return( <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="currentColor" class="bi bi-filetype-js" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2H8v-1h4a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM3.186 15.29a1.2 1.2 0 0 1-.111-.449h.765a.58.58 0 0 0 .255.384q.105.073.249.114.143.041.319.041.246 0 .413-.07a.56.56 0 0 0 .255-.193.5.5 0 0 0 .085-.29.39.39 0 0 0-.153-.326q-.151-.12-.462-.193l-.619-.143a1.7 1.7 0 0 1-.539-.214 1 1 0 0 1-.351-.367 1.1 1.1 0 0 1-.123-.524q0-.366.19-.639.19-.272.528-.422.336-.15.776-.149.457 0 .78.152.324.153.5.41.18.255.2.566h-.75a.56.56 0 0 0-.12-.258.6.6 0 0 0-.247-.181.9.9 0 0 0-.369-.068q-.325 0-.513.152a.47.47 0 0 0-.184.384q0 .18.143.3a1 1 0 0 0 .405.175l.62.143q.327.075.566.211.24.136.375.358t.135.56q0 .37-.188.656a1.2 1.2 0 0 1-.539.439q-.351.158-.858.158-.381 0-.665-.09a1.4 1.4 0 0 1-.478-.252 1.1 1.1 0 0 1-.29-.375m-3.104-.033A1.3 1.3 0 0 1 0 14.791h.765a.6.6 0 0 0 .073.27.5.5 0 0 0 .454.246q.285 0 .422-.164.138-.165.138-.466v-2.745h.79v2.725q0 .66-.357 1.005-.354.345-.984.345a1.6 1.6 0 0 1-.569-.094 1.15 1.15 0 0 1-.407-.266 1.1 1.1 0 0 1-.243-.39"/>
          </svg>)
    } else if(icon=="database"){
        return(
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="currentColor" class="bi bi-database" viewBox="0 0 16 16">
            <path d="M4.318 2.687C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4c0-.374.356-.875 1.318-1.313M13 5.698V7c0 .374-.356.875-1.318 1.313C10.766 8.729 9.464 9 8 9s-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777A5 5 0 0 0 13 5.698M14 4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13zm-1 4.698V10c0 .374-.356.875-1.318 1.313C10.766 11.729 9.464 12 8 12s-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777A5 5 0 0 0 13 8.698m0 3V13c0 .374-.356.875-1.318 1.313C10.766 14.729 9.464 15 8 15s-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13s3.022-.289 4.096-.777c.324-.147.633-.323.904-.525"/>
            </svg>
        )
    } else if(icon=="gpt"){
        return(
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="currentColor" class="bi bi-cpu" viewBox="0 0 16 16">
            <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0m-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"/>
            </svg>
        )
    }
}   

function Home() {
    const startRef = useRef();
    return (
        <div className='background'>
            <div>
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
            {/* ///////////////////////////////////////Markup Language///////////////////////////////////////// */}
            <div className="contents">
                <div className='nav'>
                    <div className='nav_title'>
                        <h1>마크업 Language 및 Reference</h1>
                        <div className='text'>
                        <p>AI를 통한 개발을 지향한다는 것은 혁신적이고 효율적인 미래를 설계하는 것입니다. 인공지능의 힘을 활용하여 복잡한 문제를 해결하고, 창의적 아이디어를 현실로 만들어갑니다. 이를 통해 우리는 더 스마트하고, 더 빠르게, 더 나은 세상을 만들어갈 것입니다.</p>
                        </div>
                    </div>
                
                    <span className='list_red'>
                        <h1>HTML</h1>
                        {icon("html", 64, 64)}
                        <div className='nav_box'>
                            HTML(하이퍼텍스트 마크업 언어)은 웹 페이지와 웹 애플리케이션의 구조와 콘텐츠를 정의하는 표준 마크업 언어입니다. 태그를 사용하여 텍스트, 이미지, 링크, 비디오 등의 요소를 웹 페이지에 배치하고 구성합니다. 브라우저가 HTML 문서를 해석하여 사용자에게 웹 페이지를 표시합니다.
                        </div>
                    </span>
                    <span className='list_green'>
                        <h1>CSS</h1>
                        {icon("css", 64, 64)}
                        <div className='nav_box'>
                        CSS (Cascading Style Sheets)는 웹 페이지의 스타일과 레이아웃을 정의하는 언어입니다. HTML 요소들의 외관을 제어하며, 색상, 글꼴, 여백, 배치 등을 설정할 수 있습니다. CSS는 HTML과 분리되어 있어 콘텐츠와 디자인을 독립적으로 관리할 수 있습니다.
                        </div>
                    </span>
                    <span className='list_gray'>
                        <h1>JavaScript</h1>
                        {icon("javascript", 64, 64)}
                        <div className='nav_box'>
                        JavaScript는 웹 페이지에 동적인 기능을 추가하기 위해 사용하는 프로그래밍 언어입니다. 브라우저에서 실행되며, 사용자 인터랙션, 애니메이션, 데이터 처리 등을 가능하게 합니다. HTML과 CSS와 함께 웹의 핵심 기술 중 하나로, 클라이언트와 서버 측 모두에서 사용될 수 있습니다.
                        </div>
                    </span>
                    <span className='list_yellow'>
                        <h1>OpenAI</h1>
                        <a href='https://chat.lmsys.org/'>{icon("gpt", 64, 64)}</a>
                        <div className='nav_box'>
                        ChatGPT는 OpenAI에서 개발한 대화형 인공지능 모델입니다. 자연어 이해와 생성 능력을 통해 사용자와 대화하거나 다양한 질문에 답변할 수 있습니다. 주로 고객 지원, 정보 검색, 창작 활동 등의 다양한 응용 분야에서 사용됩니다.
                        </div>
                    </span>
                    <span className=''>
                        <h1>Database</h1>
                        {icon("database", 64, 64)}
                        <div className='nav_box'>
                        데이터베이스(Database)는 데이터를 체계적으로 저장하고 관리하는 시스템입니다. 효율적인 데이터 검색, 삽입, 삭제, 업데이트를 지원하며, 데이터의 무결성과 일관성을 유지합니다. 다양한 형태의 데이터베이스가 있으며, 관계형 데이터베이스(SQL 기반)와 비관계형 데이터베이스(NoSQL 기반)가 대표적입니다.
                        </div>
                    </span>
                    <block className='block_box'>
                    
                    </block>
                    
                    
                </div>
                
            </div>

            
            <div className="contents">
            </div>
            <div className='center'>
                <div id="target" class='field'>
                    <button class='has-tooltip'>toolTIp</button>
                    <span class='tooltip red'>
                    <p>This is a red tooltip</p>
                    </span>
                </div>
            </div>
            
           <div className='slider_section'>
            <div>
                
            </div>
            <div>
                
            </div>
            <div>
                maingi
            </div>
           </div>
            
        </div>
    );
}

export default Home;