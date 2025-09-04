<?php

namespace GetProtocol\Includes;

class Admin_UI {

    public function init() {
        \add_action('admin_menu', [$this, 'add_admin_menu']);
    }

    public function add_admin_menu() {
        \add_menu_page(
            \__('GET Protocol', 'get-protocol'),
            \__('GET Protocol', 'get-protocol'),
            'manage_options',
            'get-protocol',
            [$this, 'render_admin_page'],
            'dashicons-admin-generic',
            6
        );
    }

    public function render_admin_page() {
        echo '<div id="get-protocol-admin-root"></div>';
        if (function_exists('plugins_url')) {
            echo '<script src="' . \plugins_url('build/admin-ui.js', __FILE__) . '"></script>';
        }
    }
}