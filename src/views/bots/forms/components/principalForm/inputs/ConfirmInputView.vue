<template>
  <div class="col-md-10 mb-3 border border-secondary p-2 border-2 rounded bg-body-tertiary">
    <div class="form-check">
      <input
        class="form-check-input"
        id="confirm_fields"
        name="confirm_fields"
        :required="false"
        type="checkbox"
        value="y"
      />
      <label class="form-check-label" for="confirm_fields">
        Confirmo que os dados enviados estão corretos.
      </label>
    </div>
  </div>
</template>
