
export default {
  /**
   * The onLaunch callback is invoked after the application JavaScript
   * has been parsed into a JavaScript context. The handler is passed an object
   * that contains options passed in for launch. These options are defined in the
   * swift or objective-c client code. Options can be used to communicate to
   * your JavaScript code that data and as well as state information, like if the
   * the app is being launched in the background.
   *
   * The location attribute is automatically added to the object and represents
   * the URL that was used to retrieve the application JavaScript.
   * @param {Object} options Any custom keys that were passed to launchOptions.
   * @returns {undefined}
   */
  // onLaunch(options) {
  //   router.get('/').present();
  //   console.log('options', options);
  // },

  /**
   * This method is called to let your app know that it is about to move from
   * the active to inactive state. This can occur for certain types of temporary
   * interruptions (such as an incoming phone call or SMS message) or when the
   * user quits the app and it begins the transition to the background state.
   * An app in the inactive state continues to run but does not dispatch
   * incoming events to responders.
   *
   * You should use this method to pause ongoing tasks, disable timers, and
   * throttle down OpenGL ES frame rates. Games should use this method to
   * pause the game. An app in the inactive state should do minimal work
   * hile it waits to transition to either the active or background state.
   *
   * If your app has unsaved user data, you can save it here to ensure
   * that it is not lost. However, it is recommended that you save user
   * data at appropriate points throughout the execution of your app,
   * usually in response to specific actions. For example, save data when
   * the user dismisses a data entry screen. Do not rely on specific app
   * state transitions to save all of your app’s critical data.
   *
   * After calling this method, the app also posts a willResignActiveNotification
   * notification to give interested objects a chance to respond to the transition.
   * @returns {undefined}
   */
  onWillResignActive() {

  },

  /**
   * Tells the delegate that the app is now in the background.
   * Use this method to release shared resources, invalidate timers, and store
   * enough app state information to restore your app to its current state in case
   * it is terminated later. You should also disable updates to your app’s user
   * interface and avoid using some types of shared system resources (such as the
   * user’s contacts database). It is also imperative that you avoid using OpenGL
   * ES in the background.
   *
   * Your implementation of this method has approximately five seconds to perform
   * any tasks and return. If you need additional time to perform any final tasks,
   * you can request additional execution time from the system by calling
   * beginBackgroundTask(expirationHandler:). In practice, you should return from
   * applicationDidEnterBackground(_:) as quickly as possible. If the method does
   * not return before time runs out your app is terminated and purged from memory.
   *
   * You should perform any tasks relating to adjusting your user interface before
   * this method exits but other tasks (such as saving state) should be moved to a
   * concurrent dispatch queue or secondary thread as needed. Because it's likely
   * any background tasks you start in applicationDidEnterBackground(_:) will not
   * run until after that method exits, you should request additional background
   * execution time before starting those tasks. In other words, first call
   * beginBackgroundTask(expirationHandler:) and then run the task on a dispatch
   * queue or secondary thread.
   *
   * The app also posts a UIApplicationDidEnterBackground notification around the
   * same time it calls this method to give interested objects a chance to respond
   * to the transition.
   *
   * For more information about how to transition gracefully to the background,
   * and for information about how to start background tasks, see App Programming
   * Guide for iOS.
   * @returns {undefined}
   */
  onDidEnterBackground() {

  },

  /**
   * Tells the delegate that the app is about to enter the foreground.
   *
   * In iOS 4.0 and later, this method is called as part of the transition from the
   * background to the active state. You can use this method to undo many of the
   * changes you made to your app upon entering the background. The call to this
   * method is invariably followed by a call to the applicationDidBecomeActive(_:)
   * method, which then moves the app from the inactive to the active state.
   *
   * The app also posts a UIApplicationWillEnterForeground notification shortly
   * before calling this method to give interested objects a chance to respond
   * to the transition.
   * @returns {undefined}
   */
  onWillEnterForeground() {

  },

  /**
   * Tells the delegate that the app has become active.
   *
   * This method is called to let your app know that it moved from the inactive
   * to active state. This can occur because your app was launched by the user
   * or the system. Apps can also return to the active state if the user chooses
   * to ignore an interruption (such as an incoming phone call or SMS message)
   * that sent the app temporarily to the inactive state.
   *
   * You should use this method to restart any tasks that were paused (or not
   * yet started) while the app was inactive. For example, you could use it to
   * restart timers or throttle up OpenGL ES frame rates. If your app was previously
   * in the background, you could also use it to refresh your app’s user interface.
   *
   * After calling this method, the app also posts a UIApplicationDidBecomeActive
   * notification to give interested objects a chance to respond to the transition.
   *
   * @returns {undefined}
   */
  onDidBecomeActive() {

  },

  /**
   * Tells the delegate when the app is about to terminate.
   *
   * This method lets your app know that it is about to be terminated and purged from
   * memory entirely. You should use this method to perform any final clean-up tasks
   * for your app, such as freeing shared resources, saving user data, and invalidating
   * timers. Your implementation of this method has approximately five seconds to
   * perform any tasks and return. If the method does not return before time expires,
   * the system may kill the process altogether.
   *
   * For apps that do not support background execution or are linked against iOS 3.x
   * or earlier, this method is always called when the user quits the app. For apps
   * that support background execution, this method is generally not called when
   * the user quits the app because the app simply moves to the background in that case.
   * However, this method may be called in situations where the app is running in the
   * background (not suspended) and the system needs to terminate it for some reason.
   *
   * After calling this method, the app also posts a UIApplicationWillTerminate
   * notification to give interested objects a chance to respond to the transition.
   * @returns {undefined}
   */
  onWillTerminate() {

  },
};
