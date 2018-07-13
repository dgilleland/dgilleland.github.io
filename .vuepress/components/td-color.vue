<template>
    <div>
        <span v-if="yellow">{{yellow}}</span>
        <slot />
    </div>
</template>

<script>
export default {
    props: ['yellow', 'blue', 'green', 'red']
}
</script>

<style>
td.yellow {
    background-color:rgba(255, 251, 0, 0.185);
}
td.blue {
    background-color:rgba(0, 68, 255, 0.185);
}
td.green {
    background-color:rgba(21, 255, 0, 0.185);
}
td.red {
    background-color:rgba(255, 0, 0, 0.185);
}
</style>

