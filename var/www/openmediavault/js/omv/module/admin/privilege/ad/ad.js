/**
 * This file is part of OpenMediaVault.
 *
 * @license   http://www.gnu.org/licenses/gpl.html GPL Version 3
 * @author    Volker Theile <volker.theile@openmediavault.org>
 * @copyright Copyright (c) 2009-2014 Volker Theile
 *
 * OpenMediaVault is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * any later version.
 *
 * OpenMediaVault is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with OpenMediaVault. If not, see <http://www.gnu.org/licenses/>.
 */
// require("js/omv/WorkspaceManager.js")
// require("js/omv/workspace/form/Panel.js")
// require("js/omv/form/PasswordField.js")

/**
 * @class OMV.module.admin.privilege.directoryservice.Settings
 * @derived OMV.FormPanelExt
 */
Ext.define("OMV.module.admin.privilege.directoryservice.Settings", {
    extend: "OMV.workspace.form.Panel",

    rpcService: "DirectoryService",
    rpcGetMethod: "getSettings",
    rpcSetMethod: "setSettings",
    
    getFormItems : function() {
		var me = this;
		return [{
			xtype: "fieldset",
			title: _("General settings"),
			fieldDefaults: {
				labelSeparator: ""
			},
			items: [{
				xtype: "textfield",
				name: "dcname",
				fieldLabel: _("Domain controller name"),
				allowBlank: false,
				plugins: [{
                    ptype: "fieldinfo",
                    text: _("E.g. host.example.com")
				}]
			},{
				xtype: "textfield",
				name: "domainname",
				fieldLabel: _("Domain name"),
				allowBlank: false,
				plugins: [{
                    ptype: "fieldinfo",
                    text: _("E.g. example.com")
				}]
			},{
				xtype: "textfield",
				name: "netbiosname",
				fieldLabel: _("Domain NetBIOS name"),
				allowBlank: false,
				plugins: [{
                    ptype: "fieldinfo",
                    text: _("E.g. EXAMPLE")
                }]
			},{
				xtype: "textfield",
				name: "adminname",
				fieldLabel: _("Administrator name"),
				allowBlank: false
			},{
				xtype: "passwordfield",
				name: "adminpassword",
				fieldLabel: _("Administrator password"),
				allowBlank: false
			}]
		}];
	}
});

OMV.WorkspaceManager.registerNode({
    id: "directoryservice",
	path: "/privilege",
	text: _("Directory Service"),
	icon16: "images/",
	iconSvg: "images/",
	position: 60
});

OMV.WorkspaceManager.registerPanel({
    id: "settings",
	path: "/privilege/directoryservice",
	text: _("Settings"),
	position: 10,
	className: "OMV.module.admin.privilege.directoryservice.Settings"
});
