<script setup>

const props = defineProps({
    href: String,
    text: String,
});

</script>

<template>
    <a :href="href">
        <div class="w-full h-full rounded-lg p-5 bg-grey">
        <div class="flex flex-col items-center justify-center h-full space-y-5 ">
            <div>
                <slot class="flex flex-row w-full items-center justify-center" name="icon"/>
            </div>
            <p class="card-text text-center">{{ text }}</p>
        </div>
    </div>
    </a>
</template>