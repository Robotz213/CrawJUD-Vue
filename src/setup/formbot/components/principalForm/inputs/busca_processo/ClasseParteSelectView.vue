<template>
  <div class="col-md-10 mb-3 border border-secondary p-2 border-2 rounded bg-body-tertiary">
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
      <option value="reu">Réu</option>
    </select>
  </div>
</template>
