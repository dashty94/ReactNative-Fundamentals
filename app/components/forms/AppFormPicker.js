import AppPicker from "../AppPicker"
import ErrorMessage from "./ErrorMessage"
import React from "react"
import { useFormikContext } from "formik"

function AppFormPicker({
    items,
    name,
    numberOfColumns,
    placeholder,
    width = "100%",
    PickerItemComponent,
}) {
    const { errors, setFieldValue, touched, values } = useFormikContext()
    return (
        <>
            <AppPicker
                items={items}
                onSelectItem={(item) => setFieldValue(name, item)}
                placeholder={placeholder}
                selectedItem={values[name]}
                width={width}
                PickerItemComponent={PickerItemComponent}
                numberOfColumns={numberOfColumns}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}

export default AppFormPicker
