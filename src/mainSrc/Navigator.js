import './Navigator.css';



function Navigator(){

    return(
        <div className="Navigator">
            <div className='Nav'>
                <ul>
                <div className='Nav_icon'>
                    <a href='/'>
                    <svg xmlns="D:\web\study\public\house-door-fill.svg" width="30" height="30" fill="currentColor" class="bi bi-house-door-fill" className='icon' viewBox="0 0 16 16">
                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/></svg>
                    </a>
                </div>
                <li><a href="/1">JavaScript</a></li>
                <li><a href="/">Graphics</a></li>
                <li><a href="/2">Project</a></li>
                <li><a href="/">Notion</a></li>
                <li><a href="/login">LoginForm</a></li>
                <li><a href="https://pixabay.com/ko/images/search/graphic/">PixaBay</a></li>
                <li><a href="#target">toolTIp</a></li>
                <div className='li_icon_nav'>
                    <div className='li_icon_icon'>
                    <li><a href="https://github.com/Song307?tab=repositories">
                        <svg xmlns="" 
                        width="45" height="45" fill="currentColor" className='li_icon_icon' class="bi bi-github" 
                        viewBox="0 0 30 30">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                        </svg>
                    </a></li>
                    <li><a href="https://mail.google.com/mail/u/0/#inbox">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        width="45" height="45" fill="currentColor" className='li_icon_icon' class="bi bi-envelope" 
                        viewBox="0 0 30 30">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                    </svg>
                    </a></li>
                    <li><a href="https://getbootstrap.com/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-bootstrap-fill" viewBox="0 0 30 30">
                        <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375z"/>
                        <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396z"/>
                    </svg>
                    </a></li>
                    </div>
                    
                    <li><div className='input_box'>
                    <input placeholder='Search'></input>
                    <div className='Search_button'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-search" viewBox="0 0 20 20">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                    </div>
                </div>
                </li>
                </div>
                </ul>
            </div>
        </div>
    )
}

export default Navigator;