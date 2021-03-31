<template>
    <h1>This is pic {{ $route.params.id }}</h1>
    <div class="pic">
        <img :src="`/images/pic${$route.params.id}.png`">
    </div>
</template>

<script>
export default {
    name: 'Pic'
};
</script>

<style>
h1 {
    margin-bottom: .5em;
}
</style>