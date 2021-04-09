<?php
namespace WPRCB\Database;

class ContactBook {
    public function create() {
        global $wpdb;
        $tableName = $wpdb->prefix . 'wprcb_contact_book';
        $charset_collate = $wpdb->get_charset_collate();

        $sql = "CREATE TABLE $tableName ( 
          `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT, 
          `name` VARCHAR(100) NOT NULL , 
          `email` VARCHAR(100) NOT NULL ,
          `phone` VARCHAR(30) NULL DEFAULT NULL , 
          `address` VARCHAR(255) NULL DEFAULT NULL , 
          `created_by` BIGINT(20) UNSIGNED NOT NULL ,
          `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
          `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
          PRIMARY KEY (`id`) 
      )  $charset_collate";
  
      require_once ABSPATH . 'wp-admin/includes/upgrade.php';
      dbDelta( $sql );
    }
}