import { Chat } from "./class/Chats";
import { Dauphin } from "./class/Dauphin";

// Instancie le chat Moshi 
let dateMosh = new Date(2020, 3, 21);
const monChat: Chat = new Chat( dateMosh,"Moshi-Moshi", 7);

//Instancie le dauphin Flipper
let dateFlip = new Date(2020, 3, 21);
const monDauphin : Dauphin = new Dauphin( dateFlip,'Flipper', 25);
monChat.miauler();
monChat.display();
monDauphin.cliquetter();
monDauphin.display();