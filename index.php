<html>
<head>
    <!--------------------------- Meta Tags------------------------------>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="HandheldFriendly" content="true" />

    <!-- Import dependencies -->
    <!-- Give our page some style! -->
    <link rel="stylesheet" media="screen and (min-width: 601px)" href="css/desktop.css" />
    <link rel="stylesheet" media="screen and (max-width: 600px)" href="css/mobile.css" />
    <!-- Give our page some programming logic! -->
    <script src="js/jquery.min.js"></script>
    <script src="js/jquery-ui.js"></script>
    <script src="js/functions.js"></script>
<head>
<body>
    <center><img src="images/title.png" id="title_image" /></center>
    <div id="main">
    </div>
    <div id="input">
        <textarea type="text" name="chat_input" id="chat_input" value=""></textarea>&nbsp;&nbsp;<button id="submit" onclick="post_input(); return false;">Send</button>
    </div>
</body>
</html>
