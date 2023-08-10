<?php
$files = scandir("../../src/images/posts");
array_splice($files, 0, 2);
echo json_encode($files);
?>