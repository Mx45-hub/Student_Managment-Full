import{x as o,y as e}from"./indexhtml-d5fffb38.js";import{u as g,a as s,k as n,T as d,B as j,c as p,S as h}from"./Button-5674e289.js";import{a as f,C as w,F as y}from"./ComboBox-a9fe7566.js";function E(){o.useState([]);const[u,l]=o.useState(""),{model:t,submit:i,field:a,addValidator:v}=g(h,{onSubmit:async r=>{try{await p(r.studentcode,r.StudentName,r.Studentsurname,r.Studentage,r.grade,r.availablility,r.course)}catch{l("An error occurred while updating the student: ")}}}),c=s(t.studentcode),m=s(t.StudentName),S=s(t.Studentsurname);s(t.Studentage),s(t.grade),s(t.availablility);const x=s(t.course);o.useEffect(()=>{c.addValidator(new n({message:"Please enter student code!"})),m.addValidator(new n({message:"Please enter a student name"})),S.addValidator(new n({message:"Please enter a student surname"})),x.addValidator(new n({message:"Please enter a student course"}))},[]);const b=["Software Engineering","Web Development","DevOPS","Data Engineering"];return e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsxs(f,{children:[e.jsx("h2",{children:"Please Update student here:"}),e.jsxs("p",{children:["Add Student code, Student will be found automatically.",u]}),u&&e.jsx("p",{children:u}),e.jsx(d,{required:!0,label:"Student code",...a(t.studentcode)}),e.jsx(d,{required:!0,defaultValue:"sergio",label:"Student name",...a(t.StudentName)}),e.jsx(d,{required:!0,label:"Student surname",...a(t.Studentsurname)}),e.jsx(d,{label:"Student Age",...a(t.Studentage)}),e.jsx(d,{label:"Student Grade",...a(t.grade)}),e.jsx(w,{label:"Availability",...a(t.availablility)}),e.jsx(y,{allowCustomValue:!0,label:"Student course",...a(t.course),helperText:"Select or type a browser",items:b}),e.jsx(j,{onClick:i,children:"Save"})]})})})}export{E as default};