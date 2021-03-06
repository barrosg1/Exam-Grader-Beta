<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../css/login.css">


    <title>Login</title>
</head>

<body>
    <div class="container">
        <div id="showMessage"></div>

        <div class="form-container" id="form-msg">
            <div class="form-input">
                <form>
                    <h1>Login</h1>

                    <label for="username"><b>UCID</b></label>
                    <input type="text" placeholder="Enter UCID" name="username" id="username" />
                    <p id="errorUsername" class="errorMessage"></p>

                    <label for="password"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" maxlength="20" name="password" id="password" />
                    <p id="errorPassword" class="errorMessage"></p>

                    <input type="button" name="submit" id="submit" value="Login" onclick="login()">
                </form>
            </div>
        </div>
    </div>

    <script src="login.js"></script>


</body>

</html>