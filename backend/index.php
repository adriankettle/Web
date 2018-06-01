<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
</head>
<body>
<h3>Ajax & PHP</h3>
<form>
    <table>
        <tr>
            <td>First Name:</td>
            <td><input type="text" id="first_name" name="first_name"></td>
        </tr>
        <tr>
            <td>Last Name:</td>
            <td><input name="last_name" id="last_name" type="text"></td>
        </tr>
        <tr>
            <td><input type="submit" name="myBtn" value="Submit Data" onclick="javascript:ajax_post();"></td>
        </tr>
    </table>
    <div id="status"></div>
</form>
<script type="javascript" src="js/app.js"></script>
</body>
</html>