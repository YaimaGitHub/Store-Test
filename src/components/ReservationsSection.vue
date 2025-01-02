<template>
  <div class="reservations" id="reservations">
    <div class="row">
      <div class="col-12">
        <div class="card-secondary">
          <div class="row">
            <div class="col-7">
              <div class="col-12 q-mb-xl">
                <span class="bold hint-title">Reserva</span>
                <h2 class="bold title">Quer reservar um horário?</h2>
              </div>
              <p class="card-text q-pr-sm">
                Mande uma mensagem clicando no botão abaixo! Reserve sua data de forma
                simples e rápida.
              </p>
              <q-btn class="button-yellow q-mt-md" flat label="Fazer reserva" no-caps />
            </div>
            <div class="col-5">
              <div class="card-reservation"></div>
              <div class="banner-image">
                <img src="@/assets/images/icone-reserva.svg" alt="Imagem reservas" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReservationsSection',
}
</script>

<style lang="scss" scoped>
.reservations {
  padding: 100px 150px 150px 150px;
}

.card-secondary {
  background: $color-secondary;
  border-radius: 70px;
  padding: 90px;
  position: relative;

  .card-text {
    max-width: 400px;
    font-size: 15px;
  }

  .card-reservation {
    height: 300px;
    width: 300px;
    border-radius: 100px;
    background: $color-white;
    position: absolute;
    right: 60px;
    top: 70px;
  }

  .banner-image {
    position: absolute;

    img {
      width: 90%;
    }
  }
}
</style>
