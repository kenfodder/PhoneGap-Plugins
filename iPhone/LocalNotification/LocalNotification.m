//
//  LocalNotification.m
//
//  Created by Greg Allen on 01/29/2011.
//

#import "LocalNotification.h"


@implementation LocalNotification
- (void)addNotification:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options {
	NSString *dateString = [options objectForKey:@"date"];
	NSString *msg = [options objectForKey:@"message"];
	NSString *action = [options objectForKey:@"action"];
	NSString *notificationId = [options objectForKey:@"id"];
	
	NSDateFormatter *dateFormatter = [[NSDateFormatter alloc] init];
	[dateFormatter setTimeZone:[NSTimeZone defaultTimeZone]];
	[dateFormatter setDateFormat:@"MM/dd/yyyy hh:mm a"];
	NSDate *date = [dateFormatter dateFromString:dateString];
	[dateFormatter release];
	
	UILocalNotification *notif = [[UILocalNotification alloc] init];
	notif.fireDate = date;
	notif.timeZone = [NSTimeZone defaultTimeZone];
	
	notif.alertBody = msg;
	notif.alertAction = action;
	notif.soundName = UILocalNotificationDefaultSoundName;
	notif.applicationIconBadgeNumber = 1;
	
	NSDictionary *userDict = [NSDictionary dictionaryWithObject:notificationId 
														 forKey:@"notificationId"];
	notif.userInfo = userDict;
	
	[[UIApplication sharedApplication] scheduleLocalNotification:notif];
	NSLog(@"Notification Set: %@", date);
	[notif release];
}

- (void)cancelNotification:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options {
	NSString *notificationId = [arguments objectAtIndex:0];
	NSArray *notifications = [[UIApplication sharedApplication] scheduledLocalNotifications];
	for (UILocalNotification *notification in notifications) {
		NSString *notId = [notification.userInfo objectForKey:@"notificationId"];
		if ([notificationId isEqualToString:notId]) {
			NSLog(@"Notification Canceled: %@", notificationId);
			[[UIApplication sharedApplication] cancelLocalNotification:notification];
		}
	}
}
@end