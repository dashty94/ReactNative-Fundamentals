import * as Yup from "yup"

import {
    AppForm,
    AppFormField,
    AppFormPicker,
    SubmitButton,
} from "../components/forms"
import React, { useState } from "react"

import CategoryPickerItem from "../components/CategoryPickerItem"
import FormImagePicker from "../components/forms/FormImagePicker"
import Screen from "../components/Screen"
import { StyleSheet } from "react-native"
import UploadScreen from "./UploadScreen"
import listingApi from "../api/listings"
import useLocations from "../hooks/useLocations"

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, "Please select at least one image"),
})

const categories = [
    { label: "Furniture", value: 1, backgroundColor: "red", icon: "apps" },
    { label: "Clothing", value: 2, backgroundColor: "green", icon: "email" },
    { label: "Technology", value: 3, backgroundColor: "blue", icon: "lock" },
]

function ListingEditScreen() {
    const location = useLocations()
    const [uploadVisivle, setUploadVisible] = useState(false)
    const [progress, setProgress] = useState(0)

    handleSubmit = async (listing, { resetForm }) => {
        setProgress(0)
        setUploadVisible(true)
        const result = await listingApi.addListing(
            { ...listing, location },
            (progress) => setProgress(progress)
        )

        if (!result.ok) {
            setUploadVisible(false)
            return alert("Could not save the listing")
        }

        resetForm()
    }

    return (
        <Screen style={styles.container}>
            <UploadScreen
                onDone={() => setUploadVisible(false)}
                progress={progress}
                visible={uploadVisivle}
            />
            <AppForm
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null,
                    images: [],
                }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <FormImagePicker name="images" />
                <AppFormField
                    maxLength={255}
                    name="title"
                    placeholder="Title"
                />
                <AppFormField
                    keyboardType="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                    width={120}
                />
                <AppFormPicker
                    items={categories}
                    name="category"
                    placeholder="Category"
                    width="50%"
                    PickerItemComponent={CategoryPickerItem}
                    numberOfColumns={3}
                />
                <AppFormField
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />
                <SubmitButton title="Post" />
            </AppForm>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
})

export default ListingEditScreen
