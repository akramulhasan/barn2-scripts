<?php

/**
 *
 * Related: WooCommerce Quick View Pro ( WQV )
 *
 * Usage: Show ACF field data inside the product modal
 * 
 * Ref: https://barn2.com/kb/quick-view-hooks-and-filters/#wc_quick_view_pro_quick_view_product_details
 *
 * How to use: Here you can learn how to add a custom script to your site
 * https://barn2.com/kb/using-code-snippets/
 */
add_action('wc_quick_view_pro_quick_view_product_details', 'akram_quick_view_show_acf_custom_data', 20);
function akram_quick_view_show_acf_custom_data($product)
{
    if (! function_exists('get_field')) {
        return;
    }

    $product_id = $product->get_id();
    $custom_data = get_field('custom_data', $product_id); // 'custom_data' is the name of your ACF field

    if ($custom_data) {
        echo '<div class="quick-view-custom-data" style="margin-top: 10px;">';
        // sanitize or escape as needed
        echo wp_kses_post($custom_data);
        echo '</div>';
    }
}
