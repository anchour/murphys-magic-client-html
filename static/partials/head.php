<?php

$path = '/static/dist';

if (file_exists(__DIR__ . '/../dist/hot')) {
  $path = 'http://localhost:8080';
}
?>

<link rel="stylesheet" href="<?= $path; ?>/style.css" />
<script src="<?= $path; ?>/vendor.js" defer></script>
<script src="<?= $path; ?>/main.js" defer></script>

<?php if (isset($template) && $template === 'product') : ?>
  <script src="<?= $path; ?>/product.js" defer></script>
<?php endif; ?>