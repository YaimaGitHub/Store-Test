<template>
  <div class="testimonials" id="testimonials">
    <div class="background-image-1"></div>

    <div class="row">
      <div class="col-5 text-center banner-testimonials">
        <div class="card-testimonials"></div>
        <div class="image-banner">
          <img src="@/assets/images/pizzas.png" alt="Imagem comida" />
        </div>
      </div>
      <div class="col-7">
        <span class="bold hint-title">Depoimentos</span>
        <h2 class="bold title">O que dizem sobre nós?</h2>

        <div class="q-mb-xm">
          <div class="testimonial" id="testimonial-1">
            <div class="container-testimonial-data row">
              <div class="testimonial-image row justify-center">
                <img src="@/assets/images/diego.jpg" alt="Imagem cliente" />
              </div>
              <div>
                <p class="bold testimonial-name">Diego Pereira</p>
                <p class="testimonial-rate">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i> &nbsp; <span>4.5</span>
                </p>
              </div>
            </div>
            <p class="testimonial-text">
              <i class="fas fa-quote-left"></i>
              <span>
                Muito bom, recomendo demais! Comida muito bem feita pelo chefe,
                atendimento rápido e ótima comunicação com o cliente.
              </span>
              <i class="fas fa-quote-right"></i>
            </p>
          </div>

          <div class="testimonial hidden" id="testimonial-2">
            <div class="container-testimonial-data row">
              <div class="testimonial-image row justify-center">
                <img src="@/assets/images/ana.jpg" alt="Imagem cliente" />
              </div>
              <div>
                <p class="bold testimonial-name">Ana Beatriz</p>
                <p class="testimonial-rate">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i> &nbsp; <span>5.0</span>
                </p>
              </div>
            </div>
            <p class="testimonial-text">
              <i class="fas fa-quote-left"></i>
              <span>
                Um jantar perfeito do começo ao fim. Comida, experiência, serviço... Foi
                tão maravilhoso que fomos dois dias seguidos - fato inédito para mim em
                uma viagem.
              </span>
              <i class="fas fa-quote-right"></i>
            </p>
          </div>

          <div class="testimonial hidden" id="testimonial-3">
            <div class="container-testimonial-data row">
              <div class="testimonial-image row justify-center">
                <img src="@/assets/images/joao.jpg" alt="Imagem cliente" />
              </div>
              <div>
                <p class="bold testimonial-name">João Guilherme</p>
                <p class="testimonial-rate">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i> &nbsp; <span>4.0</span>
                </p>
              </div>
            </div>
            <p class="testimonial-text">
              <i class="fas fa-quote-left"></i>
              <span>
                A comida estava deliciosa e o serviço gentil nos surpreendeu! Dica:
                reserve umas 3 horas para ter uma experiência incrível.
              </span>
              <i class="fas fa-quote-right"></i>
            </p>
          </div>
        </div>
        <div class="q-gutter-x-md q-pt-xl">
          <q-btn class="mockbtn btn-white active">1</q-btn>
          <q-btn class="mockbtn btn-white">2</q-btn>
          <q-btn class="mockbtn btn-white">3</q-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestimonialsSection",
};
</script>

<style lang="scss" scoped>
.testimonials {
  padding: 100px 150px 150px 150px;
}

.testimonial {
  margin-top: 70px;
}

.banner-testimonials {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .image-banner img {
    width: 90%;
    position: absolute;
    left: 0;
    top: 0;
    margin-top: 50px;
  }

  .card-testimonials {
    height: 320px;
    width: 320px;
    border-radius: 100px;
    background: $color-secondary;
    position: absolute;
    top: 0;
  }
}

.testimonial-image {
  width: 65px;
  height: 65px;
  background-color: $color-secondary;
  border-radius: 50px;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 15px;
  overflow: hidden;
}

.testimonial-image img {
  height: 100%;
}

.testimonial-name {
  color: $color-black;
  font-size: 22px;
  margin-bottom: 5px;
}

.testimonial-rate {
  color: $color-primary;

  span {
    color: $color-black;
  }
}

.testimonial-text {
  display: flex;
  font-size: 16px;
  color: $color-black;

  i {
    font-size: 35px;
    color: $color-primary;
  }

  i:first-child {
    padding-left: 10px;
    padding-right: 35px;
  }

  i:last-child {
    padding-left: 45px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
}
</style>
