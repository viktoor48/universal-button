<template>
  <NuxtLink :to="props.to">
    <button
        @click="click"
        class="btn"
        :class="className"
    >
      <Icon class="" v-if="props.prependIcon" style="width: 16px; height: 16px" name="ep:close" />
      <span v-if="props.title">{{ props.title }}</span>
      <Icon class="" v-if="props.appendIcon" style="width: 16px; height: 16px" name="ep:close" />
      <svg v-if="props.loading" xmlns="http://www.w3.org/2000/svg" :class="[{'loading-small': props.size === 'Small'}]" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></svg>
    </button>
  </NuxtLink>
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
  appendIcon: {
    type: String,
    default: '',
  },
  prependIcon: {
    type: String,
    default: '',
  },
  loading: {
    type: Boolean,
    default: false,
  },
  to: {
    type: String,
    default: '',
  }
});

const emit = defineEmits(['click']);

const click = () => {
  emit('click');
};

const className = computed(() => {
  return {
    'disabled': props.disabled,
    'primary': props.type === 'Primary',
    'secondary': props.type === 'Secondary',
    'clear': props.type === 'Clear',
    'inversion': props.inversion,
    'small': props.size === 'Small',
    'regular': props.size === 'Regular',
    'underline-link': props.underline,
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

.secondary {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: 2px solid #181818;

  &.inversion {
    border-color: #FFFFFF;
    color: #FFFFFF;
  }

  &.regular {
    font-size: 12px;
    line-height: 24px;
    letter-spacing: 0.24px;
    padding: 8px 40px;
  }

  &.small {
    border-width: 1.5px;
    padding: 8px 16px;
    font-size: 10px;
    line-height: 16px;
  }

  &:hover {
    border: 2px solid #322CFE;
    color: #322CFE;
  }

  &:active {
    border: 2px solid #2B26D9;
    color: #2B26D9;
  }

  &.disabled {
    color: #E8E8E8;
    border-color: #E8E8E8;
  }
}

.clear {
  display: inline-flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 4px;

  &.small {
    padding: 8px 16px;
    font-size: 10px;
    line-height: 16px;
    gap: 8px;
    &.disabled {
      color: #E8E8E8;
    }
  }

  &.disabled {
    color: #D1D1D1;
  }

  &.underline-link span {
    border-bottom: 1px solid #181818;
  }

  &.inversion {
    color: #FFFFFF;
    &.underline-link span {
      border-bottom-color: #FFFFFF;
    }
  }

  &:hover {
    color: #322CFE;
    &.underline-link span {
      border-bottom-color: #322CFE;;
    }
  }

  &:active {
    color: #2B26D9;
    &.underline-link span {
      border-bottom-color: #2B26D9;;
    }
  }
}

.loading-small {
  width: 16px;
  height: 16px;
}
</style>