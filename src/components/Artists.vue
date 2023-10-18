<template>
    <div class="text-primary-color text-center w-[75%] mx-auto">
        <NGrid cols="1 m:12" responsive="screen" class="my-10">
            <n-gi :span="3"></n-gi>
            <NGi :span="6">
                <h2 class="text-4xl md:text-6xl my-6">highlight <span class="font-bold">artists</span></h2>
                 <p class="text-lg">with a customizable carousel system, show off their work in the most efficient way possible, without compromise.</p>
            </NGi>
            <n-gi :span="3"></n-gi>
        </NGrid>
       <div class="my-10 hidden md:block">
        <n-carousel
            autoplay
            slides-per-view="auto"
            :space-between="20"
            :loop="true"
            draggable
        >
            <n-carousel-item style="width: 33%">
                <div class="img-container">
                    <img src="../assets/artist1.webp" alt="artist 1">
                    <div class="info-box">
                        <div><h3 class="">vince <span class="font-bold">fleming</span></h3>
                        <h4 class="text-sm tracking-widest my-2">PHOTOGRAPHER</h4></div>
                    </div>
                </div>
            </n-carousel-item>
            <n-carousel-item style="width: 33%">
                <div class="img-container">
                    <img src="../assets/artist2.webp" alt="artist 1">
                    <div class="info-box">
                        <div><h3 class="">frankie <span class="font-bold">cordoba</span></h3>
                        <h4 class="text-sm tracking-widest my-2">PHOTOGRAPHER</h4></div>
                    </div>
                </div>
            </n-carousel-item>
            <n-carousel-item style="width: 33%">
                <div class="img-container">
                    <img src="../assets/artist7.webp" alt="artist 1">
                    <div class="info-box">
                        <div><h3 class="">muhammad <span class="font-bold">rahim ali</span></h3>
                        <h4 class="text-sm tracking-widest my-2">PHOTOGRAPHER</h4></div>
                    </div>
                </div>
            </n-carousel-item>
            <n-carousel-item style="width: 33%">
                <div class="img-container">
                    <img src="../assets/artist6.webp" alt="artist 1">
                    <div class="info-box">
                        <div><h3 class="">pouriya <span class="font-bold">kafei</span></h3>
                        <h4 class="text-sm tracking-widest my-2">PHOTOGRAPHER</h4></div>
                    </div>
                </div>
            </n-carousel-item>
        </n-carousel>
       </div>
       <div class="my-10 md:hidden">
        <n-carousel
            autoplay
            slides-per-view="auto"
            :space-between="20"
            :loop="true"
            draggable
        >
            <n-carousel-item style="width: 100%">
                <div class="img-container">
                    <img src="../assets/artist1.webp" alt="artist 1">
                    <div class="info-box">
                        <div><h3 class="">vince <span class="font-bold">fleming</span></h3>
                        <h4 class="text-sm tracking-widest my-2">PHOTOGRAPHER</h4></div>
                    </div>
                </div>
            </n-carousel-item>
            <n-carousel-item style="width: 100%">
                <div class="img-container">
                    <img src="../assets/artist2.webp" alt="artist 1">
                    <div class="info-box">
                        <div><h3 class="">frankie <span class="font-bold">cordoba</span></h3>
                        <h4 class="text-sm tracking-widest my-2">PHOTOGRAPHER</h4></div>
                    </div>
                </div>
            </n-carousel-item>
            <n-carousel-item style="width: 100%">
                <div class="img-container">
                    <img src="../assets/artist7.webp" alt="artist 1">
                    <div class="info-box">
                        <div><h3 class="">muhammad <span class="font-bold">rahim ali</span></h3>
                        <h4 class="text-sm tracking-widest my-2">PHOTOGRAPHER</h4></div>
                    </div>
                </div>
            </n-carousel-item>
            <n-carousel-item style="width: 100%">
                <div class="img-container">
                    <img src="../assets/artist6.webp" alt="artist 1">
                    <div class="info-box">
                        <div><h3 class="">pouriya <span class="font-bold">kafei</span></h3>
                        <h4 class="text-sm tracking-widest my-2">PHOTOGRAPHER</h4></div>
                    </div>
                </div>
            </n-carousel-item>
        </n-carousel>
       </div>

       <div class=" animate__animated animate__backInUp md:my-[100px] my-10 flex flex-col-reverse md:flex-row justify-between items-center">
        <div class="artist-img-container relative">
            <img src="../assets/artist10.webp" alt="artist">
            <div class="absolute top-[60%] left-[-10%] shape1 md:w-[10rem] md:h-[10rem] w-[7rem] h-[7rem] bg-green-400 rounded-full z-30">
            </div>
            <div class="absolute top-[10%] right-[-10%] shape2 md:w-[10rem] md:h-[12rem] w-[7rem] h-[7rem] bg-[#fffee5]  z-30">
            </div>
        </div>
        <div class="md:w-[450px] text-center">
            <h1 class="font-bold md:text-6xl text-4xl md:text-start">show off
                <br>
                <span class="font-extralight">
                    your strengths
                </span>
            </h1>
            <p class="md:text-start text-center my-4 md:text-lg tracking-wider">
                 Aesthetics is a must have if you want to showcase your art gallery. Display a beautiful, simple and optimized website to your users easily by installing this free HubSpot theme.
            </p>

            <div class="animate-bounce my-8 cursor-pointer w-[5rem] h-[5rem] rounded-full mx-auto md:mx-0  flex justify-center items-center border-2 border-primary-color">
                <svg width="70" height="60" viewBox="0 0 9 16" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#000000" d="M4.5 13c-.28 0-.5-.22-.5-.5v-9c0-.28.22-.5.5-.5s.5.22.5.5v9c0 .28-.22.5-.5.5Z"/>
                    <path fill="#000000" d="M4.5 14a.47.47 0 0 1-.35-.15l-3.5-3.5c-.2-.2-.2-.51 0-.71c.2-.2.51-.2.71 0l3.15 3.15l3.15-3.15c.2-.2.51-.2.71 0c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"/>
                </svg>
            </div>
        </div>

       </div>
        
    </div>

</template>


<script setup lang="ts">
import { NGrid, NGi, NCarousel, NCarouselItem } from 'naive-ui';
import 'animate.css';
</script>

<style scoped>
.img-container {
    @apply md:w-[360px] md:h-[360px] rounded-xl overflow-hidden relative;
}

.info-box {
    box-shadow: 5px 0px 50px -5px black inset
}

.img-container img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.info-box{
    @apply absolute top-0 flex justify-center items-end w-full h-full p-5 z-30 text-white text-2xl
}

.itemss {
    @apply w-[50%] md:w-[33%]
}

.artist-img-container img, .shape2 {
    border-radius: 0px 50px 0px 0px;
}

@media only screen and (max-width: 678px) {
    .artist-img-container img {
        border-radius: 50%;
    }

    .shape2 {
        border-radius: 50%;
    }
}


</style>