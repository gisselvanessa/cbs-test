import * as Yup from 'yup';

export const ValidationSchemaLogin = Yup.object({

    // username
    username: Yup.string().matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/, 'El primer nombre no es válido') // Solo letras, incluyendo letras con acento y ñ
        .required('El usuario es requerido'),

    // Rol
    role: Yup.string().required('El rol es requerido'),

    // Nombre de usuario
    // username: Yup.string()
    //     .min(5, 'El nombre de usuario debe tener al menos 5 caracteres')
    //     .max(8, 'El nombre de usuario debe tener un máximo de 8 caracteres')
    //     .matches(/^[a-z]+$/, 'El nombre de usuario solo debe contener letras minúsculas')
    //     .required('Nombre de usuario es requerido'),

    // Contraseña
    password: Yup.string()
        .required('La contraseña es requerida'),

});
