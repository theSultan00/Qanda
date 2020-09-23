const faculty = document.querySelector("#faculty");

const department = document.querySelector("#department");

const year = document.querySelector("#year");

const level = document.querySelector("#level");

const semester = document.querySelector("#semester");

const course = document.querySelector("#course-code");

const search = document.querySelector("#search-button");

let obj = [
    { arts:{
        englishlanguage:{
            tt2:{
                hun:{
                    first:{
                        ELS101:"i think i did a good job setting you up"
                    }
                }
            }
        }
      } 
    }
];


search.addEventListener("click",function(){
    let a=faculty.value;
    let b= department.value;
    let c= year.value;
    let d =  level.value;
    let e  = semester.value;
    let f = course.value;

    if(faculty.value.length === 0 || department.value.length === 0 || year.value.length === 0 || level.value.length === 0 || semester.value.length === 0){
        console.log("coconut head");
    }else{
    
     console.log( obj[0].a);
    };
    
});

