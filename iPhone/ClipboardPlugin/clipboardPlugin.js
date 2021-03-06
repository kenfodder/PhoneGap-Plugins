if (typeof PhoneGap !== "undefined") {
	/**
	 * Clipboard plugin for PhoneGap
	 * 
	 * @constructor
	 */
	function ClipboardPlugin()
	{
	}

	/**
	 * Set the clipboard text
	 *
	 * @param {String} text The new clipboard content
	 */
	ClipboardPlugin.prototype.setText = function(text)
	{
		PhoneGap.exec("ClipboardPlugin.setText", text);
	}

	/**
	 * Register the plugin with PhoneGap
	 */
	ClipboardPlugin.install = function()
	{
		if ( !window.plugins ) 
			window.plugins = {}; 
		if ( !window.plugins.clipboardPlugin ) 
			window.plugins.clipboardPlugin = new ClipboardPlugin();
	}
	PhoneGap.addConstructor(ClipboardPlugin.install);
}
