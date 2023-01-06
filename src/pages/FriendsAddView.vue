<template>
<body style="width:100vw; height:100vh; display: flex; flex-direction: column;">
    <div style="width: 100vw; position: fixed;background-color: transparent; display: inline-block; height: 40px; text-align: center;">
        <div style="width: 100vw ; padding: 10px; padding-top: 20px;">
            <div style="float: left; background-color: transparent; position: absolute;">
                <button style="background-color: transparent; border: none; padding: 0;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                      </svg>
                </button>
            </div>
            <div>
                <p style="margin-top: 7px; font-size: larger;">카카오톡 ID로 추가</p>
            </div>
        </div>
    </div>
    <div style="width: 100vw; height: 40px; display: flex;">
        <input onchange="printName()" id="name" style="height: 40px; width: 90%; display: inline-block; margin: auto;border: none; border-bottom: 1px solid; outline: none;" type="search" maxlength="20" placeholder="친구 카카오톡 ID"/>
    </div>
    <div id="me"></div>
    <!-- <div style="width: 90%; padding-top: 2px; height: 30px; margin: auto;margin-top: 20px;margin-bottom: 20px; background-color: #F6F6F6; display: flex; border-radius: 7px; text-align: center;">
        <p style="margin-left: 10px">내 아이디</p>
        <p style="margin-left: auto; margin-right: 10px;">My_ID</p>
    </div> -->
    <div id="friend"></div>
    <!-- <div style="width: 90%; margin: auto;">
        <div style="margin-bottom: 20px; padding: 20px; height: 240px; width: 100%; flex-direction: column; background-color: #F6F6F6; border-radius: 7px;">
            <div>
                    <img style="margin: auto; margin-bottom:17px;" class="photo1" src="profile-image-basic.jfif" alt="Profile" />
            </div>
            <div>
                <p style="text-align: center; font-size: large; margin-bottom: 17px;">Kevin</p>
                <div style="text-align: center; margin-top: 4px; font-size: small;"><button style="outline: none; padding: 6px; padding-left: 20px; padding-right: 20px; border-radius: 7px; border: none; background-color: #FEE500;">친구 추가</button></div>
            </div>
        </div>
    </div> -->
    <div id="none"></div>
</body>
</template>

<style>
.photo1 {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 45%;
    margin: auto; 
    margin-bottom:17px;
}

.result{
    width: 90%; 
    margin: auto;
    margin-top: 20px;
}

.big_case{
    margin-bottom: 20px; 
    padding: 20px; 
    height: 240px; 
    width: 100%; 
    flex-direction: column; 
    background-color: #F6F6F6; 
    border-radius: 7px;
}

.pstyle{
    text-align: center; 
    font-size: large; 
    margin-bottom: 17px;
}

.adding{
    text-align: center; margin-top: 4px; font-size: small;
}

.adding_button{
    outline: none; 
    padding: 6px; 
    padding-left: 20px; 
    padding-right: 20px; 
    border-radius: 7px; 
    border: none; 
    background-color: #FEE500;
}

.me_case{
    width: 90%;
    padding-top: 2px; 
    height: 30px; 
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px; 
    background-color: #F6F6F6; 
    display: flex; 
    border-radius: 7px; 
    text-align: center;
}

.name{
    margin-left: 10px;
}

.Id{
    margin-left: auto;
    margin-right: 10px;
}

.nothing{
    margin-top: 20px;
}
</style>