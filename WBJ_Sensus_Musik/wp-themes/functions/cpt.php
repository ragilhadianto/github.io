<?php

/* -------------------------------------------------------------------------- */
/* Custom Post Type                                                           */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* Brands                                                                     */
/* -------------------------------------------------------------------------- */

add_action('init', 'c6_wp_post_brands');

function c6_wp_post_brands() {

  $labels = array(
    'name' => _x('Brands', 'post type general name', 'your-plugin-textdomain'),
    'singular_name' => _x('Brands', 'post type singular name', 'your-plugin-textdomain'),
    'menu_name' => _x('Brands', 'admin menu', 'your-plugin-textdomain'),
    'name_admin_bar' => _x('Brands', 'add new on admin bar', 'your-plugin-textdomain'),
    'add_new' => _x('Add New', 'Brands', 'your-plugin-textdomain'),
    'add_new_item' => __('Add New Brands', 'your-plugin-textdomain'),
    'new_item' => __('New Brands', 'your-plugin-textdomain'),
    'edit_item' => __('Edit Brands', 'your-plugin-textdomain'),
    'view_item' => __('View Brands', 'your-plugin-textdomain'),
    'all_items' => __('All Brands', 'your-plugin-textdomain'),
    'search_items' => __('Search Brands', 'your-plugin-textdomain'),
    'parent_item_colon' => __('Parent Brands:', 'your-plugin-textdomain'),
    'not_found' => __('No Brands found.', 'your-plugin-textdomain'),
    'not_found_in_trash' => __('No Brands found in Trash.', 'your-plugin-textdomain')
  );
  
  $args = array(
    'labels' => $labels,
    'description'  => __('Description.', 'your-plugin-textdomain'),
    'public' => true,
    'publicly_queryable' => true,
    'show_ui' => true,
    'show_in_menu' => true,
    'query_var' => true,
    'rewrite' => array('slug' => 'brands/detail'),
    'capability_type' => 'post',
    'has_archive' => true,
    'show_in_rest' => true,
    'hierarchical' => true,
    'menu_position' => 4,
    'taxonomies' => array('brands_category'),
    'supports' => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt')
  );

  register_post_type('brands', $args);

}

/* -------------------------------------------------------------------------- */
/* Brands Category                                                            */
/* -------------------------------------------------------------------------- */

function register_taxonomy_brands_category() {

  $brands_category_labels = array(
    'name' => _x( 'Brands Category', 'taxonomy general name' ),
    'singular_name' => _x( 'Brands Category', 'taxonomy singular name' ),
    'search_items' =>  __( 'Search Categories' ),
    'all_items' => __( 'All Categories' ),
    'parent_item' => __( 'Parent Category' ),
    'parent_item_colon' => __( 'Parent Category:' ),
    'edit_item' => __( 'Edit Category' ),
    'update_item' => __( 'Update Category' ),
    'add_new_item' => __( 'Add New Category' ),
    'new_item_name' => __( 'New Category Name' ),
    'menu_name' => __( 'Brands Categories' ),
  );

  register_taxonomy('brands_category', array('brands'), array(
    'hierarchical' => true,
    'labels' => $brands_category_labels,
    'show_ui' => true,
    'show_admin_column' => true,
    'query_var' => true,
    'rewrite' => array( 'slug' => 'brands' ),
    'show_in_rest' => true,
  ));
}

add_action('init', 'register_taxonomy_brands_category', 0);

/* -------------------------------------------------------------------------- */
/* News                                                                       */
/* -------------------------------------------------------------------------- */

add_action('init', 'c6_wp_post_news');

function c6_wp_post_news() {

  $labels = array(
    'name' => _x('News', 'post type general name', 'your-plugin-textdomain'),
    'singular_name' => _x('News', 'post type singular name', 'your-plugin-textdomain'),
    'menu_name' => _x('News', 'admin menu', 'your-plugin-textdomain'),
    'name_admin_bar' => _x('News', 'add new on admin bar', 'your-plugin-textdomain'),
    'add_new' => _x('Add New', 'News', 'your-plugin-textdomain'),
    'add_new_item' => __('Add New News', 'your-plugin-textdomain'),
    'new_item' => __('New News', 'your-plugin-textdomain'),
    'edit_item' => __('Edit News', 'your-plugin-textdomain'),
    'view_item' => __('View News', 'your-plugin-textdomain'),
    'all_items' => __('All News', 'your-plugin-textdomain'),
    'search_items' => __('Search News', 'your-plugin-textdomain'),
    'parent_item_colon' => __('Parent News:', 'your-plugin-textdomain'),
    'not_found' => __('No News found.', 'your-plugin-textdomain'),
    'not_found_in_trash' => __('No News found in Trash.', 'your-plugin-textdomain')
  );
  
  $args = array(
    'labels' => $labels,
    'description'  => __('Description.', 'your-plugin-textdomain'),
    'public' => true,
    'publicly_queryable' => true,
    'show_ui' => true,
    'show_in_menu' => true,
    'query_var' => true,
    'rewrite' => array('slug' => 'news/detail'),
    'capability_type' => 'post',
    'has_archive' => true,
    'show_in_rest' => true,
    'hierarchical' => true,
    'menu_position' => 5,
    'taxonomies' => array('news_category', 'news_tags'),
    'supports' => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt')
  );

  register_post_type('news', $args);

}

