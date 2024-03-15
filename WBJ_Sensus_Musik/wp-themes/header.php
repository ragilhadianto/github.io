<!DOCTYPE html>
<html lang="en" class="sr">

<head>
  <meta charset="utf-8" />
  <meta http-equiv="refresh" content="900" />
  <meta http-equiv="X-UA-Compatible" content="IE=9" />
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no,minimal-ui" />

  <?php wp_head() ?>

  <!-- primary information-->
  <?php if (is_home()) : ?>
    <title><?= bloginfo('name') ?> | Blank </title>
  <?php elseif (is_404()) : ?>
    <title>Page not found - <?= bloginfo('name') ?> | Blank</title>
  <?php else : ?>
    <title><?php wp_title('', true, 'right'); ?> | Blank</title>
  <?php endif; ?>
  <meta name="description" content="<?= bloginfo('description') ?>" />
  <meta name="keywords" content="<?= bloginfo('name') ?>" />

  <!-- ie fix for html5 tags-->
  <!--[if lt IE 9]><script src='http://html5shiv.googlecode.com/svn/trunk/html5.js'></script><![endif]-->

  <!-- author-->
  <meta name="author" content="<?= bloginfo('name') ?>" />
  <meta name="copyright" content="<?= date('Y') ?>" />

  <!-- user agent crawler-->
  <meta name="robots" content="index, follow" />
  <meta name="googlebot" content="index, follow" />
  <meta name="googlebot-news" content="index, follow" />
  <meta name="msnbot" content="index, follow" />
  <meta name="webcrawlers" content="index, follow" />
  <meta name="spiders" content="index, follow" />

  <!-- fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;700&display=swap" rel="stylesheet">

  <!-- ============ icon ============-->
  <!-- web favicon-->
  <link rel="shortcut icon" href="<?= get_template_directory_uri() ?>/assets/img/homescreen/favicon.ico" />

  <!-- android add to home screen-->
  <link rel="apple-touch-icon" sizes="57x57" href="<?= get_template_directory_uri() ?>/assets/img/favicon/apple-icon-57x57.png">
  <link rel="apple-touch-icon" sizes="60x60" href="<?= get_template_directory_uri() ?>/assets/img/favicon/apple-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="72x72" href="<?= get_template_directory_uri() ?>/assets/img/favicon/apple-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="76x76" href="<?= get_template_directory_uri() ?>/assets/img/favicon/apple-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="114x114" href="<?= get_template_directory_uri() ?>/assets/img/favicon/apple-icon-114x114.png">
  <link rel="apple-touch-icon" sizes="120x120" href="<?= get_template_directory_uri() ?>/assets/img/favicon/apple-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="144x144" href="<?= get_template_directory_uri() ?>/assets/img/favicon/apple-icon-144x144.png">
  <link rel="apple-touch-icon" sizes="152x152" href="<?= get_template_directory_uri() ?>/assets/img/favicon/apple-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="<?= get_template_directory_uri() ?>/assets/img/favicon/apple-icon-180x180.png">
  <link rel="icon" type="image/png" sizes="192x192" href="<?= get_template_directory_uri() ?>/assets/img/favicon/android-icon-192x192.png">
  <link rel="icon" type="image/png" sizes="32x32" href="<?= get_template_directory_uri() ?>/assets/img/favicon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="96x96" href="<?= get_template_directory_uri() ?>/assets/img/favicon/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="16x16" href="<?= get_template_directory_uri() ?>/assets/img/favicon/favicon-16x16.png">
  <link rel="manifest" href="<?= get_template_directory_uri() ?>/assets/img/favicon//manifest.json">
  <meta name="msapplication-TileColor" content="#ffffff">
  <meta name="msapplication-TileImage" content="<?= get_template_directory_uri() ?>/assets/img/favicon//ms-icon-144x144.png">
  <meta name="theme-color" content="#ffffff">

  <!-- style-->
  <link rel="stylesheet" href="<?= get_template_directory_uri() ?>/assets/css/styles.css?7387485" />

  <!-- Google Tag Manager -->
  <script>
    (function(w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src =
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-???');
  </script>
  <!-- End Google Tag Manager -->

</head>

<body <?php body_class('hold-transition') ?>>
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NGHQFMS" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->

  <div class="header fixed left-0 top-0 w-full backdrop-blur-sm bg-white/80 py-5 lg:py-10 z-50 transition-all">
    <div class="container">
      <div class="flex justify-between items-center">

        <!-- logo -->
        <div class="logo">
          <a href="<?php echo get_site_url(); ?>">
            <img src="<?= get_template_directory_uri() ?>/assets/img/logo.svg" alt="Blank">
          </a>
        </div>

        <!-- menu -->
        <div>
          <ul>
            <li>
              <a href="<?php echo get_site_url(); ?>/#section-contact" class="text-base lg:text-lg menu-contact">CONTACT US</a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </div>