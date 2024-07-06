<template>
  <aside class="w-full md:max-w-[376px]">
    <div class="flex justify-between mb-4">
      <h4 class="px-2 font-bold typography-headline-4">List settings</h4>
      <button type="button" class="sm:hidden text-neutral-500" aria-label="Close filters panel">
        <SfIconClose />
      </button>
    </div>
    <h5
      class="py-2 px-4 mb-6 bg-neutral-100 typography-headline-6 font-bold text-neutral-900 uppercase tracking-widest md:rounded-md"
    >
      Sort by
    </h5>
    <div class="px-2">
      <SfSelect v-model="sortModel" aria-label="Sort by">
        <option v-for="{ id, label, value } in sortOptions" :key="id" :value="value">{{ label }}</option>
      </SfSelect>
    </div>
    <h5
      class="py-2 px-4 mt-6 mb-4 bg-neutral-100 typography-headline-6 font-bold text-neutral-900 uppercase tracking-widest md:rounded-md"
    >
      Filter
    </h5>
    <ul>
      <!-- prettier-ignore-attribute -->
      <li v-for="{ id: filterDataId, type, summary, details }, index in filtersData" :key="filterDataId">
        <SfAccordionItem v-model="opened[index]">
          <template #summary>
            <div class="flex justify-between p-2 mb-2">
              <p class="p-2 font-medium typography-headline-5">{{ summary }}</p>
              <SfIconChevronLeft :class="opened[index] ? 'rotate-90' : '-rotate-90'" />
            </div>
          </template>
          <ul v-if="type === 'size'" class="grid grid-cols-5 gap-2">
            <li v-for="{ id, value, counter, label } in details" :key="id">
              <SfChip v-model="selectedFilters" class="w-full" size="sm" :input-props="{ value, disabled: !counter }">
                {{ label }}
              </SfChip>
            </li>
          </ul>
          <template v-if="type === 'category'">
            <ul class="mt-2 mb-6">
              <li>
                <SfListItem size="sm" tag="button" type="button">
                  <div class="flex items-center">
                    <SfIconArrowBack size="sm" class="text-neutral-500 mr-3" />
                    Back to {{ details[0].label }}
                  </div>
                </SfListItem>
              </li>
              <li v-for="({ id, link, label, counter }, categoryIndex) in details" :key="id">
                <SfListItem
                  size="sm"
                  tag="a"
                  :href="link"
                  :class="[
                    'first-of-type:mt-2 rounded-md active:bg-primary-100',
                    { 'bg-primary-100 hover:bg-primary-100 active:bg-primary-100 font-medium': categoryIndex === 0 },
                  ]"
                >
                  <template #suffix>
                    <SfIconCheck v-if="categoryIndex === 0" size="xs" class="text-primary-700" />
                  </template>
                  <span class="flex items-center">
                    {{ label }}
                    <SfCounter class="ml-2 typography-text-sm">{{ counter }}</SfCounter>
                  </span>
                </SfListItem>
              </li>
            </ul>
          </template>
          <template v-if="type === 'color'">
            <SfListItem
              v-for="{ id, value, label, counter } in details"
              :key="id"
              size="sm"
              tag="label"
              :class="['px-1.5 bg-transparent hover:bg-transparent', { 'font-medium': isItemActive(value) }]"
              :selected="isItemActive(value)"
            >
              <template #prefix>
                <input v-model="selectedFilters" :value="value" class="appearance-none peer" type="checkbox" />
                <span
                  class="inline-flex items-center justify-center p-1 transition duration-300 rounded-full cursor-pointer ring-1 ring-neutral-200 ring-inset outline-offset-2 outline-secondary-600 peer-checked:ring-2 peer-checked:ring-primary-700 peer-hover:bg-primary-100 peer-[&:not(:checked):hover]:ring-primary-200 peer-active:bg-primary-200 peer-active:ring-primary-300 peer-disabled:cursor-not-allowed peer-disabled:bg-disabled-100 peer-disabled:opacity-50 peer-disabled:ring-1 peer-disabled:ring-disabled-200 peer-disabled:hover:ring-disabled-200 peer-checked:hover:ring-primary-700 peer-checked:active:ring-primary-700 peer-focus-visible:outline"
                  ><SfThumbnail size="sm" :class="value"
                /></span>
              </template>
              <p>
                <span class="mr-2 typography-text-sm">{{ label }}</span>
                <SfCounter size="sm">{{ counter }}</SfCounter>
              </p>
            </SfListItem>
          </template>
          <template v-if="type === 'checkbox'">
            <SfListItem
              v-for="{ id, value, label, counter } in details"
              :key="id"
              tag="label"
              size="sm"
              :disabled="counter === 0"
              :class="['px-1.5 bg-transparent hover:bg-transparent', { 'font-medium': isItemActive(value) }]"
            >
              <template #prefix>
                <SfCheckbox
                  v-model="selectedFilters"
                  class="flex items-center"
                  :disabled="counter === 0"
                  :value="value"
                />
              </template>
              <p>
                <span class="mr-2 text-sm">{{ label }}</span>
                <SfCounter size="sm">{{ counter }}</SfCounter>
              </p>
            </SfListItem>
          </template>
          <template v-if="type === 'radio'">
            <fieldset id="radio-price">
              <SfListItem
                v-for="{ id, value, label, counter } in details"
                :key="id"
                tag="label"
                size="sm"
                class="px-1.5 bg-transparent hover:bg-transparent"
              >
                <template #prefix>
                  <SfRadio
                    v-model="priceModel"
                    class="flex items-center"
                    name="radio-price"
                    :value="value"
                    @click="priceModel = priceModel === value ? '' : value"
                  />
                </template>
                <p>
                  <span :class="['text-sm mr-2', { 'font-medium': priceModel === value }]">{{ label }}</span>
                  <SfCounter size="sm">{{ counter }}</SfCounter>
                </p>
              </SfListItem>
            </fieldset>
          </template>
          <template v-if="type === 'rating'">
            <fieldset id="radio-ratings">
              <SfListItem
                v-for="{ id, value, label, counter } in details"
                :key="id"
                tag="label"
                size="sm"
                class="!items-center py-4 md:py-1 px-1.5 bg-transparent hover:bg-transparent"
              >
                <template #prefix>
                  <SfRadio
                    v-model="ratingsModel"
                    name="radio-ratings"
                    class="flex items-end"
                    :value="value"
                    @click="ratingsModel = ratingsModel === value ? '' : value"
                  />
                </template>
                <!-- TODO: Adjust the styling and remove block elements when/if span wrapper removed from ListItem -->
                <div class="flex flex-wrap items-center">
                  <SfRating class="-mt-px" :value="Number(value)" :max="5" size="sm" />
                  <span :class="['mx-2 text-base md:text-sm', { 'font-medium': ratingsModel === value }]">{{
                    label
                  }}</span>
                  <SfCounter size="sm">{{ counter }}</SfCounter>
                </div>
              </SfListItem>
            </fieldset>
          </template>
        </SfAccordionItem>
        <hr class="my-4" />
      </li>
    </ul>
    <div class="flex justify-between">
      <SfButton variant="secondary" class="w-full mr-3" @click="handleClearFilters()"> Clear all filters </SfButton>
      <SfButton class="w-full">Show products</SfButton>
    </div>
  </aside>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {
  SfAccordionItem,
  SfButton,
  SfChip,
  SfCheckbox,
  SfCounter,
  SfIconArrowBack,
  SfIconChevronLeft,
  SfIconCheck,
  SfIconClose,
  SfListItem,
  SfRadio,
  SfRating,
  SfSelect,
  SfThumbnail,
} from '@storefront-ui/vue';

