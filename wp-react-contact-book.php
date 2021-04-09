<?php
/*
Plugin Name: WordPress React Contact Book
Plugin URI: http://wordpress.org/plugins/hello-dolly/
Description: This is WordPress contact book plugin built on react
Author: Ahsan Habib Shaheen
Version: 1.0
Text Domain: wprcb
Domain Path: /languages/
*/

use WPRCB\Activator;
use WPRCB\Admin\Menu;
use WPRCB\Api\Contact;

defined('ABSPATH') || exit;

require_once __DIR__ . '/vendor/autoload.php';

final class WP_React_Contact_Book {
    private function __construct()
    {
        $this->defineConstants();

        add_action( 'plugins_loaded', [$this,'pluginLoaded'] );
        add_action( 'init', [$this,'initPlugin'] );
        add_action('rest_api_init',[$this,'registerRoute']);
        register_activation_hook(__FILE__,[$this,'activePlugin']);
    }

    public function defineConstants() {
        
    }

    public static function init() {
        static $instance = false;

        if ( ! $instance ) {
            $instance = new self();
        }

        return $instance;
    }

    public function pluginLoaded() {
        new Menu();
    }

    public function registerRoute() {
        (new Contact)->register_routes();
    }
    
    public function initPlugin() {
        load_plugin_textdomain('wprcb', false, dirname( plugin_basename( __FILE__ ) ) . '/languages');
    }

    public function activePlugin() {
        $activator = new Activator();
        $activator->activate();
    }
}

function wp_react_contact_book() {
    WP_React_Contact_Book::init();
}

wp_react_contact_book();



