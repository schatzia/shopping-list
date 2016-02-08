$(document).ready(function() {
	$('input').click(function(){
		$('input').val('');
	})
	.keyup(function(event){
		if (event.which == 13){
			$('.shopping-list').prepend("<li class='list-item unchecked' style='display: none;'><i class='fa fa-chevron-right arrow-right'></i><span class='item-name'>" + $(this).val() + "</span><i class='fa fa-times delete-item'></i></li>");
			$('.shopping-list li:first-child').hide().fadeIn(1000);
			$('input').val('Type your text here!').blur();
		}
		$('button').click(function(){
			$('.list-item').remove();
		});
	});
	$(document).on('click', '.item-name', function(){
		if($(this).closest('li').hasClass('checked')){
			$(this).siblings('i.fa-check').removeClass('fa-check').addClass('fa-chevron-right').load();
			$(this).closest('li').removeClass('checked').addClass('unchecked').load();
		}
		else{
			$(this).siblings('i.fa-chevron-right').removeClass('fa-chevron-right').addClass('fa-check').load();
			$(this).closest('li').removeClass('unchecked').addClass('checked').load();
		}
	});
	$(document).on('click','.delete-item', function(){
		$(this).closest('li').fadeOut(500, function(){remove();});
	});
});
