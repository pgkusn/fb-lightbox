<template>
    <router-view/>

    <div class="lightbox" v-show="$route.meta.showLightbox">
        <div class="lightbox__container">
            <router-view name="lightbox"/>
            <span class="material-icons lightbox__close" @click="closeLightbox">highlight_off</span>
            <span class="material-icons lightbox__back" @click="changePic(-1)">arrow_back_ios_new</span>
            <span class="material-icons lightbox__forward" @click="changePic(1)">arrow_forward_ios</span>
        </div>
    </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router';
import { showLightboxCount } from '@/store';

export default {
    setup () {
        const router = useRouter();
        const route = useRoute();

        const closeLightbox = () => {
            router.go(showLightboxCount.value * -1);
            showLightboxCount.value = 0;
        };

        const changePic = value => {
            let newId = Number(route.params.id) + value;
            newId = newId > 4 ? 1 : newId < 1 ? 4 : newId;
            router.push({ params: { id: newId } });
        };

        return {
            closeLightbox,
            changePic,
            showLightboxCount
        };
    }
};
</script>

<style lang="scss">
* {
    margin: 0;
}
img {
    vertical-align: middle;
}
.lightbox {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    background-color: rgba(#000, .5);
    justify-content: center;
    align-items: center;
    &__container {
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 30px;
        background-color: #fff;
        justify-content: center;
        align-items: center;
    }
    &__close {
        position: absolute;
        top: 5px;
        right: 5px;
        font-size: 40px;
        cursor: pointer;
    }
    &__back,
    &__forward {
        position: absolute;
        top: 50%;
        color: #aaa;
        font-size: 40px;
        cursor: pointer;
        transform: translateY(-50%);
        &:hover {
            color: #fff;
        }
    }
    &__back {
        right: 100%;
    }
    &__forward {
        left: 100%;
    }
}
</style>
