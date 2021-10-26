import { Formik, Form, ErrorMessage } from 'formik'

import TextInput from './components/TextInput.js'
import Checkbox from './components/Checkbox.js'
import Select from './components/Select.js'
import Radio from './components/Radio.js'

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

	if (!values.radio) {
		errors.radio = 'Required'
	}

	return errors
}

const App = () => {
	return (
		<Formik
			initialValues={{ name: '', lastName: '', email: '', radio: '' }}
			onSubmit={values => console.log(values)}
			validate={validate}
		>
			<Form>
				<TextInput name={'name'} label={'Nombre'} />
				<br/>

				<TextInput name={'lastName'} label={'Apellido'} />
				<br/>

				<TextInput name={'email'} label={'Correo'} />
				<Select label={'Tipo de chancho'} name={'chancho'}>
					<option value="">Seleccione</option>
					<option value="felipe">Felipe</option>
					<option value="feliz">Chanchito Feliz</option>
					<option value="sad">Chanchito Sad</option>
				</Select>
				<br/>

				<Checkbox name={'accept'}>
					Acepta terminos y condiciones
				</Checkbox>

				<Radio name={'radio'} value={'chanchito1'} label={'Chanchito1'} />
				<Radio name={'radio'} value={'chanchito2'} label={'Chanchito2'} />
				<Radio name={'radio'} value={'chanchito3'} label={'Chanchito3'} />
				<ErrorMessage name={'radio'} />

				<button type={'submit'}>Enviar</button>
			</Form>
		</Formik>
	)
}

export default App
