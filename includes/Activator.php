<?php
namespace WPRCB;

use WPRCB\Database\ContactBook;

class Activator {
    public function activate() {
        $this->createTables();
    }

    public function createTables() {
        $contactBook = new ContactBook();
        $contactBook->create();
    }
}