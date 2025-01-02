<template>
  <footer class="footer">
    <div class="row">
      <div class="col-3 container-footer-logo row justify-start">
        <img class="footer-logo" src="@/assets/images/logo.png" alt="Logo" />
      </div>
      <div class="col-6 container-footer-text row items-center justify-center">
        <p class="bold no-margin">Now Online &copy; Todos os direitos reservados</p>
      </div>
      <div class="col-3 container-footer-socialmedias row items-center justify-end">
        <div class="socialmedia-icon-group row q-gutter-x-md q-my-xl">
          <span
            class="mockbtn heavy-shadow btn-active-hover row justify-center items-center"
          >
            <PhFacebookLogo class="socialmedia-icon" size="25" />
          </span>
          <span
            class="mockbtn heavy-shadow btn-active-hover row justify-center items-center"
          >
            <PhInstagramLogo class="socialmedia-icon" size="25" />
          </span>
          <span
            class="mockbtn heavy-shadow btn-active-hover row justify-center items-center"
          >
            <PhWhatsappLogo class="socialmedia-icon" size="25" />
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style lang="scss" scoped>
.footer {
  padding: 0px 150px 0px 150px;
  background: $color-secondary;
}

.footer-logo {
  width: 150px;
}

// .container-footer-logo,
// .container-footer-text,
// .container-footer-socialmedias {
//   display: flex;
//   align-items: center;
// }
</style>
