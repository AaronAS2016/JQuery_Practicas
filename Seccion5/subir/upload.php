<?php
echo "Subiste un archivo: ". $_FILES['file']['name'];
move_uploaded_file($_FILES['file']['tmp_name'], $_FILES['file']['name']);
 ?>
