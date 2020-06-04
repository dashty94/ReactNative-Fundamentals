import AppButton from "../AppButton"
import React from "react"
import { useFormikContext } from "formik"

function SubmitButton({ title }) {
    const { handleSubmit } = useFormikContext()
    return <AppButton title={title} onPress={handleSubmit} />
}

export default SubmitButton
