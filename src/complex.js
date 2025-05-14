let prompt=require("prompt-sync")();

class AnagramFinder
{
    constructor(s,p) //intialize two variables(s,p)
    {
        this.s=s;  //this.s stores in main string s
        this.p=p;  //this.p stores in pattern string p
    }

    findAnagrams()
    {
        let result=[]    //result will store final answer(starting indices).
        let slen=this.s.length;  //slen stores length of string s
        let plen=this.p.length;  //plen stores length of string p

        if(slen<plen)   //if the main string s is smaller than p,then their is no anagrams are possible
        {
            return result; //so we return empty result array immediately
        }

        let pcount=new Array(26).fill(0);  //create two arrays of size 26(for 26 englsh lowecase letters)
        let scount=new Array(26).fill(0);

        for(let i=0;i<plen;i++)
        {
            pcount[this.p.charCodeAt(i)-97]++;   //ex:s="cbaebabacd",p="abc", so plen=3,slen=10
            scount[this.s.charCodeAt(i)-97]++;
        }

        if(this.arraysMatch(pcount,scount))  //calls arraymatch(pcount,scount)
        {
            result.push(0);  //if they match,push 0 into result array(starting index)
        }

        for(let i=plen;i<slen;i++)
        {
            scount[this.s.charCodeAt(i)-97]++;        //ex:s="cbaebabacd",p="abc", so plen=3,slen=10
            scount[this.s.charCodeAt(i-plen)-97]--;     //i=3,e,scount[4]++,

            if(this.arraysMatch(pcount,scount))
            {
                result.push(i-plen+1);
            }
        }

        return result;
    }
    arraysMatch(arr1,arr2)  //compare two arrays arr1 and arr2 element by element 
    {
        for(let i=0;i<26;i++) // if all 26 values are equal, return true other wise false.
        {
            if(arr1[i]!==arr2[i])
            {
                return false;
            }
        }
        return true;
    }
}

let s=prompt("Enter the main string(s):");
let p=prompt("Enter the pattern string (p):");
let finder=new AnagramFinder(s,p);
let result=finder.findAnagrams();
console.log("Starting indices of anagrams:", result);