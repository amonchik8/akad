<template>
  <div class="input">
    <div class="input__label-wrapper">
      <label class="input__label" v-if="!!label">{{ label }}</label>
      <span v-if="hasError" class="input__error-message">{{
        errorMessage
      }}</span>
    </div>
    <input
      class="input__input"
      :class="{ _error: hasError, _valid: valid }"
      :placeholder="placeholder"
      :type="type"
      :required="required"
      :value="value"
      @input="(e) => $emit('input', e.target.value)"
      @blur="$emit('blur')"
      @focus="$emit('focus')"
    />
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    label: String,
    message: String,
    type: String,
    input: Boolean,
    required: Boolean,
    placeholder: String,
    hasError: Boolean,
    errorMessage: String,
    value: String,
    valid: Boolean,
  },
};
</script>

<style lang="scss">
.input {
    width: 100%;
  &__input {
    @include text($H14, 400, $base-color);
    width: 100%;
    padding: 16px 20px;
    border: 1px solid $input-color;
    outline: none;
    @include placeholder {
      @include text($H11, 700, $input-color);
      text-transform: uppercase;
    }
    &:focus {
      border-color: $G90;
    }
  }
  &__label-wrapper {
    @include text($H14, 600, $N0);
    @include flex(flex-start, center);
    margin-bottom: 5px;
    letter-spacing: 0.2px;
  }
  &__error-message {
    color: #FF4B26;;
  }
}
</style>