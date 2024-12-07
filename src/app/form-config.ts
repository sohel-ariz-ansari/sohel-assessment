export const FORM_CONFIG = {
    title: "Reactive Form",
    imgUrl: "https://terralogic.com/wp-content/themes/terralogic/img/brand-logo.svg",
    fields: [
      {
        type: "text",
        label: "Full Name",
        name: "fullName",
        value: "",
        validations: {
          required: true,
          minLength: 3
        }
      },
      {
        type: "email",
        label: "Email",
        name: "email",
        value: "",
        validations: {
          required: true,
          pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$"
        }
      },
      {
        type: "radio",
        label: "Gender",
        name: "gender",
        options: ["Male", "Female"],
        value: "Male"
      },
      {
        type: "checkbox",
        label: "Agree to Terms",
        name: "terms",
        value: false,
        validations: {
          required: true
        }
      }
    ]
  };
  