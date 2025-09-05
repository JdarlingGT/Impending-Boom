=== WordPress MCP ===
Contributors: automattic
Tags: mcp, ai, protocol, integration, model-context-protocol
Requires at least: 6.4
Tested up to: 6.4
Requires PHP: 8.0
Stable tag: 0.2.5
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

A WordPress plugin to integrate with Model Context Protocol (MCP), providing AI-accessible interfaces to WordPress data and functionality.

== Description ==
This plugin enables external AI systems to interact with your WordPress site by providing:

* Tools: Actions the AI can request the site to perform (e.g., create_post, get_user_details)
* Resources: Data the AI can request from the site (e.g., list_published_posts, get_site_options)
* Prompts: Pre-defined, structured interaction templates for common AI tasks

The plugin implements both STDIO and HTTP-based (Streamable) transport protocols with JWT authentication and comprehensive security features.