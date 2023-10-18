<template>
    <div class="flex flex-col md:flex-row justify-between items-center  w-[80%] mx-auto py-20 text-primary-color">
        <div class="md:w-[550px] xl:flex-none">
            <h1 class="font-bold md:text-[100px] text-5xl text-center md:text-right">modern art
                <br>
                <span class="font-extralight">
                    at your doorstep
                </span>
            </h1>
            <p class="md:text-start text-center">
                 Aesthetics is a must have if you want to showcase your art gallery. Display a beautiful, simple and optimized website to your users easily by installing this free HubSpot theme.
            </p>

            <div class="my-6 w-[5rem] h-[5rem] rounded-full mx-auto flex justify-center items-center border-2 border-primary-color">
                <svg width="70" height="60" viewBox="0 0 9 16" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#000000" d="M4.5 13c-.28 0-.5-.22-.5-.5v-9c0-.28.22-.5.5-.5s.5.22.5.5v9c0 .28-.22.5-.5.5Z"/>
                    <path fill="#000000" d="M4.5 14a.47.47 0 0 1-.35-.15l-3.5-3.5c-.2-.2-.2-.51 0-.71c.2-.2.51-.2.71 0l3.15 3.15l3.15-3.15c.2-.2.51-.2.71 0c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"/>
                </svg>
            </div>
        </div>
        <div class="relative">
            <n-carousel autoplay  >
                <div class=" xl:h-[700px] h-[500px] flex justify-center items-center">
                    <img class="w-[400px]" src="../assets/hero1.webp" alt="">
                    <div class="animate__animated animate__backInRight first-circle "></div>
                    <div class="animate__animated animate__backInLeft  second-object"></div>
                </div>
                <div class=" xl:h-[700px] h-[500px]  flex justify-center items-center">
                    <img class="md:w-[400px]" src="../assets/hero2.webp" alt="">
                    <div class="animate__animated animate__backInRight first-circle  "></div>
                    <div class="animate__animated animate__backInLeft second-object "></div>
                </div>
                <div class="xl:h-[700px] h-[500px] flex justify-center items-center">
                    <img class="w-[400px]" src="../assets/hero3.webp" alt="">
                    <div class="animate__animated animate__backInRight first-circle  "></div>
                    <div class="animate__animated animate__backInLeft second-object "></div>
                </div>
            </n-carousel>
        </div>
    </div>
</template>

<script setup lang="ts">
    import 'animate.css';
    import {NCarousel} from 'naive-ui'
</script>

<style scoped>
h1{
    line-height: normal;
}

img{
    border-radius: 50px 0px 0px 50px;
}

@media only screen and (max-width: 768px) {
    img{
        width: 330px;
        height: 330px;
        border-radius: 50%;
    }
   .second-object {
    border-radius: 50% !important;
   }
    
}

.widget {
    border-radius: 0px 0px 0px 50px;
}

.first-circle {
    @apply absolute md:top-[40%]  top-[10%] right-10 md:right-[3rem] md:w-[12rem] md:h-[12rem] w-[8rem] h-[8rem] bg-yellow-500 rounded-full
}

.second-object {
    @apply  absolute md:bottom-[0rem] bottom-[0rem]  md:left-[4rem] left-[1rem] widget   md:w-[14rem] md:h-[14rem] w-[8rem] h-[8rem] bg-red-900
}
</style>