export default class InfoPage
{
    name : string;
    info : string;
    cliSyntax : string;

    constructor(name : string, cliSyntax : string, info : string)
    {
        this.name = name;
        this.cliSyntax = cliSyntax;
        this.info = info;
    }

    toString()
    {
        return `${this.name}\n\n${this.info}`;
    }
}