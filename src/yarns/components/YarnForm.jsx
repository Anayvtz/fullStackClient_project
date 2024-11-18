import React from "react";
import { useDropzone } from "react-dropzone";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";

const YarnForm = ({
    onSubmit,
    onReset,
    errors,
    onFormChange,
    onInputChange,
    data,
    title,
    onImageUpload, // Callback to handle image upload
}) => {
    // Initialize the dropzone with options
    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",  // Only accept image files
        onDrop: (acceptedFiles) => {
            if (acceptedFiles.length) {
                const file = acceptedFiles[0];  // Get the first file
                onImageUpload(file);  // Pass the file to the parent handler
            }
        },
    });
    console.log("YarnForm. data:", data);
    return (
        <Form
            onSubmit={() => onSubmit(data)}
            onReset={onReset}
            errors={errors}
            validateForm={onFormChange}
            styles={{ maxWidth: "800px" }}
            title={title}
        >
            <Input
                name="title"
                label="Title"
                error={errors.title}
                onChange={onInputChange}
                data={data}
                sm={6}
            />
            <Input
                name="subtitle"
                label="Subtitle"
                error={errors.subtitle}
                onChange={onInputChange}
                data={data}
                sm={6}
            />
            <Input
                name="description"
                label="Description"
                error={errors.description}
                onChange={onInputChange}
                data={data}
                sm={6}
            />
            <Input
                name="yarnSize"
                label="Yarn Size"
                type="number"
                error={errors.yarnSize}
                onChange={onInputChange}
                data={data}
                sm={6}
            />
            <Input
                name="quantityInStock"
                label="Quantity in Stock"
                type="number"
                error={errors.quantityInStock}
                onChange={onInputChange}
                data={data}
                sm={6}
            />

            {/* Image URL input (not disabled, editable) */}
            {/*  <Input
                name="imageurl"
                label="Image URL"
                error={errors.imageurl}
                onChange={onInputChange}
                data={data}
                sm={6}
                required={false}
                disabled
            /> */}

            {/* Drag-and-Drop Upload Box */}
            <div
                {...getRootProps()}
                style={{
                    border: "2px dashed #ccc",
                    padding: "20px",
                    cursor: "pointer",
                    textAlign: "center",
                }}
            >
                <input {...getInputProps()} />
                {data.imageurl ? (
                    <div>
                        {/* Show the selected image */}
                        <img
                            src={data.imageurl}
                            alt="Selected Yarn"
                            style={{
                                width: "100px",
                                height: "100px",
                                objectFit: "cover",
                                marginTop: "10px",
                            }}
                        />
                        <p>Selected Image</p>
                    </div>
                ) : (
                    <p>Drag & Drop an image or click to select one</p>
                )}
            </div>

            <Input
                name="imagealt"
                label="Image Alt"
                error={errors.imagealt}
                onChange={onInputChange}
                data={data}
                sm={6}
                required={false}
            />

            <Input
                name="price"
                label="Price"
                type="number"
                error={errors.price}
                onChange={onInputChange}
                data={data}
                sm={6}
            />
        </Form>
    );
};

export default YarnForm;
