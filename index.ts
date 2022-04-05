import { Chat } from "./class/Chats";
import { Dauphin } from "./class/Dauphin";


let date = new Date(2020, 3, 21);
const monChat: Chat = new Chat( date,"Moshi-Moshi", 7);
const monDauphin : Dauphin = new Dauphin( date,'Flipper', 25);
monChat.miauler();
monChat.display();
monDauphin.cliquetter();
monDauphin.display();