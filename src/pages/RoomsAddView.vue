<template>
    <header style="
        background-color: white;
    ">
        <div class="border-bottom" style="
            display: flex;
            align-items: center;
            justify-content: flex-start;
            column-gap: 0.2rem;
            z-index: 1;
            padding: 1rem;
        ">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                    class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                </svg>
            </div>
            <div>
                <h4 style="font-weight: bold; margin:0px; line-height: 1rem;">대화상대 초대</h4>
            </div>

            <div style="
                margin-left: auto;
            ">
                <span style="color:gold">1</span>
            </div>
            <div style="
                text-align:right;
                padding: 0px;
                float:right;
                
            ">
                <span style="color:gray;">확인</span>
            </div>
        </div>
        <div id="add_list" style="
                overflow: auto;
                display:flex;
                padding: 1rem;
            ">
            <div style="
                position: relative;
                margin-right:1rem;
            ">
                <img class="radius_img" src="https://via.placeholder.com/50" />
                <div style="
            position: absolute;
            top: 0;
            right: 0;
            background: gray;
            opacity: 0.8;
            color: white;
            font-weight: bold;
            border-radius: 50%;
            width: 1rem;
            height: 1rem;
            line-height: 0.9rem;
            text-align: center;
            font-size: 0.6rem;
        ">
                    ✕
                </div>
                <span style="justify-content: center;
        align-items: center;
        display: flex;">ddd</span>
            </div>

            <div style="
        position: relative;
        margin-right:1rem;
    ">
                <img class="radius_img" src="https://via.placeholder.com/50" />
                <div style="
            position: absolute;
            top: 0;
            right: 0;
            background: gray;
            opacity: 0.8;
            color: white;
            font-weight: bold;
            border-radius: 50%;
            width: 1rem;
            height: 1rem;
            line-height: 0.9rem;
            text-align: center;
            font-size: 0.6rem;
        ">
                    ✕
                </div>
                <span style="justify-content: center;
        align-items: center;
        display: flex;">ddd</span>
            </div>
        </div>
    </header>

    <div id="main" style="padding-bottom:0px; z-index:0;">
        <form>
            <input type="text" class="form-control" style="
                background-color:whitesmoke;
                margin-bottom:1rem;
                caret-color: gold;
                
            " placeholder="이름 검색">
        </form>
        <div class="friend row">
            <div class="col-2">
                <img class="radius_img" src="https://via.placeholder.com/50" />
            </div>

            <div class="col-8">
                <p>친구1</p>
            </div>
            <div class="col-2" id="checkbox" @click="check_Event($event)">
                <img src="/icons/uncheck.PNG">
            </div>
        </div>

        <div class="friend row">
            <div class="col-2">
                <img class="radius_img" src="https://via.placeholder.com/50" />
            </div>

            <div class="col-8">
                <p>친구1</p>
            </div>
            <div class="col-2" id="checkbox" @click="check_Event($event)">
                <img src="/icons/uncheck.PNG">
            </div>
        </div>

    </div>
</template>

<script>
export default{
    methods:{
        check_Event(event) {
            const $checkboxImg = event.target;
            const src = $checkboxImg.getAttribute('src');
            $checkboxImg.setAttribute('src', src === '/icons/uncheck.PNG' ? '/icons/check.PNG' : '/icons/uncheck.PNG');
        }
    }
}
</script>