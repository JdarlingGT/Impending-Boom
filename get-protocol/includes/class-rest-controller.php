<?php

namespace GetProtocol\Includes;

use WP_REST_Controller;
use WP_REST_Response;

class REST_Controller extends WP_REST_Controller {

    public function register_routes() {
        $namespace = 'get-protocol/v1';
        $path = '/example';

        \register_rest_route($namespace, $path, [
            'methods' => 'GET',
            'callback' => [$this, 'handle_get_request'],
            'permission_callback' => [$this, 'get_permissions_check'],
        ]);
    }

    public function handle_get_request($request) {
        return new WP_REST_Response(['message' => 'Hello, GET Protocol!'], 200);
    }

    public function get_permissions_check($request) {
        return \current_user_can('read');
    }
}