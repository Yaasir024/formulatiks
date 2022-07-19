<template>
    Calculator page
    <div class="container">
        <button class="link-btn">Cream</button>
        <button class="link-btn">Lotion</button>
        <button class="link-btn">Moisturizer</button>
        <button class="link-btn">Soap</button>
        <button class="link-btn">Soap</button>
        <button class="link-btn">Soap</button>
        <button class="link-btn">Soap</button>
        <button class="link-btn">Soap</button>
        <button class="link-btn">Soap</button>
        <button class="link-btn">Soap</button>
        <button class="link-btn">Soap</button>
        <button class="link-btn">Soap</button>
    </div>
</template>

<style scoped>
.container {
    max-width: 450px;
    /* min-height: 400px; */
    margin: 10px auto;
    background: red;
    display: flex;
    flex-wrap: wrap;
}
.link-btn {
    background: var(--vt-c-white-soft);
    display: inline-block;
    padding: 6px 20px;
    border-radius: 20px;
    cursor: pointer;
    margin-bottom: 20px;
}
</style>