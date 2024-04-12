---
title: "Past Teaching Schedules"
summary: "Some of my past teaching schedules"
date: "Sep 5, 2020"
draft: false
tags:
- Archive
- Schedule
history:
- Free Money (on teaching schedule page)
---

> ***Ad:*** Get [**Isometric Contributions**](https://chrome.google.com/webstore/detail/isometric-contributions/mjoedlfflcchnleknnceiplgaeoegien) for your Chrome browser.

One of the reasons I used *VuePress* for my last version of this site was the promise of using custom components that would integrate with Markdown. I wanted to create schedules in Markdown tables while applying some coloring to the different sections I was teaching. Here's the Vue code I used to generate the coloring.

```vue
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
```

And here's a sample of what I put in Markdown.

```markdown
## Sep, 2020

<td-color yellow="1508 A05" green="2018 A01" blue="1508 A01" red="GitHub">
|         | Mon | Tue | Wed | Thu | Fri |
|:--------|-----|-----|-----|-----|-----|
| 8 ^AM^  | DMIT 1508 **A05** | *Reserved* | DMIT 1508 **A05** | by appointment | DMIT 1508 **A01** |
| 9       | DMIT 1508 **A05** | *Reserved* | DMIT 1508 **A05** | by appointment | DMIT 1508 **A01** |
| 10      | DMIT 1508 **A01** | DMIT 2018 **A01** | DMIT 1508 **A01** | by appointment | by appointment |
| 11      | DMIT 1508 **A01** | DMIT 2018 **A01** | DMIT 1508 **A01** | by appointment | by appointment |
| 12 ^PM^ |  |  |  |  |  |
| 1       | DMIT 2018 **A01** | DMIT 1508 **A05** |  | by appointment | by appointment |
| 2       | DMIT 2018 **A01** | DMIT 1508 **A05** | *Staff Meeting* | by appointment | by appointment |
| 3       | by appointment | by appointment | *Staff Meeting* | DMIT 2018 **A01** |  |
| 4       | by appointment | by appointment | *Staff Meeting* | DMIT 2018 **A01** |  |
| 5       |  |  |  |  |  |
</td>
```

<!-- 
|         | Mon | Tue | Wed | Thu | Fri |
|:--------|-----|-----|-----|-----|-----|
| 8 ^AM^  |  |  |  |  |  |
| 9       |  |  |  |  |  |
| 10      |  |  |  |  |  |
| 11      |  |  |  |  |  |
| 12 ^PM^ |  |  |  |  |  |
| 1       |  |  |  |  |  |
| 2       |  |  |  |  |  |
| 3       |  |  |  |  |  |
| 4       |  |  |  |  |  |
| 5       |  |  |  |  |  |
 -->


<!-- 
## Jan 6 - Apr 24, 2020

> ***GitHub Training** is available during February, 2019*

| 7 ^AM^  | GitHub Training **WB304** |  |  | GitHub Training **WA302** |  |
| 8       | GitHub Training **WB304** |  |  | GitHub Training **WA302** |  |
| 9       | GitHub Training **WB304** | by appointment | by appointment | GitHub Training **WA302** | by appointment |

<td-color yellow="1508 A05" green="2018 A01" blue="1508 A04" red="GitHub">
|         | Mon | Tue | Wed | Thu | Fri |
|:--------|-----|-----|-----|-----|-----|
| 9 ^AM^  | by appointment | by appointment | by appointment | by appointment | by appointment |
| 10      | DMIT 1508 **A05** WA314 | DMIT 1508 **A05** WC324 | by appointment | by appointment | by appointment |
| 11      | DMIT 1508 **A05** WA314 | DMIT 1508 **A05** WC324 | by appointment | by appointment | by appointment |
| 12 ^PM^ | DMIT 2018 **A01** WC120 | by appointment | by appointment | DMIT 1508 **A05** WB304 | DMIT 1508 **A04** WA320 |
| 1       | DMIT 2018 **A01** WC120 | DMIT 2018 **A01** WB308 | by appointment | DMIT 1508 **A05** WB304 | DMIT 1508 **A04** WA320 |
| 2       | by appointment | DMIT 2018 **A01** WB308 | by appointment | by appointment | by appointment |
| 3       | by appointment | DMIT 1508 **A04** WC120 | DMIT 1508 **A04** WA312 | DMIT 2018 **A01** WA314 | by appointment |
| 4       | unavailable | DMIT 1508 **A04** WC120 | DMIT 1508 **A04** WA312 | DMIT 2018 **A01** WA314 | unavailable |
| 5       |  |  |  |  |  |
</td-color>
 -->

<!--

## Sep 3 - Dec 13, 2019

<td-color yellow="1508 A01" green="2018 A01" blue="2018 A02">
|         | Mon | Tue | Wed | Thu | Fri |
|:--------|-----|-----|-----|-----|-----|
| 7 ^AM^  | unavailable | unavailable | unavailable | unavailable | unavailable |
| 8       | unavailable | unavailable | DMIT 1508 **A01** WB320 | unavailable | DMIT 1508 **A01** WB320 |
| 9       | DMIT 1508 **A01** WB320 | by appointment | DMIT 1508 **A01** WB320 | by appointment | DMIT 1508 **A01** WB320 |
| 10      | DMIT 1508 **A01** WB320 | DMIT 2018 **A02** WA320 | by appointment | DMIT 2018 **A01** WB320 | by appointment |
| 11      | by appointment | DMIT 2018 **A02** WA320 | by appointment | DMIT 2018 **A01** WB320 | by appointment |
| 12 ^PM^ | by appointment | by appointment | by appointment | by appointment | DMIT 2018 **A01** WB312 |
| 1       | by appointment | by appointment | by appointment | DMIT 2018 **A02** WA320 | DMIT 2018 **A01** WB312 |
| 2       | by appointment | by appointment | by appointment | DMIT 2018 **A02** WA320 | by appointment |
| 3       | DMIT 2018 **A02** WA302 | DMIT 2018 **A01** WA302 | by appointment | unavailable | unavailable |
| 4       | DMIT 2018 **A02** WA302 | DMIT 2018 **A01** WA302 | by appointment | unavailable | unavailable |
| 5       | unavailable | unavailable | unavailable | unavailable | unavailable |
</td-color>
## Jan 7 - Apr 27, 2019

<td-color yellow="1508 A02" green="2018 A01" blue="1517 A03">
|         | Mon | Tue | Wed | Thu | Fri |
|:--------|-----|-----|-----|-----|-----|
| 7 ^AM^  | unavailable | unavailable | unavailable | unavailable | unavailable |
| 8       | DMIT 1508 **A02** WA302 | CPSC 1517 **A03** WB304 | DMIT 1508 **A02** WA302 | CPSC 1517 **A03** WB320 | unavailable |
| 9       | DMIT 1508 **A02** WA302 | CPSC 1517 **A03** WB304 | DMIT 1508 **A02** WA302 | CPSC 1517 **A03** WB320 | by appointment |
| 10      | by appointment | by appointment | by appointment | by appointment | CPSC 1517 **A03** WA322 |
| 11      | by appointment | by appointment | by appointment | by appointment | CPSC 1517 **A03** WA322 |
| 12 ^PM^ | DMIT 2018 **A01** WC120 | by appointment | by appointment | by appointment | by appointment |
| 1       | DMIT 2018 **A01** WC120 | by appointment | by appointment | DMIT 1508 **A02** WA302 | DMIT 2018 **A01** WC120 |
| 2       | by appointment | DMIT 2018 **A01** WB308 | by appointment | DMIT 1508 **A02** WA302 | DMIT 2018 **A01** WC120 |
| 3       | unavailable | DMIT 2018 **A01** WB308 | unavailable | unavailable | unavailable |
| 4       | unavailable | unavailable | unavailable | unavailable | unavailable |
</td-color>
-->
<!--
<td-color yellow="1508 A01" green="2018 A01" blue="1517 A03">
|         | Mon | Tue | Wed | Thu | Fri |
|:--------|-----|-----|-----|-----|-----|
| 8 ^AM^  |     | CPSC 1517 **A03** WB304 |     | CPSC 1517 **A03** WB320 |     |
| 9       |     | CPSC 1517 **A03** WB304 |     | CPSC 1517 **A03** WB320 |     |
| 10      | DMIT 1508 **A01** WA320 | DMIT 1508 **A01** WB308 |     |     | CPSC 1517 **A03** WA322 |
| 11      | DMIT 1508 **A01** WA320 | DMIT 1508 **A01** WB308 | DMIT 1508 **A01** WC304 |     | CPSC 1517 **A03** WA322 |
| 12 ^PM^ | DMIT 2018 **A01** WC120 |     | DMIT 1508 **A01** WC304 |     |     |
| 1       | DMIT 2018 **A01** WC120 |     |     |     |     |
| 2       |     | DMIT 2018 **A01** WB308 |     |     | DMIT 2018 **A01** WC120 |
| 3       |     | DMIT 2018 **A01** WB308 |     |     | DMIT 2018 **A01** WC120 |
| 4       |     |     |     |     |     |
| 5       |     |     |     |     |     |
</td-color>
-->
<!--
## Sept 4 - Dec 8, 2018

<-td-color yellow="1508 A01" green="2018 A01" blue="2018 A02">
|       | Mon | Tue | Wed | Thu | Fri |
|:------|-----|-----|-----|-----|-----|
| 8 ^AM^  |  |  | DMIT 1508 **A01** WB320 |  | DMIT 1508 **A01** WB320 |
| 9       | DMIT 1508 **A01** WB320 |  | DMIT 1508 **A01** WB320 |  | DMIT 1508 **A01** WB320 |
| 10      | DMIT 1508 **A01** WB320 | DMIT 2018 **A02** WA320 |  | DMIT 2018 **A01** WB320 |  |
| 11      |  | DMIT 2018 **A02** WA320 |  | DMIT 2018 **A01** WB320 |  |
| 12 ^PM^ |  |  |  |  | DMIT 2018 **A01** WB320 |
| 1       |  |  |  | DMIT 2018 **A02** WA320 | DMIT 2018 **A01** WB320 |
| 2       |  |  |  | DMIT 2018 **A02** WA320 |  |
| 3       | DMIT 2018 **A02** WA302 | DMIT 2018 **A01** WA302 |  |  |  |
| 4       | DMIT 2018 **A02** WA302 | DMIT 2018 **A01** WA302 |  |  |  |
| 5       |  |  |  |  |  |
<-/td-color>
-->

----