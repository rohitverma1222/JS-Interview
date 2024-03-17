class person{
    constructor(name,age)
    {
        this.Name=name;
        this.Age=age;
    }
    showDetails()
    {
        console.log(this.Name +" "+this.Age);
    }
}
let per=new person("rohit",21);
per.showDetails();