<?php

namespace GetProtocol\Includes;

class Roles_And_Capabilities {

    public function add_roles() {
        \add_role('training_manager', \__('Training Manager', 'get-protocol'), [
            'read' => true,
            'gpd_manage_events' => true,
            'gpd_view_analytics' => true,
            'gpd_bulk_enroll' => true,
            'gpd_waitlist_promote' => true,
            'gpd_issue_cert' => true,
            'gpd_roll_back' => true,
        ]);

        \add_role('training_coordinator', \__('Training Coordinator', 'get-protocol'), [
            'read' => true,
            'gpd_manage_events' => true,
            'gpd_bulk_enroll' => true,
            'gpd_waitlist_promote' => true,
        ]);

        \add_role('instructor', \__('Instructor', 'get-protocol'), [
            'read' => true,
            'gpd_issue_cert' => true,
        ]);

        \add_role('mcp_agent', \__('MCP Agent', 'get-protocol'), [
            'read' => true,
            'gpd_view_analytics' => true,
        ]);
    }

    public function remove_roles() {
        \remove_role('training_manager');
        \remove_role('training_coordinator');
        \remove_role('instructor');
        \remove_role('mcp_agent');
    }
}