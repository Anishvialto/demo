const prompt = require('prompt-sync')();

class msubseq
{
    constructor()
    {
        this.s=prompt("Enter the main string:"); //main string input
        this.words=[]  //array store words

        let numwords=prompt("Enter number of words:"); //num of words input

        for(let i=0;i<numwords;i++)
        {
            let word=prompt("Enter word:");
            this.words.push(word);  //add each word to array
        }
    }

    subseq(word,s) //this method check if word is a subseq of s
    {
        let i=0,j=0;
        while(i<word.length&&j<s.length)
        {
            if(word[i]===s[j])
            {
                i++;
            }
            j++;
        }
        return i===word.length;
    }

    cmatchingseq() //this method to count matching subsequence
    {
        let count=0;

        for(let i=0;i<this.words.length;i++)
        {
            if(this.subseq(this.words[i],this.s))
            {
                count++;
            }
        }
        return count;
    }
}

let obj=new msubseq();
let result=obj.cmatchingseq();
console.log("Number of matching subseq=",result);