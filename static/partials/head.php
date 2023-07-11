<?php

$path = '/static/dist';

if (file_exists(__DIR__ . '/../dist/hot')) {
  $path = 'http://localhost:8080';
}
?>

<link rel="stylesheet" href="<?= $path; ?>/style.css" />
<script src="<?= $path; ?>/main.js" defer></script>