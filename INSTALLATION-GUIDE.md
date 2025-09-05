# WordPress Plugin Installation Guide

## WordPress MCP Plugin - Ready for Installation

The WordPress MCP plugin has been fixed and is now ready for installation on your staging site.

### What Was Fixed:
1. **Removed conflicting plugin files** - Deleted template files that were causing conflicts
2. **Fixed composer dependencies** - Installed required packages including Firebase JWT
3. **Corrected plugin structure** - Ensured single main plugin file with proper WordPress headers
4. **Updated documentation** - Fixed readme.txt to describe actual functionality

### Installation Instructions:

#### Option 1: Direct Upload
1. ZIP the entire `get-protocol` folder
2. In WordPress Admin, go to Plugins > Add New > Upload Plugin
3. Upload the ZIP file and activate

#### Option 2: Manual Installation
1. Copy the entire `get-protocol` folder to your WordPress `/wp-content/plugins/` directory
2. In WordPress Admin, go to Plugins and activate "WordPress MCP"

### Plugin Information:
- **Plugin Name:** WordPress MCP
- **Version:** 0.2.5
- **Main File:** `wordpress-mcp.php`
- **Required PHP:** 8.0+
- **Required WordPress:** 6.4+

### Features:
- Model Context Protocol (MCP) integration
- AI-accessible WordPress interfaces
- STDIO and HTTP-based transport protocols
- JWT authentication system
- Tools, Resources, and Prompts for AI interaction

### After Installation:
1. Go to WordPress Admin > Settings > MCP Settings (if available)
2. Enable MCP functionality
3. Configure authentication tokens as needed
4. Test with your MCP client

The plugin should now activate without any conflicts and be ready for testing with AI systems that support the Model Context Protocol.