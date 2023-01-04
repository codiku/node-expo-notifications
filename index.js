const Expo = require("expo-server-sdk").default;
const expo = new Expo();

const TOKEN = "";

sendNotification(TOKEN);
async function sendNotification(token) {
  if (Expo.isExpoPushToken(token)) {
    const notificationResponse = await expo.sendPushNotificationsAsync([
      {
        to: token,
        title: "Info météo",
        body: "Salut du serveur",
        data: { infos: "1" },
        sound: "default",
      },
    ]);
    console.log(notificationResponse);
  } else {
    console.log("Token invalide");
  }
}
