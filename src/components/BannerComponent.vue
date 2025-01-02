<template>
  <div class="banner">
    <div class="row">
      <div class="col-6">
        <div class="column justify-center q-mb-md text-banner">
          <h1 class="bold">
            Escolha sua comida <span class="bold color-primary">favorita.</span>
          </h1>
          <p class="q-my-lg">
            Aproveite nosso cardápio! Escolha o que desejar e receba em sua casa de forma
            rápida e segura.
          </p>
          <div class="row q-gutter-x-lg">
            <q-btn class="button-yellow" flat label="Ver cardápio" no-caps />
            <div
              class="btn-white btn-shadow btn-active-hover btn-left-icon q-mt-xm row items-center"
              elevated
            >
              <q-btn
                class="btn-phone-icon q-ml-sm noshade noaction"
                flat
                dense
                icon="phone"
              />
              (99) 99999-9999
            </div>
          </div>
        </div>
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
      <div class="col-6">
        <div class="card-banner"></div>
        <div class="image-banner">
          <img src="@/assets/images/burguer.png" alt="Hambúrguer" />
        </div>
        <div class="card-design">
          <q-card class="card-testimonial heavy-shadow">
            <q-card-section>
              <div class="card-text">
                "Entrega rápida e funcionários simpáticos.<br />
                A comida chegou quente e <br />
                muito saborosa!"
              </div>
              <span class="card-user-name bold"> Thiago Lopes</span>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "BannerComponent",
};
</script>

<style lang="scss" scoped>
.text-banner {
  h1 {
    font-size: 60px;
    line-height: 60px;
    font-weight: 600;
    margin: 0;
    color: $color-black;
  }

  p {
    font-size: 20px;
  }
}

.color-primary {
  color: $color-primary;
}

.banner {
  padding: 110px 0 200px 0;
}

.btn-left-icon {
  flex: none;
  padding: 8px 16px 8px 12px;
  height: 60px;

  .btn-phone-icon {
    margin: 0 10px 0px 0px;
    width: 45px;
    height: 45px;
  }
}

.btn-left-icon .btn-phone-icon {
  background-color: $color-primary;
  border-radius: 15px;
}

.card-design {
  width: 100%;
  height: 100%;
  position: relative;

  .card-testimonial {
    border-radius: 20px;
    padding: 15px 20px;
    font-size: 14px;
    right: 0;
    position: absolute;
    bottom: -27px;
  }
}

.card-banner {
  height: 450px;
  width: 450px;
  border-radius: 170px;
  background: rgba($color: $color-primary, $alpha: 0.7);
  position: absolute;
  right: 10%;
  top: 180px;
}

.image-banner img {
  width: 570px;
  position: absolute;
}

.card-user-name {
  position: absolute;
  font-size: 12px;
  color: $color-primary;
  right: 20px;
  bottom: 10px;
}

@media (max-width: $breakpoint-md-max) {
  .button-yellow {
    margin-bottom: 20px;
    flex: content;
  }

  .btn-left-icon {
    justify-content: center;
    flex: content;
  }
}
</style>
