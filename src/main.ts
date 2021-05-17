import { exit } from 'node:process';
import { TextDecoder, TextEncoder } from 'node:util';
import { stdin, stdout } from 'process';
import * as readline from "readline";
import InfoPage from './InfoPage'

// The InfoPage Array makes it easier to access InfoPage entries modularly.
let InfoPageArray : InfoPage[] = [];

// Pushing InfoPages onto the array to actually access them.
InfoPageArray.push(new InfoPage("Girls Who Code", "girls_who_code", "Girls Who Code is an organization, specifically nonprofit, that attempts to make programming and getting software engineering jobs easier for young women. Their mission is \"to inspire, educate, and equip girls with the computing skills to pursue 21st century opportunities.\""));
InfoPageArray.push(new InfoPage("Black Girls Code", "black_girls_code", "Black Girls Code is an organization that empowers women of color from ages 7 to 17 to get into software engineering."));
InfoPageArray.push(new InfoPage("Hidden Figures", "hidden_figures", "Hidden Figures is a movie released in 2017 about 4 women of color that were essentially the backbone for the Apollo missions. They were the \"Human Computers\" that crunched all of the numbers for the mission. The original women were going to be laid off and replaced by electronic computers instead of human ones, but then learned computer programming so they wouldn't be laid off.")); 
InfoPageArray.push(new InfoPage("League of Women Coders", "league_of_women_coders", "The League of Women Coders is an collective of women focused on programming, hacking, and learning about computers as a group."));
InfoPageArray.push(new InfoPage("Limor Fried", "limor_fried", "Limor Fried is the CEO and founder of Adafruit Industries, which is a company that makes open-source hardware. She is also known as \"The Pioneer of Maker Culture\""));
InfoPageArray.push(new InfoPage("Ada Lovelace", "first_programmer", "Ada Lovelace (1815-1852) is heavily regarded as the first programmer, as she invented the first algorithm to be carried out by the Analytical Engine, created by Charles Babbage. The engine was never created, and she, unfortunately, never saw her code execute."));

// getInfoPage : Gets the info page from the given pageName
function getInfoPage(syntax : string): InfoPage | undefined
{
    for (let i = 0; i < InfoPageArray.length; ++i)
    {
        if (InfoPageArray[i].cliSyntax == syntax)
        {
            return InfoPageArray[i];
        }
    }

    return undefined;
}

// Constructing the cli
let input = process.openStdin();

input.addListener("data", ( data : Buffer ) => {
    let decodedData : string = new TextDecoder().decode(data) as string;

    let cmd : string = decodedData.split(" ").shift() as string;

    let args : string[] = decodedData.split(" ");
    args.shift();
    
    for (let i = 0; i < args.length; ++i)
    {
        args[i] = args[i].replace(/\r?\n|\r/g, "");
    }

    switch (cmd)
    {
        case "exit":
            exit(0);

        case "help":
            console.log("getinfo - Gets info of inputted help page name. (ex. \"getinfo hidden_figures\"");
            console.log("Get info pages:");
            console.log("\tgirls_who_code\n\tblack_girls_code\n\thidden_figures\n\tleague_of_women_coders\n\tlimor_fried\nfirst_programmer");
            break;
                    
        case "getinfo":
            let page : InfoPage | undefined = getInfoPage(args[0]);
            console.log(page?.toString());
            break;
    }

    console.log(cmd);
});
