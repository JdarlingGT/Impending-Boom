/**
 * WordPress dependencies
 */
import {
        Card,
        CardHeader,
        CardBody,
        CardFooter,
        ToggleControl,
        Spinner,
        Button,
        Icon,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { createInterpolateElement } from '@wordpress/element';
import { useEffect, useMemo, useCallback } from '@wordpress/element';
import { check, warning } from '@wordpress/icons';

/**
 * Settings Tab Component
 */
const SettingsTab = ( { settings, onToggleChange, isSaving, strings } ) => {
        // Memoize feature API availability check for performance
        const isFeatureApiAvailable = useMemo(() => {
                return window.wordpressMcpSettings?.featureApiAvailable === true ||
                       window.wordpressMcpSettings?.featureApiAvailable === '1';
        }, []);

        // Memoize computed values to prevent unnecessary rerenders
        const computedValues = useMemo(() => ({
                isFeatureToggleDisabled: !settings.enabled || !isFeatureApiAvailable,
                hasAnyToolsEnabled: settings.enable_create_tools || 
                                   settings.enable_update_tools || 
                                   settings.enable_delete_tools
        }), [settings.enabled, isFeatureApiAvailable, settings.enable_create_tools, 
             settings.enable_update_tools, settings.enable_delete_tools]);

        // Optimize toggle handlers with useCallback
        const handleToggleChange = useCallback((settingKey) => {
                // Add confirmation for dangerous settings
                if (settingKey === 'enable_delete_tools' && !settings[settingKey]) {
                        const confirmed = window.confirm(
                                __('Are you sure you want to enable delete tools? This will allow AI systems to permanently delete content from your site.', 'wordpress-mcp')
                        );
                        if (!confirmed) return;
                }
                onToggleChange(settingKey);
        }, [onToggleChange, settings]);

        // Memoize feature API help text
        const featureApiHelpText = useMemo(() => {
                return isFeatureApiAvailable
                        ? strings.enableFeaturesAdapterDescription ||
                          __('Enable or disable the WordPress Features Adapter. This option only works when MCP is enabled.', 'wordpress-mcp')
                        : createInterpolateElement(
                                __('WordPress Feature API is not available. Please <a>install</a> and activate the WordPress Feature API plugin.', 'wordpress-mcp'),
                                {
                                        a: (
                                                <a
                                                        href="https://github.com/Automattic/wp-feature-api"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                />
                                        ),
                                }
                          );
        }, [isFeatureApiAvailable, strings.enableFeaturesAdapterDescription]);

        return (
                <Card>
                        <CardHeader>
                                <h2>{ __( 'General Settings', 'wordpress-mcp' ) }</h2>
                                {/* Status indicator */}
                                <div className="mcp-status-indicator">
                                        <Icon 
                                                icon={settings.enabled ? check : warning} 
                                                size={16}
                                                style={{ color: settings.enabled ? '#00a32a' : '#dba617' }}
                                        />
                                        <span style={{ color: settings.enabled ? '#00a32a' : '#dba617' }}>
                                                {settings.enabled ? 
                                                        __('MCP Active', 'wordpress-mcp') : 
                                                        __('MCP Inactive', 'wordpress-mcp')
                                                }
                                        </span>
                                        {computedValues.hasAnyToolsEnabled && (
                                                <span className="tools-count" style={{ marginLeft: '8px', fontSize: '12px', color: '#666' }}>
                                                        {__('Tools enabled', 'wordpress-mcp')}
                                                </span>
                                        )}
                                </div>
                        </CardHeader>
                        <CardBody>
                                <div className="setting-row">
                                        <ToggleControl
                                                label={
                                                        strings.enableMcp ||
                                                        __( 'Enable MCP functionality', 'wordpress-mcp' )
                                                }
                                                help={
                                                        strings.enableMcpDescription ||
                                                        __(
                                                                'Toggle to enable or disable the MCP plugin functionality.',
                                                                'wordpress-mcp'
                                                        )
                                                }
                                                checked={ settings.enabled }
                                                onChange={ () => handleToggleChange( 'enabled' ) }
                                        />
                                </div>

                                <div className="setting-row">
                                        <ToggleControl
                                                label={
                                                        strings.enableFeaturesAdapter ||
                                                        __(
                                                                'Enable WordPress Features Adapter',
                                                                'wordpress-mcp'
                                                        )
                                                }
                                                help={ featureApiHelpText }
                                                checked={
                                                        isFeatureApiAvailable
                                                                ? settings.features_adapter_enabled
                                                                : false
                                                }
                                                onChange={ () => {
                                                        if ( isFeatureApiAvailable && settings.enabled ) {
                                                                handleToggleChange( 'features_adapter_enabled' );
                                                        }
                                                } }
                                                disabled={ computedValues.isFeatureToggleDisabled }
                                        />
                                </div>

                                <div className="setting-row">
                                        <ToggleControl
                                                label={
                                                        strings.enableCreateTools ||
                                                        __( 'Enable Create Tools', 'wordpress-mcp' )
                                                }
                                                help={
                                                        strings.enableCreateToolsDescription ||
                                                        __(
                                                                'Allow create operations via tools.',
                                                                'wordpress-mcp'
                                                        )
                                                }
                                                checked={ settings.enable_create_tools }
                                                onChange={ () =>
                                                        handleToggleChange( 'enable_create_tools' )
                                                }
                                                disabled={ ! settings.enabled }
                                        />
                                </div>
                                <div className="setting-row">
                                        <ToggleControl
                                                label={
                                                        strings.enableUpdateTools ||
                                                        __( 'Enable Update Tools', 'wordpress-mcp' )
                                                }
                                                help={
                                                        strings.enableUpdateToolsDescription ||
                                                        __(
                                                                'Allow update operations via tools.',
                                                                'wordpress-mcp'
                                                        )
                                                }
                                                checked={ settings.enable_update_tools }
                                                onChange={ () =>
                                                        handleToggleChange( 'enable_update_tools' )
                                                }
                                                disabled={ ! settings.enabled }
                                        />
                                </div>
                                <div className="setting-row">
                                        <ToggleControl
                                                label={
                                                        strings.enableDeleteTools ||
                                                        __( 'Enable Delete Tools', 'wordpress-mcp' )
                                                }
                                                help={
                                                        strings.enableDeleteToolsDescription ||
                                                        __(
                                                                '⚠️ CAUTION: Allow deletion operations via tools.',
                                                                'wordpress-mcp'
                                                        )
                                                }
                                                checked={ settings.enable_delete_tools }
                                                onChange={ () =>
                                                        handleToggleChange( 'enable_delete_tools' )
                                                }
                                                disabled={ ! settings.enabled }
                                        />
                                </div>
                                <div className="setting-row">
                                        <ToggleControl
                                                label={
                                                        strings.enableRestApiCrudTools ||
                                                        __(
                                                                '🧪 Enable REST API CRUD Tools (EXPERIMENTAL)',
                                                                'wordpress-mcp'
                                                        )
                                                }
                                                help={
                                                        strings.enableRestApiCrudToolsDescription ||
                                                        __(
                                                                '⚠️ EXPERIMENTAL FEATURE: Enable or disable the generic REST API CRUD tools for accessing WordPress endpoints. This is experimental functionality that may change or be removed in future versions. When enabled, all tools that are a rest_alias or have the disabled_by_rest_crud flag will be disabled.',
                                                                'wordpress-mcp'
                                                        )
                                                }
                                                checked={ settings.enable_rest_api_crud_tools }
                                                onChange={ () =>
                                                        handleToggleChange( 'enable_rest_api_crud_tools' )
                                                }
                                                disabled={ ! settings.enabled }
                                        />
                                </div>
                        </CardBody>
                        { isSaving && (
                                <CardFooter>
                                        <div className="settings-saving-indicator">
                                                <Spinner />
                                                { __( 'Saving...', 'wordpress-mcp' ) }
                                        </div>
                                </CardFooter>
                        ) }
                </Card>
        );
};

export default SettingsTab;
