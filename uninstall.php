<?php
// Exit if accessed directly
if (!defined('WP_UNINSTALL_PLUGIN')) {
    exit;
}

// Cleanup options or custom database tables
// delete_option('myplugin_option_name');