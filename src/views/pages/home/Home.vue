<template>
  <div class="home">
    <section class="home__title-section">
      <h1 class="home__title">A parede é o que nos une</h1>
    </section>
    <section class="home__product-info container">
      <img class="home__product-info__l-image" src="../../../assets/drybag.jpg" alt="" data-image-width="1904" data-image-height="2404" />
      <img class="home__product-info__r-image" src="../../../assets/DSCF3239-edi1.jpg" alt="" data-image-width="1263" data-image-height="1600" />
      <h3 class="home__product-info-title">Saco de Magnésio</h3>
      <h5 class="home__product-info-subtitle">Porque os sacos de magnésio não têm que ser todos iguais, nós personalizamos este para ti.</h5>
      <h5 class="home__product-info-subtitle">Envia-nos um desenho com 50mm x 50mm (no minimo) e gravamos no teu saco.</h5>
      <ul class="home__product-info-list">
        <li class="home__product-info-list-item">Exterior e cinto em Cortiça com forro macio</li>
        <li class="home__product-info-list-item">Fecho "Dry bag" para evitar o desperdicio</li>
        <li class="home__product-info-list-item">Confortável e resistente</li>
        <li class="home__product-info-list-item">Fabricado em Portugal</li>
        <li class="home__product-info-list-item">PVP - 30€</li>
      </ul>
    </section>
    <section class="home__collection">
      <h2 class="home__collection-title">Nossa Colecção</h2>
      <p class="home__collection-subtitle">Esta é a nossa coleção de desenhos criados por Rodrigo Gomes</p>
      <div class="home__collection-swiper-outer">
        <swiper class="home__collection-swiper"
          :slides-per-view="3"
          :space-between="50"
          :loop="true"
          :navigation="true"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide>
            <img src="../../../assets/col_morde2.jpg" width="550" height="200" class="home__collection-swiper-image" blank="true">
          </swiper-slide>
          <swiper-slide>
            <img src="../../../assets/col_fica.jpg" width="550" height="400" class="home__collection-swiper-image" blank="true">
          </swiper-slide>
          <swiper-slide>
            <img src="../../../assets/col_cara.jpg" width="550" height="400" class="home__collection-swiper-image" blank="true">
          </swiper-slide>
          <swiper-slide>
            <img src="../../../assets/col_morde1.jpg" width="550" height="400" class="home__collection-swiper-image" blank="true">
          </swiper-slide>
          <swiper-slide>
            <img src="../../../assets/colmorde.jpg" width="550" height="400" class="home__collection-swiper-image" blank="true">
          </swiper-slide>
          <swiper-slide>
            <img src="../../../assets/col2cara.jpg" width="550" height="400" class="home__collection-swiper-image" blank="true">
          </swiper-slide>
          <swiper-slide>
            <img src="../../../assets/col_vai.jpg" width="550" height="400" class="home__collection-swiper-image" blank="true">
          </swiper-slide>
        </swiper>
      </div>
    </section>
    <section class="home__form container">
      <h2 class="home__form-title">Como encomendar</h2>
      <h5 class="home__form-text">
        Para fazeres a encomenda basta preencheres o formulário mencionando qual
        o desenho que pretendes.<br />Caso queiras personalizado é só fazeres o
        upload da imagem que pretendes.<br />Receberás no email o resultado
        expectável da gravação e os dados para o pagamento.
      </h5>
      <CostumerForm></CostumerForm>
    </section>
    <section class="home__about-us container">
        <h1 class="home__about-us-title">Sobre nós</h1>
        <p class="home__about-us-text">Da paixão pela escalada e com o intuito de criar algo de diferente surgiu a Mupi.</p>
    </section>
  </div>
</template>
<style src="./Home.scss" lang="scss"></style>
<script src="./Home.js" lang="js"></script>