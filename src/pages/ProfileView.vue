<template>
<body style="width:100vw; height:100vh">
    <img style="object-fit: cover;" id="bck" class="photo-background" src="background.png"/>
    <div style="position: relative;background-color: transparent; display: inline-block; align-items: center; height: 85%; display: flex; flex-direction: column; border-bottom: 1px solid white;">
        <div style="width: 100%; padding: 10px;">
            <div style="float: left; background-color: transparent;">
                <button style="background-color: transparent; border: none; padding: 0;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                      </svg>
                </button>
            </div>
        </div>
        <div style="margin-top: auto; height: 180px; width: 100px;; flex-direction: column; background-color: transparent;">
            <div>
                    <img id="prof" style="margin-bottom:5px;" class="photo1" src="profile-image-basic.png" alt="Profile" />
            </div>
            <div>
                <p style="text-align: center; font-size: large; margin: 0;">Kevin</p>
                <p style="text-align: center; margin-top: 0px; font-size: small; padding: 10px;">상태 메세지</p>
            </div>
        </div>
    </div>
    <div style="position: relative; background-color: transparent; padding: 5%; display: inline-block; align-items: center; height: 15%; display: flex; flex-direction: column;">
        <button onclick="location.href='profile-table-edit.html' " style="border: none; background-color: transparent; margin-bottom: auto;">
            <div style="height: 130px; width: 100px; flex-direction: column; display: inline-block; align-items: center; display: flex;">
                <div>
                    <p style="text-align: center; margin-top: 0px;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                          </svg>
                    </p>
                </div>
                <div>
                    <p style="text-align: center; margin-top: 7px; font-size: small;">프로필 편집</p>
                </div>
            </div>
        </button>
    </div>
    </body>
</template>

<style>
.photo1 {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 45%;
}

.photo-edit {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 50%;
    align-content: center;
}

.photo-background {
    width: 100vw;
    height:100vh;
    position: absolute;
}

.photo1-button {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
</style>