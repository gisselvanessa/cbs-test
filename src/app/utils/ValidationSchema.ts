import * as Yup from 'yup';

export const ValidationSchema = Yup.object({
    // Tipo de identificación
    idType: Yup.string().oneOf(["cedula", "passport"], "Debe seleccionar un tipo de identificación")
        .required("Tipo de identificación es requerido"),

    // Identificación
    idNumber: Yup.string()
        .matches(/^\d+$/, 'La identificación no es válida')
        .min(10, 'La identificación debe tener al menos 10 dígitos')
        .required('Identificación es requerida'),

    // Primer nombre
    firstName: Yup.string().matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/, 'El primer nombre no es válido') // Solo letras, incluyendo letras con acento y ñ
        .required('El primer nombre es requerido'),

    // Segundo nombre
    secondName: Yup.string().matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/, 'El segundo nombre no es válido')
        .required('El segundo nombre es requerido'),

    // Apellido paterno
    lastNameFather: Yup.string().matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/, 'El primer apellido no es válido')
        .required('El apellido paterno es requerido'),

    // Apellido materno
    lastNameMother: Yup.string().matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/, 'El segundo apellido no es válido')
        .required('El apellido materno es requerido'),

    // Sucursal
    branch: Yup.string().required('La sucursal es requerida'),

    // Departamento
    department: Yup.string().required('El departamento es requerido'),

    // Rol
    role: Yup.string().required('El rol es requerido'),

    // Correo corporativo
    corporateEmail: Yup.string()
        .email('El correo no es válido')
        .required('Correo corporativo es requerido'),

    // IP
    ipAddress: Yup.string()
        .matches(
            /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
            'IP no válida'
        )
        .required('IP es requerida'),

    // Nombre de usuario
    username: Yup.string()
        .min(5, 'El nombre de usuario debe tener al menos 5 caracteres')
        .max(8, 'El nombre de usuario debe tener un máximo de 8 caracteres')
        .matches(/^[a-z]+$/, 'El nombre de usuario solo debe contener letras minúsculas')
        .required('Nombre de usuario es requerido'),

    // Fecha de activación
    activationDate: Yup.date().required('Fecha de activación es requerida'),

    // Fecha de vencimiento
    expirationDate: Yup.date().required('Fecha de vencimiento es requerida'),

    // Contraseña
    password: Yup.string()
        .min(8, 'La contraseña debe tener al menos 8 caracteres')
        .max(16, 'La contraseña debe tener un máximo de 16 caracteres')
        .matches(/[a-z]/, 'La contraseña debe contener al menos una letra minúscula')
        .matches(/[A-Z]/, 'La contraseña debe contener al menos una letra mayúscula')
        .matches(/[0-9]/, 'La contraseña debe contener al menos un número')
        .matches(/[-!@#$%^&*()_+={}\[\]:;"<>,.?/\\|]/, 'La contraseña debe contener al menos un carácter especial')
        .required('La contraseña es requerida'),

    // Confirmar contraseña
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), ""], 'Las contraseñas no coinciden')
        .required('Confirmar contraseña es requerida'),
});
