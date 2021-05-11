var name_of_people = [];
function submit(){
    var name = document.getElementById("name_get").value;
    name_of_people.push(name);
    console.log(name_of_people);
    document.getElementById("list_with_coma").innerHTML=name_of_people;
}
function show(){
    var display_names_array = [];
    var length_of_names_array = name_of_people.length;
console.log(length_of_names_array);
for (k=0; k<length_of_names_array; k++){
    display_names_array.push(name_of_people[k]);
    console.log(display_names_array);
}
var remove_commas = display_names_array.join("<br>");
console.log(remove_commas);
document.getElementById("List_witout_comas").innerHTML=remove_commas;
}
function sorting(){
    name_of_people.sort();
    console.log(name_of_people);
    var display_names_array_sorting = [];
    var length_of_names_array = name_of_people.length;
console.log(length_of_names_array);
for (k=0; k<length_of_names_array; k++){
    display_names_array_sorting.push(name_of_people[k]);
    console.log(display_names_array_sorting);
}
var remove_commas = display_names_array_sorting.join("<br>");
console.log(remove_commas);
document.getElementById("List_witout_comas[Sorted]").innerHTML = remove_commas;
}
function searching() {
var s= document.getElementById("s_input").value;
var found=0;
var j;
for (j=0; j<name_of_people.length; j++){
    if(s==name_of_people[j]){
found=found+1;
    }
}    
document.getElementById("name_found").innerHTML="name found"+found+"time/s";
console.log(found);
}