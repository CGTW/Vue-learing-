<!-- Modal.vue -->
<template>
  <div>
    <button @click="showModal = true">Open Modal</button>
    <Teleport to="body">
      <div v-if="showModal" class="modal-overlay" @click="showModal = false">
        <div class="modal-content" @click.stop>
          <h2>Modal Title</h2>
          <p>This is a modal that teleports to the body.</p>
          <button @click="showModal = false">Close Modal</button>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  text-align: center;
}
</style>