type FilterDetail = {
  id: string;
  label: string;
  value: string;
  counter?: number;
  link?: string;
};

type Node = {
  id: string;
  summary: string;
  type: string;
  details: FilterDetail[];
};

const filtersData = ref<Node[]>([
 
  {
    id: 'acc3',
    summary: 'Color',
    type: 'color',
    details: [
      {
        id: 'c1',
        label: 'Primary',
        value: 'bg-primary-500',
        counter: 10,
      },
      {
        id: 'c2',
        label: 'Black and gray',
        value: 'bg-[linear-gradient(-45deg,#000_50%,#d1d5db_50%)]',
        counter: 5,
      },
      {
        id: 'c3',
        label: 'Violet',
        value: 'bg-violet-500',
        counter: 0,
      },
      {
        id: 'c4',
        label: 'Red',
        value: 'bg-red-500',
        counter: 2,
      },
      {
        id: 'c5',
        label: 'Yellow',
        value: 'bg-yellow-500',
        counter: 100,
      },
      {
        id: 'c6',
        label: 'Avocado',
        value: 'bg-gradient-to-tr from-yellow-300 to-primary-500',
        counter: 14,
      },
    ],
  },
  {
    id: 'acc4',
    summary: 'Brand',
    type: 'checkbox',
    details: [
      { id: 'b1', label: 'Conroy', value: 'conroy', counter: 10 },
      { id: 'b2', label: 'Goyette', value: 'goyette', counter: 100 },
      { id: 'b3', label: 'Ledner & Ward', value: 'lednerward', counter: 0 },
      { id: 'b4', label: 'Pacocha', value: 'pacocha', counter: 3 },
    ],
  },
  
  {
    id: 'acc6',
    summary: 'Rating',
    type: 'rating',
    details: [
      { id: 'r1', label: '5', value: '5', counter: 10 },
      { id: 'r2', label: '4 & up', value: '4', counter: 123 },
      { id: 'r3', label: '3 & up', value: '3', counter: 12 },
      { id: 'r4', label: '2 & up', value: '2', counter: 3 },
      { id: 'r5', label: '1 & up', value: '1', counter: 13 },
    ],
  },
]);
const sortOptions = ref([
  { id: 'sort1', label: 'Relevance', value: 'relevance' },
  { id: 'sort2', label: 'Price: Low to High', value: 'price low to high' },
  { id: 'sort3', label: 'Price: High to Low', value: 'price high to low' },
  { id: 'sort4', label: 'New Arrivals', value: 'new arrivals' },
  { id: 'sort5', label: 'Customer Rating', value: 'customer rating' },
  { id: 'sort6', label: 'Bestsellers', value: 'bestsellers' },
]);

const selectedFilters = ref<string[]>([]);
const opened = ref<boolean[]>(filtersData.value.map(() => true));
const priceModel = ref('');
const ratingsModel = ref('');
const sortModel = ref();

const isItemActive = (selectedValue: string) => {
  return selectedFilters.value?.includes(selectedValue);
};
const handleClearFilters = () => {
  selectedFilters.value = [];
  priceModel.value = '';
  ratingsModel.value = '';
};
</script>

