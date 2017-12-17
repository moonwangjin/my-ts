"use strict";
// let myName:string = 'moon';
// // myName = 35;
// let myAge: number = 35;
//myAge = '35';
// let isHeCome: boolean = false;
// // isHeCome = 'true';
// let hisBag: string;
// //값을 할당하지 않으면 모든 데이터 타입이됨
// let heroes: any = ['Superman', "Hulk"];
// heroes = 22;
// //tuple
// let classB: [string,number] = ['st',20];
// console.log(classB);
// //enum
// enum Color {
//   Blue,
//   Green = 10,
//   Red
// }
// let color1 = Color.Green;
// console.log(color1);
// let batmanCar: any = 'k5';
// console.log(batmanCar);
// batmanCar = {maker: "KIA", manufactured:2017};
// console.log(batmanCar);
//function type == return type
// function returnMyName(): string {
//   return myName;
// }
// console.log(returnMyName);
// //function argument type
// function multiply(value1: number, value2: number):number{
//   return value1 * value2;
// }
// console.log(multiply(2,2));
// //function types
// let superMultiply: (a:number,b:number) => number; //input타입과 output타입을 둘다 지정해줘야함
// superMultiply = multiply; //function의 이름만 할당할것
// let resultMultiply = multiply(4,6);
// // superMultiply = returnMyName;
// console.log(resultMultiply);
// console.log(superMultiply);
// console.log(superMultiply(5,6));
// //Type of  Objects: Properties = key + value
// type heroName = {name:string; age:number; address:(arg:string) => string};
// // let heroOne:heroName = {name: 'superman', age:25};
// // let heroTwo:heroName = {name: 'superman', age:25,address:'seoul'};
// // let heroThree:heroName = {name: 'superman', age:25,address:'seoul'};
// //Union types
// let heroTeam: string[] | number[] = ['superman','Batman'];
// heroTeam = [102, 222];
////////////////////////////////////function//////
// class Hero {  
//   constructor(private name:string, public age:number){
//   }
//   get getName(){
//     return this.name;
//   }
//   password(arg1:number){
//     if (arg1 == 1234) {
//       this.sendMoney();
//     } else {
//       console.log('error');
//     }
//   }
//   private sendMoney() {
//     console.log("Hi, mom , this month salary");
//   }
// }
// let hero1 = new Hero('superman',27);
// // console.log(hero1.getName);
// // console.log(hero1.age);
// console.log(hero1.password(1234));
// //static property/////////////////////////////////
// class CalcConstants {
//  static PI: number = 3.14;  //static은 인스턴스에는 포함안됨.
//  static calcCircumference1(diameter:number){
//   return diameter * this.PI; //this는 클래스
// }
//  public calcCircumference2(diameter:number){//public은 인스턴스만 불러써야함 CalcConstants
//    return diameter * CalcConstants.PI; //this는 인스턴스
//  }
// }
// let calc1 = new CalcConstants;
// console.log(CalcConstants.PI);
// console.log(CalcConstants.calcCircumference1(10)); //static은 주어가 class
// console.log(calc1.calcCircumference2(20)); //public은 주어가 인스턴스
//////////////상속/////////////////////
// class Base {
//   hero:string = "Batman";
//   public action = function() {
//     console.log("Driving Batcar");    
//   }
//   motion(){
//     this.action();
//   }
// }
// let base1 = new Base;
//  console.log(base1.action());
// class Derived extends Base {
//   hero:string = "Robin";
//   action2() {
//     //super points to public or protected method.
//     this.action();
//     console.log("Running");    
//   }
// }
// let dev1 = new Derived;
// console.log(dev1.hero);
// console.log(dev1.action());
// ////////private Constructor and Singletons////
// class Single {
//   //static maeans class property, not instance property
//   static instance: Single; //static은 클래스에 딸려있는것
//   public readonly name :string;
//   public readonly age:number = 25;
//   private constructor( name:string){}
//   static getInstance(){
//      if(!Single.instance){
//        Single.instance = new Single('Wonderwoman');
//      }
//      return Single.instance;
//   }
// }
// //instance = data, memory in cpu, address
// //variable is a pointer poting a specific address.
// let singleOne = Single.getInstance();
// let singleTwo = Single.getInstance();
// console.log(singleOne === singleTwo);
// console.log(singleOne.name);
// console.log(singleTwo.name);
// //singleOne.name = 'ironman';
// console.log(singleTwo.name);
var Geometry;
(function (Geometry) {
    var PI = 3.14;
    function triangleArea(width, height) {
        return width * height * 1 / 2;
    }
    Geometry.triangleArea = triangleArea;
    function rectangleArea(width, height) {
        return width * height;
    }
    Geometry.rectangleArea = rectangleArea;
    function circleCircumference(diameter) {
        return diameter * PI;
    }
    Geometry.circleCircumference = circleCircumference;
    function circleArea(diameter) {
        //return (Math.pow(diameter/2, 2)) *PI;
        return Math.pow((diameter / 2), 2) * PI;
    }
    Geometry.circleArea = circleArea;
})(Geometry || (Geometry = {}));
console.log(Geometry.triangleArea(3, 8));
console.log(Geometry.rectangleArea(3, 8));
console.log(Geometry.circleCircumference(3));
console.log(Geometry.circleArea(3));
