<template>
    <button class="button content-box__button"><slot /></button>
</template>

<style lang="scss">
.button {
    cursor: pointer;
    padding: 20px 40px;
    background-color: $G90;
    text-transform: uppercase;
    @include text($H14, 700, $N0);
    transition: box-shadow 0.4s ease;
    @include hover {
        box-shadow: 2px 2px 2px $N00;
    }
}
</style>