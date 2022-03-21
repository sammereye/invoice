<template>
  <div class="fixed left-0 top-0 bottom-0 w-20 bg-[#373B53] flex flex-col justify-between">
    <div class="w-20 h-20 flex justify-center items-center bg-purple-bright">
      <img src="@/assets/logo.svg" />
    </div>
    <div>
      <div class="w-20 h-20 flex justify-center items-center">
        <img src="@/assets/icon-moon.svg" />
      </div>
      <div class="w-20 h-20 flex justify-center items-center border-t border-blue-gray">
        <img class="w-10 h-10 rounded-full" src="@/assets/image-avatar.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>