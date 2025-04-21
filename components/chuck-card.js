Vue.component('chuck-card', {
    props: ['icon_url', 'value'],
    template: `
      <div class="col-12 col-sm-6 col-md-4 mb-4">
        <div class="card h-100 shadow-sm">
          <img :src="icon_url" class="card-img-top" alt="Chuck Norris">
          <div class="card-body">
            <p class="card-text">{{ value }}</p>
          </div>
        </div>
      </div>
    `
  });
  