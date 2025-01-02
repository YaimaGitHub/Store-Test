<template>
  <div class="menu" id="menu">
    <div class="background-image-1"></div>
    <div class="row">
      <div class="col-12 text-center q-mb-xl">
        <span class="bold hint-title">Cardápio</span>
        <h2 class="bold title">Conheça nosso cardápio</h2>
      </div>

      <div class="col-12 row q-gutter-x-md container-menu q-mb-xl">
        <q-btn class="btn-white btn-menu-category btn-active-hover row items-center active">
          <i class="fas fa-hamburger"></i> &nbsp; Burgers
        </q-btn>
        <q-btn class="btn-white btn-menu-category btn-active-hover row items-center">
          <i class="fas fa-pizza-slice"></i> &nbsp; Pizzas
        </q-btn>
        <q-btn class="btn-white btn-menu-category btn-active-hover row items-center">
          <i class="fas fa-drumstick-bite"></i> &nbsp; Churrasco
        </q-btn>
        <q-btn class="btn-white btn-menu-category btn-active-hover row items-center">
          <i class="fas fa-bacon"></i> &nbsp; Bifes
        </q-btn>
        <q-btn class="btn-white btn-menu-category btn-active-hover row items-center">
          <i class="fas fa-cocktail"></i> &nbsp; Bebidas
        </q-btn>
        <q-btn class="btn-white btn-menu-category btn-active-hover row items-center">
          <i class="fas fa-ice-cream"></i> &nbsp; Sobremesas
        </q-btn>
      </div>

      <div class="col-12 q-mb-xl">
        <div class="row" id="menuItems">
          <div class="col-3">
            <q-card class="menu-card-item q-pa-md q-ma-md">
              <div class="product-image">
                <img src="@/assets/images/cardapio/burguers/the-burger-bash-package.bd9d12d031865940bbe5faf15f1a62f8.jpg"
                  alt="Food" />
              </div>
              <p class="bold text-h6 product-title text-center q-mt-sm">
                Burguer americano
              </p>
              <p class="bold text-h5 product-price text-center">R$ 140,20</p>

              <div class="add-cart row justify-center items-center">
                <span class="btn-minus row justify-center">
                  <PhMinus weight="bold" size="25" />
                </span>
                <span class="btn-items-number">0</span>
                <span class="btn-plus row justify-center">
                  <PhPlus weight="bold" size="25" />
                </span>
                <span class="btn-add row justify-center">
                  <PhShoppingBagOpen weight="bold" size="25" />
                </span>
              </div>
            </q-card>
          </div>
        </div>
      </div>

      <div class="col-12 text-center">
        <q-btn class="btn-white" label="Ver mais" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuSection",
};
</script>

<style lang="scss" scoped>
.menu {
  padding: 50px 150px 150px 150px;
}

.menu-card-item {
  border-radius: 11px;
  margin-top: 0;

  .product-image img {
    width: 100%;
    border-radius: 11px;
  }

  .product-title {
    color: $color-black;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    height: 40px;
    margin-bottom: 0;
  }

  .product-price {
    color: $color-primary;
    font-weight: 900;
    margin: 10px 0 0 0;
  }

  &:hover {
    background: $color-primary;

    .product-title {
      display: none;
    }

    .product-price {
      color: $color-black;
      margin: 10px 0 10px 0;
    }

    .add-cart {
      display: flex;
    }
  }
}

.add-cart {
  display: none;

  .btn-minus,
  .btn-plus {
    color: $color-black-heavy;
    border: 2px solid $color-black-heavy;
    cursor: pointer;
  }

  .btn-minus {
    padding: 5px 7px;
    border: 2px solid $color-black-heavy;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  .btn-plus {
    padding: 5px 7px;
    border: 2px solid $color-black-heavy;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .btn-items-number {
    font-size: 23.5px;
    padding: 0px 15px;
    color: $color-black-heavy;
    border-top: 2px solid $color-black-heavy;
    border-bottom: 2px solid $color-black-heavy;
  }

  .btn-add {
    border: 2px solid $color-black-heavy;
    padding: 4px;
    border-radius: 10px;
    color: $color-white;
    background: $color-black-heavy;
    margin-left: 15px;
    cursor: pointer;
  }
}
</style>
