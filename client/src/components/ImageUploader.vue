<template>
  <div>
    <v-form @submit.prevent="sendImage" enctype="multipart/form-data"
      ><div class="field">
        <v-file-input
          label="Image upload"
          filled
          prepend-icon="mdi-camera"
          type="file"
          @change="selectFile"
          ref="imag"
          accept="image"
        />
        <div class="field">
          <v-btn @click="uploadImage(selectedFile)">
            Ladda upp bilden
          </v-btn>
        </div>
      </div>
    </v-form>
  </div>
</template>

<script>
// const url = "/api/";

export default {
  name: "ImageUploader",
  data() {
    return {
      selectedFile: null,
    };
  },
  methods: {
    selectFile(image) {
      this.selectedFile = image;
    },

    async uploadImage(selectedFile) {
      await this.$store.dispatch("IMAGE/uploadImageToDB", selectedFile);
    },

  
  },
};
</script>

<style></style>
