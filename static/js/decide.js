document.addEventListener('DOMContentLoaded', function () {
  const element1 = document.querySelector('.new-thread');
  const element2 = document.querySelector('.most-recent-thread');

  element1.addEventListener('click', function () {
    alert("clicked");
    sendData({ choice: 1 });
  });

  element2.addEventListener('click', function () {
    alert("clicked");
    sendData({ choice: 2 });
  });

  function sendData(route, data) {
    const url = "zmc_assistant_app"
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .catch(error => {
        alert(error);
        console.error('Error during fetch operation:', error);
      });
  }
});

