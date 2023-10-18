<template>
    <div class=" hidden md:flex header h-[7rem] shadow-lg bg-white  justify-around items-center">
        <div class="logo">
            <img src="../assets/logo.svg" alt="The logo">
        </div>
        <div class="menu">
            <ul class="flex space-x-6">
                <li class="flex items-center justify-center">artists
                    <svg width="30" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <g fill="#ea580c" fill-rule="evenodd" clip-rule="evenodd">
                            <g opacity=".2">
                                <path d="M17.152 11.206a1.5 1.5 0 0 1-.192 2.113l-4 3.333a1.5 1.5 0 1 1-1.92-2.304l4-3.334a1.5 1.5 0 0 1 2.112.192Z"/>
                                <path d="M6.848 11.206a1.5 1.5 0 0 1 2.112-.192l4 3.334a1.5 1.5 0 1 1-1.92 2.304l-4-3.333a1.5 1.5 0 0 1-.192-2.113Z"/>
                                <path d="M12 15a1.5 1.5 0 0 1-1.5-1.5v-8a1.5 1.5 0 0 1 3 0v8A1.5 1.5 0 0 1 12 15Z"/>
                            </g>
                            <path d="M14.384 11.347a.5.5 0 0 1-.064.704l-4 3.333a.5.5 0 0 1-.64-.768l4-3.333a.5.5 0 0 1 .704.064Z"/>
                            <path d="M5.616 11.347a.5.5 0 0 1 .704-.064l4 3.333a.5.5 0 0 1-.64.768l-4-3.333a.5.5 0 0 1-.064-.704Z"/>
                            <path d="M10 15a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 1 0v9.5a.5.5 0 0 1-.5.5Z"/>
                        </g>
                    </svg>
                </li>
                <li>artworks</li>
                <li class="flex">events
                    <svg width="30" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <g fill="#ea580c" fill-rule="evenodd" clip-rule="evenodd">
                            <g opacity=".2">
                                <path d="M17.152 11.206a1.5 1.5 0 0 1-.192 2.113l-4 3.333a1.5 1.5 0 1 1-1.92-2.304l4-3.334a1.5 1.5 0 0 1 2.112.192Z"/>
                                <path d="M6.848 11.206a1.5 1.5 0 0 1 2.112-.192l4 3.334a1.5 1.5 0 1 1-1.92 2.304l-4-3.333a1.5 1.5 0 0 1-.192-2.113Z"/>
                                <path d="M12 15a1.5 1.5 0 0 1-1.5-1.5v-8a1.5 1.5 0 0 1 3 0v8A1.5 1.5 0 0 1 12 15Z"/>
                            </g>
                            <path d="M14.384 11.347a.5.5 0 0 1-.064.704l-4 3.333a.5.5 0 0 1-.64-.768l4-3.333a.5.5 0 0 1 .704.064Z"/>
                            <path d="M5.616 11.347a.5.5 0 0 1 .704-.064l4 3.333a.5.5 0 0 1-.64.768l-4-3.333a.5.5 0 0 1-.064-.704Z"/>
                            <path d="M10 15a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 1 0v9.5a.5.5 0 0 1-.5.5Z"/>
                        </g>
                    </svg>
                </li>
                <li class="flex">about
                    <svg width="30" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <g fill="#ea580c" fill-rule="evenodd" clip-rule="evenodd">
                            <g opacity=".2">
                                <path d="M17.152 11.206a1.5 1.5 0 0 1-.192 2.113l-4 3.333a1.5 1.5 0 1 1-1.92-2.304l4-3.334a1.5 1.5 0 0 1 2.112.192Z"/>
                                <path d="M6.848 11.206a1.5 1.5 0 0 1 2.112-.192l4 3.334a1.5 1.5 0 1 1-1.92 2.304l-4-3.333a1.5 1.5 0 0 1-.192-2.113Z"/>
                                <path d="M12 15a1.5 1.5 0 0 1-1.5-1.5v-8a1.5 1.5 0 0 1 3 0v8A1.5 1.5 0 0 1 12 15Z"/>
                            </g>
                            <path d="M14.384 11.347a.5.5 0 0 1-.064.704l-4 3.333a.5.5 0 0 1-.64-.768l4-3.333a.5.5 0 0 1 .704.064Z"/>
                            <path d="M5.616 11.347a.5.5 0 0 1 .704-.064l4 3.333a.5.5 0 0 1-.64.768l-4-3.333a.5.5 0 0 1-.064-.704Z"/>
                            <path d="M10 15a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 1 0v9.5a.5.5 0 0 1-.5.5Z"/>
                        </g>
                    </svg>
                </li>
                <li>documentation</li>
            </ul>
        </div>
        <button>contact us</button>
        <div class="search">
            <svg width="30" height="20" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path fill="#ea580c" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128c0-70.7 57.2-128 128-128c70.7 0 128 57.2 128 128c0 70.7-57.2 128-128 128z"/>
            </svg>
        </div>
    </div>
   <div class="device-header md:hidden text-primary-color relative">
    <div class=" flex justify-between px-6 items-center  h-[5rem] shadow-sm ">
        <img src="../assets/logo.svg" alt="Le logo">
        <div class="menu-icon cursor-pointer" @click="toggleStyle" :class="{active: isActive}">
            <svg width="30" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="#000000" d="M3 18v-2h18v2H3Zm0-5v-2h18v2H3Zm0-5V6h18v2H3Z"/>
            </svg>
        </div>
    </div>
    <div class="phone-menu-list absolute top-[100%] w-full h-[100vh] z-30 bg-white hidden  animate__animated animate__bounceInUp space-y-4 px-6" :class="{is_active: isActive}">
        <ul class="flex flex-col space-y-2">
            <li class="flex justify-between items-center">artists
                <span class="plus-icon cursor-pointer">
                    <svg width="30" height="70" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z"/>
                    </svg>
                </span>
            </li>
            <li>artworks</li>
            <li class="flex justify-between items-center">events
                <span class="plus-icon cursor-pointer">
                    <svg width="30" height="70" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z"/>
                    </svg>
                </span>
            </li>
            <li class="flex justify-between items-center">about
                <span class="plus-icon cursor-pointer">
                    <svg width="30" height="70" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z"/>
                    </svg>
                </span>
            </li>
            <li>documentation</li>
        </ul>
        <div class="relative top-[40%]">
            <div class="flex mb-6">
            <input type="text" name="search" id="Search" placeholder="Search...">
            <div class="w-[4rem] bg-primary-color hover:bg-secondary-color search-box flex items-center justify-center">
                <svg width="25" height="25" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#ffffff" d="m479.6 399.716l-81.084-81.084l-62.368-25.767A175.014 175.014 0 0 0 368 192c0-97.047-78.953-176-176-176S16 94.953 16 192s78.953 176 176 176a175.034 175.034 0 0 0 101.619-32.377l25.7 62.2l81.081 81.088a56 56 0 1 0 79.2-79.195ZM48 192c0-79.4 64.6-144 144-144s144 64.6 144 144s-64.6 144-144 144S48 271.4 48 192Zm408.971 264.284a24.028 24.028 0 0 1-33.942 0l-76.572-76.572l-23.894-57.835l57.837 23.894l76.573 76.572a24.028 24.028 0 0 1-.002 33.941Z"/>
                </svg>
            </div>
            </div>
            <button class="w-full hover:bg-secondary-color">contact us</button>
        </div>
    </div>
   
   </div>
</template>

<script setup lang="ts">

    import { ref } from 'vue';

    const isActive= ref(false)
    
    const toggleStyle = () =>{
        isActive.value= !isActive.value;
    }
    
</script>

<style scoped>
ul > li {
    @apply cursor-pointer hover:text-secondary-color
}


.search-box{
    border-radius: 0px 50px 50px 0px;
    cursor: pointer;
}

.search-box:hover svg {
    transform: translate(0px, 10px);
    transition: all .3s;

}

input{
    border: 1px solid var(--primary-color);
    border-right: 0px;
    padding: 13px;
    width: 100%;
    border-radius: 50px 0px 0px 50px;
}

.active {
    transform: rotate(1.542rad);
    transition: transform .25s ease-in-out;
}

.is_active {
    display: flex;
    flex-direction: column;
}


.plus-icon:hover svg path {
    fill: #CE1C5C;
}

.plus-icon:hover svg{
    transform: rotate(3.142rad);
    transition: transform .25s ease-in-out;
}
</style>



