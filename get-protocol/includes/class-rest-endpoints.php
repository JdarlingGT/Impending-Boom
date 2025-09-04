<?php

namespace GetProtocol\Includes;

use WP_REST_Controller;
use WP_REST_Response;

class REST_Endpoints extends WP_REST_Controller {

    public function register_routes() {
        $namespace = 'get-protocol/v1';
        $path = '/data';

        \register_rest_route($namespace, $path, [
            'methods' => 'GET',
            'callback' => [$this, 'get_data'],
            'permission_callback' => [$this, 'permissions_check'],
        ]);
    }

    public function get_data($request) {
        if (!\current_user_can('gpd_view_analytics')) {
            return new WP_REST_Response(['message' => 'Unauthorized'], 401);
        }

        // Example data
        $data = [
            'events' => 10,
            'attendees' => 150,
        ];

        return new WP_REST_Response($data, 200);
    }

    public function permissions_check($request) {
        return \current_user_can('read');
    }
}