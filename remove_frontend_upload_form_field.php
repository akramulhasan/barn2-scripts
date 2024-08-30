<?php

/**
 *
 * Related: Document Library Pro ( DLP )
 *
 * Usage: Remove any field from the Frontend Uploading form
 * 
 * Ref: https://barn2.com/kb/dlp-hooks-and-filters/#document_library_pro_form_fields
 *
 * How to use: Here you can learn how to add a custom script to your site
 * https://barn2.com/kb/using-code-snippets/
 */

add_filter('document_library_pro_form_fields', function ($fields) {
  // Remove the tags field from the form
  unset($fields['tags']);

  return $fields;
}, 10);
