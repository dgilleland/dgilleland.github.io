<template>
    <div>
        <span v-if="yellow">{{yellow}}</span>
        <slot />
    </div>
</template>

<script>
export default {
    props: ['yellow', 'blue', 'green', 'red'],
    mounted() {
        var cells = document.querySelectorAll('td');
        cells.forEach(function(element) {
            if(yellow && element.innerText.includes(yellow))
              element.classList.add('yellow');
            // console.log(element.innerText);
        });
    }
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

