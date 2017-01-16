const MockData = {
    "applets": {
        "dad0d1a4": {
            "icon_url": "",
            "user_group": {
                "name": "Customer Service",
                "id": "dbc0ffa9"
            },
            "last_change": {
                "date": "2016-03-28T20:34:40",
                "user": {
                    "code": "admin",
                    "id": "d9f3a9a9"
                }
            },
            "description": "Calculates the monthly repayments for a mortgage",
            "default_submission_status": "accepted",
            "mode": "form",
            "scope": "private",
            "name": "Mortgage Calculator",
            "reference_code": "2312f22c-f524-11e5-9307-17d426000b34",
            "realm": {
                "id": "dad0ffa9"
            },
            "id": "dad0d1a4",
            "created_date": "2016-03-28T20:34:40",
            "user": {
                "code": "admin",
                "id": "d9f3a9a9"
            },
            "status": "live"
        },
        "dad0d1a5": {
            "icon_url": "",
            "user_group": {
                "name": "Customer Service",
                "id": "dbc0ffa9"
            },
            "last_change": {
                "date": "2016-03-29T08:24:18",
                "user": {
                    "code": "rd@pmglobaltechnology.com",
                    "id": "d9e3a9a9"
                }
            },
            "description": "Activate a hardware token for an existing customer",
            "default_submission_status": "accepted",
            "mode": "form",
            "pages": [
                {
                    "name": "Token Activation Request",
                    "fieldsets": [
                        {
                            "name": "Account Details",
                            "fields": [
                                {
                                    "name": "Account Name",
                                    "type": "text",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": false,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "account_name"
                                },
                                {
                                    "name": "Account Number",
                                    "type": "number",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": false,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "account_number"
                                },
                                {
                                    "name": "Mobile Number",
                                    "type": "phone",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": false,
                                        "min_length": "11",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "11",
                                        "max_value": ""
                                    },
                                    "key": "mobile_number"
                                },
                                {
                                    "name": "Email Address",
                                    "type": "email",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": false,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "email_address"
                                },
                                {
                                    "name": "Udirect User ID",
                                    "type": "text",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": false,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "udirect_user_id"
                                },
                                {
                                    "name": "Token Serial Number",
                                    "type": "number",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": false,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "toekn_serial_number"
                                },
                                {
                                    "name": "Customer Signature",
                                    "type": "signature",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": false,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "customer_signature"
                                }
                            ]
                        },
                        {
                            "name": "For Official Use Only",
                            "fields": [
                                {
                                    "name": "Sol ID",
                                    "type": "text",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": false,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "sol_id"
                                },
                                {
                                    "name": "Location of BO",
                                    "type": "text",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": false,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "bo_location"
                                },
                                {
                                    "name": "Designation",
                                    "type": "select",
                                    "parameters": {
                                        "template_key": "",
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "is_required": false,
                                        "dataset": {
                                            "name": "Designation",
                                            "id": "dad0c1ee"
                                        },
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "designtion"
                                },
                                {
                                    "name": "Name",
                                    "type": "text",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": false,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "name"
                                },
                                {
                                    "name": "Signature",
                                    "type": "signature",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": false,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "signature"
                                },
                                {
                                    "name": "Employee ID",
                                    "type": "text",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": false,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "employee_id"
                                },
                                {
                                    "name": "Designation",
                                    "type": "select",
                                    "parameters": {
                                        "template_key": "",
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "is_required": false,
                                        "dataset": {
                                            "name": "Designation",
                                            "id": "dad0c1ee"
                                        },
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "official_designation"
                                },
                                {
                                    "name": "Name",
                                    "type": "text",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": false,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "official_name"
                                },
                                {
                                    "name": "Signature",
                                    "type": "signature",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": false,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "official_signautre"
                                },
                                {
                                    "name": "Employee ID",
                                    "type": "text",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": false,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "official_id"
                                }
                            ]
                        }
                    ]
                }
            ],
            "scope": "private",
            "root": "",
            "name": "Token Activation Request",
            "reference_code": "c99ebfcd-f524-11e5-9307-17d426000b34",
            "realm": {
                "id": "dad0ffa9"
            },
            "id": "dad0d1a5",
            "created_date": "2016-03-28T20:38:07",
            "user": {
                "code": "admin",
                "id": "d9f3a9a9"
            },
            "status": "live"
        },
        "dad0d1ed": {
            "icon_url": "",
            "user_group": {
                "name": "Sales & Marketing",
                "id": "dbc0f3a9"
            },
            "last_change": {
                "date": "2016-03-29T09:38:20",
                "user": {
                    "code": "rd@pmglobaltechnology.com",
                    "id": "d9e3a9a9"
                }
            },
            "description": "This form is used to enrol an existing customer for uDirect products and services.",
            "default_submission_status": "accepted",
            "mode": "form",
            "pages": [
                {
                    "name": "General Information",
                    "fieldsets": [
                        {
                            "name": "Specify one or more search values",
                            "fields": [
                                {
                                    "name": "User Specified BVN",
                                    "type": "text",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": false,
                                        "min_length": "15",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "15",
                                        "max_value": ""
                                    },
                                    "key": "search_bvn",
                                    "events": {
                                        "validate": "userScripts.exec('script_4')"
                                    }
                                },
                                {
                                    "name": "Last Name",
                                    "type": "text",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": true,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "50",
                                        "max_value": ""
                                    },
                                    "key": "last_name"
                                },
                                {
                                    "name": "First Name",
                                    "type": "text",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": true,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "50",
                                        "max_value": ""
                                    },
                                    "key": "first_name"
                                },
                                {
                                    "name": "Date of Birth",
                                    "type": "date",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": true,
                                        "min_length": "",
                                        "tooltip": "The date must be over 18 years and under 75 years",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "birth_date",
                                    "events": {
                                        "change": "userScripts.exec('script_5')"
                                    }
                                },
                                {
                                    "name": "Mobile Phone",
                                    "type": "phone",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": true,
                                        "min_length": "11",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "11",
                                        "max_value": ""
                                    },
                                    "key": "mobile_phone_number"
                                },
                                {
                                    "name": "Search",
                                    "type": "button",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": false,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "search.button"
                                }
                            ]
                        },
                        {
                            "name": "Personal Details",
                            "fields": [
                                {
                                    "name": "Passport",
                                    "type": "image",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": true,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "media.identity.passport_photo_source_url"
                                },
                                {
                                    "name": "Bank Verification Number",
                                    "type": "number",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": true,
                                        "min_length": "11",
                                        "tooltip": "The characters must be 11 digits",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "11",
                                        "max_value": ""
                                    },
                                    "key": "bank_verification_number"
                                },
                                {
                                    "name": "Title",
                                    "type": "select",
                                    "parameters": {
                                        "template_key": "",
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "is_required": true,
                                        "dataset": {
                                            "name": "titles",
                                            "id": "dad0d9a1"
                                        },
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "title"
                                },
                                {
                                    "name": "Other Name",
                                    "type": "text",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": false,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "50",
                                        "max_value": ""
                                    },
                                    "key": "other_name"
                                },
                                {
                                    "name": "Gender",
                                    "type": "select",
                                    "parameters": {
                                        "template_key": "",
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "is_required": true,
                                        "dataset": {
                                            "name": "gender",
                                            "id": "dad0dda5"
                                        },
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "gender"
                                },
                                {
                                    "name": "ID Card Number",
                                    "type": "text",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": true,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "20",
                                        "max_value": ""
                                    },
                                    "key": "id_number"
                                },
                                {
                                    "name": "Place of Birth",
                                    "type": "text",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": false,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "50",
                                        "max_value": ""
                                    },
                                    "key": "place_of_birth"
                                },
                                {
                                    "name": "National ID Number (NIN)",
                                    "type": "phone",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": false,
                                        "min_length": "16",
                                        "tooltip": "The characters must be 16 digits",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "16",
                                        "max_value": ""
                                    },
                                    "key": "national_id_number"
                                }
                            ]
                        },
                        {
                            "name": "Contact",
                            "fields": [
                                {
                                    "name": "Residential Address Line 1",
                                    "type": "text",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": true,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "100",
                                        "max_value": ""
                                    },
                                    "key": "address_line_one"
                                },
                                {
                                    "name": "State",
                                    "type": "select",
                                    "parameters": {
                                        "template_key": "",
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "is_required": true,
                                        "dataset": {
                                            "name": "states",
                                            "id": "dad0d9a0"
                                        },
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "state_code"
                                },
                                {
                                    "name": "Email Address",
                                    "type": "email",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": false,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "50",
                                        "max_value": ""
                                    },
                                    "key": "email_address"
                                }
                            ]
                        },
                        {
                            "name": "Next of Kin",
                            "fields": [
                                {
                                    "name": "NOK Title",
                                    "type": "select",
                                    "parameters": {
                                        "template_key": "",
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "is_required": true,
                                        "dataset": {
                                            "name": "titles",
                                            "id": "dad0d9a1"
                                        },
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "nok1.title"
                                },
                                {
                                    "name": "NOK Last Name",
                                    "type": "text",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": true,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "40",
                                        "max_value": ""
                                    },
                                    "key": "nok1.last_name"
                                },
                                {
                                    "name": "NOK First Name",
                                    "type": "text",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": true,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "80",
                                        "max_value": ""
                                    },
                                    "key": "nok1.first_name"
                                },
                                {
                                    "name": "NOK Other Name",
                                    "type": "text",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": false,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "80",
                                        "max_value": ""
                                    },
                                    "key": "nok1.other_name"
                                },
                                {
                                    "name": "NOK Relationship",
                                    "type": "select",
                                    "parameters": {
                                        "template_key": "",
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "is_required": true,
                                        "dataset": {
                                            "name": "relationships",
                                            "id": "dad0d9a4"
                                        },
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "nok1.relationship"
                                },
                                {
                                    "name": "NOK Mobile Phone",
                                    "type": "phone",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": true,
                                        "min_length": "11",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "11",
                                        "max_value": ""
                                    },
                                    "key": "nok1.mobile_phone_number"
                                },
                                {
                                    "name": "NOK Email Address",
                                    "type": "email",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": false,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "50",
                                        "max_value": ""
                                    },
                                    "key": "nok1.email_address"
                                }
                            ]
                        },
                        {
                            "name": "Debit / Prepaid Cards",
                            "fields": [
                                {
                                    "name": "What type of Debit Card are you applying for?",
                                    "type": "select",
                                    "parameters": {
                                        "template_key": "",
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "is_required": false,
                                        "dataset": {
                                            "name": "Debit Card Types",
                                            "id": "dad0d9ee"
                                        },
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "debit_card_type"
                                },
                                {
                                    "name": "What type of Prepaid Card are you applying for?",
                                    "type": "select",
                                    "parameters": {
                                        "template_key": "",
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "is_required": false,
                                        "dataset": {
                                            "name": "Prepaid Card Types",
                                            "id": "dad0c1ec"
                                        },
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "prepaid_card_type"
                                },
                                {
                                    "name": "Preferred Name on Card",
                                    "type": "text",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": false,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "card_preferred_name"
                                },
                                {
                                    "name": "Preferred Pickup Branch",
                                    "type": "select",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": false,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "card_branch"
                                },
                                {
                                    "name": "KYC Segmentation",
                                    "type": "select",
                                    "parameters": {
                                        "template_key": "",
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "is_required": false,
                                        "dataset": {
                                            "name": "KYC Categories",
                                            "id": "dad0c1ed"
                                        },
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "segmentation"
                                }
                            ]
                        },
                        {
                            "name": "Internet and Mobile Banking",
                            "fields": [
                                {
                                    "name": "Enable u-Direct?",
                                    "type": "select",
                                    "parameters": {
                                        "template_key": "",
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "is_required": false,
                                        "dataset": {
                                            "name": "yes_no",
                                            "id": "dad0c5ec"
                                        },
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "udirect_enabled"
                                },
                                {
                                    "name": "Preferred User ID",
                                    "type": "text",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": false,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "udirect_userid"
                                },
                                {
                                    "name": "Enable u-Mobile?",
                                    "type": "select",
                                    "parameters": {
                                        "template_key": "",
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "is_required": false,
                                        "dataset": {
                                            "name": "yes_no",
                                            "id": "dad0c5ec"
                                        },
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "mobile_banking_enabled"
                                },
                                {
                                    "name": "e-Alerts",
                                    "type": "select",
                                    "parameters": {
                                        "template_key": "",
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "is_required": false,
                                        "dataset": {
                                            "name": "Notification Modes",
                                            "id": "dad0c1e3"
                                        },
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "notification_modes"
                                }
                            ]
                        },
                        {
                            "name": "Certification",
                            "fields": [
                                {
                                    "name": "Signature",
                                    "type": "signature",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": true,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "media.identity.signature_source_url"
                                },
                                {
                                    "name": "Signature Two",
                                    "type": "image",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": true,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "media.identity.signature_two_source_url"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "Additional Information",
                    "fieldsets": [
                        {
                            "name": "Attachments",
                            "fields": [
                                {
                                    "name": "Proof Of Address Type",
                                    "type": "select",
                                    "parameters": {
                                        "template_key": "",
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "is_required": true,
                                        "dataset": {
                                            "name": "proof_of_address_types",
                                            "id": "dad0d9e3"
                                        },
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "proof_of_address_type"
                                },
                                {
                                    "name": "Proof of Address",
                                    "type": "image",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": true,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "media.documentation.proof_of_address_source_url"
                                },
                                {
                                    "name": "Proof Of ID Type",
                                    "type": "select",
                                    "parameters": {
                                        "template_key": "",
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "is_required": true,
                                        "dataset": {
                                            "name": "id_types",
                                            "id": "dad0dda6"
                                        },
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "id_type"
                                },
                                {
                                    "name": "Proof Of ID",
                                    "type": "image",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": true,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "media.documentation.official_id_source_url"
                                }
                            ]
                        },
                        {
                            "name": "Official",
                            "fields": [
                                {
                                    "name": "Introducer ID",
                                    "type": "text",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": false,
                                        "min_length": "14",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "14",
                                        "max_value": ""
                                    },
                                    "key": "agent.code",
                                    "events": {
                                        "validate": "userScripts.exec('script_6')"
                                    }
                                },
                                {
                                    "name": "Preview",
                                    "type": "button",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": false,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "preview",
                                    "events": {
                                        "click": "userScripts.exec('script_7')"
                                    }
                                }
                            ]
                        }
                    ]
                }
            ],
            "scope": "private",
            "root": "",
            "name": "Electronic Products Enrolment Form",
            "reference_code": "1459195482096",
            "realm": {
                "id": "dad0ffa9"
            },
            "id": "dad0d1ed",
            "created_date": "2016-03-28T20:04:42",
            "user": {
                "code": "toyin.adekola@pmglobaltechnology.com",
                "id": "d9c0d5a9"
            },
            "parameters": {
                "templates": {
                    "submission_label": "{first_name} {last_name}",
                    "submission_description": "{employer.name}",
                    "image_url": "{media.identity.passport_photo_source_url}",
                    "description": "{employer.name}",
                    "label": "{first_name} {last_name}",
                    "submission_icon": "{media.identity.passport_photo_source_url}"
                }
            },
            "status": "live"
        },
        "dad0d1ec": {
            "icon_url": "",
            "user_group": {
                "name": "Sales & Marketing",
                "id": "dbc0f3a9"
            },
            "last_change": {
                "date": "2016-03-29T08:22:29",
                "user": {
                    "code": "admin",
                    "id": "d9f3a9a9"
                }
            },
            "description": "This form is used to register a new customer for a current or savings account ",
            "default_submission_status": "accepted",
            "mode": "form",
            "pages": [
                {
                    "name": "General Information",
                    "fieldsets": [
                        {
                            "name": "Personal Details",
                            "fields": [
                                {
                                    "name": "Passport",
                                    "type": "image",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": true,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "media.identity.passport_photo_source_url"
                                },
                                {
                                    "name": "Title",
                                    "type": "select",
                                    "parameters": {
                                        "template_key": "",
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "is_required": true,
                                        "dataset": {
                                            "name": "titles",
                                            "id": "dad0d9a1"
                                        },
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "title"
                                },
                                {
                                    "name": "Last Name",
                                    "type": "text",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": true,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "50",
                                        "max_value": ""
                                    },
                                    "key": "last_name"
                                },
                                {
                                    "name": "First Name",
                                    "type": "text",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": true,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "50",
                                        "max_value": ""
                                    },
                                    "key": "first_name"
                                },
                                {
                                    "name": "Other Name",
                                    "type": "text",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": false,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "50",
                                        "max_value": ""
                                    },
                                    "key": "other_name"
                                },
                                {
                                    "name": "Date of Birth",
                                    "type": "date",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": true,
                                        "min_length": "",
                                        "tooltip": "The date must be over 18 years and under 75 years",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "birth_date",
                                    "events": {
                                        "change": "userScripts.exec('script_0')"
                                    }
                                },
                                {
                                    "name": "Gender",
                                    "type": "select",
                                    "parameters": {
                                        "template_key": "",
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "is_required": true,
                                        "dataset": {
                                            "name": "gender",
                                            "id": "dad0dda5",
                                            "key": "gender"
                                        },
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "gender"
                                },
                                {
                                    "name": "State of Origin",
                                    "type": "select",
                                    "parameters": {
                                        "template_key": "",
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "is_required": true,
                                        "dataset": {
                                            "name": "states",
                                            "id": "dad0d9a0",
                                            "key": "states"
                                        },
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "state_of_origin",
                                    "events": {
                                        "change": "userScripts.exec('script_1')"
                                    }
                                },
                                {
                                    "name": "LGA",
                                    "type": "select",
                                    "parameters": {
                                        "template_key": "",
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "is_required": true,
                                        "dataset": {
                                            "name": "lgas",
                                            "id": "dad0dda7",
                                            "key": "lgas"
                                        },
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "lga_code"
                                },
                                {
                                    "name": "Nationality",
                                    "type": "select",
                                    "parameters": {
                                        "template_key": "",
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "566",
                                        "max_height": "",
                                        "label": "",
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "is_required": true,
                                        "dataset": {
                                            "name": "countries",
                                            "id": "dad0dded",
                                            "key": "countries"
                                        },
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "nationality"
                                },
                                {
                                    "name": "Mother's Maiden Name",
                                    "type": "text",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": true,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "20",
                                        "max_value": ""
                                    },
                                    "key": "mother_maiden_name"
                                },
                                {
                                    "name": "ID Card Number",
                                    "type": "text",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": true,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "20",
                                        "max_value": ""
                                    },
                                    "key": "id_number"
                                },
                                {
                                    "name": "Place of Birth",
                                    "type": "text",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": false,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "50",
                                        "max_value": ""
                                    },
                                    "key": "place_of_birth"
                                },
                                {
                                    "name": "National ID Number (NIN)",
                                    "type": "phone",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": false,
                                        "min_length": "16",
                                        "tooltip": "The characters must be 16 digits",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "16",
                                        "max_value": ""
                                    },
                                    "key": "national_id_number"
                                },
                                {
                                    "name": "Bank Verification Number",
                                    "type": "phone",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": true,
                                        "min_length": "11",
                                        "tooltip": "The characters must be 11 digits",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "11",
                                        "max_value": ""
                                    },
                                    "key": "bank_verification_number"
                                }
                            ]
                        },
                        {
                            "name": "Contact",
                            "fields": [
                                {
                                    "name": "Residential Address Line 1",
                                    "type": "text",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": true,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "100",
                                        "max_value": ""
                                    },
                                    "key": "address_line_one"
                                },
                                {
                                    "name": "Residential Address Line 2",
                                    "type": "text",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": false,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "100",
                                        "max_value": ""
                                    },
                                    "key": "address_line_two"
                                },
                                {
                                    "name": "City",
                                    "type": "text",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": true,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "25",
                                        "max_value": ""
                                    },
                                    "key": "city"
                                },
                                {
                                    "name": "State",
                                    "type": "select",
                                    "parameters": {
                                        "template_key": "",
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "is_required": true,
                                        "dataset": {
                                            "name": "states",
                                            "id": "dad0d9a0",
                                            "key": "states"
                                        },
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "state_code"
                                },
                                {
                                    "name": "Mobile Phone",
                                    "type": "phone",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": true,
                                        "min_length": "11",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "11",
                                        "max_value": ""
                                    },
                                    "key": "mobile_phone_number"
                                },
                                {
                                    "name": "Email Address (Personal)",
                                    "type": "email",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": false,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "50",
                                        "max_value": ""
                                    },
                                    "key": "email_address"
                                }
                            ]
                        },
                        {
                            "name": "Employer",
                            "fields": [
                                {
                                    "name": "Employer Name",
                                    "type": "text",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": false,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "employer.name"
                                },
                                {
                                    "name": "Office Address Line 1",
                                    "type": "text",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": false,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "100",
                                        "max_value": ""
                                    },
                                    "key": "employer.address_line_one"
                                },
                                {
                                    "name": "City",
                                    "type": "text",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": false,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "25",
                                        "max_value": ""
                                    },
                                    "key": "employer.city"
                                },
                                {
                                    "name": "State",
                                    "type": "select",
                                    "parameters": {
                                        "template_key": "",
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "is_required": false,
                                        "dataset": {
                                            "name": "states",
                                            "id": "dad0d9a0",
                                            "key": "states"
                                        },
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "employer.state_code"
                                }
                            ]
                        },
                        {
                            "name": "Next of Kin",
                            "fields": [
                                {
                                    "name": "NOK Title",
                                    "type": "select",
                                    "parameters": {
                                        "template_key": "",
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "is_required": true,
                                        "dataset": {
                                            "name": "titles",
                                            "id": "dad0d9a1",
                                            "key": "titles"
                                        },
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "nok1.title"
                                },
                                {
                                    "name": "NOK Last Name",
                                    "type": "text",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": true,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "40",
                                        "max_value": ""
                                    },
                                    "key": "nok1.last_name"
                                },
                                {
                                    "name": "NOK First Name",
                                    "type": "text",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": true,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "40",
                                        "max_value": ""
                                    },
                                    "key": "nok1.first_name"
                                },
                                {
                                    "name": "NOK Other Name",
                                    "type": "text",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": false,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "40",
                                        "max_value": ""
                                    },
                                    "key": "nok1.other_name"
                                },
                                {
                                    "name": "NOK Relationship",
                                    "type": "select",
                                    "parameters": {
                                        "template_key": "",
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "is_required": true,
                                        "dataset": {
                                            "name": "relationships",
                                            "id": "dad0d9a4",
                                            "key": "relationships"
                                        },
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "nok1.relationship"
                                },
                                {
                                    "name": "NOK Address Line 1",
                                    "type": "text",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": true,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "100",
                                        "max_value": ""
                                    },
                                    "key": "nok1.address_line_one"
                                },
                                {
                                    "name": "NOK Mobile Phone",
                                    "type": "phone",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": true,
                                        "min_length": "11",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "11",
                                        "max_value": ""
                                    },
                                    "key": "nok1.mobile_phone_number"
                                },
                                {
                                    "name": "NOK Email Address",
                                    "type": "email",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": false,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "50",
                                        "max_value": ""
                                    },
                                    "key": "nok1.email_address"
                                }
                            ]
                        },
                        {
                            "name": "Notifications",
                            "fields": [
                                {
                                    "name": "Notification Setup",
                                    "type": "select",
                                    "parameters": {
                                        "template_key": "",
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "is_required": false,
                                        "dataset": {
                                            "name": "Notification Modes",
                                            "id": "dad0c1e3",
                                            "key": "notification_modes"
                                        },
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "statement_option"
                                }
                            ]
                        },
                        {
                            "name": "Biometric Fingerprints",
                            "fields": [
                                {
                                    "name": "Left Thumb",
                                    "type": "fingerprint",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "media.identity.left_thumb_template",
                                        "is_required": true,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "media.identity.left_thumb_source_url"
                                },
                                {
                                    "name": "Left Index",
                                    "type": "fingerprint",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "media.identity.left_index_template",
                                        "is_required": true,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "media.identity.left_index_source_url"
                                },
                                {
                                    "name": "Left Middle",
                                    "type": "fingerprint",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "media.identity.left_middle_template",
                                        "is_required": true,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "media.identity.left_middle_source_url"
                                },
                                {
                                    "name": "Left Ring",
                                    "type": "fingerprint",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "media.identity.left_ring_template",
                                        "is_required": true,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "media.identity.left_ring_source_url"
                                },
                                {
                                    "name": "Left Small",
                                    "type": "fingerprint",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "media.identity.left_small_template",
                                        "is_required": true,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "media.identity.left_small_source_url"
                                },
                                {
                                    "name": "Right Thumb",
                                    "type": "fingerprint",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "media.identity.right_thumb_template",
                                        "is_required": true,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "media.identity.right_thumb_source_url"
                                },
                                {
                                    "name": "Right Index",
                                    "type": "fingerprint",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "media.identity.right_index_template",
                                        "is_required": true,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "media.identity.right_index_source_url"
                                },
                                {
                                    "name": "Right Middle",
                                    "type": "fingerprint",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "media.identity.right_middle_template",
                                        "is_required": true,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "media.identity.right_middle_source_url"
                                },
                                {
                                    "name": "Right Ring",
                                    "type": "fingerprint",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "media.identity.right_ring_template",
                                        "is_required": true,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "media.identity.right_ring_source_url"
                                },
                                {
                                    "name": "Right Small",
                                    "type": "fingerprint",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "media.identity.right_small_template",
                                        "is_required": true,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "media.identity.right_small_source_url"
                                },
                                {
                                    "name": "Fingerprint Similarity Score",
                                    "type": "number",
                                    "parameters": {
                                        "is_readonly": true,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": true,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "media.identity.fingerprint_match_score"
                                },
                                {
                                    "name": "Validate Fingerprints",
                                    "type": "button",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": false,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "media.identity.fingerprint_validate_button",
                                    "events": {
                                        "click": "userScripts.exec('script_2')"
                                    }
                                }
                            ]
                        },
                        {
                            "name": "Certification",
                            "fields": [
                                {
                                    "name": "Signature",
                                    "type": "signature",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": true,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "media.identity.signature_source_url"
                                },
                                {
                                    "name": "Signature Two",
                                    "type": "image",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": true,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "media.identity.signature_two_source_url"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "Bank Details",
                    "fieldsets": [
                        {
                            "name": "Account",
                            "fields": [
                                {
                                    "name": "Account Name",
                                    "type": "text",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": false,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "255",
                                        "max_value": ""
                                    },
                                    "key": "bank_account.name"
                                },
                                {
                                    "name": "Account Number",
                                    "type": "number",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": false,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "bank_account.number"
                                },
                                {
                                    "name": "Bank Name / Address",
                                    "type": "text",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": false,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "GL as at 2004",
                                        "max_length": "20",
                                        "max_value": ""
                                    },
                                    "key": "bank_account.address_line_one"
                                }
                            ]
                        },
                        {
                            "name": "Attachments",
                            "fields": [
                                {
                                    "name": "Proof of Address Type",
                                    "type": "select",
                                    "parameters": {
                                        "template_key": "",
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "is_required": true,
                                        "dataset": {
                                            "name": "proof_of_address_types",
                                            "id": "dad0d9e3",
                                            "key": "proof_of_address_types"
                                        },
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "proof_of_address_type"
                                },
                                {
                                    "name": "Proof of Address",
                                    "type": "image",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": true,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "media.documentation.proof_of_address_source_url"
                                },
                                {
                                    "name": "Proof of ID Type",
                                    "type": "select",
                                    "parameters": {
                                        "template_key": "",
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "is_required": true,
                                        "dataset": {
                                            "name": "id_types",
                                            "id": "dad0dda6",
                                            "key": "id_types"
                                        },
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "id_type"
                                },
                                {
                                    "name": "Proof of ID",
                                    "type": "image",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": true,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "media.documentation.official_id_source_url"
                                }
                            ]
                        },
                        {
                            "name": "Official",
                            "fields": [
                                {
                                    "name": "Preview",
                                    "type": "button",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": false,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "preview",
                                    "events": {
                                        "click": "userScripts.exec('script_3')"
                                    }
                                }
                            ]
                        }
                    ]
                }
            ],
            "scope": "private",
            "root": "",
            "name": "Individual or  Joint Account Opening Form",
            "reference_code": "1459195367657",
            "realm": {
                "id": "dad0ffa9"
            },
            "id": "dad0d1ec",
            "created_date": "2016-03-28T20:02:48",
            "user": {
                "code": "toyin.adekola@pmglobaltechnology.com",
                "id": "d9c0d5a9"
            },
            "parameters": {
                "templates": {
                    "submission_label": "{first_name} {last_name}",
                    "submission_description": "{employer.name}",
                    "image_url": "{media.identity.passport_photo_source_url}",
                    "description": "{employer.name}",
                    "label": "{first_name} {last_name}",
                    "submission_icon": "{media.identity.passport_photo_source_url}"
                }
            },
            "status": "live"
        },
        "dad0d1ee": {
            "icon_url": "",
            "user_group": {
                "name": "Customer Service",
                "id": "dbc0ffa9"
            },
            "last_change": {
                "date": "2016-03-28T22:11:02",
                "user": {
                    "code": "admin",
                    "id": "d9f3a9a9"
                }
            },
            "description": "Calculates the monthly principal and interest payments for a loan amount",
            "default_submission_status": "accepted",
            "mode": "form",
            "pages": [
                {
                    "name": "Calculator",
                    "fieldsets": [
                        {
                            "name": "Calculator",
                            "fields": [
                                {
                                    "name": "Principal / Initial Amount of the Loan",
                                    "type": "number",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": true,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "principal"
                                },
                                {
                                    "name": "Annual Interest Rate (0 to 100%)",
                                    "type": "number",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": true,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "interest"
                                },
                                {
                                    "name": "Length of the Loan (in months)",
                                    "type": "number",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": true,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "tenor"
                                },
                                {
                                    "name": "Calculate",
                                    "type": "button",
                                    "parameters": {
                                        "is_readonly": false,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": false,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "calculate_button",
                                    "events": {
                                        "click": "userScripts.exec('script_8')"
                                    }
                                },
                                {
                                    "name": "Month Payments",
                                    "type": "number",
                                    "parameters": {
                                        "is_readonly": true,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": true,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "monthly_payment"
                                },
                                {
                                    "name": "Total Repayment",
                                    "type": "number",
                                    "parameters": {
                                        "is_readonly": true,
                                        "max_width": "",
                                        "min_value": "",
                                        "template_key": "",
                                        "is_required": true,
                                        "min_length": "",
                                        "tooltip": "",
                                        "default_value": "",
                                        "max_height": "",
                                        "label": "",
                                        "max_length": "",
                                        "max_value": ""
                                    },
                                    "key": "total_payment"
                                }
                            ]
                        }
                    ]
                }
            ],
            "scope": "private",
            "root": "",
            "name": "Loan Payment Calculator",
            "reference_code": "e037027b-f523-11e5-9307-17d426000b34",
            "realm": {
                "id": "dad0ffa9"
            },
            "id": "dad0d1ee",
            "created_date": "2016-03-28T20:31:55",
            "user": {
                "code": "admin",
                "id": "d9f3a9a9"
            },
            "status": "live"
        }
    },
    "datasets": {
        "dad0dded": {
            "code": "countries",
            "name": "countries",
            "id": "dad0dded",
            "items": {
                "566": "NIGERIA",
                "606": "SWEDIN",
                "USA": "UNITED STATE",
                "FOREIGN": "FOREIGN",
                "UK": "UNITED KINGDOM",
                "CHN": "CHINA",
                "CMR": "CAMEROUN",
                "LBN": "LEBANON",
                "GHN": "GHANA",
                "IND": "INDIA",
                "SA": "SOUTHAFRICA"
            }
        },
        "dad0d9a0": {
            "code": "states",
            "name": "states",
            "id": "dad0d9a0",
            "items": {
                "BE": "BENUE",
                "NR": "NASARAWA",
                "RV": "RIVERS",
                "YB": "YOBE",
                "FR": "FOREIGNER",
                "BO": "BORNO",
                "DT": "DELTA",
                "OD": "ONDO",
                "BY": "BAYELSA",
                "KB": "KEBBI",
                "OG": "OGUN",
                "KD": "KADUNA",
                "GB": "GOMBE",
                "KG": "KOGI",
                "SO": "SOKOTO",
                "EB": "EBONYI",
                "ED": "EDO",
                "AB": "ABIA",
                "AD": "ADAMAWA",
                "KN": "KANO",
                "IM": "IMO",
                "OS": "OSUN",
                "EK": "EKITI",
                "ZA": "ZAMFARA",
                "EN": "ENUGU",
                "KT": "KATSINA",
                "AK": "AKWA-IBOM",
                "OY": "OYO",
                "KW": "KWARA",
                "AN": "ANAMBRA",
                "TB": "TARABA",
                "CR": "CROSS RIVER",
                "LA": "LAGOS",
                "NG": "NIGER",
                "PL": "PLATEAU",
                "FC": "FCT",
                "JG": "JIGAWA",
                "BA": "BAUCHI"
            }
        },
        "dad0d9e3": {
            "code": "proof_of_address_types",
            "name": "proof_of_address_types",
            "id": "dad0d9e3",
            "items": {
                "1": "UTILITY BILL",
                "2": "NATIONAL ID CARD",
                "3": "VALID DRIVERS LICENSE",
                "4": "RECENT TENANCY AGREEMENT",
                "5": "ACTIVE BANK STATEMENT",
                "6": "VOTERS CARD"
            }
        },
        "dad0d9a1": {
            "code": "titles",
            "name": "titles",
            "id": "dad0d9a1",
            "items": {
                "GEN": " GENERAL",
                "CHIEF": " CHIEF",
                "MR": " MR",
                "HON": " HONOURABLE",
                "MALL": " MALLAM",
                "PAST": " PASTOR",
                "MISS": " MISS",
                "HAJIA": " HAJIA",
                "DOCTOR": " DOCTOR",
                "ENG": " ENGINEER",
                "MRS": " MRS"
            }
        },
        "dad0c1e3": {
            "code": "notification_modes",
            "name": "Notification Modes",
            "id": "dad0c1e3",
            "items": {
                "SMS": " SMS",
                "EMAIL": " Email"
            }
        },
        "dad0c5ec": {
            "code": "yes_no",
            "name": "yes_no",
            "id": "dad0c5ec",
            "items": {
                "NIECE": "NIECE",
                "no": "No",
                "GUARDIAN": "GUARDIAN",
                "AUNTY": "AUNTY",
                "FRIEND": "FRIEND",
                "HUSBAND": "HUSBAND",
                "MOTHER": "MOTHER",
                "yes": "Yes",
                "BROTHER": "BROTHER",
                "SISTER": "SISTER",
                "NEPHEW": "NEPHEW",
                "FIANCEE": "FIANCEE",
                "UNCLE": "UNCLE",
                "FATHER": "FATHER",
                "DAUGHTER": "DAUGHTER",
                "SON": "SON",
                "WIFE": "WIFE",
                "COUSIN": "COUSIN"
            }
        },
        "dad0dda5": {
            "code": "gender",
            "name": "gender",
            "id": "dad0dda5",
            "items": {
                "F": " Female",
                "M": " Male"
            }
        },
        "dad0dda7": {
            "code": "lgas",
            "name": "lgas",
            "id": "dad0dda7",
            "items": {
                "HNG": "HONG",
                "NZM": "ANAMBRA-WEST",
                "DFB": "IDEATO-SOUTH",
                "BBB": "IBI",
                "JRM": "REMO-NORTH",
                "BBG": "IGBO-EZE-SOUTH",
                "BBJ": "BEBEJI",
                "JRT": "UGHELLI-SOUTH",
                "JRV": "OJI-RIVER",
                "SDA": "SARDAUNA",
                "BBR": "BABURA",
                "BBU": "BIU",
                "FKA": "FIKA",
                "SDM": "SANDAMU",
                "DGB": "ODOGBOLU",
                "DGA": "DONGA",
                "DGE": "IKPOBA-OKHA",
                "FKJ": "IFAKO-IJAIYE",
                "BCH": "BICHI",
                "DGS": "DANGE-SHUNI",
                "WMK": "WAMAKKO",
                "DGW": "DOGUWA",
                "FKY": "FUNAKAYE",
                "JTA": "AKURE-SOUTH",
                "SEL": "USHONGO",
                "BDA": "BIDA",
                "QAP": "QUAN ANPAN",
                "BDG": "BADAGRY",
                "SEY": "ISEYIN",
                "BDJ": "IBADAN-NORTH",
                "YRE": "OLUYOLE",
                "BDS": "OLA OLUWA",
                "BDR": "ONDO-EAST",
                "BDU": "MORO",
                "BDW": "BINDAWA",
                "WNN": "TARKA",
                "YRR": "YORRO",
                "SFN": "SAFANA",
                "BEN": "OREDO",
                "FMT": "ATIBA",
                "JUX": "OJU",
                "YSF": "YUSUFARI",
                "BER": "OMUMA",
                "SGB": "OSOGBO",
                "BES": "KOKO-BESSE",
                "SGD": "OWAN-WEST",
                "UKM": "UKUM",
                "DJA": "DANJA",
                "UKP": "NNEWI-SOUTH",
                "SGR": "SHAGARI",
                "FNN": "OROLU",
                "SHA": "IFELODUN",
                "SHD": "SHENDAM",
                "SHG": "SHELLENG",
                "SHK": "SAKI-WEST",
                "SHN": "SHANI",
                "SHM": "SHOMGOM",
                "DKA": "KADUNA-NORTH",
                "DKD": "DAWAKIN-KUDU",
                "SHR": "SHIRA",
                "BGD": "BAGUDO",
                "DKG": "SURU",
                "DKP": "OHIMINI",
                "UMA": "UMUAHIA NORTH",
                "BGM": "ASARI-TORU",
                "BGR": "BOGORO",
                "UMD": "ISU",
                "BGT": "OGBADIBO",
                "UMG": "OWERRI-WEST",
                "DKU": "DUKKU",
                "DKW": "DIKWA",
                "UMK": "NJABA",
                "BGW": "BAGWAI",
                "YUN": "YUNUSARI",
                "UML": "ISIALA-MBANO",
                "HTE": "OYI",
                "UMU": "UZO-UWANI",
                "UMZ": "ORUMBA-SOUTH",
                "WRA": "WARAWA",
                "UNC": "UMUNNEOCHI",
                "WRJ": "WARJI",
                "WRN": "WURNO",
                "WRR": "NGASKI",
                "DMA": "DOMA",
                "SKA": "IVO",
                "WSE": "TAFA",
                "DMS": "DAN-MUSA",
                "WSH": "WUSHISHI",
                "SKF": "SHINKAFI",
                "SKK": "SOKOTO-NORTH",
                "WSN": "ISIN",
                "SKL": "ETHIOPE-EAST",
                "SKN": "TAI",
                "SKP": "IKWERRE",
                "BJE": "BOKI",
                "DNG": "KANAM",
                "BJK": "OMALA",
                "FRN": "FOREIGNER",
                "BJN": "BINJI",
                "SLK": "ANIOCHA-NORTH",
                "SLM": "SILAME",
                "BKB": "BURUKU",
                "BKA": "BAKURA",
                "BKD": "BIRNIN-KUDU",
                "HWL": "HAWUL",
                "FSK": "FASKARI",
                "BKL": "IZZI",
                "BKK": "BOKKOS",
                "YYB": "YABO",
                "BKN": "OBOKUN",
                "BKM": "BUKKUYUM",
                "FST": "AMUWO-ODOFIN",
                "BKR": "BAKORI",
                "BKS": "BAKASSI",
                "SMG": "SHAGAMU",
                "BKW": "UKWUANI",
                "SMK": "SOMOLU",
                "FTA": "FUNTUA",
                "MAG": "MAIDUGURI",
                "MAF": "MAFA",
                "SML": "SUMAILA",
                "MAH": "MAIHA",
                "MAK": "BOSSO",
                "FTD": "IFE SOUTH",
                "YYY": "OYO-EAST",
                "BLE": "GUDU",
                "BLD": "BARKIN-LADI",
                "MAN": "MANI",
                "BLG": "BALANGA",
                "BLF": "UDENU",
                "DPH": "BOSARI",
                "MAP": "IBADAN-SOUTH-EAST",
                "MAR": "MARTE",
                "SNA": "SHANGA",
                "BLR": "BILLIRI",
                "MBA": "ISIALA-NGWA SOUTH",
                "SNG": "SONG",
                "MBD": "LANGTANG-SOUTH",
                "SNK": "LERE",
                "URM": "ESAN-NORTH-EAST",
                "SNN": "SHANONO",
                "FUF": "ILORIN-SOUTH",
                "MBL": "ISUIKWUATO",
                "BMA": "BOMADI",
                "FUG": "ETSAKO-CENTRAL",
                "URU": "IDEATO-NORTH",
                "MBR": "MOBBAR",
                "BMG": "MARIGA",
                "BMJ": "BIRNIN MAGAJI",
                "FUN": "FUNE",
                "FUR": "FUFORE",
                "WWD": "IWO",
                "BMT": "IBIONO-IBOM",
                "USL": "EGOR",
                "DRA": "DAURA",
                "MCH": "MICHIKA",
                "WWR": "WARRI-SOUTH",
                "USS": "USSA",
                "WWW": "OWO",
                "DRD": "SAKABA",
                "BND": "BENDE",
                "MCN": "MACHINA",
                "BNG": "BIRNIN-GWARI",
                "DRK": "INI",
                "BNK": "BUNKURE",
                "BNS": "OBANLIKU",
                "BNW": "BIRINIWA",
                "MDB": "MADOBI",
                "BNY": "BONNY",
                "DRZ": "DARAZO",
                "BNZ": "BUNZA",
                "MDG": "MADAGALI",
                "DSA": "DEMSA",
                "SPR": "SOUTHERN-IJAW",
                "MDW": "MAI-ADUA",
                "DSW": "GABASAWA",
                "DSZ": "ISOKO-NORTH",
                "KAA": "AKOKO-SOUTH-EAST",
                "KAB": "KABBA/BUNU",
                "KAG": "RAFI",
                "KAF": "JEMA A",
                "MEK": "IMEKO-AFON",
                "KAK": "AKOKO-NORTH",
                "KAM": "AKAMKPA",
                "DTF": "DAWAKIN-TOFA",
                "KAL": "KATSINA-ALA",
                "DTM": "DUTSINMA",
                "KAR": "IKARA",
                "DTN": "ODO-OTIN",
                "KAT": "KAITA",
                "DTS": "DUTSI",
                "DTR": "DAMATURU",
                "KBE": "KEBBE",
                "SRP": "MUYA",
                "KBG": "KALA/BALGE",
                "KBK": "KABO",
                "SRZ": "SOKOTO-SOUTH",
                "DUK": "ODUKPANI",
                "KBT": "KUMBOTSO",
                "DUT": "DUTSE",
                "KBY": "KIBIYA",
                "SSE": "ISE-ORUN",
                "DUU": "URUAN",
                "MGA": "MIGA",
                "SSM": "OSISIOMA",
                "UWN": "ENUGU-SOUTH",
                "BRA": "OBUBRA",
                "KCH": "KACHIA",
                "MGM": "MAGUMERI",
                "MGL": "NKANU-EAST",
                "BRE": "BAURE",
                "SSU": "ATAKUMOSA",
                "MGN": "SOBA",
                "MGR": "MAIGATARI",
                "BRK": "BIRNIN-KEBBI",
                "MGU": "MANGU",
                "BRS": "BRASS",
                "BRR": "KHANA",
                "BRT": "OBI",
                "ZAK": "ZAKI",
                "MHA": "EMUOHA",
                "ZAR": "ZARIA",
                "STK": "SULE-TANKARKAR",
                "KDG": "KONDUGA",
                "BSA": "BASSA",
                "MHT": "FAKAI",
                "SUA": "AKOKO SOUTH",
                "ZBL": "EKWUSIGO",
                "KED": "IKEDURU",
                "SUL": "SULEJA",
                "KEF": "KEFFI",
                "KEH": "KAJOLA",
                "KEK": "UKWA EAST",
                "KEM": "ISI-UZO",
                "UYY": "UYO",
                "KEN": "KEANA",
                "KER": "IKERE",
                "KET": "EKET",
                "KEY": "ILORIN-EAST",
                "BTR": "BATSARI",
                "MJB": "MINJIBIR",
                "BUG": "BUNGUDU",
                "BUJ": "BUJI",
                "KFR": "KAFUR",
                "KFU": "OFU",
                "BUR": "BURUTU",
                "MKA": "KADUNA-SOUTH",
                "BUU": "JOS-SOUTH",
                "MKD": "MAKURDI",
                "KGE": "OKIGWE",
                "KGG": "KAGA",
                "MKK": "MAKODA",
                "KGK": "KAGARKO",
                "KGM": "KAUGAMA",
                "MKP": "MKPAT-ENIN",
                "MKR": "MAKARFI",
                "MKW": "MOKWA",
                "KGW": "AREWA-DANDI",
                "KHA": "KATCHA",
                "KHE": "ETCHE",
                "KHS": "KAFIN-HAUSA",
                "BWR": "BWARI",
                "MMA": "ORU-EAST",
                "GAD": "GADA",
                "GAK": "GARKO",
                "GAM": "GAMAWA",
                "MMR": "MALAM-MADURI",
                "GAN": "GANYE",
                "GAS": "GASSOL",
                "GAR": "AKOKO-EDO",
                "MNA": "CHANCHAGA",
                "KJA": "IKEJA",
                "MNF": "MALUMFASHI",
                "GBB": "OGBIA",
                "GBA": "IJAYE",
                "MNG": "MONGUNU",
                "GBD": "IGBO-ETITI",
                "GBE": "IJEBU-EAST",
                "GBH": "ORELOPE",
                "GBG": "LOGO",
                "GBJ": "WARRI-CENTRAL",
                "KJM": "CHIKUN",
                "GBK": "GBOKO",
                "GBN": "AYEDA-ADE",
                "KJR": "KAJURU",
                "MNY": "AKINYELE",
                "GBZ": "OVIA-SOUTH-WEST",
                "GBY": "OLORUNSOGO",
                "KKE": "UKWA WEST",
                "KKF": "KOGI",
                "KKH": "OKEHI",
                "KKM": "KIRKASAMMA",
                "KKN": "IKONO",
                "KKR": "KANKARA",
                "KKU": "KIRU",
                "KKY": "ORI-IRE",
                "BZR": "OHAOZARA",
                "OTA": "ADO-ODO/OTA",
                "MPA": "MOPA-MURO-MOPI",
                "KLD": "KARIM-LAMIDO",
                "KLE": "IKOLE",
                "GDD": "IDEMILI-NORTH",
                "KLG": "KALGO",
                "KLK": "WARRI-NORTH",
                "GDM": "GEIDAM",
                "KLT": "KALTUNGO",
                "KMA": "KAIAMA",
                "KMC": "KANO-MUNICIPAL",
                "KMB": "DANDI",
                "GED": "IREPODUN/IFELODUN",
                "KMK": "KOLOKUMA/OPKUMA",
                "KMM": "IKOM",
                "KMR": "EKEREMOR",
                "GEP": "YAKURR",
                "MRD": "MARADUN",
                "KNA": "DEKINA",
                "KNC": "KUNCHI",
                "KNE": "OKENE",
                "KNH": "OGBOMOSO-NORTH",
                "ZKW": "ZANGON-KATAF",
                "KNK": "KANKIA",
                "KNN": "IKENNE",
                "KNM": "AHOADA-WEST",
                "EBJ": "EZZA-NORTH",
                "MRR": "MARU",
                "KNR": "IFELODUN",
                "KNT": "KONTAGORA",
                "EBM": "OHAJI-EGBEMA",
                "MSA": "MISAU",
                "ZLL": "ISHIELU",
                "MSG": "MASHEGU",
                "MSH": "MASHI",
                "GGE": "AGEGE",
                "VDY": "VANDEIKYA",
                "GGJ": "OGOJA",
                "MSW": "MUSAWA",
                "GGU": "OGU/BOLO",
                "GGW": "GAGARAWA",
                "KPA": "ANKPA",
                "TAI": "NSIT-ATAI",
                "KPD": "OKOBO",
                "TAK": "TAKAI",
                "KPF": "OGORI/MAGONGO",
                "TAN": "BOLUWADURO",
                "KPE": "OKPE",
                "EDA": "AFIKPO-SOUTH",
                "TAR": "TAURA",
                "EDE": "EDE",
                "KPK": "UKANEFUN",
                "KPP": "DUNUKOFIA",
                "KPR": "GOKANA",
                "KPU": "ISIALA-NGWA NORTH",
                "MTZ": "MATAZU",
                "ZNG": "ZANGO",
                "EDT": "EDE NORTH",
                "MUB": "MUBI-NORTH",
                "MUE": "EKITI-EAST",
                "MUN": "IREPODUN",
                "TBW": "TAMBAWAL",
                "MUS": "MUSHIN",
                "CAL": "CALABAR-MUNICIPAL",
                "KRA": "KAURA",
                "KRD": "IKORODU",
                "GJB": "GUJBA",
                "KRF": "KIRFI",
                "KRE": "IREWOLE",
                "EFE": "ETUNK",
                "KRK": "OKIRIKA",
                "KRN": "KAURA-NAMODA",
                "KRM": "KURMI",
                "KRT": "EASTERN-OBOLO",
                "CBK": "CHIBOK",
                "KRS": "KARASUWA",
                "KRV": "KARU",
                "KRU": "KAURU",
                "EFR": "UVWIE",
                "KRY": "KARAYE",
                "TDE": "ATIGBO",
                "GJW": "GANJUWA",
                "MWA": "MAYO-BELWA",
                "EFY": "EFON",
                "KSB": "BARUTEN",
                "GKA": "GASHAKA",
                "KSD": "KUSADA",
                "GKB": "ESE-ODO",
                "KSF": "KOSOFE",
                "EGB": "EGBEDA",
                "KSH": "IREPO",
                "GKP": "APA",
                "KST": "ESIT EKET",
                "GKW": "GIWA",
                "KTA": "AKPABUYO",
                "KTD": "NSIT-UBIUM",
                "KTE": "IKOT-EKPENE",
                "RAN": "RANO",
                "KTG": "KATAGUM",
                "KTN": "KATSINA",
                "KTM": "ORUK ANAM",
                "KTP": "OKITI-PUPA",
                "GLN": "GULANI",
                "EHM": "EHIME-MBANO",
                "KTS": "IKOT-ABASI",
                "KTU": "ALIMOSHO",
                "TFA": "TOFA",
                "RBA": "RABAH",
                "TFB": "TAFAWA-BALEWA",
                "ZRM": "ZURMI",
                "RBH": "WASAGU",
                "KUG": "LAVUN",
                "GMB": "GOMBI",
                "KUF": "KURFI",
                "GME": "GOMBE",
                "GMD": "SAKI-EAST",
                "MYM": "MAIYAMA",
                "AAA": "LAGOS-ISLAND",
                "KUJ": "KUJE AREA COUNCIL",
                "AAB": "ABEOKUTA-SOUTH",
                "GMM": "GUMI",
                "GML": "GUMEL",
                "AAH": "ANAMBRA",
                "KUR": "KURA",
                "KUT": "SHIRORO",
                "GMU": "ADO",
                "TGD": "ABI",
                "AAW": "EGBEDORE",
                "ABA": "ABA SOUTH",
                "ABB": "ABOH-MBAISE",
                "ABC": "ABUJA MUNICIPAL AREA COUNCIL",
                "ABD": "ORHIONMWON",
                "EJG": "EJIGBO",
                "ABE": "BEKWARA",
                "ABG": "OGUN-WATERSIDE",
                "GNN": "OLORUNDA",
                "IRP": "IBARAPA-NORTH",
                "TGZ": "TANGAZA",
                "ABH": "NDOKWA-EAST",
                "GNM": "GARUN-MALLAM",
                "ABJ": "ABAJI AREA COUNCIL",
                "ABK": "ABAK",
                "ABM": "AKUKUTORU",
                "ABN": "NJIKOKA",
                "ABS": "ALBASU",
                "ABT": "ONNA",
                "ABU": "ABOA/ODUAL",
                "KWA": "KUKAWA",
                "KWC": "NDOKWA-WEST",
                "KWB": "JABA",
                "KWE": "ONUIMO",
                "EKE": "IHITTE/UBOMA",
                "KWK": "KANKE",
                "ACA": "AWKA-NORTH",
                "KWM": "KWAMI",
                "KWL": "KWALI",
                "ACH": "AROCHUKWU",
                "KWR": "KWARE",
                "KWU": "IKWUANO",
                "EKP": "ESAN-WEST",
                "KWY": "KWAYA-KUSAR",
                "EKY": "ETI-OSA",
                "REE": "ODIGBO",
                "ZUR": "ZURU",
                "REL": "IRELE",
                "PAK": "PAIKORO",
                "ADK": "ADO-EKITI",
                "ADM": "ABADAM",
                "CHR": "IKWO",
                "AEE": "ETIM-EKPO",
                "PBT": "OPOBO/NKORO",
                "KYW": "KIYAWA",
                "EMR": "EMURE",
                "RGB": "BORIPE",
                "RGG": "ROGO",
                "GRA": "ETHIOPE-WEST",
                "TKP": "OTUKPO",
                "RGM": "OGBA-EGBEMA-NDONI",
                "GRE": "GIREI",
                "ENG": "EDATI",
                "GRK": "GARKI",
                "AFG": "NSIT-IBOM",
                "KZR": "KAZAURE",
                "AFH": "ESSIEN-UDIM",
                "GRM": "GWARAM",
                "AFK": "AFIKPO-NORTH",
                "GRR": "GURI",
                "AFM": "OYIGBO",
                "AFN": "ASA",
                "GRU": "KOKONA",
                "AFR": "AHIAZU-MBAISE",
                "ENU": "ENUGU-NORTH",
                "GRZ": "GWARZO",
                "ENW": "MBO",
                "GRY": "GORONYO",
                "ENZ": "IGBO-EZE-NORTH",
                "AFZ": "OWAN-EAST",
                "AGA": "AGAIE",
                "AGB": "IKA-SOUTH",
                "GSH": "BADE",
                "AGD": "ETSAKO-EAST",
                "AGG": "IBADAN-NORTH-EAST",
                "CKK": "YALA",
                "AGL": "AJEROMI-IFELODUN",
                "AGN": "NKANU-WEST",
                "TMA": "TALATA-MAFARA",
                "AGR": "AGWARA",
                "AGU": "AGUATA",
                "AGW": "EZEAGU",
                "NAK": "GWER-WEST",
                "EPE": "EPE",
                "AHD": "AHOADA-EAST",
                "TMW": "TARMUA",
                "NAS": "MAGAMA",
                "RJA": "RIJAU",
                "GTU": "AGATU",
                "TNG": "TOUNGO",
                "NBB": "OBI",
                "TNK": "MIKANG",
                "GUA": "OGUTA",
                "GUB": "GUBIO",
                "GUE": "IGUEBEN",
                "NBS": "BORGU",
                "GUS": "GUSAU",
                "GUY": "GUYUK",
                "NCA": "ONICHA",
                "NCH": "ELEME",
                "AJA": "AJAOKUTA",
                "ERE": "YAGBA-EAST",
                "AJG": "AJINGI",
                "AJK": "IGALAMELA-ODOLU",
                "AJL": "ORUMBA-NORTH",
                "PHC": "PORT-HARCOURT",
                "RLG": "IREPODUN",
                "AJW": "OGO-OLUWA",
                "GWA": "GWAGWALADA",
                "NDG": "IBAJI",
                "GWB": "UGWUNAGBO",
                "GWD": "GWADABAWA",
                "AKA": "OVIA-NORTH-EAST",
                "NDN": "ANDONI",
                "AKD": "IBEJU-LEKKI",
                "GWK": "ANIOCHA-SOUTH",
                "RLU": "ORLU",
                "GWL": "GWALE",
                "GWN": "GWANDU",
                "AKK": "AKKO",
                "AKL": "ABAKALIKI",
                "AKM": "ABEOKUTA-NORTH",
                "AKN": "ONA-ARA",
                "GWU": "GURARA",
                "GWT": "SANGA",
                "AKP": "BIASI",
                "GWW": "GWIWA",
                "AKR": "AKURE-NORTH",
                "AKU": "OSHIMILI-NORTH",
                "AKW": "AKWANGA",
                "RMG": "RIMIN-GADO",
                "LAF": "EDU",
                "NEG": "NASARAWA-EGGON",
                "ALA": "UDU",
                "NEN": "ANAOCHA",
                "NEM": "NEMBE",
                "ALD": "GWER-EAST",
                "LAM": "OLAMABORO",
                "LAP": "LAPAI",
                "LAR": "EGBADO-SOUTH",
                "ETN": "ETINAM",
                "RMY": "RIMI",
                "ALK": "ALKALERI",
                "LAU": "LAU",
                "LAW": "EKITI-SOUTH-WEST",
                "TRE": "EWEKORO",
                "ALR": "ALEIRO",
                "ETU": "EZINIHITTE",
                "RNG": "RINGIM",
                "TRK": "IGABI",
                "NFD": "NAFADA/BAJOGA",
                "GYA": "GAYA",
                "TRN": "TARAUNI",
                "GYD": "GIADE",
                "RNN": "ORON",
                "TRR": "TORO",
                "TRT": "TURETA",
                "AME": "OGBOMOSO-SOUTH",
                "AMG": "NWANGELE",
                "GYL": "MUBI-SOUTH",
                "AMK": "EKITI-WEST",
                "TSF": "TSAFE",
                "PKA": "IPOKIA",
                "TSE": "KONSHISHA",
                "NGB": "ORU-WEST",
                "TSG": "ITAS/GADAU",
                "NGD": "IBESIKPO-ASUTAN",
                "PKG": "OKPOKWU",
                "GZA": "GWOZA",
                "NGL": "NGALA",
                "PKN": "PANKSHIN",
                "NGK": "OBIOMA NGWA",
                "PKM": "POTISKUM",
                "ANA": "CALABAR-SOUTH",
                "NGN": "NGOR-OKPALA",
                "CRC": "CHARANCHI",
                "ANC": "KUBAH",
                "ANG": "AKOKO-NORTH-WEST",
                "GZM": "GUZAMALA",
                "NGU": "NGURU",
                "ANK": "ANKA",
                "NGW": "INGAWA",
                "NGZ": "NGANZAI",
                "GZW": "GEZAWA",
                "ANW": "JOS-EAST",
                "TTK": "OBOWO",
                "TTM": "TAKUM",
                "TTU": "ITU",
                "PMD": "IFE NORTH",
                "JAD": "JADA",
                "TUN": "MOBA",
                "LEH": "ISOKO-SOUTH",
                "LEL": "ILE-OLUJI-OKEIGBO",
                "TUT": "ITESIWAJU",
                "JAL": "JALINGO",
                "JAK": "JAKUSKO",
                "LEM": "OYUN",
                "LES": "ILESA-EAST",
                "APM": "ISOKAN",
                "LEW": "ILESA-WEST",
                "APP": "APAPA",
                "APR": "UMUAHIA SOUTH",
                "LFA": "LAFIA",
                "PNG": "IBENO",
                "JBD": "IJEBU-ODE",
                "LFF": "OKE-ERO",
                "RRN": "RONI",
                "EYF": "UDUNG-UKO",
                "RRU": "ESAN-CENTRAL",
                "JBL": "AFIJIO",
                "RRT": "OWERRI-NORTH",
                "JBY": "JIBIA",
                "TWD": "TUDUN-WADA",
                "RSD": "SURULERE",
                "LGB": "AYEDIRE",
                "NKE": "EZZA-SOUTH",
                "EZA": "ABA NORTH",
                "NKK": "AYAMELUM",
                "ARD": "ARDO-KOLA",
                "NKR": "NKWERRE",
                "ARG": "ARGUNGU",
                "LGT": "LANGTANG-NORTH",
                "NKW": "ENUGU-EAST",
                "ARP": "EKITI",
                "ASB": "OSHIMILI",
                "ASU": "ASKIRA-UBA",
                "RUM": "OBIA/AKPOR",
                "HAF": "OHAFIA",
                "JEG": "JEGA",
                "HAL": "IHIALA",
                "TYW": "TSANYAWA",
                "RUW": "IBARAPA-CENTRAL",
                "JER": "IJERO",
                "ATN": "OGBARU",
                "TZG": "ZING",
                "NNE": "NNEWI-NORTH",
                "NND": "ONDO WEST",
                "NNG": "NINGI",
                "PRN": "ATAKUMOSA EAST",
                "AUC": "ETSAKO-WEST",
                "AUG": "AUGIE",
                "NNR": "NANGERE",
                "YDB": "YAMALTU/DEBA",
                "JGB": "IJEBU-NORTH",
                "AUY": "AUYO",
                "LKJ": "LOKOJA",
                "YEE": "OYE",
                "YEK": "ILEJEMEJE",
                "LLA": "ILLELA",
                "PTG": "PATEGI",
                "WAM": "WAMBA",
                "YEN": "YENEGOA",
                "WAS": "WASE",
                "PTN": "PATANI",
                "AWD": "ORSU",
                "AWE": "AWE",
                "AWG": "AWGU",
                "JHN": "JAHUN",
                "AWK": "AWKA-SOUTH",
                "RYM": "RIYOM",
                "LMR": "LAMURDE",
                "HER": "UHUNMWONDE",
                "LMU": "GBAKO",
                "YGJ": "GUMA",
                "LND": "LAGOS-MAINLAND",
                "NRK": "IBADAN-NORTH-WEST",
                "AYB": "IKA-NORTH",
                "JJJ": "OJO",
                "AYE": "EGBADO-NORTH",
                "JJN": "JOS-NORTH",
                "JJS": "ORI-ADE",
                "JJT": "IDEMILI-SOUTH",
                "WDE": "OBAFEMI-OWODE",
                "AYT": "IBARAPA-EAST",
                "WDL": "WUDIL",
                "NSH": "ONITSHA-NORTH",
                "WDP": "KWANDE",
                "NSK": "NSUKKA",
                "NSR": "NASSARAWA",
                "NSW": "NASARAWA",
                "NTE": "OBOT-AKARA",
                "WEL": "IWAJOWA",
                "WEN": "IDANRE",
                "WER": "OWERRI-MUNICIPAL",
                "NTT": "TOTO",
                "FDY": "IFEDAYO",
                "UBJ": "ESAN-SOUTH-EAST",
                "JMA": "JAMA ARE",
                "FEE": "IFE-EAST",
                "NUM": "NUMAN",
                "DAH": "IDAH",
                "DAL": "DALA",
                "JMT": "JIMETA",
                "DAM": "DAMBOA",
                "JMU": "IJUMU",
                "DAS": "DASS",
                "DAV": "ADAVI",
                "HJA": "HADEJIA",
                "FFA": "OFFA",
                "JNE": "IJEBU-NORTH-EAST",
                "LRG": "ILA",
                "YKS": "YANKWASHI",
                "JND": "OYO",
                "FFE": "IFE-CENTRAL",
                "FFF": "IFO",
                "LRN": "ILORIN-WEST",
                "DBM": "DAMBAN",
                "FFN": "OSE",
                "YLA": "YOLA",
                "DBN": "BODINGA",
                "UDD": "UDI",
                "DBR": "ANINRI",
                "DBT": "DANBATTA",
                "NWA": "MBAITOLI",
                "LSD": "OSHODI-ISOLO",
                "FGB": "IFEDORE",
                "FGE": "FAGGE",
                "YLW": "YAURI",
                "FGG": "ONITSHA-SOUTH",
                "UDU": "OBUDU",
                "LSR": "SURULERE",
                "SAA": "ISA",
                "HKW": "OHAKWU",
                "HKY": "KUDAN",
                "SAG": "SAGBAMA",
                "DDA": "IDO",
                "SAN": "YAGBA-WEST",
                "SAP": "SAPELE",
                "DDM": "DANDUME",
                "YNF": "LAGELU",
                "SBA": "SABUWA",
                "NYA": "IKA",
                "UFG": "URU OFFONG ORUKO",
                "SBG": "SABON-GARI",
                "SBN": "SABON-BIRNI",
                "DEA": "GBONYIN",
                "DED": "ODEDAH",
                "DEG": "DEGEMA",
                "DEK": "IDO-OSI",
                "BAL": "BALI",
                "BAM": "BAMA",
                "LUY": "IBADAN-SOUTH-WEST",
                "UGB": "EBONYI",
                "BAS": "BASSA",
                "UGG": "UNGOGO",
                "BAT": "BATAGARAWA",
                "BAU": "BAUCHI",
                "UGH": "UGHELLI-NORTH",
                "BAY": "BAYO",
                "JRE": "JERE",
                "WKR": "WUKARI"
            }
        },
        "dad0dda6": {
            "code": "id_types",
            "name": "id_types",
            "id": "dad0dda6",
            "items": {
                "1": "INTERNATIONAL PASSPORT",
                "2": "OFFICIAL ID CARD",
                "3": "DRIVERS LICENSE CARD",
                "4": "NATIONAL IDENTITY CARD"
            }
        },
        "dad0d9ee": {
            "code": "debit_card_types",
            "name": "Debit Card Types",
            "id": "dad0d9ee",
            "items": {
                "D4": "MASTERCARD DEBIT",
                "D5": "MASTERCARD GOLD (NGN)",
                "D6": "MASTERCARD GOLD (USD)",
                "D7": "MASTERCARD GOLD (GBP)",
                "D8": "MASTERCARD GOLD (EUR)",
                "D1": "VISA CLASSIC",
                "D2": "VISA DUAL CURRENCY",
                "D3": "VERVE"
            }
        },
        "dad0d9a4": {
            "code": "relationships",
            "name": "relationships",
            "id": "dad0d9a4",
            "items": {
                "NIECE": "NIECE",
                "GUARDIAN": "GUARDIAN",
                "AUNTY": "AUNTY",
                "FRIEND": "FRIEND",
                "HUSBAND": "HUSBAND",
                "MOTHER": "MOTHER",
                "BROTHER": "BROTHER",
                "SISTER": "SISTER",
                "NEPHEW": "NEPHEW",
                "FIANCEE": "FIANCEE",
                "UNCLE": "UNCLE",
                "FATHER": "FATHER",
                "DAUGHTER": "DAUGHTER",
                "SON": "SON",
                "WIFE": "WIFE",
                "COUSIN": "COUSIN"
            }
        },
        "dad0c1ec": {
            "code": "prepaid_card_types",
            "name": "Prepaid Card Types",
            "id": "dad0c1ec",
            "items": {
                "P1": "VISA PREPAID (NGN)",
                "P2": "VISA PREPAID (USD)"
            }
        },
        "dad0c1ed": {
            "code": "kyc_categories",
            "name": "KYC Categories",
            "id": "dad0c1ed",
            "items": {
                "MEDIUM": " MEDIUM KYC",
                "LOW": " LOW KYC",
                "FULL": " FULL KYC"
            }
        },
        "dad0c1ee": {
            "code": "designation",
            "name": "Designation",
            "id": "dad0c1ee",
            "items": {
                "bom": "BOM",
                "cro": "CRO"
            }
        }
    },
    "scripts": {
        "script_8": "(function() {\n    var p = get('principal');\n    var j = get('interest') /  (12 * 100);\n    var n = get('tenor');\n    var m = p * (j / (1 - Math.pow((1 + j ), -n)));\n    set('monthly_payment', parseFloat(Math.round(m * 100) / 100).toFixed(2));\n    set('total_payment', parseFloat(Math.round(n * m * 100) / 100).toFixed(2));\n})();",
        "script_4": "(function() {\n    var pin = get('pin');\n    return pin && pin.matches(/^PEN\\d{12}$/);\n})();",
        "script_5": "// Prevent values dated more than 18 years ago\n    var key = 'birth_date';\n    var current  =  date_sub(Date.now(), 18, 'years');\n    var last75years  =  date_sub(Date.now(), 75, 'years');\n    var newDate  =  getDate(get(key));\n if (!newDate || newDate > current || newDate <= last75years){\n    set(key,'');\n    showMessage('The date must be over 18 years or under 75 years');\n}",
        "script_6": "(function() {\n    var matches = get(\"agent.code\").match(/^\\d{4}-\\d{4}-\\d{4}$/);\n    return matches && matches.length > 0;\n})();",
        "script_7": "previewForm();",
        "script_0": "// Prevent values dated more than 18 years ago\n    var key = 'birth_date';\n    var current  =  date_sub(Date.now(), 18, 'years');\n    var last75years  =  date_sub(Date.now(), 75, 'years');\n    var newDate  =  getDate(get(key));\n if (!newDate || newDate > current || newDate <= last75years){\n    set(key,'');\n    showMessage('The date must be over 18 years or under 75 years');\n}",
        "script_1": "(function() {\n    var stateLgaKey     = \"state_of_origin\";\n    var lgakey          = \"lga_code\";\n    var lgasName        = \"dad0dda7\";\n\n    var state = get(stateLgaKey);\n    alert(\"state = \"+state);\n\n    if (state && state.trim().length){\n\n        var stateToLgaMap  = {\n            \"AB\":[\"EZA\",\"ABA\",\"ACH\",\"BND\",\"KWU\",\"KPU\",\"MBA\",\"MBL\",\"NGK\",\"HAF\",\"SSM\",\"GWB\",\"KEK\",\"KKE\",\"UMA\",\"APR\",\"UNC\"],\n            \"AD\":[\"DSA\",\"FUR\",\"GAN\",\"GRE\",\"GMB\",\"GUY\",\"HNG\",\"   JAD\",\"JMT\",\"LMR\",\"MDG\",\"MAH\",\"MWA\",\"MCH\",\"MUB\",\"GYL\",\"NUM\",\"SHG\",\"SNG\",\"TNG\",\"YLA\"],\n            \"AK\":[\"ABK\",\"KRT\",\"KET\",\"KST\",\"AFH\",\"AEE\",\"ETN\",\"PNG\",\"NGD\",\"BMT\",\"NYA\",\"KKN\",\"KTS\",\"KTE\",\"DRK\",\"TTU\",\"ENW\",\"MKP\",\"TAI\",\"AFG\",\"KTD\",\"NTE\",\"KPD\",\"ABT\",\"RNN\",\"KTM\",\"EYF\",\"KPK\",\"UFG\",\"DUU\",\"UYY\"],\n            \"AN\":[\"AGU\",\"AAH\",\"NZM\",\"NEN\",\"ACA\",\"AWK\",\"NKK\",\"KPP\",\"ZBL\",\"GDD\",\"JJT\",\"HAL\",\"ABN\",\"NNE\",\"UKP\",\"ATN\",\"NSH\",\"FGG\",\"AJL\",\"UMZ\",\"HTE\"],\n            \"BA\":[\"ALK\",\"BAU\",\"BGR\",\"DBM\",\"DRZ\",\"DAS\",\"GAM\",\"GJW\",\"GYD\",\"TSG\",\"JMA\",\"KTG\",\"KRF\",\"MSA\",\"NNG\",\"SHR\",\"TFB\",\"TRR\",\"VDY\",\"WRJ\",\"ZAK\"],\n            \"BE\":[\"GMU\",\"GTU\",\"GKP\",\"BKB\",\"GBK\",\"YGJ\",\"ALD\",\"NAK\",\"KAL\",\"TSE\",\"WDP\",\"GBG\",\"MKD\",\"BRT\",\"BGT\",\"DKP\",\"JUX\",\"PKG\",\"TKP\",\"WNN\",\"UKM\",\"SEL\"],\n            \"BO\":[\"ADM\",\"ASU\",\"BAM\",\"BAY\",\"BBU\",\"CBK\",\"DAM\",\"DKW\",\"GUB\",\"GZM\",\"GZA\",\"HWL\",\"JRE\",\"KGG\",\"KBG\",\"KDG\",\"KWA\",\"KWY\",\"MAF\",\"MGM\",\"MAG\",\"MAR\",\"MBR\",\"MNG\",\"NGL\",\"NGZ\"],\n            \"BY\":[\"BRS\",\"KMR\",\"KMK\",\"NEM\",\"GBB\",\"SAG\",\"SHN\",\"SPR\",\"YEN\"],\n            \"CR\":[\"TGD\",\"KAM\",\"KTA\",\"BKS\",\"ABE\",\"AKP\",\"BJE\",\"CAL\",\"ANA\",\"EFE\",\"KMM\",\"BNS\",\"BRA\",\"UDU\",\"DUK\",\"GGJ\",\"GEP\",\"CKK\"],\n            \"DT\":[\"SLK\",\"GWK\",\"BMA\",\"BUR\",\"SKL\",\"GRA\",\"AYB\",\"AGB\",\"DSZ\",\"LEH\",\"ABH\",\"KWC\",\"KPE\",\"ASB\",\"AKU\",\"PTN\",\"SAP\",\"ALA\",\"UGH\",\"JRT\",\"BKW\",\"EFR\",\"GBJ\",\"WWR\"],\n            \"EB\":[\"AKL\",\"AFK\",\"EDA\",\"UGB\",\"EBJ\",\"NKE\",\"CHR\",\"ZLL\",\"SKA\",\"BKL\",\"HKW\",\"BZR\",\"NCA\",\"KLK\"],\n            \"ED\":[\"GAR\",\"USL\",\"RRU\",\"URM\",\"UBJ\",\"EKP\",\"FUG\",\"AGD\",\"AUC\",\"GUE\",\"DGE\",\"BEN\",\"ABD\",\"AKA\",\"GBZ\",\"AFZ\",\"SGD\",\"HER\"],\n            \"EK\":[\"ADK\",\"EFY\",\"MUE\",\"LAW\",\"AMK\",\"EMR\",\"DEA\",\"DEK\",\"JER\",\"KER\",\"KLE\",\"YEK\",\"GED\",\"SSE\",\"TUN\",\"YEE\"],\n            \"EN\":[\"DBR\",\"AWG\",\"NKW\",\"ENU\",\"UWN\",\"AGW\",\"GBD\",\"ENZ\",\"BBG\",\"KEM\",\"MGL\",\"AGN\",\"NSK\",\"JRV\",\"BLF\",\"UDD\",\"UMU\"],\n            \"FC\":[\"ABJ\",\"ABC\",\"BWR\",\"GWA\",\"KWL\"],\n            \"FOREIGN\":[\"FOREIGN\"],\n            \"GB\":[\"AKK\",\"BLG\",\"BLR\",\"DKU\",\"FKY\",\"GME\",\"KLT\",\"KUJ\",\"KWM\",\"NFD\",\"SHM\",\"YDB\"],\n            \"IM\":[\"ABB\",\"AFR\",\"EHM\",\"ETU\",\"URU\",\"DFB\",\"EKE\",\"KED\",\"UML\",\"UMD\",\"NWA\",\"NGN\",\"UMK\",\"NKR\",\"AMG\",\"TTK\",\"GUA\",\"EBM\",\"KGE\",\"KWE\",\"RLU\",\"AWD\",\"MMA\",\"NGB\",\"WER\",\"RRT\",\"UMG\"],\n            \"JG\":[\"AUY\",\"BBR\",\"BNW\",\"BKD\",\"BUJ\",\"DUT\",\"GGW\",\"GRK\",\"GML\",\"GRR\",\"GRM\",\"GWW\",\"HJA\",\"JHN\",\"KHS\",\"KGM\",\"KZR\",\"KKM\",\"KYW\",\"MGR\",\"MMR\",\"MGA\",\"RNG\",\"RRN\",\"STK\",\"TAR\",\"YKS\"],\n            \"KB\":[\"ALR\",\"KGW\",\"ARG\",\"AUG\",\"BGD\",\"BRK\",\"BNZ\",\"KMB\",\"MHT\",\"GWN\",\"JEG\",\"KLG\",\"BES\",\"MYM\",\"WRR\",\"DRD\",\"SNA\",\"DKG\",\"RBH\",\"YLW\",\"ZUR\"],\n            \"KD\":[\"BNG\",\"KJM\",\"GKW\",\"TRK\",\"KAR\",\"KWB\",\"KAF\",\"KCH\",\"DKA\",\"MKA\",\"KGK\",\"KJR\",\"KRA\",\"KRU\",\"ANC\",\"HKY\",\"SNK\",\"MKR\",\"SBG\",\"GWT\",\"MGN\",\"ZKW\",\"ZAR\"],\n            \"KG\":[\"DAV\",\"AJA\",\"KPA\",\"BAS\",\"KNA\",\"NDG\",\"DAH\",\"AJK\",\"JMU\",\"KAB\",\"KKF\",\"LKJ\",\"MPA\",\"KFU\",\"KPF\",\"KKH\",\"KNE\",\"LAM\",\"BJK\",\"ERE\",\"SAN\"],\n            \"KN\":[\"AJG\",\"ABS\",\"BGW\",\"BBJ\",\"BCH\",\"BNK\",\"DAL\",\"DBT\",\"DKD\",\"DTF\",\"DGW\",\"FGE\",\"DSW\",\"GAK\",\"GNM\",\"GYA\",\"GZW\",\"GWL\",\"GRZ\",\"KBK\",\"KMC\",\"KRY\",\"KBY\",\"KKU\",\"KBT\",\"KNC\",\"KUR\",\"MDB\",\"MKK\",\"MJB\",\"NSR\",\"RAN\",\"RMG\",\"RGG\",\"SNN\",\"SML\",\"TAK\",\"TRN\",\"TFA\",\"TYW\",\"TWD\",\"UGG\",\"WRA\",\"WDL\"],\n            \"KT\":[\"BKR\",\"BAT\",\"BTR\",\"BRE\",\"BDW\",\"CRC\",\"DMS\",\"DDM\",\"DJA\",\"DRA\",\"DTS\",\"DTM\",\"FSK\",\"FTA\",\"NGW\",\"JBY\",\"KFR\",\"KAT\",\"KKR\",\"KNK\",\"KTN\",\"KUF\",\"KSD\",\"MDW\",\"MNF\",\"MAN\",\"MSH\",\"MTZ\",\"MSW\",\"RMY\",\"SBA\",\"SFN\",\"SDM\",\"ZNG\"],\n            \"KW\":[\"AFN\",\"KSB\",\"LAF\",\"ARP\",\"SHA\",\"KEY\",\"FUF\",\"LRN\",\"MUN\",\"WSN\",\"KMA\",\"BDU\",\"FFA\",\"LFF\",\"LEM\",\"PTG\"],\n            \"LA\":[\"GGE\",\"AGL\",\"KTU\",\"FST\",\"APP\",\"BDG\",\"EPE\",\"EKY\",\"AKD\",\"FKJ\",\"KJA\",\"KRD\",\"KSF\",\"AAA\",\"LND\",\"MUS\",\"JJJ\",\"LSD\",\"SMK\",\"RSD\",\"LSR\"],\n            \"NG\":[\"AGA\",\"AGR\",\"BDA\",\"NBS\",\"MAK\",\"MNA\",\"ENG\",\"LMU\",\"GWU\",\"KHA\",\"KNT\",\"LAP\",\"KUG\",\"NAS\",\"BMG\",\"MSG\",\"MKW\",\"SRP\",\"PAK\",\"KAG\",\"RJA\",\"KUT\",\"SUL\",\"WSH\"],\n            \"NR\":[\"AKW\",\"AWE\",\"DMA\",\"KRV\",\"KEN\",\"KEF\",\"GRU\",\"LFA\",\"NSW\",\"NEG\",\"NBB\",\"WSE\",\"NTT\",\"WAM\"],\n            \"OD\":[\"SUA\",\"KAK\",\"ANG\",\"KAA\",\"AKR\",\"JTA\",\"GKB\",\"WEN\",\"FGB\",\"GBA\",\"LEL\",\"REL\",\"REE\",\"KTP\",\"NND\",\"BDR\",\"FFN\",\"WWW\"],\n            \"OG\":[\"AKM\",\"AAB\",\"OTA\",\"AYE\",\"LAR\",\"TRE\",\"FFF\",\"GBE\",\"JGB\",\"JNE\",\"JBD\",\"KNN\",\"MEK\",\"PKA\",\"WDE\",\"DED\",\"DGB\",\"ABG\",\"JRM\",\"SMG\"],\n            \"OS\":[\"SSU\",\"PRN\",\"GBN\",\"LGB\",\"TAN\",\"RGB\",\"EDE\",\"EDT\",\"AAW\",\"EJG\",\"PMD\",\"FTD\",\"FFE\",\"FEE\",\"FDY\",\"KNR\",\"LRG\",\"LES\",\"LEW\",\"RLG\",\"KRE\",\"APM\",\"WWD\",\"BKN\",\"DTN\",\"BDS\",\"GNN\",\"JJS\",\"FNN\",\"SGB\"],\n            \"OY\":[\"JBL\",\"MNY\",\"FMT\",\"TDE\",\"EGB\",\"BDJ\",\"AGG\",\"NRK\",\"MAP\",\"LUY\",\"RUW\",\"AYT\",\"IRP\",\"DDA\",\"KSH\",\"SEY\",\"TUT\",\"WEL\",\"KEH\",\"YNF\",\"KNH\",\"AME\",\"AJW\",\"GBY\",\"YRE\",\"AKN\",\"GBH\",\"KKY\",\"JND\",\"YYY\",\"GMD\",\"SHK\"],\n            \"PL\":[\"BLD\",\"BSA\",\"BKK\",\"ANW\",\"JJN\",\"BUU\",\"DNG\",\"KWK\",\"LGT\",\"MBD\",\"MGU\",\"TNK\",\"PKN\",\"QAP\",\"RYM\",\"SHD\",\"WAS\"],\n            \"RV\":[\"ABU\",\"AHD\",\"KNM\",\"ABM\",\"NDN\",\"BGM\",\"BNY\",\"DEG\",\"NCH\",\"MHA\",\"KHE\",\"KPR\",\"SKP\",\"BRR\",\"RUM\",\"RGM\",\"GGU\",\"KRK\",\"BER\",\"PBT\",\"AFM\",\"SKN\"],\n            \"SO\":[\"BJN\",\"DBN\",\"DGS\",\"GAD\",\"GRY\",\"BLE\",\"GWD\",\"LLA\",\"SAA\",\"KBE\",\"KWR\",\"PHC\",\"RBA\",\"SBN\",\"SGR\",\"SLM\",\"SKK\",\"SRZ\",\"TBW\",\"TGZ\",\"TRT\",\"WMK\",\"WRN\",\"YYB\"],\n            \"TB\":[\"ARD\",\"BAL\",\"DGA\",\"GKA\",\"GAS\",\"BBB\",\"JAL\",\"KLD\",\"KRM\",\"LAU\",\"SDA\",\"TTM\",\"USS\",\"WKR\",\"YRR\",\"TZG\"],\n            \"YB\":[\"GSH\",\"DPH\",\"DTR\",\"FKA\",\"FUN\",\"GDM\",\"GJB\",\"GLN\",\"JAK\",\"KRS\",\"MCN\",\"NNR\",\"NGU\",\"PKM\",\"TMW\",\"YUN\",\"YSF\"],\n            \"ZA\":[\"ANK\",\"BKA\",\"BMJ\",\"BKM\",\"BUG\",\"GMM\",\"GUS\",\"KRN\",\"MRD\",\"MRR\",\"SKF\",\"TMA\",\"TSF\",\"ZRM\"]\n        };\n\n        // get the code of the selected state\n        var selectedItem    = state;\n        \n        // get the resulting object (array) from the map\n        var resultObject    = stateToLgaMap[selectedItem];\n\n        // loop through the array gotten from th map\n        // prepare an options html\n        var optionsHtml     = '';\n\n        //clear the list\n        var lgaSelect = $('select[name=\"' + lgakey + '\"]');\n        for(var i = 0; i < resultObject.length; i++) {\n            // for each loop\n            // get the name from the dataset array.\n            var lgaCode         = resultObject[i];\n            var configLgaItem   = app.datasets[lgasName].data;\n            var lgaName         = configLgaItem[lgaCode];\n\n            optionsHtml += '<option name=\"'+lgaName+'\" value =\"'+lgaCode+'\">'+lgaName+'</option>';\n        }\n\n        alert(optionsHtml);\n        \n        lgaSelect.html(\"\");\n\n        lgaSelect.html(optionsHtml);\n\n        alert(lgaSelect.html());\n\n    }\n})();",
        "script_2": "(function() {\n    var probes = [\n        'media.identity.left_thumb_template',\n        'media.identity.left_index_template',\n        'media.identity.left_middle_template',\n        'media.identity.left_ring_template',\n        'media.identity.left_small_template',\n        'media.identity.right_thumb_template',\n        'media.identity.right_index_template',\n        'media.identity.right_middle_template',\n        'media.identity.right_ring_template',\n        'media.identity.right_small_template'\n    ];\n    var scoreKey = 'media.identity.fingerprint_match_score';\n    set(scoreKey, \"0\");\n    for (var i = probes.length - 1; i >= 0; i--) {\n        var candidates = probes.slice();\n        candidates[i] = null;\n    \tmatchFingerprints([probes[i]], candidates, 22, 'any', function(score) {\n    \t   score = parseFloat(score);\n    \t   if (score > 0) {\n                showMessage('A duplicate fingerprint was detected');\n    \t   }\n           var currentScore = parseFloat(get(scoreKey));\n           set(scoreKey, Math.max(currentScore,  score));\n    \t}, function(error) {\n              showMessage(error);\n        });\n    }\n})();",
        "script_3": "previewForm();"
    },
    "user_groups": [
        {
            "applets": [
                {
                    "name": "Individual or  Joint Account Opening Form",
                    "id": "dad0d1ec"
                },
                {
                    "name": "Electronic Products Enrolment Form",
                    "id": "dad0d1ed"
                }
            ],
            "name": "Sales & Marketing"
        },
        {
            "applets": [
                {
                    "name": "Mortgage Calculator",
                    "id": "dad0d1a4"
                },
                {
                    "name": "Token Activation Request",
                    "id": "dad0d1a5"
                },
                {
                    "name": "Loan Payment Calculator",
                    "id": "dad0d1ee"
                }
            ],
            "name": "Customer Service"
        }
    ]
};
export default MockData;