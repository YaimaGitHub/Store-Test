<template>
  <div class="home q-mx-xl">
    <Navbar />
    <section>
      <Banner />
    </section>
    <Services />
    <Menu />
    <Testimonials />
    <Reservations />
  </div>
  <Footer />
</template>

<script>
import Navbar from "@/components/NavbarComponent.vue";
import Banner from "@/components/BannerComponent.vue";
import Services from "@/components/ServicesSection.vue";
import Menu from "@/components/MenuSection.vue";
import Testimonials from "@/components/TestimonialsSection.vue";
import Reservations from "@/components/ReservationsSection.vue";
import Footer from "@/components/FooterComponent.vue";

export default {
  name: "HomeView",
  components: {
    Navbar,
    Banner,
    Services,
    Menu,
    Testimonials,
    Reservations,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
section {
  margin: 0 150px;
}
</style>
