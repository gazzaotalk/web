<template>
    <body style="
        background-color:lightskyblue;
    ">
    
    <header style="
        display: flex;
        align-items: center;
        justify-content: flex-start;
        column-gap: 0.2rem;
        background-color:transparent;
        background-color:lightskyblue;
        z-index: 1;
        padding:1rem;
    ">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
            </svg>
        </div>
        <div>
            <h4 style="font-weight: bold; margin:0px; line-height: 1rem;">해커톤 4조</h4>
        </div>

        <div>
            <span style="color:gray; margin-left:0.2rem;">4</span>
        </div>

        <div style="
                margin-left: auto;
            ">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search"
                viewBox="0 0 16 16">
                <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
        </div>
        <div style="
                text-align:right;
                padding: 0px;
                float:right;
                margin-left:1rem;
            ">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-list"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
        </div>
    </header>

    <div id="main" style="z-index:0;">

        <div class="my-message" style="
            display:flex;
            align-items:center;
            column-gap: 0.3rem;
            margin-bottom:0.5rem;
        ">
            
            <div style="
                position:relative;
                align-self:flex-end;
                margin-left:auto;
                font-size:small;
                color:rgb(83, 83, 83);
            ">
                <div style="
                    position: absolute;
                    top: -1rem;
                    right:0;
                    color:yellow;
                ">
                    1
                </div>
                오후 10:40
            </div>
            <div>
                
                <div style="
                    border-radius: 10px;
                    background-color:yellow;
                    padding:0.4rem;
                ">
                    메세지1메세지1메세지1<br>
                    메세지1
                </div>
                
            </div>
        </div>
        
        <div class="my-message" style="
            display:flex;
            align-items:center;
            column-gap: 0.3rem;
            margin-bottom:0.5rem;
        ">
            <div style="
                align-self:flex-end;
                margin-left:auto;
                font-size:small;
                color:rgb(83, 83, 83);
            ">
                오후 10:40
            </div>
            <div>
                
                <div style="
                    border-radius: 10px;
                    background-color:yellow;
                    padding:0.4rem;
                ">
                    메세지2
                </div>
                
            </div>
        </div>


        

        <div class="row friends_message">
            <div class="col-2 w-auto">
                <img class="radius_img" src="https://via.placeholder.com/40"/>
            </div>
            
            <div class="col">
                <div class="row" style="font-size:small">
                    사람 1
                </div>
                
                <div class="row">
                    <div class="col-auto" style="
                        border-radius: 10px;
                        background-color:white;
                        padding:0.4rem;
                        margin-bottom: 0.2rem;
                    ">
                        메세지3
                    </div>

                    <div class="col" style="
                        font-size:small;
                        color:yellow;
                        display:flex;
                        align-items:flex-end;
                        padding-left:0.2rem;
                    ">
                        
                        1
                    </div>
                    
                    
                </div>

                <div class="row">
                    <div class="col-auto" style="
                        border-radius: 10px;
                        background-color:white;
                        padding:0.4rem;
                        margin-bottom: 0.2rem;
                    ">
                        메세지4
                    </div>

                    <div class="col" style="
                        font-size:small;
                        color:yellow;
                        display:flex;
                        align-items:flex-end;
                        padding-left:0.2rem;
                    ">
                        
                        1
                    </div>
                    
                </div>

                <div class="row">
                    <div class="col-auto" style="
                        border-radius: 10px;
                        background-color:white;
                        padding:0.4rem;
                        margin-bottom: 0.2rem;
                    ">
                        메세지5메세지5메세지5<br>
                        메세지5
                    </div>

                    <div class="col" style="
                        font-size:small;
                        color:rgb(83, 83, 83);
                        vertical-align:bottom;
                        display:flex;
                        align-items:flex-end;
                        position:relative;
                        padding-left:0.2rem;
                    ">
                        <div style="
                            position: absolute;
                            left:0.3rem;
                            bottom:1rem;
                            color:yellow;
                        ">
                            1
                        </div>
                        오후 10:40
                    </div>
                </div>
            </div>

            
            
        </div>


        
    </div>

    <footer class="border-top" style="
        display: flex;
        align-items: center;
        justify-content: flex-start;
        column-gap: 0.2rem;
    ">
        <div style="
            padding: 1rem;
            font-weight: bold;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: white;
        ">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
        </div>
        <textarea onkeydown="textAreaChanged(event)" rows="1" wrap="hard" style="
            flex: 1;
            border: none;
            resize: none;
        "></textarea>
        <div style="
            margin-left:1rem;
        ">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
            </svg>
        </div>

        <div style="
            float:right;
            margin-left:1rem;
            margin-right:1rem;
        ">
            <span style="
                font-size:xx-large;
                font-weight: lighter;
                color:gray;
            ">#</span>
        </div>
    </footer>

    
</body>
</template>

<style>
textarea:focus {
    outline:none;
    border:none;
}
</style>