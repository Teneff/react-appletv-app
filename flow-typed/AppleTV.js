class IKJSObject extends Object {}


declare class IKJSNavigationDocument extends IKJSObject {
  constructor(): IKJSNavigationDocument;
  /**
   * Removes all documents currently on the stack.
   */
  clear(): void;

  /**
   * Dismisses the document displayed in modal view.
   */
  dismissModal(): void;

  documents: Array<IKDOMDocument>;

  /**
   * Inserts a new document directly before a document currently on the stack.
   * @param {IKDOMDocument} document The DOM document that is to be added onto the stack.
   * @param {IKDOMDocument} beforeDocument A DOM document currently on the stack.
   * The new document is placed on the stack directly after this document.
   */
  insertBeforeDocument(document: IKDOMDocument, beforeDocument?: IKDOMDocument): void;

  /**
   * Removes the top most document from the stack.
   */
  popDocument(): void;

  pushDocument(document: IKDOMDocument): void;
  /**
   * Replaces a document on the stack with a new document
   * @param {IKDOMDocument} document The DOM document that is to be added onto the stack.
   * @param {IKDOMDocument} oldDocument The DOM document that is being replaced.
   */
  replaceDocument(document: IKDOMDocument, oldDocument: IKDOMDocument): void;

  /**
   * Displays the passed document on top of the current document.
   * @param {IKDOMDocument} document A DOM document created by parsing a TVML file.
   */
  presentModal(document: IKDOMDocument): void;

  /**
   * Removes all of the documents on the stack that are above the passed document.
   * @param {IDOMDocument} document A DOM document created by parsing a TVML file.
   */
  popToDocument(document: IKDOMDocument): void;
}

/**
 * A document stack that holds the individual TVML documents for a client-server app.
 */
declare var navigationDocument : IKJSNavigationDocument;

declare class DOMParser {
  constructor(): DOMParser;
  parseFromString(string: string, contentType: string): IKDOMDocument;
}

declare class IKDOMNamedNodeMap extends Array {}
declare class IKDOMNodeList extends NodeList{}

declare class IKDOMElement {
  attributes: IKDOMNamedNodeMap,
  childElementCount: number,
  childNodes: IKDOMNodeList,

}


declare class IKDOMEvent {
  bubbles: boolean,
  cancelable: boolean,
  currentTarget: IKDOMDocument,
  defaultPrevented: boolean,
  eventPhase: number,
  target: IKDOMElement,
  timeStamp?: TimeStamp,
  type: string
}

declare class IKDOMSelectEvent extends IKDOMEvent {}
declare class IKDOMEnterEvent extends IKDOMEvent {}
declare class IKDOMLeaveEvent extends IKDOMEvent {}
declare class IKDOMPlayEvent extends IKDOMEvent {}

declare var App: {
  ContentItemImageShapeExtraWide: number,
  ContentItemImageShapeHDTV: number,
  ContentItemImageShapeNone: number,
  ContentItemImageShapePoster: number,
  ContentItemImageShapeSDTV: number,
  ContentItemImageShapeSquare: number,
  ContentItemImageShapeWide: number,
  TopShelfContentStyleInset: number,
  TopShelfContentStyleSectioned: number,

  /**
   * A callback function that is automatically called when an error is sent from the Apple TV.
   * @param {string} message The error message.
   * @param {string} sourceURL The URL for the TVMLKit JS file where the error occurred.
   * Defaults to nil if the information is not available.
   * @param {number} lint The line in the TVMLKit JS file where the error occurred.
   * Defaults to nil if the information is not available.
   */
  onError(message: string, sourceURL: string, line?: number): void;

  /**
   * Use the onExit attribute to complete any actions that need to be cleaned up
   * (for example, releasing any system resources) when the app has been exited.
   * This attribute must be set to a function that accepts an options argument
   * @param {object} options contains reloading - Set to true if the app is exiting
   * as a result of App.reload() and is to be relaunched later.
   */
  onExit(options: { reloading: boolean }): void;

  /**
   * A callback function that is automatically called when the app has been launched.
   * Use the onLaunch attribute to start any required actions (for example, loading the first TVML page)
   * when the app launches.
   * @param {object} options User defined keys—Any custom keys that were passed to launchOptions.
   */
  onLaunch(options: {
    launchContext: string,
    location: string,
    reloadData?: object
  }): void;

  /**
   * A callback function that is automatically called when the app moves to the foreground.
   * Use the onResume attribute to start any required actions when the app moves from the
   * background to the foreground. This attribute must be set to a function that accepts an options argument
   * The options argument is always set to null.
   */
  onResume(options: null): void;

  /**
   * A callback function that is automatically called when the app is sent to the background.
   * Use the onSuspend attribute to stop any actions when the app moves from the foreground to the background.
   * This attribute must be set to a function that accepts an options argument
   */
  onSuspend(options: null): void;

  /**
   * Reloads the app.
   * @param {object} The options used to determine when the app is reloaded. This parameter is a dictionary
   * with a key-value pair. The key can have the value when. The value can have the values onResume
   * or now.
   * @param {object} reloadData An optional, developer-defined object that contains information
   * about the current app state.
   */
  reload(options: object, reloadData?: object): void;


  traitCollection: {

    displayScale: number,

    layoutDirection: string,

    screenHeight: number,

    screenWidth: number,

    userInterfaceIdiom: string,
  },

  onDidBecomeActive(): void;

  onDidEnterBackground(): void;

  onWillEnterForeground(): void;

  onWillResignActive(): void;

  onWillTerminate(): void;
};

class IKDOMImplementation {
  MODE_SYNCHRONOUS: number;

  MODE_ASYNCHRONOUS: number;
}

class IKDOMDocument {
  childNodes: IKDOMNodeList;

  dataItem: null;

  documentElement: IKDOMElement;

  documentURI: ?string;

  firstChild: IKDOMElement;

  implementation: IKDOMImplementation;

  inputEncoding: ?string;

  lastChild: IKDOMElement;

  navigationDocument: IKJSNavigationDocument;

  nextSibling: ?IKDOMElement;

  nodeName: string;

  nodeType: number;

  nodeValue: string;

  ownerDocument: IKDOMDocument;

  parentNode: IKDOMElement;

  previousSibling: IKDOMElement;

  strictErrorChecking: boolean;

  textContent: ?string;

  xmlEncoding: ?string;

  xmlStandalone: boolean;

  xmlVersion: string;
}
