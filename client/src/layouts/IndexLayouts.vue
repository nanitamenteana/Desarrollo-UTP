<template>
    <div class="index-layout">
        <Index />
        <div class="ui container">
            <slot />
        </div>
    </div>
</template>

<script>
import Index from '../components/Index.vue'
export default {
    name: "BasicLayouts.vue",
    components: {
        Index,
    },
};
</script>

<style>

</style>
