<?php
// Get input from the user
if (isset($_REQUEST["input"])) {
    $input = $_REQUEST["input"];
} else {
    // Set input to empty value
    $input = "";
}

// Check if we have input...if not, exit!
if (empty($input)) {
    return "Sorry...I didn't receive any input.";

    // Exit!
    exit;
}

// Write input and output to a file
log_chat($input);

// Send input to OpenAI's Davinci model.
$output = shell_exec("node /var/www/html/friend_bot/openai_friendbot.js \"$input\"");

// Write input and output to a file
log_chat($output);

echo $output;

// Exit!
exit;

/*
 * Function Name: log_chat
 * 29/01/2023 21:01:40
 * Function Description
 * @param - $input - what we'd like to log
 * @return - nothing.
 */
function log_chat($input) {
    // Remove new lines
    $input = preg_replace("/\n/", "", $input);

    // Get current time
    $time = getTimeStamp();

    // Concatenate time and task to a variable
    $log_input = "$time: $input\n";

    // Write task to output file
    file_put_contents("friend_bot_chat.txt", $log_input, FILE_APPEND);

    // We're done!
    return;
}

/*
 * Function Name: getTimeStamp
 * 09/11/19
 * Function Description: generate time stamp
 */
function getTimeStamp() {
    return date("d-m-Y_H_i-s");
}
?>