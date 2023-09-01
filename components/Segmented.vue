<template>
  <div class="segmented">
    <div
      v-for="item in options"
			:key="item.value"
      :class="item.value === value ? ' segmented-item  active' : 'segmented-item'" 
			@click="() => onChange(item.value)"
    >
      {{ item.label }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface SegmentedOption {
  value: string;
  label: string;
  disabled?: boolean;
}
interface SegmentedProps {
  value: string;
  options: SegmentedOption[];
  onChange: (value: string) => void;
}

const props = defineProps<SegmentedProps>();
// const { value } = toRefs(props);

</script>

<style lang="scss">
.segmented {
  display: flex;
	width: fit-content;
  padding: 0.5em;
  border-radius: 15px;
  background-color: var(--color-bg-secondary);
}

.segmented-item {
  padding: 0.5em 1em;
  border-radius: 10px;

	cursor: pointer;

  &.active {
    background-color: var(--purple);
  }
}
</style>
