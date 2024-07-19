// Request permission to show notifications
if (Notification.permission === "default") {
  Notification.requestPermission();
}

// Function to show a notification
export const showNotification = (title, options) => {
  if (Notification.permission === "granted") {
    new Notification(title, options);
  } else {
    console.log("Notification permission denied");
  }
};
