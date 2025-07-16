<template>
  <div class="card fixed-height-card border-0" style="height: 600px">
    <div class="card-header">
      <div class="row justify-content-between align-items-center">
        <div class="col-md-5">
          <span class="fw-semibold">
            <svg
              class="svg-inline--fa fa-chart-pie me-1"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="chart-pie"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M304 240l0-223.4c0-9 7-16.6 16-16.6C443.7 0 544 100.3 544 224c0 9-7.6 16-16.6 16L304 240zM32 272C32 150.7 122.1 50.3 239 34.3c9.2-1.3 17 6.1 17 15.4L256 288 412.5 444.5c6.7 6.7 6.2 17.7-1.5 23.1C371.8 495.6 323.8 512 272 512C139.5 512 32 404.6 32 272zm526.4 16c9.3 0 16.6 7.8 15.4 17c-7.7 55.9-34.6 105.6-73.9 142.3c-6 5.6-15.4 5.2-21.2-.7L320 288l238.4 0z"
              ></path></svg
            ><!-- <i class="fas fa-chart-pie me-1"></i> Font Awesome fontawesome.com -->
          </span>
          <span class="fw-semibold">Logs Execução L4S9P0</span>
        </div>
      </div>
    </div>
    <div class="card-body bg-black overflow-auto">
      <div class="container-fluid">
        <div class="overflow-y-scroll">
          <ul id="messages" class="list-group list-group-flush">
            <li id="id_b4ye8hk" style="font-weight: bold; color: rgb(211, 227, 245)">
              [(L4S9P0, log, 0, 10:00:46)&gt; Inicializando robô]
            </li>
            <li id="id_sz46f82" style="font-weight: bold; color: rgb(211, 227, 245)">
              [(L4S9P0, log, 0, 10:00:48)&gt; Inicializando WebDriver]
            </li>
            <li id="id_8j64qx0" style="font-weight: bold; color: rgb(211, 227, 245)">
              [(L4S9P0, log, 0, 10:00:49)&gt; WebDriver inicializado]
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="card-footer small text-muted fw-semibold">
      <span id="status">Status: Iniciado | Total: 177</span>
    </div>
  </div>
</template>
