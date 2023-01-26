export const inputFormElemnts = [
    {
        label: "FirstName", type: "text", ClassName: "fname", id: 'firstname', placeholder: 'Enter your FirstName',
        required: true, variant: 'outlined', fullWidth: true, xs: 12, sm: 12
        
    },
    
    {
        label: "MiddleName", type: "text", ClassName: "mname", id: 'middlename', placeholder: 'Enter your MiddleName',
        required: false, variant: 'outlined', fullWidth: true, xs: 12, sm: 12
    },
    {
        label: "LastName", type: "text", className: "lname", id: 'lastname', placeholder: 'Enter your LastName',
        required: true, variant: 'outlined', fullWidth: true, xs: 12, sm: 12
    },
    {
        label: "Email", type: "email", className: "email", id: 'mail', placeholder: 'Enter your Email',
        required: true, variant: 'outlined', fullWidth: true, xs: 12, sm: 12
    },
    {
        label: "Mobile Number", type: "number", className: "Phone", id: 'number', placeholder: 'Mobile Number',
        required: true, variant: 'outlined', fullWidth: true, xs: 12, sm: 12
    },
    {
        label: "Country", type: "text", className: "count", id: 'country', placeholder: 'Enter Your Country',
        required: false, variant: 'outlined', fullWidth: true, xs: 12, sm: 2
    },
    {
        label: "State", type: "text", className: "state", id: 'state', placeholder: 'Enter Your State',
        required: false, variant: 'outlined', fullWidth: true, xs: 12, sm: 2
    },
    {
        label: "City ", type: "text", className: "city", id: 'city', placeholder: 'Enter Your City',
        required: false, variant: 'outlined', fullWidth: true, xs: 12, sm: 2
    },
    {
        label: "Pincode", type: "number", className: "Pin", id: 'code', placeholder: 'Locality Pincode',
        required: false, variant: 'outlined', fullWidth: true, xs: 12, sm: 2
    }
]