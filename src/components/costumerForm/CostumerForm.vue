<template>
  <div class="u-clearfix u-form-spacing-15 u-form-vertical u-inner-form">
    <div class="u-form-group u-form-name u-form-group-1">
      <label for="name-995c" class="u-label">Nome</label>
      <input v-model="name" type="text" id="name-995c" name="name-1" class="u-border-1 u-border-grey-30 u-input u-input-rectangle" required="" />
    </div>
    <div class="u-form-email u-form-group">
      <label for="email-6797" class="u-label">Email</label>
      <input v-model="email" type="email" id="email-6797" name="email" class="u-border-1 u-border-grey-30 u-input u-input-rectangle" required="" />
    </div>
    <div class="u-form-group u-form-phone u-form-group-3">
      <label for="phone-b9b6" class="u-label"
      >Telefone</label>
      <input v-model="tel" type="tel" pattern="\+?\d{0,3}[\s\(\-]?([0-9]{2,3})[\s\)\-]?([\s\-]?)([0-9]{3})[\s\-]?([0-9]{2})[\s\-]?([0-9]{2})" id="phone-b9b6" name="phone" class="u-border-1 u-border-grey-30 u-input u-input-rectangle" />
    </div>
    <div class="u-form-group u-form-message">
      <label for="message-6797" class="u-label">Morada</label>
      <textarea v-model="address" rows="4" cols="50" id="message-6797" name="message" class="u-border-1 u-border-grey-30 u-input u-input-rectangle" required=""></textarea>
    </div>
    <div class="u-form-group u-form-group-5">
      <label for="text-f5b9" class="u-label">Nº Contribuinte</label>
      <input v-model="nif" type="text" placeholder="" id="text-f5b9" name="text" class="u-border-1 u-border-grey-30 u-input u-input-rectangle" />
    </div>
    <div class="u-form-group u-form-message u-form-group-6">
      <label for="message-45aa" class="u-label">Mensagem</label>
      <textarea v-model="message" rows="4" cols="50" id="message-45aa" name="message-1" class="u-border-1 u-border-grey-30 u-input u-input-rectangle"></textarea>
    </div>
    <div class="u-align-center u-form-group u-form-submit">
      <a href="#" class="u-border-2 u-border-grey-75 u-btn u-btn-round u-btn-submit u-button-style u-radius-30 u-text-body-color u-white u-btn-1 ">Submit</a>
      <input type="submit" value="submit" class="u-form-control-hidden" />
    </div>
    <div class="u-form-send-message u-form-send-success">
      Thank you! Your message has been sent.
    </div>
    <div class="u-form-send-error u-form-send-message">
      Unable to send your message. Please fix errors then try again.
    </div>
    <input type="hidden" value="" name="recaptchaResponse" />

    <button @click="sendEmail">Submit</button>
  </div>
</template>

<style src="./CostumerForm.css" lang="css"></style>
<script src="./CostumerForm.js" lang="js"></script>