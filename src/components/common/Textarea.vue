<template>
  <div class="textarea">
    <div class="textarea__label-wrapper">
      <label class="textarea__label" v-if="!!label">{{ label }}</label>
      <transition
        enter-active-class="error-enter"
        leave-active-class="error-leave"
      >
        <span v-if="hasError" class="textarea__error-message">{{
          errorMessage
        }}</span>
      </transition>
    </div>
    <textarea
      class="textarea__textarea"
      :class="{ _error: hasError, _valid: valid }"
      :placeholder="placeholder"
      :type="type"
      :required="required"
      :value="value"
      @input="(e) => $emit('input', e.target.value)"
      @blur="$emit('blur')"
      @focus="$emit('focus')"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "Textarea",
  props: {
    label: String,
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
.textarea {
  width: 100%;
  &__textarea {
    padding: 16px 20px;
    border: 1px solid $input-color;
    transition: border-color 0.3s ease;
    outline: none;
    resize: none;
    height: 200px;
    width: 100%;
    @include text($H14, 400, $base-color);
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
    color: $invalid-color;
  }
}
.textarea__textarea._valid {
  border-color: $valid-color;
}
.textarea__textarea._error {
  border-color: $invalid-color;
}
@keyframes errorLeave {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes errorEnter {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.error-leave {
  animation: errorLeave 0.3s ease;
}
.error-enter {
  animation: errorEnter 0.3s ease;
}
</style>