<?php
/*
Plugin Name: MyPlugin
Plugin URI: https://example.com
Description: A custom WordPress plugin.
Version: 1.0
Author: Your Name
Author URI: https://example.com
License: GPL2
*/

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

// Define plugin constants
define('MYPLUGIN_VERSION', '1.0');
define('MYPLUGIN_PLUGIN_DIR', plugin_dir_path(__FILE__));

define('MYPLUGIN_PLUGIN_URL', plugin_dir_url(__FILE__));

// Include core files
require_once MYPLUGIN_PLUGIN_DIR . 'includes/class-myplugin.php';

// Initialize the plugin
function myplugin_init() {
    $plugin = new MyPlugin();
    $plugin->run();
}
add_action('plugins_loaded', 'myplugin_init');