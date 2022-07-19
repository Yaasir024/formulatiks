<template>
    <div class="overlay">

        <div class="hollowLoader">
            <div class="largeBox">
                <div class="smallBox"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hollowLoader {
    width: 3em;
    height: 3em;
    animation: loaderAnim 1.25s infinite ease-in-out;
    outline: 1px solid transparent;
}
.largeBox {
    height: 3em;
    width: 3em;
    background-color: #f8f8f8;
    outline: 1px solid transparent;
}
.smallBox {height: 3em;
width: 3em;
background: rgba(0,0,0,0.5);
z-index: 1001;
animation: smallBoxAnim 1.25s alternate infinite ease-in-out;
}
@keyframes smallBoxAnim {
    0%{transform: scale(0.2);}
    100%{transform: scale(0.75);}
}
@keyframes loaderAnim {
    0%{transform: rotate(0deg);}
    100%{transform: rotate(90deg);}
}
</style>