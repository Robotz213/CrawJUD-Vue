<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="container mt-4 mb-3">
    <div class="card-header mb-3">
      <h1 class="mb-3">Credenciais</h1>
      <hr />
      <div class="d-flex gap-2">
        <RouterLink :to="{ name: 'newCredential' }" class="btn btn-icon-split btn-success mb-3">
          <span class="text">Cadastrar</span>
        </RouterLink>
        <button
          type="button"
          data-bs-toggle="modal"
          class="btn btn-icon-split btn-warning mb-3"
          data-bs-target="#importarquivo"
        >
          <span class="text">Import em lotes</span>
        </button>
        <a href="#" class="btn btn-icon-split btn-primary mb-3">
          <span class="text">Gerar Relatório</span>
        </a>
      </div>
    </div>
    <div class="card-body">
      <div class="row g-3">
        <hr />
        <div class="col-md-12">
          <div class="table-responsive mb-3">
            <div id="DataTable_wrapper" class="dt-container dt-bootstrap5">
              <div class="row mt-2 justify-content-between">
                <div
                  class="d-md-flex justify-content-between align-items-center dt-layout-start col-md-auto me-auto"
                >
                  <div class="dt-length">
                    <select
                      aria-controls="DataTable"
                      class="form-select form-select-sm select2-hidden-accessible"
                      id="dt-length-0"
                      data-select2-id="dt-length-0"
                      tabindex="-1"
                      aria-hidden="true"
                    >
                      <option value="10" data-select2-id="2">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option></select
                    ><span
                      class="select2 select2-container select2-container--bootstrap-5"
                      dir="ltr"
                      data-select2-id="1"
                      ><span class="selection"
                        ><span
                          class="select2-selection select2-selection--single"
                          role="combobox"
                          aria-haspopup="true"
                          aria-expanded="false"
                          tabindex="0"
                          aria-disabled="false"
                          aria-labelledby="select2-dt-length-0-container"
                          ><span
                            class="select2-selection__rendered"
                            id="select2-dt-length-0-container"
                            role="textbox"
                            aria-readonly="true"
                            title="10"
                            >10</span
                          ><span class="select2-selection__arrow" role="presentation"
                            ><b role="presentation"></b></span></span></span
                      ><span class="dropdown-wrapper" aria-hidden="true"></span></span
                    ><label for="dt-length-0"> entries per page</label>
                  </div>
                </div>
                <div
                  class="d-md-flex justify-content-between align-items-center dt-layout-end col-md-auto ms-auto"
                ></div>
              </div>
              <div class="row mt-2 justify-content-between dt-layout-table">
                <div
                  class="d-md-flex justify-content-between align-items-center col-12 dt-layout-full col-md"
                >
                  <div
                    id="DataTable_processing"
                    class="dt-processing card"
                    role="status"
                    style="display: none"
                  >
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <table
                    class="table table-striped dataTable"
                    id="DataTable"
                    aria-describedby="DataTable_info"
                    style="width: 100%"
                  >
                    <colgroup>
                      <col data-dt-column="0" style="width: 120.953px" />
                      <col data-dt-column="1" style="width: 444.578px" />
                      <col data-dt-column="2" style="width: 212.297px" />
                      <col data-dt-column="3" style="width: 367.078px" />
                      <col data-dt-column="4" style="width: 429.094px" />
                    </colgroup>
                    <thead>
                      <tr role="row">
                        <th
                          data-dt-column="0"
                          rowspan="1"
                          colspan="1"
                          class="dt-type-numeric dt-orderable-asc dt-orderable-desc dt-ordering-asc"
                          aria-sort="ascending"
                          aria-label="#: Activate to invert sorting"
                        >
                          <span class="dt-column-title">#</span
                          ><span class="dt-column-order" role="button" tabindex="0"></span>
                        </th>
                        <th
                          data-dt-column="1"
                          rowspan="1"
                          colspan="1"
                          class="dt-orderable-asc dt-orderable-desc"
                          aria-label="Nome Credencial: Activate to sort"
                        >
                          <span class="dt-column-title">Nome Credencial</span
                          ><span class="dt-column-order" role="button" tabindex="0"></span>
                        </th>
                        <th
                          data-dt-column="2"
                          rowspan="1"
                          colspan="1"
                          class="dt-orderable-asc dt-orderable-desc"
                          aria-label="Portal: Activate to sort"
                        >
                          <span class="dt-column-title">Portal</span
                          ><span class="dt-column-order" role="button" tabindex="0"></span>
                        </th>
                        <th
                          data-dt-column="3"
                          rowspan="1"
                          colspan="1"
                          class="dt-orderable-asc dt-orderable-desc"
                          aria-label="Metodo Login: Activate to sort"
                        >
                          <span class="dt-column-title">Metodo Login</span
                          ><span class="dt-column-order" role="button" tabindex="0"></span>
                        </th>
                        <th
                          data-sortable="false"
                          data-dt-column="4"
                          rowspan="1"
                          colspan="1"
                          class="dt-orderable-none"
                          aria-label="Ações"
                        >
                          <span class="dt-column-title">Ações</span
                          ><span class="dt-column-order"></span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="dt-type-numeric sorting_1">3</td>
                        <td>paula.melo3</td>
                        <td>ELAW</td>

                        <td>Usuário/Senha</td>

                        <td>
                          <a
                            href="/credentials/editar/3"
                            class="btn btn-icon-split btn-warning btn-sm mb-2"
                          >
                            <span class="icon text-white-50">
                              <svg
                                class="svg-inline--fa fa-pen"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="pen"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                data-fa-i2svg=""
                              >
                                <path
                                  fill="currentColor"
                                  d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
                                ></path></svg
                              ><!-- <i class="fa-solid fa-pen"></i> Font Awesome fontawesome.com -->
                            </span>
                            <span class="text">Editar</span>
                          </a>
                          <button
                            type="button"
                            id="DeleteEpiButton"
                            class="btn btn-icon-split btn-danger btn-sm mb-2"
                            hx-post="/credentials/deletar/3"
                            hx-trigger="click"
                            hx-target="#results"
                          >
                            <span class="icon text-white-50">
                              <svg
                                class="svg-inline--fa fa-trash"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="trash"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                data-fa-i2svg=""
                              >
                                <path
                                  fill="currentColor"
                                  d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"
                                ></path></svg
                              ><!-- <i class="fa-solid fa-trash"></i> Font Awesome fontawesome.com -->
                            </span>
                            <span class="text">Deletar</span>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td class="dt-type-numeric sorting_1">4</td>
                        <td>paula.melo2</td>
                        <td>ELAW</td>

                        <td>Usuário/Senha</td>

                        <td>
                          <a
                            href="/credentials/editar/4"
                            class="btn btn-icon-split btn-warning btn-sm mb-2"
                          >
                            <span class="icon text-white-50">
                              <svg
                                class="svg-inline--fa fa-pen"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="pen"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                data-fa-i2svg=""
                              >
                                <path
                                  fill="currentColor"
                                  d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
                                ></path></svg
                              ><!-- <i class="fa-solid fa-pen"></i> Font Awesome fontawesome.com -->
                            </span>
                            <span class="text">Editar</span>
                          </a>
                          <button
                            type="button"
                            id="DeleteEpiButton"
                            class="btn btn-icon-split btn-danger btn-sm mb-2"
                            hx-post="/credentials/deletar/4"
                            hx-trigger="click"
                            hx-target="#results"
                          >
                            <span class="icon text-white-50">
                              <svg
                                class="svg-inline--fa fa-trash"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="trash"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                data-fa-i2svg=""
                              >
                                <path
                                  fill="currentColor"
                                  d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"
                                ></path></svg
                              ><!-- <i class="fa-solid fa-trash"></i> Font Awesome fontawesome.com -->
                            </span>
                            <span class="text">Deletar</span>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td class="dt-type-numeric sorting_1">5</td>
                        <td>DRA PAULA PROJUDI</td>
                        <td>PROJUDI</td>

                        <td>Usuário/Senha</td>

                        <td>
                          <a
                            href="/credentials/editar/5"
                            class="btn btn-icon-split btn-warning btn-sm mb-2"
                          >
                            <span class="icon text-white-50">
                              <svg
                                class="svg-inline--fa fa-pen"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="pen"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                data-fa-i2svg=""
                              >
                                <path
                                  fill="currentColor"
                                  d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
                                ></path></svg
                              ><!-- <i class="fa-solid fa-pen"></i> Font Awesome fontawesome.com -->
                            </span>
                            <span class="text">Editar</span>
                          </a>
                          <button
                            type="button"
                            id="DeleteEpiButton"
                            class="btn btn-icon-split btn-danger btn-sm mb-2"
                            hx-post="/credentials/deletar/5"
                            hx-trigger="click"
                            hx-target="#results"
                          >
                            <span class="icon text-white-50">
                              <svg
                                class="svg-inline--fa fa-trash"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="trash"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                data-fa-i2svg=""
                              >
                                <path
                                  fill="currentColor"
                                  d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"
                                ></path></svg
                              ><!-- <i class="fa-solid fa-trash"></i> Font Awesome fontawesome.com -->
                            </span>
                            <span class="text">Deletar</span>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td class="dt-type-numeric sorting_1">6</td>
                        <td>DRA KATHYA PROJUDI</td>
                        <td>PROJUDI</td>

                        <td>Usuário/Senha</td>

                        <td>
                          <a
                            href="/credentials/editar/6"
                            class="btn btn-icon-split btn-warning btn-sm mb-2"
                          >
                            <span class="icon text-white-50">
                              <svg
                                class="svg-inline--fa fa-pen"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="pen"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                data-fa-i2svg=""
                              >
                                <path
                                  fill="currentColor"
                                  d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
                                ></path></svg
                              ><!-- <i class="fa-solid fa-pen"></i> Font Awesome fontawesome.com -->
                            </span>
                            <span class="text">Editar</span>
                          </a>
                          <button
                            type="button"
                            id="DeleteEpiButton"
                            class="btn btn-icon-split btn-danger btn-sm mb-2"
                            hx-post="/credentials/deletar/6"
                            hx-trigger="click"
                            hx-target="#results"
                          >
                            <span class="icon text-white-50">
                              <svg
                                class="svg-inline--fa fa-trash"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="trash"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                data-fa-i2svg=""
                              >
                                <path
                                  fill="currentColor"
                                  d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"
                                ></path></svg
                              ><!-- <i class="fa-solid fa-trash"></i> Font Awesome fontawesome.com -->
                            </span>
                            <span class="text">Deletar</span>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td class="dt-type-numeric sorting_1">7</td>
                        <td>arthur.bortoletto</td>
                        <td>ELAW</td>

                        <td>Usuário/Senha</td>

                        <td>
                          <a
                            href="/credentials/editar/7"
                            class="btn btn-icon-split btn-warning btn-sm mb-2"
                          >
                            <span class="icon text-white-50">
                              <svg
                                class="svg-inline--fa fa-pen"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="pen"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                data-fa-i2svg=""
                              >
                                <path
                                  fill="currentColor"
                                  d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
                                ></path></svg
                              ><!-- <i class="fa-solid fa-pen"></i> Font Awesome fontawesome.com -->
                            </span>
                            <span class="text">Editar</span>
                          </a>
                          <button
                            type="button"
                            id="DeleteEpiButton"
                            class="btn btn-icon-split btn-danger btn-sm mb-2"
                            hx-post="/credentials/deletar/7"
                            hx-trigger="click"
                            hx-target="#results"
                          >
                            <span class="icon text-white-50">
                              <svg
                                class="svg-inline--fa fa-trash"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="trash"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                data-fa-i2svg=""
                              >
                                <path
                                  fill="currentColor"
                                  d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"
                                ></path></svg
                              ><!-- <i class="fa-solid fa-trash"></i> Font Awesome fontawesome.com -->
                            </span>
                            <span class="text">Deletar</span>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td class="dt-type-numeric sorting_1">8</td>
                        <td>Evila Projudi</td>
                        <td>PROJUDI</td>

                        <td>Usuário/Senha</td>

                        <td>
                          <a
                            href="/credentials/editar/8"
                            class="btn btn-icon-split btn-warning btn-sm mb-2"
                          >
                            <span class="icon text-white-50">
                              <svg
                                class="svg-inline--fa fa-pen"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="pen"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                data-fa-i2svg=""
                              >
                                <path
                                  fill="currentColor"
                                  d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
                                ></path></svg
                              ><!-- <i class="fa-solid fa-pen"></i> Font Awesome fontawesome.com -->
                            </span>
                            <span class="text">Editar</span>
                          </a>
                          <button
                            type="button"
                            id="DeleteEpiButton"
                            class="btn btn-icon-split btn-danger btn-sm mb-2"
                            hx-post="/credentials/deletar/8"
                            hx-trigger="click"
                            hx-target="#results"
                          >
                            <span class="icon text-white-50">
                              <svg
                                class="svg-inline--fa fa-trash"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="trash"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                data-fa-i2svg=""
                              >
                                <path
                                  fill="currentColor"
                                  d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"
                                ></path></svg
                              ><!-- <i class="fa-solid fa-trash"></i> Font Awesome fontawesome.com -->
                            </span>
                            <span class="text">Deletar</span>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th data-dt-column="0" rowspan="1" colspan="1" class="dt-type-numeric">
                          <span class="dt-column-title">#</span>
                        </th>
                        <th data-dt-column="1" rowspan="1" colspan="1">
                          <span class="dt-column-title">Nome Credencial</span>
                        </th>
                        <th data-dt-column="2" rowspan="1" colspan="1">
                          <span class="dt-column-title">Portal</span>
                        </th>
                        <th data-dt-column="3" rowspan="1" colspan="1">
                          <span class="dt-column-title">Metodo Login</span>
                        </th>
                        <th data-dt-column="4" rowspan="1" colspan="1">
                          <span class="dt-column-title">Ações</span>
                        </th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
              <div class="row mt-2 justify-content-between">
                <div
                  class="d-md-flex justify-content-between align-items-center dt-layout-start col-md-auto me-auto"
                >
                  <div class="dt-info" aria-live="polite" id="DataTable_info" role="status">
                    Showing 1 to 6 of 6 entries
                  </div>
                </div>
                <div
                  class="d-md-flex justify-content-between align-items-center dt-layout-end col-md-auto ms-auto"
                >
                  <div class="dt-paging">
                    <nav aria-label="pagination">
                      <ul class="pagination">
                        <li class="dt-paging-button page-item disabled">
                          <button
                            class="page-link first"
                            role="link"
                            type="button"
                            aria-controls="DataTable"
                            aria-disabled="true"
                            aria-label="First"
                            data-dt-idx="first"
                            tabindex="-1"
                          >
                            «
                          </button>
                        </li>
                        <li class="dt-paging-button page-item disabled">
                          <button
                            class="page-link previous"
                            role="link"
                            type="button"
                            aria-controls="DataTable"
                            aria-disabled="true"
                            aria-label="Previous"
                            data-dt-idx="previous"
                            tabindex="-1"
                          >
                            ‹
                          </button>
                        </li>
                        <li class="dt-paging-button page-item active">
                          <button
                            class="page-link"
                            role="link"
                            type="button"
                            aria-controls="DataTable"
                            aria-current="page"
                            data-dt-idx="0"
                          >
                            1
                          </button>
                        </li>
                        <li class="dt-paging-button page-item disabled">
                          <button
                            class="page-link next"
                            role="link"
                            type="button"
                            aria-controls="DataTable"
                            aria-disabled="true"
                            aria-label="Next"
                            data-dt-idx="next"
                            tabindex="-1"
                          >
                            ›
                          </button>
                        </li>
                        <li class="dt-paging-button page-item disabled">
                          <button
                            class="page-link last"
                            role="link"
                            type="button"
                            aria-controls="DataTable"
                            aria-disabled="true"
                            aria-label="Last"
                            data-dt-idx="last"
                            tabindex="-1"
                          >
                            »
                          </button>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
