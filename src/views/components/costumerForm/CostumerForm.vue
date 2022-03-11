<template>
  <div class="costumer-form">
    <div class="form-element">
      <label for="home-name" class="form-label">Nome*</label>
      <input v-model="name" type="text" id="home-name" class="form-input" required="" />
    </div>
    <div class="form-col">
      <div class="form-element">
        <label for="home-email" class="form-label">Email*</label>
        <input v-model="email" type="email" id="home-email" name="email" class="form-input" required="" />
      </div>
      <div class="form-element">
        <label for="home-phone" class="form-label">Telefone*</label>
        <input v-model="phone" type="tel" pattern="\+?\d{0,3}[\s\(\-]?([0-9]{2,3})[\s\)\-]?([\s\-]?)([0-9]{3})[\s\-]?([0-9]{2})[\s\-]?([0-9]{2})" id="home-phone" name="phone" class="form-input" />
      </div>
    </div>
    <div class="form-col">
      <div class="form-element">
        <label for="home-address" class="form-label">Morada*</label>
        <input v-model="address" id="home-address" name="message" class="form-input" required="" />
      </div>
      <div class="form-element">
        <label for="home-nif" class="form-label">Nº Contribuinte*</label>
        <input v-model="nif" type="text" placeholder="" id="home-nif" name="text" class="form-input" />
      </div>
    </div>
    <div class="form-element">
      <label for="home-message" class="form-label">Mensagem*</label>
      <textarea v-model="message" rows="4" cols="50" id="home-message" name="message-1" class="form-input"></textarea>
    </div>

    <div class="form-element">
      <label for="home-message" class="form-label">Imagens*</label>
      <file-pond
        name="test"
        ref="pond"
        labelIdle="Arraste para aqui as suas imagens ou clique para seleccionar a partir do ser computador."
        labelFileTypeNotAllowed="Ficheiro do tipo incorrecto"
        fileValidateTypeLabelExpectedTypes="Só é permitido ficheiros .png e .jpg"
        :allow-multiple="true"
        accepted-file-types="image/jpeg, image/png"
        :files="myFiles"
        v-on:init="handleFilePondInit"
      />
    </div>

    <button class="costumer-form__send" @click="sendEmail">Submit</button>

    <!-- <div class="u-form-send-message u-form-send-success">
      Thank you! Your message has been sent.
    </div>
    <div class="u-form-send-error u-form-send-message">
      Unable to send your message. Please fix errors then try again.
    </div> -->
    <div class="costumer-form__line"></div>
  </div>
</template>

<style src="./CostumerForm.scss" lang="scss"></style>
<script src="./CostumerForm.js" lang="js"></script>