import Route from 'route-parser';

/**
 * Router class responsible for App routing
 */
export default class Router {
  /**
   * Constructor
   */
  constructor() {
    this.map = [];
  }

  /**
   * Binds callback to a route
   * @param {string} path route path
   * @param {function} callback callback
   * @returns {Router} this for chaining
   */
  bind(path, callback) {
    const route = new Route(path);
    this.map.push({
      route,
      callback,
    });
    return this;
  }

  /**
   * Retrieves the first matching entry and executes the callback
   * @param {string} path path string
   * @returns {any} callback result
   */
  get(path) {
    try {
      const entry = this.map.find(item => item.route.match(path));
      return entry.callback(entry.route.match(path));
    } catch (err) {
      throw new Error(`No match found for path: ${path}`);
    }
  }
}

export const router = new Router();
