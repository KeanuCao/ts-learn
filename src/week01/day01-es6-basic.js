//let and const
if (true){
    let a = 1;
    const b = 2;
    console.log(a,b);
}

const student_a0 = {name:"小明", days :0};
student_a0.days = 1;
console.log(student_a0);


//箭头函数
const add = (a,b) => a + b;
console.log (add(2,3));

const counter = {
    count: 0,
    start() {
        setTimeout(()=> {
            this.count++;
            console.log(`count : ${this.count}`);
            console.log("In start",new Date());
        },1000)
    }
};
console.log(new Date());
counter.start();
counter.start();
counter.start();

//模板字符串
const name = 'xiaoming';
const week = 1;
console.log(`第 ${week} 周, ${name}开始学习ts`);

//今日练习
const student = {name:"CaoTan",days : 0};
let week_var2 = 1;
const addDay = (student) => {
    student.days +=1;
    return `${student.name} 已经学习 ${student.days} 天`
};

console.log(`第 ${week_var2} 周开始`);
console.log(addDay(student));
console.log(addDay(student));


