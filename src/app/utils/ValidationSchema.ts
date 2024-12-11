import * as Yup from 'yup';

export const ValidationSchema = Yup.object({
    // Tipo de identificación
    identificationType: Yup.string().oneOf(["cedula", "passport"], "Debe seleccionar un tipo de identificación")
        .required("Tipo de identificación es requerido"),

    // Identificación
    identification: Yup.string()
        .matches(/^\d+$/, 'La identificación debe ser solo números')
        .length(10, 'La identificación debe tener exactamente 10 dígitos')
        .required('Identificación es requerida'),

    // Primer nombre
    firstName: Yup.string().matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/, 'El primer nombre solo puede contener letras') // Solo letras, incluyendo letras con acento y ñ
        .required('Primer nombre es requerido'),

    // Segundo nombre
    secondName: Yup.string().matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/, 'El segundo nombre solo puede contener letras')
        .required('Segundo nombre es requerido'),

    // Apellido paterno
    lastName: Yup.string().matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/, 'El primer apellido solo puede contener letras')
        .required('Apellido paterno es requerido'),

    // Apellido materno
    motherLastName: Yup.string().matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/, 'El segundo apellido solo puede contener letras')
        .required('Apellido materno es requerido'),

    // Sucursal
    branch: Yup.string().required('Sucursal es requerida'),

    // Departamento
    department: Yup.string().required('Departamento es requerido'),

    // Rol
    role: Yup.string().required('Rol es requerido'),

    // Correo corporativo
    corporateEmail: Yup.string()
        .email('El correo debe ser válido')
        .required('Correo corporativo es requerido'),

    // IP
    ip: Yup.string()
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
        .required('Contraseña es requerida'),

    // Confirmar contraseña
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), ""], 'Las contraseñas no coinciden')
        .required('Confirmar contraseña es requerida'),
});
