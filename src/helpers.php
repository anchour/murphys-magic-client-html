<?php

function view($filename) {

  return require(__DIR__ . "/../views/{$filename}.php")
  
}