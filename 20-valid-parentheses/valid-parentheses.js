/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let new_st=[];
    function e_s(new_st){
        return new_st.length===0;
    }
    for(let i=0;i<s.length;i++){
        let ch=s[i];
        if(ch==='(' ||ch==='['||ch==='{'){
            new_st.push(ch);
        }else if(ch===')'||ch===']'||ch==='}'){
            if(e_s(new_st)){
                return false;
            }
            let top_ele=new_st.pop();
            if(ch===')'&&top_ele==='('||ch===']'&&top_ele==='['||ch==='}'&&top_ele==='{'){
                continue;
            }else return false;
        }
    }
    return e_s(new_st);
};