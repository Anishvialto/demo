let prompt=require("prompt-sync")();

class Ambiguous
{
    constructor()
    {
        this.input=prompt("Enter the coordinate string =");
    }

    vaildnumbers(s)
    {
        let result=[];
        let n=s.length;

        //without decimal
        if(n===1 ||s[0] !=='0')
        {
            result.push(s);
        }
        else if(s==='0')
        {
            result.push('0')
        }

        //with decimal 
        let i=1; 
        while(i<n)
        {
            let left=s.slice(0,i);
            let right=s.slice(i);

            if((left.length===1|| left[0]!=='0') && right[right.length-1] !=='0')
            {
                result.push(left +'.'+right);
            }
            i++;
        }
        return result;
    }
    generatecoordinates()
    {
        let res=[];
        let str=this.input.slice(1,this.input.length-1);

        let i=1;
        while(i<str.length)
        {
            let leftpart=str.slice(0,i);
            let rightpart=str.slice(i);

            let leftoptions=this.vaildnumbers(leftpart);
            let rightoptions=this.vaildnumbers(rightpart);

            let l=0;
            while(l<leftoptions.length)
            {
                let r=0;
                while(r<rightoptions.length)
                {
                    let c="("+leftoptions[l]+","+rightoptions[r]+")";
                    res.push(c);
                    r++;
                }
                l++;
            }
            i++;
        }
        return res;
    }
}
let obj=new Ambiguous();
let output=obj.generatecoordinates();
console.log(output);