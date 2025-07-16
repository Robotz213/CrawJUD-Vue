<template>
  <div class="card mb-4 fixed-height-card" style="height: 600px">
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
          <span class="fw-semibold"> Gráfico da execução </span>
        </div>
      </div>
    </div>
    <div class="card-body">
      <div class="chartjs-size-monitor">
        <div class="chartjs-size-monitor-expand"><div class=""></div></div>
        <div class="chartjs-size-monitor-shrink"><div class=""></div></div>
      </div>
      <canvas
        id="LogsBotChart"
        width="761"
        height="380"
        style="display: block; width: 761px; height: 380px"
        class="chartjs-render-monitor"
      ></canvas>
    </div>
    <div class="card-footer small text-muted fw-semibold">
      <span id="remaining">Restantes: 177</span> | <span id="success">Sucessos: 0</span> |
      <span id="errors">Erros: 0</span>
    </div>
  </div>
</template>
