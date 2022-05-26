<template>
  <div>
    <textarea ref="textArea" @change="onChange($event)"></textarea>
    <button @click="onSendClick()">Send</button>
    <div>
      <p v-for="(m, i) in messages" :key="i">
        {{ m }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    messages: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onChange(event) {
      this.message = event.target.value;
    },
    onSendClick() {
      this.$emit("send", this.message);
      this.message = "";
      this.$refs.textArea.value = "";
    },
  },
};
</script>