<!DOCTYPE html>
<html lang="en" data-bs-theme="light">
<head>
  <meta charset="UTF-8">
  <title>Dark/Light Mode Toggle</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    body {
      min-height: 100vh;
      transition: background 0.2s, color 0.2s;
    }
    .toggle-btn {
      position: fixed;
      top: 32px;
      right: 32px;
      z-index: 1050;
    }
  </style>
</head>
<body class="bg-white">
  <div class="container py-5">
    <h2 class="text-center mb-5">Dark/White Screen Toggle Example</h2>
    <p class="lead text-center">
      Click the button at the top-right corner to switch between dark and light screen modes.
    </p>
  </div>
  <button id="themeSwitch" class="btn btn-outline-dark toggle-btn">Toggle Dark/Light</button>
  <script>
    const html = document.documentElement;
    const switchBtn = document.getElementById('themeSwitch');
    switchBtn.addEventListener('click', function() {
      if (html.getAttribute('data-bs-theme') === 'dark') {
        html.setAttribute('data-bs-theme', 'light');
        document.body.classList.replace('bg-dark', 'bg-white');
      } else {
        html.setAttribute('data-bs-theme', 'dark');
        document.body.classList.replace('bg-white', 'bg-dark');
      }
    });
  </script>
</body>
</html>
