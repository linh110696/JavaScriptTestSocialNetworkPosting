$(document).ready(() => {
    // Word counter: 140 characters
    $("textarea.postText").on("input", function(){
        $("span.characters").text(140-$("textarea.postText").val().length);
        if ($("textarea.postText").val().length >= 140){
            //change to red when past 140 characters
            $("p.wordcount").css("color", "red");
        }
        else {
            $("p.wordcount").css("color", "gray");
        };
    });
    // event with +1 button, change color when hover, click, add toggle to change weather you liked to post
    $(".btn")
        .on("mouseenter", function(){
            $(this)
                .addClass("btn-hover")
        })
        .on("mousedown", function(){
            $(this)
                .addClass("btn-clickdown")
        })
        .on("mouseleave", function(){
            $(this)
                .removeClass("btn-hover")
                .removeClass("btn-clickdown")
        })
        .on("click", function(){
            $(this).toggleClass("btn-toggle")
        })
    // event with post and word count button, similar to +1 in color event, add event to add posted thread to the page (this event is not completed)
    $(".btn-post")
        .on("mouseenter", function(){
            $(this)
                .css("background-color", "blue")
                .css("color", "white")
        })
        .on("mousedown", function(){
            $(this)
                .css("background-color", "orange")
                .css("color", "black")
        })
        .on("click", function(event){
            // stop submit default event
            event.preventDefault();
            // alert when typed more than 140 characters
            if ($("textarea.postText").val().length > 140) {
                alert("You cannot post more than 140 words")
            }
            else if ($("textarea.postText").val().length === 0){
                alert("You must type something before posting")
            }
            //append mulitpie nested element
            else{
                var newButton = $("<button>", {"class":"btn", text: "+1"});
                var textpost = $("textarea.postText").val();
                newButton
                .on("mouseenter", function(){
                    $(this)
                        .addClass("btn-hover")
                })
                .on("mousedown", function(){
                    $(this)
                        .addClass("btn-clickdown")
                })
                .on("mouseleave", function(){
                    $(this)
                        .removeClass("btn-hover")
                        .removeClass("btn-clickdown")
                })
                .on("click", function(){
                    $(this).toggleClass("btn-toggle")
                });
                $(".posts").append(
                    $("<div>", {"class":"container row justify-content-center"}).append(
                        $("<div>", {"class":"post col-12"})
                            .append(
                                $("<div>", {"class":"row"})
                                    .append(
                                        $("<img>", {"class":"avatar col-2", "src":"images/profile-purple.svg"})
                                    )
                                    .append(
                                        $("<h3>", {"class":"col-10",text:"Someone's name"})
                                    )
                            ) 
                            .append(
                                $("<p>", {text: textpost})
                            )
                            .append(
                                newButton
                            )
                    )                
                )
                $("textarea.postText").val("");
            }
        })
        .on("mouseleave", function(){
            $(this)
                .css("background-color", "white")
                .css("color", "blueviolet")
        });
});