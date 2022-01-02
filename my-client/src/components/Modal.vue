<template>
<div @click="onClose" class="modal-container">
    <section class="modal-content" @click.stop>
        <slot></slot>
    </section>
</div>
</template>

<script>
export default {
    methods: {
        onClose() {
            this.$emit('onClose')
        }
    }
}
</script>

<style scoped>
    div.modal-container {
        position: absolute;
        box-sizing: unset;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0, 0, 0, 0.3);
    }
    section.modal-content {
        background: white;
    }
</style>