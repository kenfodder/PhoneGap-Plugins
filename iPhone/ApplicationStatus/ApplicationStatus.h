#import <Foundation/Foundation.h>

@interface ApplicationStatus : NSObject {
	UIWebView *_webview;
}

@property (nonatomic, retain) UIWebView *webview;

- (id)init;
@end
