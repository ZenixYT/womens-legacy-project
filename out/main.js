"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_process_1 = require("node:process");
var node_util_1 = require("node:util");
var InfoPage_1 = __importDefault(require("./InfoPage"));
// The InfoPage Array makes it easier to access InfoPage entries modularly.
var InfoPageArray = [];
// Pushing InfoPages onto the array to actually access them.
InfoPageArray.push(new InfoPage_1.default("Girls Who Code", "girls_who_code", "Girls Who Code is an organization, specifically nonprofit, that attempts to make programming and getting software engineering jobs easier for young women. Their mission is \"to inspire, educate, and equip girls with the computing skills to pursue 21st century opportunities.\""));
InfoPageArray.push(new InfoPage_1.default("Black Girls Code", "black_girls_code", "Black Girls Code is an organization that empowers women of color from ages 7 to 17 to get into software engineering."));
InfoPageArray.push(new InfoPage_1.default("Hidden Figures", "hidden_figures", "Hidden Figures is a movie released in 2017 about 4 women of color that were essentially the backbone for the Apollo missions. They were the \"Human Computers\" that crunched all of the numbers for the mission. The original women were going to be laid off and replaced by electronic computers instead of human ones, but then learned computer programming so they wouldn't be laid off."));
InfoPageArray.push(new InfoPage_1.default("League of Women Coders", "league_of_women_coders", "The League of Women Coders is an collective of women focused on programming, hacking, and learning about computers as a group."));
InfoPageArray.push(new InfoPage_1.default("Limor Fried", "limor_fried", "Limor Fried is the CEO and founder of Adafruit Industries, which is a company that makes open-source hardware. She is also known as \"The Pioneer of Maker Culture\""));
InfoPageArray.push(new InfoPage_1.default("Ada Lovelace", "first_programmer", "Ada Lovelace (1815-1852) is heavily regarded as the first programmer, as she invented the first algorithm to be carried out by the Analytical Engine, created by Charles Babbage. The engine was never created, and she, unfortunately, never saw her code execute."));
// getInfoPage : Gets the info page from the given pageName
function getInfoPage(syntax) {
    for (var i = 0; i < InfoPageArray.length; ++i) {
        if (InfoPageArray[i].cliSyntax == syntax) {
            return InfoPageArray[i];
        }
    }
    return undefined;
}
// Constructing the cli
var input = process.openStdin();
input.addListener("data", function (data) {
    var decodedData = new node_util_1.TextDecoder().decode(data);
    var cmd = decodedData.split(" ").shift();
    var args = decodedData.split(" ");
    args.shift();
    for (var i = 0; i < args.length; ++i) {
        args[i] = args[i].replace(/\r?\n|\r/g, "");
    }
    cmd.replace(/\r?\n|\r/g, "");
    console.log(cmd);
    switch (cmd) {
        case "exit":
            node_process_1.exit(0);
        case "help":
            console.log("getinfo - Gets info of inputted help page name. (ex. \"getinfo hidden_figures\"");
            console.log("Get info pages:");
            console.log("\tgirls_who_code\n\tblack_girls_code\n\thidden_figures\n\tleague_of_women_coders\n\tlimor_fried\nfirst_programmer");
            break;
        case "getinfo":
            var page = getInfoPage(args[0]);
            console.log(page === null || page === void 0 ? void 0 : page.toString());
            break;
    }
});
