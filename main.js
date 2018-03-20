
var input = $('.inputTask');

input.on('keypress', addTask);

var input = $('.inputTask');

input.on('keypress', addTask);


function addTask(e) {

 if (e.keyCode === 13) {

   e.preventDefault();
   var content = $('.inputTask').val().trim();
   console.log(content);

   if (content != "") {
     var liElement = $('<li>' + content + '</li>');
     $('.todo-list').append(liElement);
     liElement.addClass('todoLi');
     $('.inputTask').val("");
     liElement.on('click', doneTask);


   }
 }

}



function doneTask(e) {
	 
	var task = $(e.currentTarget);
	
	if(task.hasClass('todoLi')){
		
		task.removeClass('todoLi');
		task.addClass('doneLi');
		$('.done-list').append(task);
		
	} else if(task.hasClass('doneLi')){

		task.removeClass('doneLi');
		task.addClass('todoLi');
		$('.todo-list').append(task);
		
	}

console.log(task);
	
} 

var buttonClear  = $('.clear-all');
buttonClear.on('click', clearAll);

function clearAll(e) {

	$('.todo-list').remove();
	$('.done-list').remove();
}

var buttonClearDone = $('.clear-done');
buttonClearDone.on('click', clearDoneList);

function clearDoneList(e) {

	$('.done-list').remove();
}


// function addTask(e){

// 	if( e.keyCode === 13){
		
// 		event.preventDefault();
// 		var content = $('.inputTask').val().trim();
// 		console.log(content);
	
// 		if(content != ""){

// 			$('.todo-list').append('<li></li>');
// 			$('li').addClass('todoLi');
// 			$('.todoLi').last().append(content); // FALLO GARRAFAL AÑADIENDO DOS APPEND, DOS HIJOS A UN UL
// 			$('.inputTask').val("");
// 			var task = $('li');
// 			task.on('click',doneTask);

// 		}
// 	 }

// }