<?php

namespace GetProtocol\Includes;

class Custom_Post_Types {

    public function register_post_types() {
        $this->register_training_event();
        $this->register_venue();
        $this->register_task();
        $this->register_research();
    }

    private function register_training_event() {
        \register_post_type('gpd_training_event', [
            'labels' => [
                'name' => \__('Training Events', 'get-protocol'),
                'singular_name' => \__('Training Event', 'get-protocol'),
            ],
            'public' => true,
            'has_archive' => true,
            'supports' => ['title', 'editor', 'custom-fields'],
            'show_in_rest' => true,
        ]);
    }

    private function register_venue() {
        \register_post_type('gpd_venue', [
            'labels' => [
                'name' => \__('Venues', 'get-protocol'),
                'singular_name' => \__('Venue', 'get-protocol'),
            ],
            'public' => true,
            'has_archive' => true,
            'supports' => ['title', 'editor', 'custom-fields'],
            'show_in_rest' => true,
        ]);
    }

    private function register_task() {
        \register_post_type('gpd_task', [
            'labels' => [
                'name' => \__('Tasks', 'get-protocol'),
                'singular_name' => \__('Task', 'get-protocol'),
            ],
            'public' => true,
            'has_archive' => true,
            'supports' => ['title', 'editor', 'custom-fields'],
            'show_in_rest' => true,
        ]);
    }

    private function register_research() {
        \register_post_type('gpd_research', [
            'labels' => [
                'name' => \__('Research', 'get-protocol'),
                'singular_name' => \__('Research', 'get-protocol'),
            ],
            'public' => true,
            'has_archive' => true,
            'supports' => ['title', 'editor', 'custom-fields'],
            'show_in_rest' => true,
        ]);
    }
}