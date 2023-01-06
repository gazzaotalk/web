<template>

    <body>
        <h1 style="font-size: 25px; text-align: center; ">카카오톡을 시작합니다</h1>
        <div class="textForm">
            <div style="padding: 5px 2px 50px 2px;"></div>
            <input name="loginId" type="text" class="id" placeholder="이메일 또는 전화번호" />

        </div>
        <div class="textForm">
            <input name="loginPw" type="password" class="pw" placeholder="비밀번호">
        </div>
        <div style="padding: 5px 2px -200px 2px;"></div>
        <button class="login-button-wrap2">로그인</button>
        <button class="login-button-wrap3">새로운 카카오계정 만들기</button>
        <div style="padding: 5px 2px -30px 2px;"></div>
        <a href="#" style="text-align:center; text-decoration: none; color: unset">카카오계정 또는 비밀번호 찾기</a>
    </body>

</template>

<style>
:root {
    --body-background-color: #f5f6f7;
    --font-color: #4e4e4e;
    --border-gray-color: #dadada;
}


* {
    margin: 0;
    padding: 0;
}

body {
    margin-top: 8rem;
    background: white;
    width: 100%;
    display: flex;
    flex-direction: column;
}

body>* {
    margin: 0.5rem 30px;
}

.login-input-section-wrap {
    width: 22rem;
    font-size: 1.4rem;
    margin: 6rem auto;
    display: flex;
    flex-direction: column;
    align-items: left;
}


.login-input-wrap {
    width: 200%;
    background: white;
    font-size: 1.3rem;
    border: 1px solid grey;
    border-collapse: collapse;
    padding: 1.4rem;
    outline: none;
    box-sizing: border-box;
}

.login-input-wrap2 {
    width: 100%;
    height: 50px;
    background: white;
    font-size: 1.3rem;
    border: 1px solid grey;
    border-collapse: collapse;
    padding: 1.4rem;
    outline: none;
    box-sizing: border-box;
}

.login-button-wrap {
    width: 100%;
    padding: 0.8rem;
    font-size: 1.2rem;
    background: #413630;
    color: white;
    border: #FFD700;
}

.id {
    width: 100%;
    border: none;
    outline: none;
    color: #636e72;
    font-size: 16px;
    height: 25px;
    background: none;
}

.pw {
    width: 100%;
    border: none;
    outline: none;
    color: #636e72;
    font-size: 16px;
    height: 25px;
    background: none;
}

.textForm {
    border-bottom: 2px solid #adadad;
    padding: 10px 10px;
}

.login-button-wrap2 {
    margin-top: 2rem;
    width: 20.5rem;
    box-sizing: inherit;
    padding: 0.8rem;
    font-size: 1.2rem;
    background: #F6F6F6;
    color: #939393;
    border: #FFD700;
}

.login-button-wrap3 {
    padding: 0.8rem;
    font-size: 1.2rem;
    background: #F6F6F6;
    color: #252525;
    border: #FFD700;
}
</style>