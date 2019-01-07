<template>
    <div>
        <slot />
    </div>
</template>

<script>
export default {
    props: ['yellow', 'blue', 'green', 'red'],
    mounted() {
        var cells = document.querySelectorAll('td');
        var y = this.yellow;
        var b = this.blue;
        var g = this.green;
        var r = this.red;
        cells.forEach(function(element) {
            if(y && element.innerText.includes(y))
              element.classList.add('yellow');
            else if(b && element.innerText.includes(b))
              element.classList.add('blue');
            else if(g && element.innerText.includes(g))
              element.classList.add('green');
            else if(r && element.innerText.includes(r))
              element.classList.add('red');
            else if(element.innerText.includes('by appointment'))
              element.classList.add('by-appointment');
            else if(element.innerText.includes('unavailable'))
              element.classList.add('unavailable');
            // console.log(element.innerText);
        });
    }
}
</script>

<style>
td.unavailable {
    font-style: italic;
    font-size: small;
}
td.by-appointment {
    background-color: gainsboro;
    font-size: small;
    text-decoration: underline;
    text-transform: capitalize;
}
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

