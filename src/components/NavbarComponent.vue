<template>
  <div class="navbar">
    <div class="gt-sm">
      <div class="row justify-around items-center">
        <div>
          <img
            class="img-logo"
            style="width: 160px"
            src="@/assets/images/logo.png"
            alt="Logo"
          />
        </div>

        <div class="q-gutter-x-lg menu-items bold">
          <q-btn flat to="/#reservations" class="noshade" no-caps>Reservas</q-btn>
          <q-btn flat to="/#services" class="noshade" no-caps>Serviços</q-btn>
          <q-btn flat to="/#menu" class="noshade" no-caps>Cardápio</q-btn>
          <q-btn flat to="/#testimonials" class="noshade" no-caps>Depoimentos</q-btn>
        </div>

        <div
          class="btn-cart btn-white btn-shadow btn-active-hover"
          elevated
          @click="dialogCart = true"
        >
          Meu carrinho
          <q-btn
            class="btn-cart-icon q-ml-sm noshade noaction"
            flat
            dense
            icon="shopping_cart"
          />
        </div>
      </div>
    </div>

    <div class="lt-md">
      <q-header class="bg-white text-black z-top">
        <q-toolbar>
          <q-btn
            flat
            dense
            round
            @click="drawer = !drawer"
            aria-label="Menu"
            :icon="drawer ? 'close_thick' : 'menu'"
          />

          <q-toolbar-title class="relative">
            <img
              class="img-logo absolute-center"
              style="width: 160px"
              src="@/assets/images/logo-name.svg"
              alt="Now online"
            />
          </q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer v-model="drawer" style="width: 100%">
        <q-scroll-area
          class="fit"
          style="
            height: calc(100% - 150px);
            padding-top: 160px;
            border-right: 1px solid #ddd;
          "
        >
          <q-list padding class="menu-list">
            <q-item clickable v-ripple class="menu-icon">
              <q-item-section avatar>
                <q-icon name="bookmark" />
              </q-item-section>
              <q-item-section> Reservas </q-item-section>
            </q-item>

            <q-item clickable v-ripple class="menu-icon">
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>
              <q-item-section> Serviços </q-item-section>
            </q-item>

            <q-item clickable v-ripple class="menu-icon">
              <q-item-section avatar>
                <q-icon name="fastfood" />
              </q-item-section>
              <q-item-section> Cardápio </q-item-section>
            </q-item>

            <q-item clickable v-ripple class="menu-icon">
              <q-item-section avatar>
                <q-icon name="drafts" />
              </q-item-section>
              <q-item-section> Depoimentos </q-item-section>
            </q-item>

            <q-item clickable v-ripple class="menu-icon">
              <q-item-section avatar>
                <q-icon name="shopping_cart" />
              </q-item-section>
              <q-item-section> Meu carrinho </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
        <div style="width: 100%" class="absolute-top column items-center">
          <q-avatar size="180px" class="q-mb-xm">
            <img class="img-logo" src="@/assets/images/logo.png" alt="Logo" />
          </q-avatar>
        </div>
      </q-drawer>
    </div>

    <q-dialog
      v-model="dialogCart"
      persistent
      transition-show="slide-up"
      transition-hide="slide-down"
      maximized
    >
      <q-card class="bg-white">
        <q-header class="bg-white text-black z-top">
          <q-toolbar>
            <q-toolbar-title class="relative"> Carrinho </q-toolbar-title>
            <!-- <q-space /> -->
            <q-btn dense flat v-close-popup class="btn-white q-px-md"> Fechar </q-btn>
          </q-toolbar>
        </q-header>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "NavbarComponent",
  components: {},
  setup() {
    return {
      drawer: ref(false),
      dialogCart: ref(false),
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.menu-items {
  color: $color-black;

  .q-btn {
    font-size: 16px;
  }
}

.btn-cart {
  padding: 12px 17px 12px 22px;

  .btn-cart-icon {
    background-color: $color-primary;
    border-radius: 15px;
    width: 45px;
    height: 45px;
  }
}

.menu-icon {
  color: $color-black;
  font-size: 16px;
}
</style>
