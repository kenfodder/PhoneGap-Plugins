if (typeof PhoneGap !== "undefined") {
	function LocalNotification() {
	}

	LocalNotification.prototype.add = function(options) {
		//date MM/dd/yyyy HH:mm a  | 01/29/2011 4:49 PM
		//message
		//action
		//id
		PhoneGap.exec("LocalNotification.addNotification", options);
	};

	LocalNotification.prototype.cancel = function(id) {
		PhoneGap.exec("LocalNotification.cancelNotification", id);
	};


	PhoneGap.addConstructor(function() 
	{
		if(!window.plugins)
		{
			window.plugins = {};
		}
		window.plugins.localNotification = new LocalNotification();
	});
}
