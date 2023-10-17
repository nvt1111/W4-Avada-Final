import DisplayManager from './managers/DisplayManager';
import ApiManager from './managers/ApiManager';

console.log('This is the script tag thia thai thait');

(async () => {
  const apiManager = new ApiManager();
  const displayManager = new DisplayManager();
  const {notifications, settings} = await apiManager.getNotifications();
  displayManager.initialize({notifications, settings});
})();
