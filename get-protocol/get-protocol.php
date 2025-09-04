<?php
/**
 * Plugin Name: GET Protocol
 * Description: A WordPress plugin for GET Protocol, integrating training & events, MCP bridge, and publishing/social syndication.
 * Version: 1.0.0
 * Author: Your Name
 * License: GPL-2.0-or-later
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

// Include WordPress functions
if (!function_exists('register_activation_hook')) {
    require_once ABSPATH . 'wp-admin/includes/plugin.php';
}

// Activation hook
function get_protocol_activate() {
    // Activation logic here
}
register_activation_hook(__FILE__, 'get_protocol_activate');

// Deactivation hook
function get_protocol_deactivate() {
    // Deactivation logic here
}
register_deactivation_hook(__FILE__, 'get_protocol_deactivate');

// Uninstall hook
function get_protocol_uninstall() {
    // Uninstall logic here
}
register_uninstall_hook(__FILE__, 'get_protocol_uninstall');