<template>
  <div class="ml-20">
    <div class="w-[900px] my-20 mx-auto">
      <InvoiceHeader />
      <InvoiceList :invoices="data" />
    </div>
  </div>
</template>

<script>
  import InvoiceList from './MainInvoiceList.vue';
  import InvoiceHeader from './MainInvoiceHeader.vue';
  import data from '../../assets/data.json';

  export default {
    name: 'Main',
    components: {
      InvoiceList,
      InvoiceHeader
    },
    data() {
      return {
        data
      }
    }
  }
</script>