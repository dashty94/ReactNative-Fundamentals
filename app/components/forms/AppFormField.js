import AppTextInput from "../AppTextInput"
import ErrorMessage from "./ErrorMessage"
import React from "react"
import { useFormikContext } from "formik"

function AppFormField({ name, width, ...otherProps }) {
    const {
        setFieldTouched,
        setFieldValue,
        values,
        errors,
        touched,
    } = useFormikContext()

    return (
        <>
            <AppTextInput
                onBlur={() => setFieldTouched(name)}
                onChangeText={(text) => setFieldValue(name, text)}
                value={values[name]}
                width={width}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}

export default AppFormField
