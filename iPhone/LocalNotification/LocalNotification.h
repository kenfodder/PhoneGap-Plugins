//
//  LocalNotification.h
//
//  Created by Greg Allen on 01/29/2011.
//

#import <Foundation/Foundation.h>


#import "PhoneGapCommand.h"
@interface LocalNotification : PhoneGapCommand {
}
- (void)addNotification:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;
@end