/* -------------------------------------------------------------------------- */
/* News Category                                                              */
/* -------------------------------------------------------------------------- */

function register_taxonomy_news_category() {

  $news_category_labels = array(
    'name' => _x( 'News Categories', 'taxonomy general name' ),
    'singular_name' => _x( 'News Categories', 'taxonomy singular name' ),
    'search_items' =>  __( 'Search News Categories' ),
    'all_items' => __( 'All News Categories' ),
    'parent_item' => __( 'Parent News Categories' ),
    'parent_item_colon' => __( 'Parent News Categories:' ),
    'edit_item' => __( 'Edit News Categories' ),
    'update_item' => __( 'Update News Categories' ),
    'add_new_item' => __( 'Add New News Categories' ),
    'new_item_name' => __( 'New News Categories Name' ),
    'menu_name' => __( 'News Categories' ),
  );

  register_taxonomy('news_category', array('news'), array(
    'hierarchical' => true,
    'labels' => $news_category_labels,
    'show_ui' => true,
    'show_admin_column' => true,
    'query_var' => true,
    'rewrite' => array( 'slug' => 'news' ),
    'show_in_rest' => true,
  ));
}

add_action('init', 'register_taxonomy_news_category', 0);

/* -------------------------------------------------------------------------- */
/* News Tags                                                                  */
/* -------------------------------------------------------------------------- */

function register_taxonomy_news_tags() {
  $labels = array(
    'name' => _x( 'News Tags', 'taxonomy general name' ),
    'singular_name' => _x( 'News Tag', 'taxonomy singular name' ),
    'search_items' =>  __( 'Search News Tags' ),
    'popular_items' => __( 'Popular News Tags' ),
    'all_items' => __( 'All News Tags' ),
    'parent_item' => null,
    'parent_item_colon' => null,
    'edit_item' => __( 'Edit Tag' ), 
    'update_item' => __( 'Update Tag' ),
    'add_new_item' => __( 'Add New Tag' ),
    'new_item_name' => __( 'New Tag Name' ),
    'separate_items_with_commas' => __( 'Separate News tags with commas' ),
    'add_or_remove_items' => __( 'Add or remove News tags' ),
    'choose_from_most_used' => __( 'Choose from the most used News tags' ),
    'menu_name' => __( 'News Tags' ),
  ); 

  register_taxonomy('news_tags', 'news', array(
    'hierarchical' => true,
    'labels' => $labels,
    'show_ui' => true,
    'update_count_callback' => '_update_post_term_count',
    'show_admin_column' => true,
    'query_var' => true,
    'show_in_rest' => true,
    'rewrite' => array( 'slug' => 'news/tag' ),
    'show_in_quick_edit' => true
  ));
}

add_action( 'init', 'register_taxonomy_news_tags', 0 );

/* -------------------------------------------------------------------------- */
/* Event Promotion                                                            */
/* -------------------------------------------------------------------------- */

add_action('init', 'c6_wp_post_event_promotion');

