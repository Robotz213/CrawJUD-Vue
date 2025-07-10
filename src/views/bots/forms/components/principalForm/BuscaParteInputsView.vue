<template>
  <div>
    <div class="col-md-5 mb-3 border border-secondary p-2 border-2 rounded bg-white">
      <label class="form-label" for="parte_name">Nome da parte</label>
      <input
        class="form-control"
        data-placeholder="Nome da parte"
        id="parte_name"
        name="parte_name"
        type="text"
        value=""
      />
    </div>
    <div class="col-md-5 mb-3 border border-secondary p-2 border-2 rounded bg-white">
      <label class="form-label" for="doc_parte">CPF/CNPJ da parte</label>
      <input
        class="form-control"
        data-placeholder="CPF/CNPJ da parte"
        id="doc_parte"
        name="doc_parte"
        type="text"
        value=""
      />
    </div>
    <div class="col-md-10 mb-3 border border-secondary p-2 border-2 rounded bg-white">
      <label class="form-label" for="polo_parte">Classificação (Autor/Réu)</label>
      <select
        class="form-control select2-hidden-accessible"
        data-placeholder="Classificação (Autor/Réu)"
        id="polo_parte"
        name="polo_parte"
        :required="false"
        data-select2-id="polo_parte"
        tabindex="-1"
        aria-hidden="true"
      >
        <option value="" data-select2-id="2">Selecione</option>
        <option value="autor">Autor</option>
        <option value="reu">Réu</option></select
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
            aria-labelledby="select2-polo_parte-container"
            ><span
              class="select2-selection__rendered"
              id="select2-polo_parte-container"
              role="textbox"
              aria-readonly="true"
              ><span class="select2-selection__placeholder">Classificação (Autor/Réu)</span></span
            ><span class="select2-selection__arrow" role="presentation"
              ><b role="presentation"></b></span></span></span
        ><span class="dropdown-wrapper" aria-hidden="true"></span
      ></span>
    </div>
  </div>
</template>
