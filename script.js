$("form").submit(function(e) {

      e.preventDefault();
	  
	  var empID=$("input[name='empID']").val();

      var name=$("input[name='name']").val();

      var email=$("input[name='email']").val();


       $(".data-table tbody").append("<tr data-empID='"+empID+"' data-name='"+name+"' data-email='"+email+"'><td>"+empID+"</td><td>"+name+"</td><td>"+email+"</td><td><button class='btn btn-danger btn-lg btn-delete mr-3' type='button'>Delete</button><button class='btn btn-info btn-lg btn-edit' type='button'>Edit</button></td></tr>");


       $("input[name='']").val("");

    });


    $('body').on('click','.btn-delete',function() {

      $(this).parents('tr').remove();

    });


    $('body').on('click','.btn-edit',function() {
	
	  var empID=$(this).parents('tr').attr('data-empID');

      var name=$(this).parents('tr').attr('data-name');

      var email=$(this).parents('tr').attr('data-email');
	  

      $(this).parents('tr').find('td:eq(0)').html("<input name='edit_ID' value='"+empID+"'>");

      $(this).parents('tr').find('td:eq(1)').html("<input name='edit_text' value='"+name+"'>");

      $(this).parents('tr').find('td:eq(2)').html("<input name='edit_email' value='"+email+"'>");


      $(this).parents('tr').find('td:eq(3)').prepend("<button type='button' class='btn btn-info btn-lg btn-update mr-3'>Update</button>");

      $(this).hide()

    });


    $('body').on('click','.btn-update',function() {
	
	  var empID=$(this).parents('tr').find("input[name='edit_ID']").val();

      var name=$(this).parents('tr').find("input[name='edit_text']").val();

      var email=$(this).parents('tr').find("input[name='edit_email']").val();

      $(this).parents('tr').find('td:eq(0)').text(empID);
	  
      $(this).parents('tr').find('td:eq(1)').text(name);

      $(this).parents('tr').find('td:eq(2)').text(email);
	  

      $(this).parents('tr').attr('data-empID',empID);

      $(this).parents('tr').attr('data-name',name);

      $(this).parents('tr').attr('data-email',email);


      $(this).parents('tr').find('.btn-edit').show();

      $(this).parents('tr').find('.btn-update').remove();



    })
