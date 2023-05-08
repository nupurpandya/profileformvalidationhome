import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'userformvalidation';
  userProfileForm !: FormGroup;
  // days = ["MON", "TUE", "WED", "THU","FRI"];
  constructor(private fb:FormBuilder){
    
  }
  ngOnInit(): void {
    this.userProfileForm=this.fb.group({
      'fname':new FormControl(),
      'lname':new FormControl(),
      'phoneno': new FormControl(),
      'designation':new FormControl(),
      'project':new FormControl(),
      'city':new FormControl(),
      'floor': new FormControl(),
      'column':new FormControl(),
      'seatno':new FormControl(),
      'modeofwork':new FormControl(),
      // 'days'   : this.fb.array([this.days]),
      // 'days': new FormControl()
    })
  }
  submitUserData(){
    console.log(this.userProfileForm.value);
    
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