function c6_wp_post_event_promotion() {

  $labels = array(
    'name' => _x('Event Promotion', 'post type general name', 'your-plugin-textdomain'),
    'singular_name' => _x('Event Promotion', 'post type singular name', 'your-plugin-textdomain'),
    'menu_name' => _x('Event Promotion', 'admin menu', 'your-plugin-textdomain'),
    'name_admin_bar' => _x('Event Promotion', 'add new on admin bar', 'your-plugin-textdomain'),
    'add_new' => _x('Add New', 'Event Promotion', 'your-plugin-textdomain'),
    'add_new_item' => __('Add New Event Promotion', 'your-plugin-textdomain'),
    'new_item' => __('New Event Promotion', 'your-plugin-textdomain'),
    'edit_item' => __('Edit Event Promotion', 'your-plugin-textdomain'),
    'view_item' => __('View Event Promotion', 'your-plugin-textdomain'),
    'all_items' => __('All Event Promotion', 'your-plugin-textdomain'),
    'search_items' => __('Search Event Promotion', 'your-plugin-textdomain'),
    'parent_item_colon' => __('Parent Event Promotion:', 'your-plugin-textdomain'),
    'not_found' => __('No Event Promotion found.', 'your-plugin-textdomain'),
    'not_found_in_trash' => __('No Event Promotion found in Trash.', 'your-plugin-textdomain')
  );
  
  $args = array(
    'labels' => $labels,
    'description'  => __('Description.', 'your-plugin-textdomain'),
    'public' => true,
    'publicly_queryable' => true,
    'show_ui' => true,
    'show_in_menu' => true,
    'query_var' => true,
    'rewrite' => array('slug' => 'event-and-promotion/detail'),
    'capability_type' => 'post',
    'has_archive' => true,
    'show_in_rest' => true,
    'hierarchical' => true,
    'menu_position' => 6,
    'taxonomies' => array(),
    'supports' => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt')
  );

  register_post_type('event_promotion', $args);

}

/* -------------------------------------------------------------------------- */
/* Event Promotion Category                                                   */
/* -------------------------------------------------------------------------- */

// function register_taxonomy_event_promotion_category() {

//   $event_promotion_category_labels = array(
//     'name' => _x( 'Event Promotion Categories', 'taxonomy general name' ),
//     'singular_name' => _x( 'Event Promotion Categories', 'taxonomy singular name' ),
//     'search_items' =>  __( 'Search Event Promotion Categories' ),
//     'all_items' => __( 'All Event Promotion Categories' ),
//     'parent_item' => __( 'Parent Event Promotion Categories' ),
//     'parent_item_colon' => __( 'Parent Event Promotion Categories:' ),
//     'edit_item' => __( 'Edit Event Promotion Categories' ),
//     'update_item' => __( 'Update Event Promotion Categories' ),
//     'add_new_item' => __( 'Add New Event Promotion Categories' ),
//     'new_item_name' => __( 'New Event Promotion Categories Name' ),
//     'menu_name' => __( 'Event Promotion Categories' ),
//   );

//   register_taxonomy('event_promotion_category', array('event_promotion'), array(
//     'hierarchical' => true,
//     'labels' => $event_promotion_category_labels,
//     'show_ui' => true,
//     'show_admin_column' => true,
//     'query_var' => true,
//     'rewrite' => array( 'slug' => 'event-and-promotion' ),
//     'show_in_rest' => true,
//   ));
// }

// add_action('init', 'register_taxonomy_event_promotion_category', 0);

/* -------------------------------------------------------------------------- */
/* Event Promotion Tags                                                       */
/* -------------------------------------------------------------------------- */

// function register_taxonomy_event_promotion_tags() {
//   $labels = array(
//     'name' => _x( 'Event Promotion Tags', 'taxonomy general name' ),
//     'singular_name' => _x( 'Event Promotion Tag', 'taxonomy singular name' ),
//     'search_items' =>  __( 'Search Event Promotion Tags' ),
//     'popular_items' => __( 'Popular Event Promotion Tags' ),
//     'all_items' => __( 'All Event Promotion Tags' ),
//     'parent_item' => null,
//     'parent_item_colon' => null,
//     'edit_item' => __( 'Edit Tag' ), 
//     'update_item' => __( 'Update Tag' ),
//     'add_new_item' => __( 'Add New Tag' ),
//     'new_item_name' => __( 'New Tag Name' ),
//     'separate_items_with_commas' => __( 'Separate Event Promotion tags with commas' ),
//     'add_or_remove_items' => __( 'Add or remove Event Promotion tags' ),
//     'choose_from_most_used' => __( 'Choose from the most used Event Promotion tags' ),
//     'menu_name' => __( 'Event Promotion Tags' ),
//   ); 

//   register_taxonomy('event_promotion_tags', 'event_promotion', array(
//     'hierarchical' => true,
//     'labels' => $labels,
//     'show_ui' => true,
//     'update_count_callback' => '_update_post_term_count',
//     'show_admin_column' => true,
//     'query_var' => true,
//     'show_in_rest' => true,
//     'rewrite' => array( 'slug' => 'event-promotion/tag' ),
//     'show_in_quick_edit' => true
//   ));
// }

// add_action( 'init', 'register_taxonomy_event_promotion_tags', 0 );