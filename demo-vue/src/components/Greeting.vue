<template>
  <div>{{ greeting }} {{ who }}</div>
</template>

<script>
export default {
    props: {
        greeting: {
            type: String,
            required: true,
            default: 'Hola'
        },
        who: {
            type: String,
            required: true,
            default: 'Mundo'
        }
    },
    content: {
        type: [String, Number]
    },
};
</script>

