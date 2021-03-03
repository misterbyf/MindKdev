import React from "react"
import { Formik, Field, Form} from "formik";
import Typography from "@material-ui/core/Typography";
import * as Yup from "yup";

export const CreateArticle = ({onSubmit}) => {
    const validationSchema = Yup.object().shape({
        userId: Yup.string()
            .min(1, 'Please, enter more text.')
            .max(5, 'You have entered too many characters!')
            .required('This field is required!'),
        body: Yup.string()
            .min(1, 'Please, enter more text.')
            .max(900, 'You have entered too many characters!')
            .required('This field is required!'),
        title: Yup.string()
            .min(1, 'Please, enter more text.')
            .max(80, 'You have entered too many characters!')
            .required('This field is required!'),
    });

    const handleSubmit = data => {
        onSubmit(data);
    };
    return(
        <div>
            <Typography h="6">Add Article</Typography>
            <Formik
                initialValues={{
                    userId: "",
                    title: "",
                    body: "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({errors, touched}) => (
                    <Form className="formik">
                        <label htmlFor="userId">User ID</label>
                        <Field className="textarea" maxLength="80" as="textarea" id="userId" name="userId"
                               placeholder="User Id"/>
                        {errors.userId && touched.userId ? (
                            <div>{errors.userId}</div>
                        ) : null}

                        <label htmlFor="title">Title</label>
                        <Field className="textarea" maxLength="80" as="textarea" id="title" name="title"
                               placeholder="Title of post"/>
                        {errors.title && touched.title ? (
                            <div>{errors.title}</div>
                        ) : null}

                        <label htmlFor="body">Description</label>
                        <Field className="textarea" maxLength="880" as="textarea" id="body" name="body"
                               placeholder="Description of post"/>
                        {errors.body && touched.body ? (
                            <div>{errors.body}</div>
                        ) : null}

                        <button className='btn' type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
};