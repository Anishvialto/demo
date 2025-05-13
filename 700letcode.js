class LongestwordD
{
    constructor(words)
    {
        this.words=words;
    }

    findlongestword()
    {
        this.words.sort(); ///

        let vaildwords={"":true}; ///
        let longest="";

        for(let i=0;i<this.words.length;i++) //
        {
            let word=this.words[i];
            let perfix=word.substring(0,word.length-1);

            if(vaildwords[perfix])
            {
                vaildwords[word]=true;

                if(word.length>longest.length)
                {
                    longest=word;
                }
            }
        }
        return longest;
    }
}

let 