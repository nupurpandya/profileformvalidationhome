import { AbstractControl } from "@angular/forms";

export function firstLetterUpperCase(fname:string){
    return function(control:AbstractControl):any{
        const value=<string>control.get('fname')?.value;
        if(!value) return;
        if(value.length===0) return;
        const firstLetter=value[0];
        if(firstLetter!==firstLetter.toUpperCase()){
            return{firstLetterCapitalError:true}
            }
            
        }
    }


// import { AbstractControl } from "@angular/forms";

// export function passwordMatch(password:string,confirmpassword:string) {
//     return function(form:AbstractControl) {

//         const passwordValue= form.get(password)?.value;
//         const cpasswordValue= form.get(confirmpassword)?.value;
//         if (passwordValue===cpasswordValue) {
//             return null;
//         }

//         return {passwordMismatchError:true}
//     }
// }