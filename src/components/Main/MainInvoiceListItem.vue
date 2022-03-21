<template>
  <div class="bg-[#ffffff] shadow-md grid grid-cols-[15%_20%_20%_20%_20%_5%] text-xs px-10 py-5 rounded-md items-center">
    <div>#{{ data.id }}</div>
    <div class="text-blue-blue-gray">Due {{ data.paymentDue }}</div>
    <div class="text-blue-blue-gray">{{ data.clientName }}</div>
    <div class="text-right text-base font-bold">${{ data.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</div>
    <div v-if="data.status === 'paid'" class="bg-[#e3fff5] w-[75%] text-center py-3 rounded-md text-[#008357] mx-auto flex items-center justify-center">
      <div class="p-1 bg-[#27dd45] rounded-full mr-3"></div>
      <div>Paid</div>
    </div>
    <div v-else-if="data.status === 'pending'" class="bg-[#ffeadb] w-[75%] text-center py-3 rounded-md text-[#bf7412] mx-auto flex items-center justify-center">
      <div class="p-1 bg-[#dd9127] rounded-full mr-3"></div>
      <div>Pending</div>
    </div>
    <div v-else-if="data.status === 'draft'" class="bg-[#f0f0f0] w-[75%] text-center py-3 rounded-md text-[#666666] mx-auto flex items-center justify-center">
      <div class="p-1 bg-[#676968] rounded-full mr-3"></div>
      <div>Draft</div>
    </div>
    <img class="mx-auto" src="/assets/icon-arrow-right.svg" />
  </div>
</template>

<script>
export default {
  name: 'InvoiceListItem',
  props: {
    data: Object
  }
}
</script>