<?php
if($_SERVER['REQUEST_METHOD'] == 'POST') {
$MainLine = 0;
    for ($i = 1; $i <= 9; $i++) {
        if ($i == 5 or $i == 9) {
            $MainLine += $_POST["$i" . "a"];
        }
    }
    echo "Главная магистраль: " . $MainLine;
}
?>
<html>
<form action="" method = "POST">
    <input type="number" name = "1a" >
    <input type="number" name = "2a" >
    <input type="number" name = "3a" ><br>
    <input type="number" name = "4a" >
    <input type="number" name = "5a" >
    <input type="number" name = "6a" ><br>
    <input type="number" name = "7a" >
    <input type="number" name = "8a" >
    <input type="number" name = "9a" ><br>

    <button type="submit" name="button">Рассчитать главную магистраль</button>
</form>

</html>

<!-- 08.12.23 -->