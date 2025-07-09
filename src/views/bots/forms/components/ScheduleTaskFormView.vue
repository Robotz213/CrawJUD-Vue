<template>
  <div>
    <div class="col-md-12 mb-3 border border-secondary p-2 border-2 rounded bg-body-tertiary">
      <label class="form-label" for="periodic_task_group-0-task_name">Nome da tarefa</label>
      <input
        class="form-control"
        data-placeholder=""
        id="periodic_task_group-0-task_name"
        name="periodic_task_group-0-task_name"
        type="text"
        value=""
      />
    </div>
    <div class="col-md-12 mb-3 border border-secondary p-2 border-2 rounded bg-body-tertiary">
      <label class="form-label" for="periodic_task_group-0-hour_minute">Hora de execução</label>
      <input
        class="form-control"
        data-placeholder="Hora de execução"
        id="periodic_task_group-0-hour_minute"
        name="periodic_task_group-0-hour_minute"
        type="time"
        value="09:15"
      />
    </div>
    <div class="col-md-12 mb-3 border border-secondary p-2 border-2 rounded bg-body-tertiary">
      <span class="tex"
        ><label class="form-label" for="periodic_task_group-0-days">Dias de execução</label></span
      >
      <hr />
      <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
        <input
          type="checkbox"
          class="btn-check"
          id="periodic_task_group-0-days-0"
          name="periodic_task_group-0-days"
          value="sun"
          autocomplete="off"
        />
        <label class="btn btn-outline-primary" for="periodic_task_group-0-days-0">Domingo</label>

        <input
          type="checkbox"
          class="btn-check"
          id="periodic_task_group-0-days-1"
          name="periodic_task_group-0-days"
          value="mon"
          autocomplete="off"
        />
        <label class="btn btn-outline-primary" for="periodic_task_group-0-days-1">Segunda</label>

        <input
          type="checkbox"
          class="btn-check"
          id="periodic_task_group-0-days-2"
          name="periodic_task_group-0-days"
          value="tue"
          autocomplete="off"
        />
        <label class="btn btn-outline-primary" for="periodic_task_group-0-days-2">Terça</label>

        <input
          type="checkbox"
          class="btn-check"
          id="periodic_task_group-0-days-3"
          name="periodic_task_group-0-days"
          value="wed"
          autocomplete="off"
        />
        <label class="btn btn-outline-primary" for="periodic_task_group-0-days-3">Quarta</label>

        <input
          type="checkbox"
          class="btn-check"
          id="periodic_task_group-0-days-4"
          name="periodic_task_group-0-days"
          value="thu"
          autocomplete="off"
        />
        <label class="btn btn-outline-primary" for="periodic_task_group-0-days-4">Quinta</label>

        <input
          type="checkbox"
          class="btn-check"
          id="periodic_task_group-0-days-5"
          name="periodic_task_group-0-days"
          value="fri"
          autocomplete="off"
        />
        <label class="btn btn-outline-primary" for="periodic_task_group-0-days-5">Sexta</label>

        <input
          type="checkbox"
          class="btn-check"
          id="periodic_task_group-0-days-6"
          name="periodic_task_group-0-days"
          value="sat"
          autocomplete="off"
        />
        <label class="btn btn-outline-primary" for="periodic_task_group-0-days-6">Sábado</label>
      </div>
    </div>
    <div class="col-md-12 mb-3 border border-secondary p-2 border-2 rounded bg-body-tertiary">
      <label class="form-label" for="periodic_task_group-0-email_notify">
        E-mail para notificação
      </label>
      <input
        class="form-control"
        data-placeholder="E-mail para notificação"
        id="periodic_task_group-0-email_notify"
        name="periodic_task_group-0-email_notify"
        type="email"
        value=""
      />
    </div>
  </div>
</template>
