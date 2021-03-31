<template>
    <div class="container">
        <div class="pics">
            <router-link
                :to="`/pic/${n}`"
                class="pic"
                v-for="n in 4"
                :key="n"
            >
                <img :src="`/images/pic${n}.png`">
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home'
};
</script>

<style scoped>
.container {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
}
.pics {
    display: flex;
    width: 620px;
    flex-wrap: wrap;
    justify-content: space-between;
}
.pic {
    margin: 5px;
}
</style>