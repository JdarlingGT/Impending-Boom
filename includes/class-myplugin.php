<?php
class MyPlugin {
    public function __construct() {
        // Constructor code here
    }

    public function run() {
        // Hook into WordPress
        add_action('init', [$this, 'init']);
    }

    public function init() {
        // Initialization code here
    }
}