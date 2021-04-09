<?php
namespace WPRCB\Admin;

class Menu {
    public function __construct() {
        add_action('admin_menu',[$this,'adminMenu']);
        add_action('admin_enqueue_scripts',[$this,'adminAssets']);
    }
    public function adminMenu() {
        add_menu_page( 
            'WPRCB', 
            'WPRCB',
            'manage_options', 
            'wprcb', 
            [$this,'adminMenuHtml']
        );
    }

    public function adminMenuHtml() {
        ?>
        <div class="wrap">
            <div id="root"></div>
        </div>
    <?php }

    public function adminAssets($hook) {
        if( $hook === 'toplevel_page_wprcb' ) {
        }
    }
}