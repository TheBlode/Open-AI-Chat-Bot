/*
 * Function Name: post_input
 * 29/01/2023 20:31:48
 * Function description
 */
function post_input() {
    // Disable input
    $("#chat_input").prop("disabled", true);

    // Grab the chat input
    var chat_input = $("#chat_input").val();

    // Clear the text input
    $("#chat_input").val("");
    
    // Append message to the chat window
    $("#main").append("<p class=\"right\" style=\"font-family: \"system-ui\";\>You: " + chat_input + "</p>");

    // Scroll to the new message
    var div = document.getElementById("main");
    div.scrollTop = div.scrollHeight;

    // Append loading symbols to the DOM to inform the userAgent
    $("#main").append('<div class="col-3"><div class="snippet" data-title="dot-flashing"><div class="stage"><div class="dot-flashing"><br /><br /></div></div></div></div>');

    // Scroll to the new message
    var div = document.getElementById("main");
    div.scrollTop = div.scrollHeight;

    // Disable inputs
    $("#chat_input").prop("disabled", true);
    $("#submit").prop("disabled", true);

    // Construct AJAX call
    $.ajax({
        url: "processing.php",
        type: "POST",
        data: {
            "input": chat_input
        },
        success: function(result) {
            // Remove loading symbols
            $(".col-3").html("");

            // Enable input
            $("#chat_input").prop("disabled", false);
    
            // Append result to the chat window
            $("#main").append("<p class=\"left\" style=\"font-family: \"system-ui\";\">" + result + "</p>");

            // Scroll to the new message
            var div = document.getElementById("main");
            div.scrollTop = div.scrollHeight;

            // Enable inputs
            $("#chat_input").prop("disabled", false);
            $("#submit").prop("disabled", false);

            // Focus the chat input
            //$("#chat_input").focus();
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // Remove loading symbols
            $(".col-3").html("");

            // Enable input
            $("#chat_input").prop("disabled", false);

            // Append result to the chat window
            $("#main").append("Error with the API.<br /><br />");

            // Enable inputs
            $("#chat_input").prop("disabled", false);
            $("#submit").prop("disabled", false);

            // Focus the chat input
            //$("#chat_input").focus();
        }
    });
}

// Attach event handler
document.addEventListener("DOMContentLoaded", function(){
    $("#chat_input").on("keyup", function (e) {
        if (e.key === "Enter" || e.keyCode === 13) {
            post_input();
        }
    });
});