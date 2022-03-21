<template>
  <div class="flex justify-between items-center">
    <div>
      <h1 class="text-3xl font-bold tracking-tight mb-2">Invoices</h1>
      <div class="text-xs text-blue-gray">There are 7 total invoices</div>
    </div>

    <div class="flex cursor-pointer">
      <div class="flex items-center mr-8">
        <div class="text-xs mr-2">Filter by Status</div>
        <img class="w-[11px] h-[7px]" src="@/assets/icon-arrow-down.svg" />
      </div>
      <button class="flex items-center bg-purple-bright text-white-light py-2 px-2 rounded-full">
        <div class="flex items-center justify-center p-3 bg-white-light rounded-full">
          <img src="@/assets/icon-plus.svg" alt="Plus icon" />
        </div>
        <div class="text-xs mx-4 font-bold">New Invoice</div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InvoiceHeader'
}
</script>