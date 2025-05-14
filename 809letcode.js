const prompt = require('prompt-sync')();

class expressiveword
{
    constructor()
    {
        this.s="";
        this.words=[];
    }

    getinput()
    {
        this.s=prompt("Enter the main string s:");
        let wcount=prompt("Enter the number of query words:");

        for(let i=0;i<wcount;i++)
        {
            let word=prompt("Enter word:");
            this.words.push(word);
        }
    }

    countwords()
    {
        let count=0;
        for(let i=0;i<this.words.length;i++)
        {
            if(this.strech(this.s,this.words[i]))
            {
                count++;
            }
        }
        return count;
    }

    strech(s,word)
    {
        let i=0;
        let j=0;

        while(i<s.length&&j<word.length)
        {
            if(s[i]!==word[j])
                return false;

            let S=this.getRepeatedLength(s,i);
            let W=this.getRepeatedLength(word,j);
        }
    }
}