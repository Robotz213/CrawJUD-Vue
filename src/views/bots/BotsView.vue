<script setup lang="ts">
import MainFrame from "@/components/MainFrame.vue";
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
            <div class="row">
              <div class="col-md-3">
                <div class="card border border-dark border-3 rounded m-4" style="min-height: 430px">
                  <h5 class="card-header bg-secondary bg-opacity-25">PROJUDI - CAPA</h5>

                  <img
                    src="@/assets/img/projudi2.png"
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

              <div class="col-md-3">
                <div class="card border border-dark border-3 rounded m-4" style="min-height: 430px">
                  <h5 class="card-header bg-secondary bg-opacity-25">PROJUDI - MOVIMENTACAO</h5>

                  <img
                    src="@/assets/img/projudi2.png"
                    alt="logo PROJUDI"
                    class="card-img-top p-4 img-thumbnail bg-white"
                  />
                  <div class="card-body bg-secondary bg-opacity-10">
                    <h5 class="card-text">
                      Robô responsável por busca de movimentações processuais
                    </h5>
                  </div>

                  <div
                    class="card-footer d-flex align-items-center justify-content-between bg-secondary bg-opacity-25"
                  >
                    <a
                      href="https://crawjud.robotz.dev/bot/2/projudi/movimentacao"
                      class="btn btn-success fw-semibold"
                      >Acessar Robô</a
                    >
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <div class="card border border-dark border-3 rounded m-4" style="min-height: 430px">
                  <h5 class="card-header bg-secondary bg-opacity-25">PROJUDI - BUSCA PROCESSOS</h5>

                  <img
                    src="@/assets/img/projudi2.png"
                    alt="logo PROJUDI"
                    class="card-img-top p-4 img-thumbnail bg-white"
                  />
                  <div class="card-body bg-secondary bg-opacity-10">
                    <h5 class="card-text">
                      Robô responsável por fazer busca utilizando nome de partes do processo
                    </h5>
                  </div>

                  <div
                    class="card-footer d-flex align-items-center justify-content-between bg-secondary bg-opacity-25"
                  >
                    <a
                      href="https://crawjud.robotz.dev/bot/3/projudi/proc_parte"
                      class="btn btn-success fw-semibold"
                      >Acessar Robô</a
                    >
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <div class="card border border-dark border-3 rounded m-4" style="min-height: 430px">
                  <h5 class="card-header bg-secondary bg-opacity-25">PROJUDI - PROTOCOLO</h5>

                  <img
                    src="@/assets/img/projudi2.png"
                    alt="logo PROJUDI"
                    class="card-img-top p-4 img-thumbnail bg-white"
                  />
                  <div class="card-body bg-secondary bg-opacity-10">
                    <h5 class="card-text">Robô responsável por peticionamento em lotes</h5>
                  </div>

                  <div
                    class="card-footer d-flex align-items-center justify-content-between bg-secondary bg-opacity-25"
                  >
                    <a
                      href="https://crawjud.robotz.dev/bot/4/projudi/protocolo"
                      class="btn btn-success fw-semibold"
                      >Acessar Robô</a
                    >
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <div class="card border border-dark border-3 rounded m-4" style="min-height: 430px">
                  <h5 class="card-header bg-secondary bg-opacity-25">ESAJ - CAPA</h5>

                  <img
                    src="@/assets/img/esaj2.png"
                    alt="logo ESAJ"
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
                      href="https://crawjud.robotz.dev/bot/5/esaj/capa"
                      class="btn btn-success fw-semibold"
                      >Acessar Robô</a
                    >
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <div class="card border border-dark border-3 rounded m-4" style="min-height: 430px">
                  <h5 class="card-header bg-secondary bg-opacity-25">ESAJ - MOVIMENTACAO</h5>

                  <img
                    src="@/assets/img/esaj2.png"
                    alt="logo ESAJ"
                    class="card-img-top p-4 img-thumbnail bg-white"
                  />
                  <div class="card-body bg-secondary bg-opacity-10">
                    <h5 class="card-text">
                      Robô responsável por busca de movimentações processuais
                    </h5>
                  </div>

                  <div
                    class="card-footer d-flex align-items-center justify-content-between bg-secondary bg-opacity-25"
                  >
                    <a
                      href="https://crawjud.robotz.dev/bot/6/esaj/movimentacao"
                      class="btn btn-success fw-semibold"
                      >Acessar Robô</a
                    >
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <div class="card border border-dark border-3 rounded m-4" style="min-height: 430px">
                  <h5 class="card-header bg-secondary bg-opacity-25">ESAJ - BUSCA PROCESSOS</h5>

                  <img
                    src="@/assets/img/esaj2.png"
                    alt="logo ESAJ"
                    class="card-img-top p-4 img-thumbnail bg-white"
                  />
                  <div class="card-body bg-secondary bg-opacity-10">
                    <h5 class="card-text">
                      Robô responsável por fazer busca utilizando nome de partes do processo
                    </h5>
                  </div>

                  <div
                    class="card-footer d-flex align-items-center justify-content-between bg-secondary bg-opacity-25"
                  >
                    <a
                      href="https://crawjud.robotz.dev/bot/7/esaj/proc_parte"
                      class="btn btn-success fw-semibold"
                      >Acessar Robô</a
                    >
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <div class="card border border-dark border-3 rounded m-4" style="min-height: 430px">
                  <h5 class="card-header bg-secondary bg-opacity-25">ESAJ - PROTOCOLO</h5>

                  <img
                    src="@/assets/img/esaj2.png"
                    alt="logo ESAJ"
                    class="card-img-top p-4 img-thumbnail bg-white"
                  />
                  <div class="card-body bg-secondary bg-opacity-10">
                    <h5 class="card-text">Robô responsável por peticionamento em lotes</h5>
                  </div>

                  <div
                    class="card-footer d-flex align-items-center justify-content-between bg-secondary bg-opacity-25"
                  >
                    <a
                      href="https://crawjud.robotz.dev/bot/8/esaj/protocolo"
                      class="btn btn-success fw-semibold"
                      >Acessar Robô</a
                    >
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <div class="card border border-dark border-3 rounded m-4" style="min-height: 430px">
                  <h5 class="card-header bg-secondary bg-opacity-25">ESAJ - BUSCA PAGAMENTOS</h5>

                  <img
                    src="@/assets/img/esaj2.png"
                    alt="logo ESAJ"
                    class="card-img-top p-4 img-thumbnail bg-white"
                  />
                  <div class="card-body bg-secondary bg-opacity-10">
                    <h5 class="card-text">
                      Robô responsável por buscar pagamentos feitos em processos
                    </h5>
                  </div>

                  <div
                    class="card-footer d-flex align-items-center justify-content-between bg-secondary bg-opacity-25"
                  >
                    <a
                      href="https://crawjud.robotz.dev/bot/9/esaj/busca_pags"
                      class="btn btn-success fw-semibold"
                      >Acessar Robô</a
                    >
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <div class="card border border-dark border-3 rounded m-4" style="min-height: 430px">
                  <h5 class="card-header bg-secondary bg-opacity-25">ESAJ - EMISSÃO GUIAS</h5>

                  <img
                    src="@/assets/img/esaj2.png"
                    alt="logo ESAJ"
                    class="card-img-top p-4 img-thumbnail bg-white"
                  />
                  <div class="card-body bg-secondary bg-opacity-10">
                    <h5 class="card-text">Robô responsável por emissão de guias</h5>
                  </div>

                  <div
                    class="card-footer d-flex align-items-center justify-content-between bg-secondary bg-opacity-25"
                  >
                    <a
                      href="https://crawjud.robotz.dev/bot/10/esaj/emissor"
                      class="btn btn-success fw-semibold"
                      >Acessar Robô</a
                    >
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <div class="card border border-dark border-3 rounded m-4" style="min-height: 430px">
                  <h5 class="card-header bg-secondary bg-opacity-25">ELAW - ENCERRAMENTOS</h5>

                  <img
                    src="@/assets/img/elaw.png"
                    class="card-img-top p-4 img-thumbnail bg-white"
                  />
                  <div class="card-body bg-secondary bg-opacity-10">
                    <h5 class="card-text">Robô responsável por encerramento de processos</h5>
                  </div>

                  <div
                    class="card-footer d-flex align-items-center justify-content-between bg-secondary bg-opacity-25"
                  >
                    <a
                      href="https://crawjud.robotz.dev/bot/11/elaw/encerra"
                      class="btn btn-success fw-semibold"
                      >Acessar Robô</a
                    >
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <div class="card border border-dark border-3 rounded m-4" style="min-height: 430px">
                  <h5 class="card-header bg-secondary bg-opacity-25">ELAW - PRE-CADASTRO</h5>

                  <img
                    src="@/assets/img/elaw.png"
                    class="card-img-top p-4 img-thumbnail bg-white"
                  />
                  <div class="card-body bg-secondary bg-opacity-10">
                    <h5 class="card-text">
                      Robô responsável por realizar pré cadastro de processos
                    </h5>
                  </div>

                  <div
                    class="card-footer d-flex align-items-center justify-content-between bg-secondary bg-opacity-25"
                  >
                    <a
                      href="https://crawjud.robotz.dev/bot/12/elaw/cadastro"
                      class="btn btn-success fw-semibold"
                      >Acessar Robô</a
                    >
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <div class="card border border-dark border-3 rounded m-4" style="min-height: 430px">
                  <h5 class="card-header bg-secondary bg-opacity-25">ELAW - COMPL. CADASTRO</h5>

                  <img
                    src="@/assets/img/elaw.png"
                    class="card-img-top p-4 img-thumbnail bg-white"
                  />
                  <div class="card-body bg-secondary bg-opacity-10">
                    <h5 class="card-text">Robô responsável por complemento de cadastro</h5>
                  </div>

                  <div
                    class="card-footer d-flex align-items-center justify-content-between bg-secondary bg-opacity-25"
                  >
                    <a
                      href="https://crawjud.robotz.dev/bot/13/elaw/complement"
                      class="btn btn-success fw-semibold"
                      >Acessar Robô</a
                    >
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <div class="card border border-dark border-3 rounded m-4" style="min-height: 430px">
                  <h5 class="card-header bg-secondary bg-opacity-25">ELAW - PAGAMENTO</h5>

                  <img
                    src="@/assets/img/elaw.png"
                    class="card-img-top p-4 img-thumbnail bg-white"
                  />
                  <div class="card-body bg-secondary bg-opacity-10">
                    <h5 class="card-text">Robô responsável por solicitação de pagamentos</h5>
                  </div>

                  <div
                    class="card-footer d-flex align-items-center justify-content-between bg-secondary bg-opacity-25"
                  >
                    <a
                      href="https://crawjud.robotz.dev/bot/14/elaw/sol_pags"
                      class="btn btn-success fw-semibold"
                      >Acessar Robô</a
                    >
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <div class="card border border-dark border-3 rounded m-4" style="min-height: 430px">
                  <h5 class="card-header bg-secondary bg-opacity-25">ELAW - ANDAMENTOS</h5>

                  <img
                    src="@/assets/img/elaw.png"
                    class="card-img-top p-4 img-thumbnail bg-white"
                  />
                  <div class="card-body bg-secondary bg-opacity-10">
                    <h5 class="card-text">Robô responsável por inserção de andamentos</h5>
                  </div>

                  <div
                    class="card-footer d-flex align-items-center justify-content-between bg-secondary bg-opacity-25"
                  >
                    <a
                      href="https://crawjud.robotz.dev/bot/15/elaw/andament"
                      class="btn btn-success fw-semibold"
                      >Acessar Robô</a
                    >
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <div class="card border border-dark border-3 rounded m-4" style="min-height: 430px">
                  <h5 class="card-header bg-secondary bg-opacity-25">ELAW - PROVISIONAMENTO</h5>

                  <img
                    src="@/assets/img/elaw.png"
                    class="card-img-top p-4 img-thumbnail bg-white"
                  />
                  <div class="card-body bg-secondary bg-opacity-10">
                    <h5 class="card-text">Robô responsável por provisionar valores</h5>
                  </div>

                  <div
                    class="card-footer d-flex align-items-center justify-content-between bg-secondary bg-opacity-25"
                  >
                    <a
                      href="https://crawjud.robotz.dev/bot/16/elaw/provisao"
                      class="btn btn-success fw-semibold"
                      >Acessar Robô</a
                    >
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <div class="card border border-dark border-3 rounded m-4" style="min-height: 430px">
                  <h5 class="card-header bg-secondary bg-opacity-25">ELAW - DOWNLOAD DOC.</h5>

                  <img
                    src="@/assets/img/elaw.png"
                    class="card-img-top p-4 img-thumbnail bg-white"
                  />
                  <div class="card-body bg-secondary bg-opacity-10">
                    <h5 class="card-text">Robô responsável por baixar documentos</h5>
                  </div>

                  <div
                    class="card-footer d-flex align-items-center justify-content-between bg-secondary bg-opacity-25"
                  >
                    <a
                      href="https://crawjud.robotz.dev/bot/17/elaw/download"
                      class="btn btn-success fw-semibold"
                      >Acessar Robô</a
                    >
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <div class="card border border-dark border-3 rounded m-4" style="min-height: 430px">
                  <h5 class="card-header bg-secondary bg-opacity-25">CAIXA - EMISSÃO GUIAS</h5>

                  <img
                    src="@/assets/img/figure_crawjud.png"
                    alt="logo CrawJUD"
                    class="card-img-top p-4 img-thumbnail bg-white"
                  />
                  <div class="card-body bg-secondary bg-opacity-10">
                    <h5 class="card-text">Robô responsável por emissão de guias</h5>
                  </div>

                  <div
                    class="card-footer d-flex align-items-center justify-content-between bg-secondary bg-opacity-25"
                  >
                    <a
                      href="https://crawjud.robotz.dev/bot/18/caixa/emissor"
                      class="btn btn-success fw-semibold"
                      >Acessar Robô</a
                    >
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <div class="card border border-dark border-3 rounded m-4" style="min-height: 430px">
                  <h5 class="card-header bg-secondary bg-opacity-25">TJDFT - CALCULADORA</h5>

                  <img
                    src="@/assets/img/figure_crawjud.png"
                    alt="logo CrawJUD"
                    class="card-img-top p-4 img-thumbnail bg-white"
                  />
                  <div class="card-body bg-secondary bg-opacity-10">
                    <h5 class="card-text">Robô de emissão de cálculo de atualização monetária</h5>
                  </div>

                  <div
                    class="card-footer d-flex align-items-center justify-content-between bg-secondary bg-opacity-25"
                  >
                    <a
                      href="https://crawjud.robotz.dev/bot/19/tjdft/calculo"
                      class="btn btn-success fw-semibold"
                      >Acessar Robô</a
                    >
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <div class="card border border-dark border-3 rounded m-4" style="min-height: 430px">
                  <h5 class="card-header bg-secondary bg-opacity-25">PJE - PAUTA AUDIÊNCIAS</h5>

                  <img
                    src="@/assets/img/figure_crawjud.png"
                    alt="logo CrawJUD"
                    class="card-img-top p-4 img-thumbnail bg-white"
                  />
                  <div class="card-body bg-secondary bg-opacity-10">
                    <h5 class="card-text">Robô responsável por extrair pautas do Pje</h5>
                  </div>

                  <div
                    class="card-footer d-flex align-items-center justify-content-between bg-secondary bg-opacity-25"
                  >
                    <a
                      href="https://crawjud.robotz.dev/bot/20/pje/pauta"
                      class="btn btn-success fw-semibold"
                      >Acessar Robô</a
                    >
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <div class="card border border-dark border-3 rounded m-4" style="min-height: 430px">
                  <h5 class="card-header bg-secondary bg-opacity-25">ELAW - PRAZOS</h5>

                  <img
                    src="@/assets/img/elaw.png"
                    class="card-img-top p-4 img-thumbnail bg-white"
                  />
                  <div class="card-body bg-secondary bg-opacity-10">
                    <h5 class="card-text">Prazos Elaw</h5>
                  </div>

                  <div
                    class="card-footer d-flex align-items-center justify-content-between bg-secondary bg-opacity-25"
                  >
                    <a
                      href="https://crawjud.robotz.dev/bot/21/elaw/prazos"
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
