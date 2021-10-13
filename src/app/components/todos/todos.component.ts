import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/todo';
import {CompletedTodos} from './../../models/completedTodos'
import $ from "jquery";
import { TodosService } from './../../services/todos.service';



@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:any;
  completedTodos:any;
  inputTodo:string = "";
  updateTodo:string = "";


  constructor(private todoService: TodosService) { }

  ngOnInit(): void {
    this.todoService.getAllTodos().subscribe((data)=>{
     
      this.todos = data;
      

    });
    
    this.completedTodos = [];
  }

  toggleDone (id:number){
    this.todos.map((v,i) => {
      if (i == id) 
      {
        v.completed = !v.completed;
      }
      return v;
    })

    let doneTodo =  this.todos[id];
    this.todos.splice(id,1);
    this.completedTodos.push({
      title: doneTodo.title,
      completed: doneTodo.completed
    })

    console.log(this.completedTodos.length);

  }

  deleteTodo (id:number){
    this.todos = this.todos.filter((v,i) => i !== id);
  }

  addTodo()
  {
    this.todos.push({
      title: this.inputTodo,
      completed: false
    })
  }

  keyDownFunction(event) {
    if (event.keyCode === 13) {
      this.addTodo();
      $(".todo-input").val("");
      $(".todosItemAddWrapper").hide();
    }
  }

  editTodo(i)
  {
    let elm = "[data-id='"+ i +"']";
    
    $(elm).find(".todoItemsContent").hide();
    $(elm).find(".todoItemEditText").show();
  }

  updateTodoData(event, i){
    if (event.keyCode === 13) {

      this.updateTodos(i);
      console.log("Enter Works...")
      
    }
  }

  updateTodos(i)
  {
    console.log(this.todos[i]);
    let elm = "[data-id='"+ i +"']";
    $(elm).find(".todoItemsContent").show();
    $(elm).find(".todoItemEditText").hide();

    console.log(this.updateTodo);
  }

  showAddInput()
  {
    $(".todosItemAddWrapper").show();
  }
  
  toggleActive(id:number){

    let elm = "[data-id='"+ id +"']";

    if( $(elm).hasClass("active"))
    {
      $(elm).removeClass("active");
    }
    else
    {
      $(elm).addClass("active");
    }
    
  }

  

}
