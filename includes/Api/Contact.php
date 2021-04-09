<?php
namespace WPRCB\Api;

use WP_REST_Controller;
use WP_REST_Server;
use WP_Error;
use WP_REST_Request;
use WP_REST_Response;
use WPRCB\Models\Contact as ModelsContact;

class Contact extends WP_REST_Controller {
    public function __construct(){
        $this->namespace     = 'wprcb/v1';
        $this->rest_base     = 'contacts';
    }

    public function register_routes(){
        register_rest_route(
            $this->namespace,
            '/'. $this->rest_base,
            [
				[
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => [$this, 'index' ],
					'permission_callback' => [$this, 'permissionCheck']
                ],
                [
					'methods'             => WP_REST_Server::CREATABLE,
					'callback'            => [$this, 'store' ],
					'permission_callback' => [$this, 'permissionCheck']
                ],

            ]
        );

        register_rest_route($this->namespace, '/contact/(?P<id>[\d]+)', [
            [
                'methods'   => WP_REST_Server::READABLE,
                'callback'  => [$this, 'show'],
                'permission_callback' => [$this, 'permissionCheck'],
            ],
            [
                'methods'   => 'PUT, PATCH',
                'callback'  => [$this, 'update'],
                'permission_callback' => [$this, 'permissionCheck'],
            ],
            [
                'methods'   => WP_REST_Server::DELETABLE,
                'callback'  => [$this, 'destroy'],
                'permission_callback' => [$this, 'middleware'],
            ],
        ]);
    }

    public function index(){
        $contacts = ModelsContact::all()->toArray();
        return new WP_REST_Response(['contacts' => $contacts]);
    }

    public function store(WP_REST_Request $request) {
        $request = json_decode($request->get_body());

        $contact = new ModelsContact();

        $contact->name          = $request->name ?? 'Untitled Name';
        $contact->email         = $request->email;
        $contact->phone         = $request->phone;
        $contact->address       = $request->address;
        $contact->created_by    = is_user_logged_in() ? get_current_user_id() : 0;
        $contact->save();

        return new WP_REST_Response(['contact' => $contact, 'message' => __('Contact created', 'wprcb')]);
    }

    public function show( WP_REST_Request $request ) {

    }

    public function update( WP_REST_Request $request ) {

    }

    public function destroy( WP_REST_Request $request ) {

    }

    public function permissionCheck() {
        return true;
        if ( ! current_user_can( 'manage_options' ) ) {
			return new WP_Error(
				'rest_forbidden',
				__( 'Sorry, you are not allowed' ),
				array( 'status' => rest_authorization_required_code() )
			);
		}
    }
}