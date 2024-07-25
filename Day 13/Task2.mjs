//Activity 1
//Task 2
export default {
    Name:"Vivek",
    Age:24,
    Profession:"Software Developer",
    State:"Delhi",
    getAllDetails:function(){
        return `Name:${this.Name}, Age:${this.Age}, Profession:${this.Profession}, State:${this.State}`
    },
    getNameAge:function()
    {
        return `Name:${this.Name}, Age:${this.Age}`
    }
}