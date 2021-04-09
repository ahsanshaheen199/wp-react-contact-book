<?php
namespace WPRCB\Models;
use WeDevs\ORM\Eloquent\Model;

class Contact extends Model {
    protected $table = 'wprcb_contact_book';

    public function getTable()
    {
        // In this example, it's set, but this is better in an abstract class
        if ( isset( $this->table ) ){
            $prefix =  $this->getConnection()->db->prefix;
            
            return $prefix . $this->table;
        }

        return parent::getTable();
    }
}