import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { validatePassword, validateName, validateEmail, validPhoneNumber } from '../customvalidations';
import { DbServicesService } from '../dbservices/db-services.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public selectedValue !: string;
  public title = ['Mr','Mrs','Miss'];
  public gender = ['Male','Female','Others'];
  public imgInfo = { name: '', avtar: '', size: 0, type: '' };
  private userImage !: File;

  public countryList: any = [];
  public stateList: any = [];
  public cityList: any = [];

  public countryName !: any;
  public stateName !: any;
  public cityName !: any;

  public notMatch = false;

  private eventObj !: any;
  registrationForm = new FormGroup({
    title: new FormControl('',
      {
        validators: [validateName(), Validators.required],
        updateOn: 'blur' || 'change' || 'submit'
      }),

    gender: new FormControl('',
      {
        validators: [validateName(), Validators.required],
        updateOn: 'blur' || 'change' || 'submit'
      }),

    firstname: new FormControl('',
      {
        validators: [validateName(), Validators.required],
        updateOn: 'blur' || 'change' || 'submit'
      }),

    lastname: new FormControl('',
      {
        validators: [validateName(), Validators.required],
        updateOn: 'blur' || 'change' || 'submit'
      }),

    phoneNumber: new FormControl('', [Validators.minLength(10),Validators.maxLength(10),Validators.required,validPhoneNumber()]),

    email: new FormControl('',
      {
        validators: [Validators.email, Validators.required],
        updateOn: 'blur' || 'submit' || 'change'
      }),

    password: new FormControl('',
      {
        validators: [validatePassword(), Validators.required],
        updateOn: 'blur' || 'submit' || 'change'
      }),

    imageName: new FormControl('', [Validators.required]),

    countryName: new FormControl('',
      {
        validators: [validateName(), Validators.required],
        updateOn: 'blur' || 'change' || 'submit'
      }),

    stateName: new FormControl('',
      {
        validators: [validateName(), Validators.required],
        updateOn: 'blur' || 'change' || 'submit'
      }),

    cityName: new FormControl('',
      {
        validators: [validateName(), Validators.required],
        updateOn: 'blur' || 'change' || 'submit'
      }),
    confirmPassword : new FormControl('',
    {
      validators: [validatePassword(), Validators.required],
      updateOn: 'blur' || 'submit' || 'change'
    })
  })


  constructor(private router : Router,
    private requestToDb : DbServicesService) { }

  ngOnInit(): void {
    this.registrationForm.get('imageName')?.disable();
    this.requestToDb.goGetRequest('country','').subscribe(data=>{
      //load country data.
      this.countryList = data;
    },error => {
      console.error(error);
    });
  }


  //fetch state, city data.
  fetchLocationName(request:string){
    if(request === 'state'){
      this.countryName = this.registrationForm.get("countryName")?.value;
      this.requestToDb.goGetRequest('state',this.countryName.id).subscribe(data=>{
        this.stateList = data;
      });
    }else if(request === 'city'){
      this.stateName = this.registrationForm.get("stateName")?.value;
      this.requestToDb.goGetRequest('city',this.stateName.id).subscribe(data=>{
        this.cityList = data;
      });
    }else if(request === 'citystore'){
      this.cityName = this.registrationForm.get("cityName")?.value;
    }
  }

  //redirect user to login page.
  backToLogin(){
    this.router.navigate(['/login']);
  }

  //reset all values of form.
  resetForm(){
    this.registrationForm.reset();
  }

  openFileModule(){
    document.getElementById("imgFile")?.click();
  }

  //check confirm password
  checkConfirmPassword(){
    let confirmpassword = this.registrationForm.get('confirmPassword')?.value;
    let pswd = this.registrationForm.get('password')?.value;
    if(pswd !== confirmpassword){
      this.notMatch = true;
    }else{
      this.notMatch = false;
    }
  }

  //load image data.
  public imageChange(event: any) {
    this.userImage = event.target.files[0];
    const reader = new FileReader();
    this.imgInfo.name = this.userImage.name;
    this.registrationForm.get("imageName")?.setValue(this.imgInfo.name);
    this.imgInfo.size = this.userImage.size;
    this.imgInfo.type = this.userImage.type;
    reader.readAsDataURL(this.userImage);
    reader.onload = () => {
      this.imgInfo.avtar = (reader.result as string);
    }
  }

  //submit registration data.
  submitForm(){
    let data = {
      title: this.registrationForm.get("title")?.value,
      gender: this.registrationForm.get("gender")?.value,
      firstName: this.registrationForm.get("firstname")?.value,
      lastName: this.registrationForm.get("lastname")?.value,
      number: this.registrationForm.get("phoneNumber")?.value,
      email: this.registrationForm.get("email")?.value,
      password: this.registrationForm.get("password")?.value,
      avatar: this.imgInfo.avtar,
      country: this.countryName.name,
      state: this.stateName.name,
      city: this.cityName.name
    }
    this.requestToDb.goPostRequest('register',data).subscribe(response=>{
      this.requestToDb.openSocket(data.email);
      this.router.navigate(['/activation-popup'],{queryParams:{id:this.registrationForm.get("email")?.value}});
    },error => {
      console.log(error);
    });
  }
}
