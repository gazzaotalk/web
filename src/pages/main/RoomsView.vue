<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header class="border-bottom" style="
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        column-gap: 0.2rem;
        z-index: 1;
        padding: 1rem;
    ">
        <h4 style="font-weight: bold; margin-bottom:0px;">채팅</h4>
        <RouterLink to="/rooms_add" style="
            margin-left:auto;
            color: black;
        ">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
                <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
            </svg>
        </RouterLink>
        
    </header>

    <div id="main">
        <div class="room row">
            <div class="col-2">
                <img class="radius_img" src="https://via.placeholder.com/50"/>
            </div>
            <div class="col-10">
                <RouterLink to="room">
                    <div class="row">
                        <div class="col-9">
                            <p>방이름</p>
                        </div>
                        <div class="col-3">
                            <p style="font-size:xx-small; color:gray">오후 9:04</p>
                        </div>
                    </div>
                    
                    <p style="font-size:small; color: gray">내용내용내용</p>
                </RouterLink>
                
            </div>
        </div>
        <div class="room row">
            <div class="col-2">
                <img class="radius_img" src="https://via.placeholder.com/50"/>
            </div>
            <div class="col-10">
                <div class="row">
                    <div class="col-9">
                        <p>방이름</p>
                    </div>
                    <div class="col-3">
                        <p style="font-size:xx-small; color:gray">오후 9:04</p>
                    </div>
                </div>
                
                <p style="font-size:small; color: gray">내용내용내용</p>
            </div>
        </div>
        
    </div>

</template>

<style>
    a{
        text-decoration: none;
        color:black;
    }
</style>