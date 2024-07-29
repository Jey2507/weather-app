import { TextField } from '@mui/material';
import css from '../SearchBar/SearchBar.module.css'
import { Formik, Form, Field } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import Loader from '../Loading/Loading';

export default function SearchBar ({ onSearch, controlSpiner, icon, description })  {
    return (
        <header className={css.header}>
            <Formik
                initialValues={{ query: '' }}
                onSubmit={(values, actions ) => {
                    if (values.query === '') {
                        toast.error('☠️ Oops, empty search bar! ☠️');
                    }
                    onSearch(values.query);
                    actions.resetForm();
                }}
            >
                <Form className={css.form}>
                <Field name="query">
                        {({ field }) => (
                            <TextField
                                {...field} 
                                label="Enter to name city" 
                                variant="standard" 
                                id="nameId" 
                            />
                        )}
                    </Field>
                    <button className={css.button} type="submit" >
                        Search
                    </button>

                    <Toaster 
        position="top-center"
        reverseOrder={false}/>
                </Form>
            </Formik>
            {controlSpiner && <Loader />}
            <div className={css.container}>
                <h1>SkyWanderer</h1>
                {icon && <img className={css.image} src={`http://openweathermap.org/img/wn/${icon}.png`} alt={description} />}
            </div>
        </header>
    );
}

 