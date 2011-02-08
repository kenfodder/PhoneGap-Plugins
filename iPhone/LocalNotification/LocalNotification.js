if (typeof PhoneGap !== "undefined") {
	function LocalNotification() {
	}

	LocalNotification.prototype.add = function(options) {
		//date MM/dd/yyyy HH:mm a  | 01/29/2011 4:49 PM
		//message
		//action
		//id
        var defaults = {
            date: false,
            message: '',
            hasAction: true,
            action: 'View',
            badge: 0,
            id: 0
        }
        for (var key in defaults) {
            if (typeof options[key] !== "undefined")
                defaults[key] = options[key];
        }
		PhoneGap.exec("LocalNotification.addNotification", defaults);
	};

	LocalNotification.prototype.cancel = function(id) {
		PhoneGap.exec("LocalNotification.cancelNotification", id);
	};
	
	LocalNotification.prototype.cancelAll = function(id) {
        PhoneGap.exec("LocalNotification.cancelAllNotifications");
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
