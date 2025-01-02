<template>
  <div class="services" id="services">
    <div class="background-image-2"></div>
    <div class="row">
      <div class="col-12 text-center q-mb-xl">
        <span class="bold hint-title">Serviços</span>
        <h2 class="bold title">Como são nossos serviços?</h2>
      </div>
      <div class="col-4 q-mt-md row items-center justify-center">
        <q-card flat class="services-card-icon column items-center">
          <q-card-section class="card-icon">
            <img
              src="@/assets/images/icone-pedido.svg"
              alt="Imagem de pedido"
              style="width: 150px"
            />
          </q-card-section>
          <q-card-section class="text-center q-mt-md q-px-md card-text">
            <p class="bold">Fácil de pedir</p>
            <span>Você só precisa de alguns passos para pedir sua comida.</span>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-4 col-4 q-mt-md row items-center justify-center">
        <q-card flat class="services-card-icon column items-center">
          <q-card-section class="card-icon">
            <img
              src="@/assets/images/icone-delivery.svg"
              alt="Imagem de pedido"
              style="width: 250px"
            />
          </q-card-section>
          <q-card-section class="text-center q-mt-md q-px-md card-text">
            <p class="bold">Entrega rápida</p>
            <span>Nossa entrega é sempre pontual, rápida e segura.</span>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-4 col-4 q-mt-md row items-center justify-center">
        <q-card flat class="services-card-icon column items-center">
          <q-card-section class="card-icon">
            <img
              src="@/assets/images/icone-qualidade.svg"
              alt="Imagem de pedido"
              style="width: 250px"
            />
          </q-card-section>
          <q-card-section class="text-center q-mt-md q-px-md card-text">
            <p class="bold">Melhor qualidade</p>
            <span>Não só a rapidez na entrega, a qualidade também é o nosso forte.</span>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesSection',
};
</script>

<style lang="scss" scoped>
.services {
  padding: 100px 150px 150px 150px;
}

.background-image-2 {
  background-image: url("@/assets/images/bg-icons-2.png");
  background-size: cover;
}

.services-card-icon {
  background: transparent;
  width: 300px;

  .card-icon {
    height: 150px;
    margin: 0 auto;
    margin-bottom: 30px;
  }
}

.card-text {
  color: $color-text-out;
  font-size: 15px;

  p {
    color: $color-black;
    font-size: 22px;
  }
}
</style>
