let patient ={
    name:"yujin", //key값 : value
    age:39,
    disease:"cold"
}
console.log(patient.age)
console.log(patient["age"])

patient.name="JB"
patient["age"]=47
console.log(patient)

let patientList=[{name:"YJ",age:33},{name:"JB",age:48}]
console.log(patientList)
console.log("첫번재 환자의 나이는:", patientList[0].age)