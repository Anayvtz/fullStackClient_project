import React from 'react'
import Form from '../../forms/components/Form';
import Input from '../../forms/components/Input';

const StockForm = ({
    onSubmit,
    onReset,
    errors,
    onFormChange,
    onInputChange,
    data,
    title,

}) => {

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
                name="quantity"
                label="Quantity"
                type="number"
                error={errors.quantity}
                onChange={onInputChange}
                data={data}
                sm={6}
            />
        </Form>
    );
};

export default StockForm;
