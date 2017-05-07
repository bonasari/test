/*$(document).ready(function(){
    $('.category_item').click(function(){
        var category = $(this).attr('id');
        
        if(category == 'all'){
            $('.produk_item');
            setTimeout(function(){
                $('.produk_item').removeClass('hide');
            }, 500);
        } else{
            $('.produk_item').addClass('hide');
            setTimeout(function(){
                $('.'+ category).removeClass('hide');
            }, 300);
        }
    });
});*/


/*$(document).ready(function(){
	$('.produk_item').addClass('hide');
	setTimeout(function(){
        $('.bulb').removeClass('hide');
    }, 300);

    $('.category_item').click(function(){
        var category = $(this).attr('id');
        
            $('.produk_item').addClass('hide');
            setTimeout(function(){
                $('.'+ category).removeClass('hide');
            }, 300);
       
    });
});*/

/*$(document).ready(function(){    
	$('.portfolio-item').hide();
        $('.bulb').show();
   	$("#bulb").css('background-color', '#76e895');
	
    	$('.portfolio-filter').click(function(){
        	var category = $(this).attr('data-filter');
        	$('.portfolio-filter').css('background-color', '#f2f2f2');
        
            	$('.portfolio-item').hide();
            	$('.down').show();
            	$("#"+ category).css('background-color', '#76e895');
               
    	});
});*/

// portfolio filter
	$(window).load(function(){'use strict';
		var $portfolio_selectors = $('.portfolio-filter >li>a');
		var $portfolio = $('.portfolio-items');
		$portfolio.isotope({
			itemSelector : '.portfolio-item',
			layoutMode : 'fitRows',
            filter : '.bulb'
		});
		
		$portfolio_selectors.on('click', function(){
            var $this = $(this);
            
            // don't proceed if already selected
            if ($this.hasClass('active')){
                return;
            }
            
			$portfolio_selectors.filter('.active').removeClass('active');
			$this.addClass('active');
            
            //get selector form data-filter attribute
			var selector = $this.data('filter');
            
			$portfolio.isotope({ filter: selector });
			return false;
		});
	});

