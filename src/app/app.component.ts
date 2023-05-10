import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { UserService } from "./user.service";
import { firstLetterUpperCase } from "./Validations/firstLetterUppercase"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'userformvalidation';
  userProfileForm !: FormGroup;
  days = ["MON", "TUE", "WED", "THU","FRI"];
  disableEnableFloor:boolean=true;
  disableEnableSeatNo:boolean=true;
  disableEnableColumn:boolean=true;
  hideshowdays:boolean=false;
  constructor(private fb:FormBuilder, private userservice:UserService){
    
  }
  ngOnInit(): void {
    this.userProfileForm=new FormGroup({
      'image':new FormControl(),
      'fname':new FormControl(null,[Validators.minLength(2),Validators.maxLength(100),Validators.pattern(" /^[ A-Za-z0-9_@./#&+-]*$/.")]),
      'lname':new FormControl(),
      'phoneno': new FormControl(null,[Validators.required,Validators.pattern(/^[0-9]+$/),Validators.minLength(10),Validators.maxLength(10)]),
      'designation':new FormControl(null,Validators.required),
      'project':new FormControl(null,Validators.required),
      'city':new FormControl(null,Validators.required),
      'floor': new FormControl(null,Validators.required),
      'column':new FormControl(null,Validators.required),
      'seatno':new FormControl(null,Validators.required),
      'modeofwork':new FormControl(null,Validators.required),
      'days'   : this.fb.array([])
   
      // 'days': new FormControl()
    },
    [firstLetterUpperCase('fname')],
    )
  }
  submitUserData(){
    console.log(this.userProfileForm.value);
    this.userservice.postUser(this.userProfileForm.value).subscribe(res=>res);
    
  }
  getCityValue(e:any){
    if(e){
      this.disableEnableFloor=false;
    }
  }
  getFloorValue(e:any){
    if(e){
      this.disableEnableColumn=false;
    }
  }
  getColumnValue(e:any){
    if(e){
      this.disableEnableSeatNo=false;
    }
  }
  getValue(e:any){
    console.log(e.target);
    
  }
  hey(e:any){
    if(e.name=="Hybrid"){
      this.hideshowdays=true;
    }
    else{
      this.hideshowdays=false;
    }
    console.log(e.name);
    
  }
  handleDays(e:any){
    let dayarr=this.userProfileForm.get('days') as FormArray;
    if(e.target.checked){
      dayarr.push(new FormControl(e.target.value))
      console.log(dayarr.controls);
      
    }
    else{
      let i=0;
      dayarr.controls.forEach((l:any)=>{
        if(l.value==e.target.value){
          dayarr.removeAt(i);
          return
        }
        i++;
      })
    }
    console.log(e.target.value);
    
  }
  public designation = [
    {id:1,name:'BA'},
    {id:2,name:'PM'},
    {id:3,name:'PMO'},
    {id:4,name:'DEVOPS'},
    {id:5,name:'DEV'},
    {id:6,name:'ADMIN'},
    {id:7,name:'QA'},
    {id:8,name:'JAVA'},
    {id:9,name:'UI/UX'},
    {id:10,name:'HR'},
  ]
  public city = [
    {id:1,name:'None'},
    {id:2,name:'Surat'},
    {id:3,name:'Valsad'},
  ]
  public floor = [
    {id:1,name:'None'},
    {id:2,name:'1st'},
    {id:3,name:'2nd'},
    {id:4,name:'3rd'},
    {id:5,name:'4th'},
  ]
  public column=[
    {id:1,name:'None'},
    {id:2,name:'A'},
    {id:3,name:'B'},
    {id:4,name:'C'},
    {id:5,name:'D'},
    {id:6,name:'E'},
    {id:7,name:'F'},
    {id:8,name:'G'},
    {id:9,name:'H'},
    {id:10,name:'I'},
    {id:11,name:'J'},  
  ]
  public seatNo = [
    {id:1,name:'None'},
    {id:2,name:'1'},
    {id:3,name:'2'},
    {id:4,name:'3'},
    {id:5,name:'4'},
    {id:6,name:'5'},
    {id:7,name:'6'},
    {id:8,name:'7'},
    {id:9,name:'8'},
    {id:10,name:'9'},
    {id:11,name:'10'},    
  ]
  public modeOfWork=[
    {id:1,name:'Hybrid'},
    {id:2,name:'Work from home'},
    {id:3,name:'Regular'},
  ]
}


