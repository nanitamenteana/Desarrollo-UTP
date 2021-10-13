<template>
    <div class="tutores-layout">
        <Tutores />
        <div class="ui container">
            <slot />
        </div>
    </div>
</template>

<script>
import Tutores from '../components/Tutores.vue'
export default {
    name: "TutoresLayouts.vue",
    components: {
        Tutores,
    },
};
</script>

<style>

</style>
