/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let new_stack=[];
    function empty_stack(new_stack){
        return new_stack.length===0;
    }
    for(let i=0;i<s.length;i++){
        let ch=s[i];
        if(s[i]==='('||ch==='['||ch==='{'){
            new_stack.push(s[i]);
        }else if(s[i]===')' ||s[i]===']'||s[i]==='}'){
            if(empty_stack(new_stack)){
                return false;
            }
            let top_elem=new_stack.pop();
            if(s[i]===')' &&top_elem!=='(' || s[i]===']'&&top_elem!=='[' ||s[i]==='}'&&top_elem!=='{'){
                return false;
            }
        }
    }
    return empty_stack(new_stack);
};