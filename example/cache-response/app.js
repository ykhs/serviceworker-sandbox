const name = '[Browser]';

if ('serviceWorker' in navigator) {
  console.log('%s Service Workerに対応しています。', name);

  const options = {
    scope: './'
  };

  navigator.serviceWorker.register('./service-worker.js', options)
    .then(registration => {
      console.log('%s Service Workerが登録されました。', name);
      return navigator.serviceWorker.ready;
    })
    .then(registration => {
      const serviceWorker = registration.active;
      console.log('%s Service Workerは [%s] 状態です。', name, serviceWorker.state);
      serviceWorker.addEventListener('statechange', (event) => {
        console.log('%s Service Workerが [%s] 状態になりました。', name, event.target.state);
      });
    })
    .catch(error => {
      console.error('%s Service Workerの登録に失敗しました。', name, error);
    });
} else {
  console.warn('%s Service Workerに対応していません。', name);
}
