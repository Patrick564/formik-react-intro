import { useFormik } from 'formik'

const validate = (values) => {
	const errors = {}

	if (!values.name) {
		errors.name = 'Required'
	} else if (values.name.length < 5) {
		errors.name = 'Name is short'
	}

	if (!values.lastName) {
		errors.lastName = 'Required'
	} else if (values.lastName.length < 5) {
		errors.lastName = 'Last name is short'
	}

	if (!values.email) {
		errors.email = 'Required'
	} else if (values.email.length < 5) {
		errors.email = 'Email is short'
	}

	return errors
}

const App = () => {
	const formik = useFormik({
		initialValues: {
			name:     '',
			lastName: '',
			email:    '',
		},
		validate,
		onSubmit:      values => console.log(values),
	})

	return (
		<form onSubmit={formik.handleSubmit}>
			<label>Nombre</label>
			<input
				type={'text'}
				{...formik.getFieldProps('name')}
			/>
			{formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
			<br/>

			<label>Apellido</label>
			<input
				type={'text'}
				{...formik.getFieldProps('lastName')}
			/>
			{formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
			<br/>

			<label>Correo</label>
			<input
				type={'email'}
				{...formik.getFieldProps('email')}
			/>
			{formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
			<br/>

			<button type={'submit'}>Enviar</button>
		</form>
	)
}