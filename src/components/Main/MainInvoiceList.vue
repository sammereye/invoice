<template>
  <div class="mt-16 space-y-5">
    <InvoiceListItem v-for="invoice in invoices" :key="invoice.id" :data="invoice" />
  </div>
</template>

<script>
  import InvoiceListItem from './MainInvoiceListItem.vue';

  export default {
    name: 'InvoiceList',
    components: {
      InvoiceListItem
    },
    props: {
      invoices: Array
    }
  }
</script>