<script setup lang="ts">
import logoProjudi from "@/assets/img/projudi.png";
import MainFrame from "@/components/MainFrame.vue";

const imagesSrc: { [key: string]: string } = {
  projudi: logoProjudi,
};

function getLogo(system: string) {
  return imagesSrc[system];
}
</script>

<template>
  <MainFrame>
    <div class="card">
      <div class="card-header">
        <h1 class="m-1">Robôs</h1>
      </div>
      <div class="card-body bg-warning bg-opacity-75">
        <div class="row">
          <div class="col-md-12">
            <div class="form-floating mb-3">
              <input
                type="search"
                class="form-control"
                id="floatingInput"
                placeholder="..."
                oninput="filterCards(this)"
              />
              <label class="fw-semibold" for="floatingInput">Buscar Robô</label>
            </div>
            <hr />
          </div>
          <div class="col-md-12">
            <div class="row g-4">
              <div class="col-lg-3 p-4">
                <div class="card border border-dark border-3 rounded" style="min-height: 430px">
                  <h5 class="card-header bg-secondary bg-opacity-25">PROJUDI - CAPA</h5>
                  <img
                    :src="getLogo('projudi')"
                    alt="logo PROJUDI"
                    class="card-img-top p-4 img-thumbnail bg-white"
                  />
                  <div class="card-body bg-secondary bg-opacity-10">
                    <h5 class="card-text">
                      Robô responsável por trazer a capa do processo em uma planilha
                    </h5>
                  </div>
                  <div
                    class="card-footer d-flex align-items-center justify-content-between bg-secondary bg-opacity-25"
                  >
                    <a
                      href="https://crawjud.robotz.dev/bot/1/projudi/capa"
                      class="btn btn-success fw-semibold"
                      >Acessar Robô</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainFrame>
</template>
