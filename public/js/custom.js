jQuery(function($) {
    // $("#create").on('click', function(event){
    //     event.preventDefault();
    //     var $stickynote = $(this);
    //     $.post("stickynotes/add", null,
    //         function(data){
    //             if(data.response == true){
    //                 $stickynote.before("<div class=\"sticky-note\"><textarea id=\"stickynote-"+data.new_note_id+"\"></textarea><a href=\"#\" id=\"remove-"+data.new_note_id+"\"class=\"delete-sticky\">X</a></div>");
    //             // print success message
    //             } else {
    //                 // print error message
    //                 console.log('could not add');
    //             }
    //         }, 'json');
    // });

    $('.del').on('click',function(event){
        //console.log("dsadaas");
        event.preventDefault();
        // var $album = $(this);
        var delete_id = $(this).attr('id');
        delete_id = delete_id.replace("remove-","");
        //console.log(delete_id);

        $.post("album/delete", {
            id: delete_id
        },
        function(data){
            if(data.response == true)
            {
                console.log('success!', data.id);
                $('#album' + data.id).remove();
                
            }  
            else{
                // print error message
                console.log('could not remove ');
            }
        }, 'json');
    });

    // $('#sticky-notes').on('keyup', 'textarea', function(event){
    //     var $stickynote = $(this);
    //     var update_id = $stickynote.attr('id'),
    //     update_content = $stickynote.val();
    //     update_id = update_id.replace("stickynote-","");

    //     $.post("stickynotes/update", {
    //         id: update_id,
    //         content: update_content
    //     },function(data){
    //         if(data.response == false){
    //             // print error message
    //             console.log('could not update');
    //         }
    //     }, 'json');

    // });
});