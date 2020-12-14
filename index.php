<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="style.css">
    <script src="main.js" defer></script> 
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <main>
        <div id="title">Vind nieuws</div>
        <div id="formContainer">
            <form action="#" onsubmit="fetchArticles(); return false">
                <input type="text" name="inputTekst" id="inputTekst">
                <input type="submit" value="Zoek">
            </form>
        </div>
        <div id="newsContainer"></div>
    </main>
</body>
</html>