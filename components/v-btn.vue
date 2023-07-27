<template>
  <button
      @click="click"
      class="btn"
      :class="className"
  >
    <span v-if="props.title">{{ props.title }}</span>
  </button>
</template>

<script setup>
import {computed} from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'Primary',
  },
  inversion: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'Regular',
  },
  underline: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['click']);

const click = () => {
  emit('click');
};

const className = computed(() => {
  return {
    'disabled': props.disabled,
    'primary': props.type,
    'inversion': props.inversion,
    'small': props.size === 'Small',
    'regular': props.size === 'Regular'
  }
});

</script>

<style lang="scss" scoped>
.btn {
  cursor: pointer;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  text-transform: uppercase;

  &.small {
    font-size: 10px;
    line-height: 16px;
  }

  &.regular {
    font-size: 12px;
    line-height: 24px;
    letter-spacing: 0.24px;
  }
}

.disabled {
  pointer-events: none;
}

.primary {
  display: inline-flex;
  padding: 8px 40px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: #FFFFFF;
  background: #181818;

  &.inversion {
    color: #181818;
    background: #FFFFFF;
  }

  &.disabled {
    background: #E8E8E8;
    color: #D1D1D1;
  }

  &.small {
    padding: 8px 16px;
  }

  &:hover {
    background: #322CFE;
    color: #FFFFFF;
  }

  &:active {
    background: #2B26D9;
  }
}
</style>