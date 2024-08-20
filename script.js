// OOP Task
// Employe adinda bir class yaradirsiz ad position salary qebul eden constructor qurun
// daha sonra details deye function qurun burda name position ve salary dinamik olaraq versin
// daha sonra ele bir functionn qurun ki ona faiz olaraq necese reqem verildiyinde hemin 
// iscinin maasina o qeder % artim olsun meselen 100 manat alirsa 50% gonderdikde 150m olsun
// elave olaraq bir static function qurun ve iki iscinin maaslarini muqayise elesin hansi coxdusa 
// onu qaytarsin

// class Employe{
//     constructor(name,position,salary){

//         this.name = name;
//         this.position= position
//         this.salary= salary
//     }

//     details(){
//         console.log(`${this.name},  ${this.position},  ${this.salary} $`);

//     }

//     percent(percent, name){
//         if(name == this.name){
//             this.salary += this.salary * (percent/100)
//            // console.log(`${this.salary}`);
//             this.details()


//         }
//     }

//     static comparison(personA, personB){


//         this.salary = personB.salary
//         if(personA.salary > personB.salary){

//           this.salary = personA.salary

//         }

//            return this.salary  



//     }
// }

// const person1 = new Employe("Sema", "Ceo", 2500)

// person1.percent(15, "Sema")
// const person2 = new Employe("Fatma", "Ceo2", 3500)

// person2.percent(25, "Fatma")

// console.log(Employe.comparison(person1, person2),"$");


/////////////////////////////////
// Manager , AdministrativeStaff  adinda classlar yaradin ve onlarinda 
// constructorunda name salary position olsun ve detail deye func olsun orda
// constructorda gelen  name salary position haqqinda melumati eks etdirsin


// class Manager{
//     constructor(name,position,salary){
//         this.name = name
//         this.position = position
//         this.salary = salary
//     }


// }

// class AdministrativeStaff extends Manager{

//     details(){

//         console.log(`${this.name}, ${this.position}, ${this.salary}`);

//     }

// }

// const personDetail = new AdministrativeStaff("Sema", "muellim", 2300)

// personDetail.details()



/////////////////////////////////////////////////////////////

// Company adinda class yaradin constructor olaraq name qebul etsin ve gelen name 
// uygun olaraq butun iscileri ozunde toplayan array qurun  company classi daxilinde

// butun isciler haqqinda melumat veren function olsun
// Sirketin toplam verilen maasini hesablayan function olsun
// en cox maas alan isci haqqinda melumat veren function olsun 



class Company {
    constructor(name) {

        this.name = name
        this.array = JSON.parse(localStorage.getItem("worker")) || []
    }



    workers() {

        while (true) {
            const name1 = prompt("Ad daxil edin")

            if (name1 === "done") {

                break;
            }
            const salary1 = +prompt("Maas daxil edin")



            this.array.push({ name1, salary1 })
            localStorage.setItem("worker", JSON.stringify(this.array))

        }

        return this.array

    }

    workerInfo() {

        return this.array

    }

    totalSalary(){
        let total = 0
        this.array.forEach((item)=> total+= item.salary1)
        console.log(`total salary = ${total}`);        
    }
    
    richWorker() {

        if (this.array.length === 0) {
            return null;
        }
    
        let richWorker = this.array.reduce((max, employee) => 
            employee.salary1 > max.salary1 ? employee : max
        );
    
        console.log(richWorker);
        // return richWorker;
    }



}

const personals = new Company("Tech")

// console.log(personals.workers());

// console.log(personals.workerInfo());

// personals.totalSalary()

personals.richWorker()



