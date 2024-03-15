<?php /* Template Name: Page */ ?>

<?php
get_header();
?>

<!--main-site-->
<main class="main-site pt-32 lg:pt-52">
    <div class="container">
        <h3 class="mb-10 text-2xl lg:text-3xl"><?= get_the_title(); ?></h3>

        <div class="mb-10">
            <?= the_post_thumbnail(); ?>
        </div>

        <div class="content text-base lg:text-lg font-normal">
            <?= get_the_content(); ?>
        </div>
    </div>

</main>
<!--/.main-site-->

<?php
get_footer();
?>